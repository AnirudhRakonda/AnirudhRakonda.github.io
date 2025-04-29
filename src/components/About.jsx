import React from 'react';
import {FaDownload} from 'react-icons/fa';
// import {resume} from '../assets/resume.docx';
const About = () => {
  return (
    <div className="p-6 w-full max-w-sm mx-auto flex flex-col h-full">
      <h1 className="font-heading text-4xl mb-6 text-left tracking-wide">About Me</h1>

      <div className="space-y-4 font-sans text-left ml-12 tracking-wide">
        <p className="font-light">UI/UX and Frontend dev intern at 
        <a target="_blank"
              rel="noopener noreferrer" href="https://wissionaxis-m36s.vercel.app/"> Wission Axis
          </a>        
        </p>
        <p className="font-extralight">CS ‘26 undergrad at
          
        <a target="_blank"
              rel="noopener noreferrer" href="https://sreenidhi.edu.in"> SNIST
          </a>
        </p>
        <p className="font-extralight">President @ <strong>
          <a target="_blank"
              rel="noopener noreferrer" href="https://cscsnist.tech/">Cyber Security Club 
          </a>
          </strong>
          </p>
      </div>

      <div className="flex-grow" />

      <div className="flex justify-end mt-3 mr-[-33px]">
        <a 
          href='#'
          download 
          className="flex gap-4 py-2 px-4 text-sm font-semibold text-cta bg-textColor rounded-[10px] hover:bg-gray-800 transition-colors tracking-wide"
        >
          Resume <FaDownload className="text-1xl mt-[3px]" />
        </a>
      </div>
    </div>
  );
};

export default About;
