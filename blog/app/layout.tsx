import Layout from "@/components/layout"
import '@/styles/global.css'

export default function MyApp({children}: {Component, pageProps}) {
  return (
    <html lang="ja">
      <body>
        <Layout >
          {children}
        </Layout>   
      </body>
    </html>

  )
}