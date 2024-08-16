"use client"
import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
const HeroContent = () => {
  return (
   
    
    
    <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row relative items-center justify-center px-5 sm:px-20 mt-32 sm:mt-60 w-full z-[20] ">
            <div className="h-full w-full flex flex-col gap-5 max-sm:items-center justify-center m-auto text-start">
                <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5"/>
                    <h1 className="Welcome-text text-[13px]">Hi ! I am Madhav Mishra </h1>
                </motion.div>

                <motion.div
                variants={slideInFromLeft(0.5)}
                className="flex flex-col gap-6 sm:mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto ">
                    <span>

                 FULL 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> STACK </span>
                   DEVELOPER
                    </span>
                </motion.div>

                <motion.p
                variants={slideInFromLeft(0.8)}
                className="text-lg text-gray-400 my-5 max-w-[600px]">
                As a WEB developer, I work on both the front-end and back-end of applications. I use my skills in various programming languages, frameworks, and tools to build complete, functional web applications.
                </motion.p>
{/* 
                <motion.div
                variants={slideInFromLeft(1)}
                className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                    <a href="#skills" className='cursor-pointer'>Learn more!</a>
                </motion.div> */}
              </div>

               
    </motion.div>
    
  )
}

export default HeroContent