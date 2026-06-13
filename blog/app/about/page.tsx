import { generateMeta } from "@/components/Meta"
import Hero from "@/components/Hero"
import Container from "@/components/Container"
import PostBody from "@/components/PostBody"
import Contact from "@/components/Contact"
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "@/components/two-column"
import Image from 'next/image'
import eyecatch from '../../images/Copilot_20260601_221714.png'
import Social from "@/components/Social"
import Accordion from "@/components/Accordion"
export const metadata = generateMeta({
  title: "アバウト",
  description: "ABOUT develop",
})


export default function About() {
  return (
    <Container>
    
      <Hero
          title = "About"
          subtitle="About development activities"
          imageOn={false}
        />

        <figure>
          <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
          />
        </figure>
        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <h2>FAQ</h2>
              <Accordion heading="プログラミングについて">
                <p>
                  ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
                  ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
                </p>
              </Accordion>
              <Accordion heading="バトルについて">
                <p>
                  ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
                  ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
                </p>
              </Accordion>
              <Accordion heading="アンとにいらおら">
                <p>
                  ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
                  ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
                </p>
              </Accordion>
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <Contact />
            <Social />
          </TwoColumnSidebar>
        </TwoColumn>
    </Container>
  ) 
}