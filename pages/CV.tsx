import Head from "next/head";
import Layout from "../components/Layout";

export default function CV() {
  return (
    <>
      <Head>
        {/*eslint-disable-next-line react/no-unescaped-entities */}
        <title>David Dollanarte</title>
        <meta name="description" content="David Dollanarte personal page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <Layout>
        <h1>CURRICULUM VITAE</h1>
        <br></br>
        <h2>
          Lorem<br></br> Ipsum
        </h2>
      </Layout>

    </>
  );
}
