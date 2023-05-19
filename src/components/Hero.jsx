import React, { useState } from 'react';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import slide1 from '../assets/web-hosting1.jpeg';
import slide2 from '../assets/web-hosting2.jpg';
import slide3 from '../assets/web-hosting3.webp';
const Hero = () => {

  const slides = [
    {src: slide1},
    {src: slide2},
    {src: slide3},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };

  const nextSlide = () => {
    const islastSlide = currentIndex === slides.length - 1;
    const newIndex = islastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='w-full max-w-[1200px] h-[600px] py-8 px-4 m-auto relative group'>
      
      <div style={{backgroundImage: `url(${slides[currentIndex].src})`}} 
      className='w-full h-full bg-center bg-cover rounded-2xl duration-300'>
        
      </div>

      <div className='hidden group-hover:block absolute top-[50%] text-4xl text-white bg-slate-900/40 translate-x-0 translate-y-[-50%] left-5 rounded-full p-5 cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={40}/>
      </div>

      <div className='hidden group-hover:block absolute top-[50%] text-4xl text-white bg-slate-900/40 translate-x-0 translate-y-[-50%] right-5 rounded-full p-5 cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={40}/>
      </div>
    </div>
  )
}

export default Hero;