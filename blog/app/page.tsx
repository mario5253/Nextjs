import Hero from "@/components/Hero";
import Container from "@/components/Container";
import {getAllPosts} from '@/lib/api'
import Posts from "@/components/Posts";
import Pagenation from "@/components/PageNation";
export  default async function Home() {
  const posts = await getAllPosts(4)
  return (
    <Container>
        <Hero
        title = "CUBE"
        subtitle = "アウトプットしていくサイト"
        imageOn
         />
         <Posts posts={posts} />
         <Pagenation nextUrl="/blog" nextText="More Posts" />
    </Container>
  );
}
