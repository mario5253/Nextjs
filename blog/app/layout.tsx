// app/layout.tsx
import "@/styles/global.css"
import Layout from "@/components/layout"

export const metadata = {
  title: "サイトタイトル",
  description: "説明文",
}

export default function RootLayout({ 
  children,
 }: {
  children: React.ReactNode
 }) {
  return (
    <html lang="ja">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
