import {
  CircularProgress,
  Flex,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import {
  About,
  Contact,
  Footer,
  Header,
  Journey,
  Projects,
} from "src/components/index";

export default function Home() {
  const container = useColorModeValue("container-white", "container-dark");
  const loadingBg = useColorModeValue(
    "custom.primaryLight",
    "custom.primaryDark"
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <Flex align="center" h="100vh" w="100vw" bg={loadingBg}>
        <Spacer />
        <CircularProgress isIndeterminate color="grey" thickness="12px" />
        <Spacer />
      </Flex>
    );
  }
  return (
    <div>
      <Head>
        <title>Julian Gonzalez</title>
        <link rel="icon" href="/icons/logo.png" />
        <meta name="description" content="Created by Julian Gonzalez" />
      </Head>

      <main>
        <div class={container} id="style-1">
          <div id="circle"></div>
          <Header />
          <About />
          <Journey />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}
