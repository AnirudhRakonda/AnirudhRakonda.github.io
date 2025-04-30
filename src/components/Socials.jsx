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
    <div className="flex justify-center text-textColor gap-8 items-center h-full p-6 sm:p-8 lg:p-12">
      <a
        href="https://www.linkedin.com/in/anirudh-rakonda-ba255927b/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-m hover:text-blue-500 transition-colors duration-200 underline"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/AnirudhRakonda"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-m hover:text-gray-400 transition-colors duration-200 underline"
      >
        GitHub
      </a>
      <button
        onClick={copyToClipboard}
        className="flex items-center text-m hover:text-green-400 transition-colors duration-200 focus:outline-none underline"
      >
        Phone
      </button>
    </div>
  );
};

export default Socials;
