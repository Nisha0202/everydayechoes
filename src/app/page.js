import Hero from "@/components/hero/Hero";
import Head from "next/head";


export default function Home() {
  return (
    <main>
      <Head>
        <title>My Awesome Next.js App</title>
        <meta name="description" content="This is an awesome Next.js app built with React." />

      </Head>
      <Hero />
    </main>
  );
}
