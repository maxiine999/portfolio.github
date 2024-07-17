

"use client"
import Contact from "@/components/main/contact";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";
import Project from "@/components/main/Project";

import Skills from "@/components/main/Skills";
import StarsCanvas from "@/components/main/Starbackground";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <StarsCanvas />
        <Navbar />
        <Hero />
        <Skills />
        <Project />
        <Contact/>
        <Footer />

      </div>
    </main>
    
  );
}