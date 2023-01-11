import Head from "next/head";
import Layout from "../components/Layout";
import { home } from "../constants/textConstants/es-ES"

export default function Home() {
  return (
    <>
      <Head>
        {/*eslint-disable-next-line react/no-unescaped-entities */}
        <title>{home.name}</title>
        <meta name="description" content="David Dollanarte personal page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <Layout>
        <h1>{home.name}</h1>
        <br></br>
        <h2>
          {home.role1}<br></br>{home.role2}
        </h2>
      </Layout>
    </>
  );
}
