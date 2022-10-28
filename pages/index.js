import { useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import { About } from "src/components/index";
import { Header } from "src/components/pages/Header";

export default function Home() {
  const container = useColorModeValue("container-white", "container-dark");


  return (
    <div>
      <Head>
        <title>Julian Gonzalez</title>
        <link rel="icon" href="/logo.png" />
        <meta name="description" content="Created by Julian Gonzalez" />
      </Head>

      <main>
        <div class={container}>
          <div id="circle"></div>
          <Header />
          <About />
        </div>
      </main>
    </div>
  );
}
