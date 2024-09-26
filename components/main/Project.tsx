import React from "react";
import ProjectCard from "./sub/ProjectCard";

const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center  " id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-48">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-cols md:flex-row gap-5 px-10 -translate-y-36">
        <ProjectCard
          src="/CardImage2.jpg"
          title="Parralax Zoom"
          description="As you scroll through, elements on the page move at speeds and depths, creating a sense of depth and motion that draws you into the content. This dynamic approach makes every interaction feel engaging and immersive."
          linktosite="https://parallax-zoom-react.vercel.app/"
        />
        <ProjectCard
          src="/sanity.png"
          title="ATTIREAVENUE"
          description="The site is a modern, dynamic ecommerce platform with Next.js, Sanity, and Stripe for a seamless and responsive user experience. Server-side rendering ensures quick load times and enhanced SEO performance."
          linktosite="https://ecommerce-site-nextjs-sanity.vercel.app/"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="PORTFOLIO"
          description="portfolio is meticulously made using the powerful combination of React, Next.js, and Tailwind CSS. Component-Based Architecture: Build encapsulated components that manage their own state and compose to make UI."
          linktosite="https://github.com/maxiine999/portfolio.github"
        />
        <ProjectCard
          src="/CardImage.jpg"
          title="3D TaskList"
          description="3D TaskList, Built with React for a dynamic user interface, Tailwind CSS for a sleek and responsive design, and Three.js for engaging 3D elements.innovative to-do list that blends productivity with interactive 3D visuals."
          linktosite="https://threejs-todo-git-main-madhavs-projects-c6d27f53.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Project;
