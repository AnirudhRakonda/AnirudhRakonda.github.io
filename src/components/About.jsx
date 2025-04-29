import React from 'react';
import {FaDownload} from 'react-icons/fa';
const About = () => {
  return (
    <div className="p-6 w-full max-w-sm mx-auto flex flex-col h-full">
      <h1 className="font-heading text-4xl mb-6 text-left tracking-wide">About Me</h1>

      <div className="space-y-4 font-sans text-left ml-12 tracking-wide">
        <p className="font-light">UI/UX and Frontend dev intern at <strong>Wission Axis</strong></p>
        <p className="font-extralight">CS ‘26 undergrad at <strong>SNIST</strong></p>
        <p className="font-extralight">President @ Cyber Security Club </p>
      </div>

      {/* Spacer */}
      <div className="flex-grow" />

      {/* Resume Download Button */}
      <div className="flex justify-end mt-4 mr-[-30px]">
        <a 
          href="/resume.pdf" 
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
