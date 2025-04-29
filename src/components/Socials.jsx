import React from 'react';
import { toast } from 'react-hot-toast';

const Socials = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('7036175722').then(() => {
      toast.success('Phone number copied!', {
        duration: 2000,
        position: 'bottom-center',
      });
    }).catch(() => {
      toast.error('Failed to copy!');
    });
  };

  return (
    <div className="flex font-sans justify-center gap-[70px] items-center h-full">
      <a
        href="https://www.linkedin.com/in/anirudh-rakonda-ba255927b/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm hover:text-blue-500 transition-colors duration-200"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/AnirudhRakonda"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm hover:text-gray-400 transition-colors duration-200"
      >
        GitHub
      </a>
      <button
        onClick={copyToClipboard}
        className="flex items-center text-sm hover:text-green-400 transition-colors duration-200 focus:outline-none"
      >
        Phone
      </button>
    </div>
  );
};

export default Socials;
