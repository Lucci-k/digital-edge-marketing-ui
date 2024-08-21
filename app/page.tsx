'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Contact from "@/src/components/contact/Contact";
import Faq from "@/src/components/faq/faq";
import Feature from "@/src/components/feature/Feature";
import Hero from "@/src/components/hero/Hero";
import Testimonial from "@/src/components/testimonial/testimonial";

export default function Home() {
  const params = useParams();

  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(globalThis.location.hash);
  }, [params]);

  useEffect(() => {
    if (hash) {
      const id = globalThis.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <main className="flex flex-grow flex-col items-center justify-between">
      <Hero />
      <Feature />
      <Testimonial />
      <Contact />
      <Faq />
    </main>
  );
}
