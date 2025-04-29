import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className='flex justify-between items-center p-4 px-12 text-textColor'>
        <h1 className='text-4xl font-heading'>AR.</h1>
        <div>
          <ul className='flex gap-8 font-italic'>
            <li>projects</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar