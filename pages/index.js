import Head from "next/head";
import { Box, Stack, Image, Flex, Text } from "@chakra-ui/core";
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
        <Flex>
          <Stack isInline>
            <Box pr="80px">
              <Image src="/assets/person-community.svg" size="200px" />
            </Box>
            <Box
              padding="10px"
              borderRadius="10px"
              minWidth="600px"
              bg="gray.100"
            >
              <Text
                color="teal.800"
                fontSize="30px"
                fontWeight="400"
                textTransform="uppercase"
                letterSpacing="10px"
              >
                Selamat Datang
              </Text>
              <Text color="gray.700" fontSize="45px" fontWeight="600">
                Komunitas Developer
              </Text>
              <Text
                color="gray.700"
                fontSize="45px"
                fontWeight="600"
                lineHeight="16px"
              >
                Next JS Indonesia
              </Text>
            </Box>
          </Stack>
        </Flex>
      </Layout>
    </>
  );
}
