import Services from "@/app/components/Services";
import Hero from "@/app/components/Hero";
import Portfolio from "@/app/components/Portfolio";
import Testimonial from "@/app/components/Testimonial";
import Image from "next/image";
import Questions from "@/app/components/FAQ";
import Head from "next/head";
import RecentWork from "./components/RecentWork";
// import Header, Recent work, testimonial, book a call, FAQ
// in the header add Logo, Name- left corner, CTA - right corner
// main proposal mid left side, a visual mid right side and mid down corner
// CTA left down corner, Ratings down it
// or in the middle VSL
export default function Home() {
  return (
    <div>
      <Head>
        <title>BasedMVP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <RecentWork />
      <Portfolio />
      <Testimonial />
      <Questions />
      <Services />
    </div>
  );
}
