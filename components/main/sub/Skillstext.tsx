"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";

const Skillstext = () => {
  return (
    <div className="gap-4 translate-y-12 mt-7 mb-10 w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Designing, Developing and Supporting Websites.
      </motion.div>
     
    </div>
  );
};

export default Skillstext;
