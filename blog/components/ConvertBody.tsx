import parse, { Element } from "html-react-parser"
import Image from "next/image"

export default function ConvertBody({
  contentHTML,
}: {
  contentHTML: string
}) {
  if (typeof contentHTML !== "string") return null

  const contentReact = parse(contentHTML, {
    replace: (node) => {
      // ★ Element のときだけ name が存在する
      if (node instanceof Element && node.name === "img") {
        const { src, alt, width, height } = node.attribs

        return (
          <Image
            src={src}
            alt={alt || "記事内の画像"}
            width={Number(width) || 800}
            height={Number(height) || 600}
          />
        )
      }
    },
  })

  return <div>{contentReact}</div>
}
