"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-2 sm:px-10">
      <div className="w-full h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        {/* Navigation Links */}
        <div className="flex-grow flex items-center justify-center">
  <div className="flex flex-wrap items-center justify-between w-full max-w-[600px] border border-[#7042f861] bg-[#0300145e] px-4 py-2 rounded-full text-gray-200 ml-0 lg:ml-20 pl-5 pr-5">
    <a href="#skills" className="cursor-pointer text-sm sm:text-base">Skills</a>
    <a href="#projects" className="cursor-pointer text-sm sm:text-base">Projects</a>
    <a href="#Contact" className="cursor-pointer text-sm sm:text-base">Contact</a>
  </div>
</div>


        {/* Social Icons */}
        <div className="flex flex-row gap-2 sm:gap-5 ml-2 sm:ml-5 h-full justify-center items-center">
          {Socials.map((social) => (
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
