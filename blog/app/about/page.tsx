import Hero from "@/components/Hero"
import Container from "@/components/Container"
import PostBody from "@/components/PostBody"


export default function About() {
  return (
    <Container>
      <PostBody>
        <Hero
          title = "About"
          subtitle="About development activities"
        />
        <h2>モノづくりで目指している事</h2>
        <p>
          ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
          ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
        </p>
        <h3>モノづくりで目指している事</h3>
        <p>
          ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
          ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
        </p>
        <p>
          ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
          ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
        </p>
      </PostBody>
    </Container>
  ) 
}