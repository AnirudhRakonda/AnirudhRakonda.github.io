import React from 'react';
import { FaDownload } from 'react-icons/fa';
// import resume from '../assets/resume.docx';

const About = () => {
  return (
    <div className="px-4 py-6 sm:p-6 w-full max-w-md mx-auto flex flex-col h-full">
      {/* Heading */}
      <h1 className="font-heading text-3xl sm:text-4xl mb-4 sm:mb-6 tracking-wide">
        About Me
      </h1>

      {/* Details */}
      <div className="space-y-4 font-sans tracking-wide text-sm sm:text-base">
        <p className="font-light">
          UI/UX and Frontend dev intern at 
          <a
            href="https://wissionaxis-m36s.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1"
          >
            Wission Axis
          </a>
        </p>

        <p className="font-extralight">
          CS ‘26 undergrad at
          <a
            href="https://sreenidhi.edu.in"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1"
          >
            SNIST
          </a>
        </p>

        <p className="font-extralight">
          President @{' '}
          <strong>
            <a
              href="https://cscsnist.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Cyber Security Club
            </a>
          </strong>
        </p>
      </div>

      {/* Spacer to push button down */}
      <div className="flex-grow" />

      {/* Resume Button */}
      <div className="flex justify-end mt-8 mr-[-20px] sm:mr-0">
        <a
          href="#"
          download
          className="flex items-center gap-4 py-3 px-5 text-sm font-semibold text-cta bg-textColor rounded-[10px] hover:bg-gray-800 transition-colors"
        >
          Resume <FaDownload />
        </a>
      </div>
    </div>
  );
};

export default About;
