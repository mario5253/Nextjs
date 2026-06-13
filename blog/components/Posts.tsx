import styles from '@/styles/posts.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Posts({
  posts = [],
}: {
  posts: {
    title: string
    slug: string
    eyecatch: {
      url: string
      width: number
      height: number
    }
  }[]
}) {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => (
        <article className={styles.post} key={slug}>
          <Link href={`/blog/${slug}`}>
            <figure>
              <Image
                src={eyecatch.url}
                alt=""
                placeholder="empty"
                sizes="(min-width: 1152px) 576px, 50vw"
                fill
                style={{ objectFit: "cover" }}
              />
            </figure>
            <h2>{title}</h2>
          </Link>
        </article>
      ))}
    </div>
  )
}
