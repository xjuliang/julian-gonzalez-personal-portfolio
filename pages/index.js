import { Box, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "src/components/pages/Header";


export default function Home() {
  const navBg = useColorModeValue("custom.primaryLight", "custom.primaryDark");

  return (
    <div>
      <Head>
        <title>Julian Gonzalez</title>
        <link rel="icon" href="/logo.png" />
        <meta name="description" content="Created by Julian Gonzalez" />
      </Head>

      <main>
        <Box bg={navBg}>
          <Header />
        </Box>
      </main>
    </div>
  );
}
