import styles from '@/styles/postbody.module.css'

export default function PostBody( {
  children,
 }: {
  children: React.ReactNode
 }) {
  return(
    <div className={styles.stack}>
      {children}
    </div>
  );
}