import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const imgWidth = 1400;
  return (
    <>
      <Head>
        {/*eslint-disable-next-line react/no-unescaped-entities */}
        <title>David Dollanarte</title>
        <meta name="description" content="David Dollanarte personal page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>David Dollanarte</h1>
          <br></br>
          <h2>
            About <br></br> Me
          </h2>
        </div>
      </main>
    </>
  );
}
