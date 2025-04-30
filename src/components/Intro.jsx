import React from 'react'
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { SiTailwindcss, SiRedux, SiExpress, SiFirebase, SiRust } from 'react-icons/si'
import { DiJava } from 'react-icons/di'

const Intro = () => {
  return (
    <div className="p-6 sm:p-8 rounded-xl h-full">
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-heading text-left mt-4 text-textColor'>
        <span className='bg-cta p-1'>Anirudh</span>
        <span className='text-cta bg-textColor p-1'>Rakonda</span>
      </h1>

      <div className='flex flex-col text-left text-base sm:text-lg text-textColor mt-6 sm:mt-8 gap-3 sm:gap-4'>
        <p>UI/UX Designer</p>
        <p>MERN stack developer</p>
        <p>Java + DSA</p>
      </div>

      <div className="flex overflow-x-auto items-center gap-4 mt-6 sm:mt-8 pb-2 scrollbar-hide">
        <FaReact size={40} className="sm:size-[50px] text-textColor" title="React" />
        <FaNodeJs size={40} className="sm:size-[50px] text-textColor" title="Node.js" />
        <FaDatabase size={40} className="sm:size-[50px] text-textColor" title="MongoDB" />
        <SiTailwindcss size={40} className="sm:size-[50px] text-textColor" title="Tailwind CSS" />
        <SiRedux size={40} className="sm:size-[50px] text-textColor" title="Redux" />
        <SiExpress size={40} className="sm:size-[50px] text-textColor" title="Express.js" />
        <SiFirebase size={40} className="sm:size-[50px] text-textColor" title="Firebase" />
        <DiJava size={40} className="sm:size-[50px] text-textColor" title="Java" />
        <SiRust size={40} className="sm:size-[50px] text-textColor" title="Rust" />
      </div>
    </div>
  )
}

export default Intro
