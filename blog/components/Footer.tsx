import Container from './Container';
import Logo from './Logo'
import styles from '@/styles/footer.module.css'
import Social from '@/components/Social';
export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social iconSize="30px" />
        </div>
      </Container>
    </footer>
  );
}