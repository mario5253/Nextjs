import { getPostBySlug, getAllSlugs } from '@/lib/api'
import { extractText } from '@/lib/extract-text'
import { prevNextPost } from '@/lib/prev-next-post'
import { generateMeta } from '@/components/Meta'
import Container from '@/components/Container'
import PostHeader from '@/components/PostHeader'
import Image from 'next/image'
import PostBody from '@/components/PostBody'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from '@/components/two-column'
import ConvertBody from '@/components/ConvertBody'
import PostCategories from '@/components/PostCategories'
import { eyecatchLocal } from '@/lib/constants'
import { getPlaiceholder } from 'plaiceholder'
import path from 'path'
import Pagenation from '@/components/PageNation'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = await getAllSlugs()

  const params = slugs.map((item: {slug: string}) => ({
    slug: String(item.slug)
  }))

  return JSON.parse(JSON.stringify(params))
}





export async function generateMetadata({ params }: {params: {slug: string}}) {
  const resolvedParams = await params
  const slug = resolvedParams.slug

  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: "記事が見つかりません",
      description: ""
    }
  }

  const allSlugs = await getAllSlugs()
  const {prevPost, nextPost} = prevNextPost(allSlugs, slug)

  const description = extractText(post.content)

  return generateMeta({
    title: post.title,
    description,
  })
}



export default async function BlogPostPage({ params }: {params: {slug: string}}) {
  const resolvedParams = await params
  const slug = resolvedParams.slug

  const post = await getPostBySlug(slug)

  if (!post) {
    return notFound()
  }

  const allSlugs = await getAllSlugs()
  const {prevPost, nextPost} = prevNextPost(allSlugs, slug)

  

  const eyecatch = post.eyecatch ?? eyecatchLocal

  let blurDataURL = undefined

  if (!post.eyecatch) {
    const localPath = path.join(
      process.cwd(),
      'public',
      eyecatch.url.replace(/^\//, '')
    )
    const { base64 } = await getPlaiceholder(localPath as any)
    blurDataURL = base64
  }


  return (
    <Container>
      <article>
        <PostHeader title={post.title} subtitle="Blog Article" publish={post.publishedAt} />

        <figure>
          <Image
            src={eyecatch.url}
            alt={post.title ?? "ブログ記事の画像"}
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width:1152px) 1152px, 100vw"
            priority
            placeholder={blurDataURL ? 'blur' : 'empty'}
            blurDataURL={blurDataURL}
            style={{width: '100%',height: 'auto'}}
          />
        </figure>

        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={post.content ?? ""} />
            </PostBody>
          </TwoColumnMain>

          <TwoColumnSidebar>
            <PostCategories categories={post.categories} />
          </TwoColumnSidebar>
        </TwoColumn>
        <Pagenation
          prevText={prevPost?.title ?? ''}
          prevUrl={prevPost?`/blog/${prevPost.slug}`: ''}
          nextText={nextPost?.title ?? ''}
          nextUrl={nextPost?`/blog/${nextPost.slug}`: ''}
        />

      </article>
    </Container>
  )
}
