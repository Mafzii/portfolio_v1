import Navbar from "@/components/Navbar";
import About from "@/components/About";
import { Inter } from "next/font/google";
import Head from "next/head";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Scrollbar from "@/components/Scrollbar";
import Footer from "@/components/Footer";

import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Head>
        <title>Mustafa Afzal</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/image/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/image/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/image/favicon-16x16.png"
        />
        <link rel="manifest" href="/image/site.webmanifest" />
      </Head>
      <Scrollbar />
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
