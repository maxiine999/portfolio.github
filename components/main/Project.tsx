"use client"
import React from 'react'
import ProjectCard from './sub/ProjectCard'

const Project = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-8"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 -translate-y-12">
        <ProjectCard
          src="/SpaceWebsite.png"
          
          title="Portfolio"
          description="My portfolio is meticulously crafted using the powerful combination of React, Next.js, and Tailwind CSS. Component-Based Architecture: Build encapsulated components that manage their own state and compose to make UI."
        
        />
        <ProjectCard
          src="/nextwebsite.jpg"
          title="Legal Looker"
          description="Online platform for legal service providers and clients in India.Verify legal service providers for authenticity, Employ tool to analyze uploaded legal documents and recommend the required legal services to clients.
"
        />
        <ProjectCard
          src="/CardImage.jpg"
          title="RE4Lestate"
          description=" The vr application helps you to stimulate into a parallel world to experiance texture and models.handler can place texture and view various oblect,space which an very cost efficient than direct implementation of it."

        />
        </div>
    </div>
  )
}

export default Project