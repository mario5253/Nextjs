import styles from '@/styles/post-categories.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'

export default function PostCategories({ 
  categories,
 }: {
  categories: {id: string; name: string; slug: string}[]
 }) {
  if (!categories) return null

  return (
    <>
      <div className={styles.flexContainer}>
        <h3 className={styles.heading}>
          <FontAwesomeIcon icon={faFolderOpen} />
          <span>カテゴリー</span>
        </h3>
      </div>
      <ul className={styles.list}>
        {categories.map(({id,name,slug}) => (
          <li key={id}>
            <Link href={`/blog/category/${slug}`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </>

  )
}

