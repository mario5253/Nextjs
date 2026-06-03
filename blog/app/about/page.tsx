import Head from "next/head"
import Hero from "@/components/Hero"
import Container from "@/components/Container"
import PostBody from "@/components/PostBody"
import Contact from "@/components/Contact"
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "@/components/two-column"
import Image from 'next/image'
import eyecatch from '../../images/Copilot_20260601_221714.png'
import Social from "@/components/Social"

export default function About() {
  return (
    <Container>
      <Head>
        <title>アバウト</title>
      </Head>
      <Hero
          title = "About"
          subtitle="About development activities"
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
          </TwoColumnMain>
          <TwoColumnSidebar>
            <Contact />
            <Social />
          </TwoColumnSidebar>
        </TwoColumn>
    </Container>
  ) 
}