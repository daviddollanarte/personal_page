import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

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
        <h1>Front-End <br></br> Developer</h1>
        <div className={styles.mainImg}>
        </div>

      </main>
    </>
  )
}
