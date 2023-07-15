import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='flex justify-between items-center h-24 px-4 max-w-[1200px] mx-auto text-dark'>
        <h1 className='w-full text-3xl font-bold text-[#273c75]'>Web Hosting</h1>

        <ul className='hidden md:flex'>
          <li className='p-4'>Home</li>
          <li className='p-4'>Company</li>
          <li className='p-4'>Resources</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
             {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
        </div>

            <div className= {!nav ? 'fixed md:hidden z-10 left-0 top-0 h-full w-[60%] border-r border-r-gray-400 bg-gray-300 ease-in-out duration-500' : 'fixed left-[-100%]' } >
        <h1 className='w-full text-3xl font-bold text-[#273c75] m-4'>Web Hosting</h1>
            <ul className='pt-8'>
              <li className='p-4 border-b border-gray-400'>Home</li>
              <li className='p-4 border-b border-gray-400'>Company</li>
              <li className='p-4 border-b border-gray-400'>Resources</li>
              <li className='p-4 border-b border-gray-400'>About</li>
              <li className='p-4'>Contact</li>
            </ul>
        </div>
      </div>
  )
}

export default Navbar;