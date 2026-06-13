// app/blog/category/[slug]/page.tsx
import Container from "@/components/Container"
import Posts from "@/components/Posts"

import { getAllCategories, getPostsByCategory } from "@/lib/api"
import { generateMeta } from "@/components/Meta"


export async function generateStaticParams() {
  const categories = await getAllCategories()

  return categories.map((cat: { slug: string }) => ({
    slug: cat.slug,
  }))
}


export async function generateMetadata({ params }: {params: {slug: string}}) {
  const { slug } = await params
  const categories = await getAllCategories()
  const category = categories.find((c: {slug: string}) => c.slug === slug)

  if (!category) {
    return generateMeta({
      title: "カテゴリーが見つかりません",
      description: "指定されたカテゴリーは存在しません。",
    })
  }

  return generateMeta({
    title: category.name,
    description: `${category.name} に関する記事一覧`,
  })
}

export default async function CategoryPage(props: {params:{slug: string}}) {
  const { slug } = await props.params

  const categories = await getAllCategories()
  const category = categories.find((c: {slug: string}) => c.slug === slug)

  const posts = await getPostsByCategory(category.slug)

  return (
    <Container>
      <h1>{category.name}</h1>
      <Posts posts={posts} />
    </Container>
  )
}


