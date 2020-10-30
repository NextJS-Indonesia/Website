import Head from "next/head";
import { Box } from "@chakra-ui/core";
// components
import data from "../shared/data";
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS Indonesia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Box>Next JS</Box>
      </Layout>
    </>
  );
}
