import React from "react";
import ProjectCard from "./sub/ProjectCard";

const Project = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-3"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 -translate-y-12">
        <ProjectCard
          src="/SpaceWebsite.png"
          title="PORTFOLIO"
          description="portfolio is meticulously made using the powerful combination of React, Next.js, and Tailwind CSS. Component-Based Architecture: Build encapsulated components that manage their own state and compose to make UI."
          linktosite="https://github.com/maxiine999/portfolio.github"
        />
        <ProjectCard
          src="/sanity.png"
          title="ATTIREAVENUE"
          description="The site is a modern, dynamic ecommerce platform built with Next.js, Sanity, and Stripe for a seamless and responsive user experience. Server-side rendering ensures quick load times and enhanced SEO performance."
          linktosite="https://ecommerce-site-nextjs-sanity.vercel.app/"
        />
        <ProjectCard
          src="/CardImage.jpg"
          title="VR APP"
          description="The vr application helps you to stimulate into a parallel world to experiance texture and models.handler can place texture and view various oblect,space which an very cost efficient than direct implementation of it inenv"
          linktosite="/" // Example site link
        />
       
      </div>
    </div>
  );
};

export default Project;
