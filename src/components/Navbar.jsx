import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white rounded-[18px]">
      <div className="flex justify-between items-center p-4 sm:px-8 md:px-12 text-textColor">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading">AR.</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-italic text-base">
          <li>projects</li>
          <li>about</li>
          <li>contact</li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <FiX size={28} onClick={() => setMenuOpen(false)} className="cursor-pointer" />
          ) : (
            <FiMenu size={28} onClick={() => setMenuOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 font-italic text-base">
            <li onClick={() => setMenuOpen(false)}>projects</li>
            <li onClick={() => setMenuOpen(false)}>about</li>
            <li onClick={() => setMenuOpen(false)}>contact</li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
