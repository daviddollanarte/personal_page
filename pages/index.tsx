import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const imgWidth = 1400;
  return (
    <>
      <Head>
        {/*eslint-disable-next-line react/no-unescaped-entities */}
        <title>David's Website</title>
        <meta name="description" content="David Dollanarte personal page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>Web/UI <br></br> Developer</h1>
        </div>
      </main>
    </>
  )
}
