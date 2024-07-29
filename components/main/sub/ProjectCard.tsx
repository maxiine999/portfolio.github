import React from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  title: string;
  description: string;
  linktosite: string;
}

const ProjectCard = ({ src, title, description, linktosite }: Props) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className='w-full object-contain'
      />
      <div className='relative p-4'>
        <h1 className='text-2xl font-semibold text-white'>{title}</h1>
        <p className='mt-2 text-gray-300 mb-5' >{description}</p>
        <a
          href={linktosite}
          className=" relative p-4 py-2   button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] no-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check It Out!
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
