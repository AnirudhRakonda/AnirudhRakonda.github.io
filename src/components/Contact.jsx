import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="p-6 w-full max-w-sm mx-auto">
      <h1 className="font-heading text-4xl mb-6 text-left">Currently Open to</h1>

      <ul className="space-y-4 font-sans text-left ml-12">
        <li className="font-light">Frontend roles</li>
        <li className="font-light">Tech collabs</li>
        <li className="font-extrathin">or just a quick tech chat?</li>
      </ul>

      {/* Connect Section */}
      <div className="flex items-center gap-4 mt-8">
        <p className="font-heading text-lg whitespace-nowrap">Let's connect :</p>

        <div className="flex items-center space-x-12">
          {/* Email */}
          <a
            href="mailto:anirudhprasadrakonda@gmail.com"
            className="text-gray-700 hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-[24px]" />
          </a>

          {/* Phone */}
          <a
            href="tel:7036175722"
            className="text-gray-700 hover:text-black"
          >
            <FaPhoneAlt className="text-[22px]" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anirudh-rakonda-ba255927b/"
            className="text-gray-700 hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-[24px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
