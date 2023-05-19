import React from 'react'
import {
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaLinkedin,
 } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white">
      <div className="max-w-[1200px] mx-auto py-8">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-2 px-4">
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod magna ac massa fringilla, ac sollicitudin elit laoreet. </p>
            
            <div className='flex justify-between md:w-[50%] hover:cursor-pointer'>
              <FaInstagram size={30}/>
              <FaTelegram size={30} />
              <FaWhatsapp size={30} />
              <FaLinkedin size={30} />
            </div>
            
          </div>

          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">Products</h2>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Dedicated server</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Colocation</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Storage Boxes</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Cloud</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">Support</h2>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Support Center</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Contact form</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">System status</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Downloads</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Email</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Phone</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Address</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Social Media</a></li>
            </ul>
          </div>
          <div className="col-span-5">
            <hr className="my-4 border-gray-700" />
            <p className="text-sm text-center">&copy; 2023 Company Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;