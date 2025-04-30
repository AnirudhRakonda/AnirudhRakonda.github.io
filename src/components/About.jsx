import React from 'react';
import { FaDownload } from 'react-icons/fa';
// import resume from '../assets/resume.docx';

const About = () => {
  return (
    <div className="p-4 sm:p-6 w-full max-w-sm mx-auto flex flex-col h-full">
      <h1 className="font-heading text-3xl sm:text-4xl mb-4 sm:mb-6 text-left tracking-wide">About Me</h1>

      <div className="space-y-3 sm:space-y-4 font-sans text-left pl-6 sm:pl-12 tracking-wide text-sm sm:text-base">
        <p className="font-light">
          UI/UX and Frontend dev intern at 
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wissionaxis-m36s.vercel.app/"
            className="underline ml-1"
          >
            Wission Axis
          </a>
        </p>
        <p className="font-extralight">
          CS ‘26 undergrad at
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://sreenidhi.edu.in"
            className=" underline ml-1"
          >
            SNIST
          </a>
        </p>
        <p className="font-extralight">
          President @{' '}
          <strong>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://cscsnist.tech/"
              className="underline"
            >
              Cyber Security Club
            </a>
          </strong>
        </p>
      </div>

      <div className="flex-grow" />

      <div className="flex justify-end mt-6">
        <a
          href="#"
          download
          className="flex items-center gap-2 py-2 px-4 text-sm font-semibold text-cta bg-textColor rounded-[10px] hover:bg-gray-800 transition-colors tracking-wide"
        >
          Resume <FaDownload />
        </a>
      </div>
    </div>
  );
};

export default About;
