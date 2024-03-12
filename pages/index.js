import Navbar from "@/components/Navbar";
import About from "@/components/About";
import { Inter } from "next/font/google";
import Head from "next/head";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Scrollbar from "@/components/Scrollbar";
import Footer from "@/components/Footer";

import React from "react";

import appleTouchIcon from "../public/image/apple-touch-icon.png"
import favicon32x32 from "../public/image/favicon-32x32.png"
import favicon16x16 from "../public/image/favicon-16x16.png"

export default function Home() {
  return (
    <main>
      <Head>
        <title>Mustafa Afzal</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={appleTouchIcon.src}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={favicon32x32.src}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={favicon16x16.src}
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
