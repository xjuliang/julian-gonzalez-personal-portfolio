import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Julian Gonzalez</title>
        <meta name="description" content="Created by Julian Gonzalez" />
        <link rel="icon" href="/logo.png  " />
      </Head>

      <main className={styles.main}>  
        Julian
      </main>
    </div>
  );
}
