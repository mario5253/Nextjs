import Hero from '@/components/Hero'
import Container from '@/components/Container'
import { getAllPosts } from '@/lib/api'
import Posts from '@/components/Posts'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <Container>
      <Hero title="BLOG" subtitle="Recent Posts" imageOn={false} />
      <Posts posts={posts} />
    </Container>
  )
}
