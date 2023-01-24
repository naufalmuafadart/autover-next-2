import styles from '../styles/pages/index.module.css';
import HTMLHead from "@/components/Head";

export default function Home() {
  return (
    <>
      <HTMLHead />
      <section id="s-navbar" className={styles.sNavbar}>
        <h1>Autover</h1>
      </section>
    </>
  );
}
