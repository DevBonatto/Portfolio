import React, { useState } from 'react'

const NavItems = () => {
  return (
    <div>
      <ul className='nav-ul'>
        
      </ul>
    </div>
  )
}

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false)

  const toggleMenu = () => setisOpen((prevIsOpen) => !prevIsOpen)

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90 '>
      <div className='max-w-7xl max-auto'>
        <div className='flex justify-between items-center py-5 mx-auto c-space'>
          <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
            Lucca
          </a>

          <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label="Toggle menu">
            <img src={isOpen ? "assets/close.svg" : "assets/menu.svg" } alt="toggle" className='w-6 h-6' />
          </button>

          <nav className='sm:flex hidden'>
            <NavItems />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar