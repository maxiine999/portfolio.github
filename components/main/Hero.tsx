"use client"
import React from "react";
import HeroContent from "../main/sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute inset-0 opacity-70 w-full h-full sm:object-cover object-fill "
        >
          <source src="new5.mp4" type="video/webm" />
        </video>
      </div>
      <div className="relative z-10">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
