import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="p-4 sm:p-6 w-full max-w-sm sm:max-w-md mx-auto flex flex-col justify-between h-full">
      {/* Heading */}
      <h1 className="font-heading text-3xl sm:text-4xl mb-4 sm:mb-6 text-left">
        Open to
      </h1>

      {/* Opportunities List */}
      <ul className="space-y-3 sm:space-y-4 font-sans text-left text-sm sm:text-base pl-6 sm:pl-12">
        <li>SDE opportunities in tech</li>
        <li>Collaborations on tech innovations</li>
        <li>Or a quick insightful tech chat?</li>
      </ul>

      {/* Spacer */}
      <div className="flex-grow" />

      {/* Connect Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 mt-6 sm:mt-10">
        {/* Text Label for Large Screens */}
        <p className="font-heading text-lg sm:text-xl hidden sm:block whitespace-nowrap">
          Connect with me:
        </p>

        {/* Icons */}
        <div className="flex items-center justify-center sm:justify-start space-x-6 sm:space-x-8">
          {/* Email */}
          <a
            href="mailto:anirudhprasadrakonda@gmail.com"
            className="text-gray-700 hover:text-cta hover:scale-110 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-2xl sm:text-3xl" />
          </a>

          {/* Phone */}
          <a
            href="tel:7036175722"
            className="text-gray-700 hover:text-cta hover:scale-110 transition-all duration-300"
          >
            <FaPhoneAlt className="text-2xl sm:text-3xl" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anirudh-rakonda-ba255927b/"
            className="text-gray-700 hover:text-cta hover:scale-110 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl sm:text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
