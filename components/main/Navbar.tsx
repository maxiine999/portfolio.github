"use client"
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-2 sm:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto sm:px-[10px]">
        <a
          href="#"
          className="h-auto w-auto flex flex-row items-center "
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
 <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Madhav Mishra
          </span>
          
        </a>

        <div className="w-[400px] h-full flex flex-row items-center justify-between md:mr-20">
        <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] max-sm:gap-[-1.5rem]  px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#skills" className="cursor-pointer">Skills{" "}</a>
            <a href="#projects" className="cursor-pointer">
              Projects{" "}
            </a>
            <a href="#Contact" className="cursor-pointer">
              Contact
            </a>
            
          </div>
        </div>

        <div className="flex flex-row gap-1 sm:gap-5 sm:ml-5 ml-2 h-full justify-center items-center">
          
        {Socials.map((social) => (
            <a
              href={social.url} // Link to external URLs from your Socials data
              target="_blank" // Opens links in a new tab
              rel="noopener noreferrer" // Recommended for security reasons
              key={social.name}
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="cursor-pointer "
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;