import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';

const Projects = () => {
  const projectList = [
    { name: 'Vaccine management', link: '#' },
    { name: 'ArthGyan', link: '#' },
    { name: 'Synapse', link: '#' },
    { name: 'Elixer', link: '#' },
    { name: 'CS club', link: '#' },
    { name: 'Learning Rust', link: '#' },
  ];

  return (
    <div className="relative  p-6 rounded-2xl  max-w-sm mx-auto h-full">
      {/* Top-right round arrow button */}
      <button className="absolute top-4 right-4 bg-cta rounded-full p-2 text-black hover:rotate-45 transition-transform">
        <HiArrowTopRightOnSquare size={24} />
      </button>

      {/* Heading */}
      <h2 className="text-4xl font-heading text-left mb-8 text-black">Projects</h2>

      {/* Projects List */}
      <div className="space-y-6">
        {projectList.map((project, index) => (
          <a
            href={project.link}
            key={index}
            className="flex items-center justify-between border-b-2 border-black pb-2 group"
          >
            <span className="text-lg font-sans text-black">{project.name}</span>
            <FaArrowRight className="text-black group-hover:translate-x-1 transition-transform" />
          </a>
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-600">Currently exploring Rust to gear up for high-performance Web3 development</p>
    </div>
  );
};

export default Projects;
