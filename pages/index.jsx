import Calculator from "../component/calculator";
import Footer from "../component/footer";
import Head from "next/head";
import styles from "../styles/Home.module.css";

// Home component to render the landing page
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tip Calculator</title>
        <meta name="description" content="Tip calculator app." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.heading}>
          SPLI <br />
          TTER
        </h1>
        <Calculator />
      </main>
      <Footer />
    </div>
  );
}
