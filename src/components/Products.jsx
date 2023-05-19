import React from 'react'
import hosting from '../assets/web-hosting.jpg';
import storage from '../assets/storage.jpg';
import cloud from '../assets/cloud.jpg';
const Products = () => {
  return (
    <div className='product w-full text-center'>
        <h1 className='text-4xl font-bold'>Product Overview</h1>
    
    <div className='w-full mt-4 grid md:grid-cols-3'>
        <div className='max-w-[1200px] mx-auto'>
            <img className='img-product mx-auto my-4 rounded hover:scale-110 duration-300' src={hosting} alt="/"/>
            <div className='flex flex-col justify-center'>
                <h1 className='title-product'>WEB HOSTING</h1>
                <p className='m-4'>The quick and cheap way to your own homepage. Prices for beginners and businesses.</p>
            </div>
            <button className='bg-indigo-500 hover:bg-indigo-700 w-[150px] m-4 text-white font-bold rounded-md my-5 py-3 mx-auto'>Overview</button>
        </div>

        <div className='max-w-[1200px] mx-auto'>
            <img className='img-product mx-auto my-4 rounded hover:scale-110 duration-300' src={storage} alt="/"/>
            <div className='flex flex-col justify-center'>
                <h1 className='title-product'>STORAGE SHARE</h1>
                <p className='m-4'>Easily store and share files. Access your data at any time and from any place with Storage Share</p>
            </div>
            <button className='bg-indigo-500 hover:bg-indigo-700 w-[150px] m-4 text-white font-bold rounded-md my-5 py-3 mx-auto'>Overview</button>
        </div>

        <div className='max-w-[1200px] mx-auto'>
            <img className='img-product mx-auto my-4 rounded hover:scale-110 duration-300' src={cloud} alt="/"/>
            <div className='flex flex-col justify-center'>
                <h1 className='title-product'>CLOUD</h1>
                <p className='m-4'>A little money gets you lots of cloud. Flexible cloud servers with high-end-hardware.</p>
            </div>

            <button className='bg-indigo-500 hover:bg-indigo-700 w-[150px] m-4 text-white font-bold rounded-md my-5 py-3 mx-auto'>Overview</button>
        </div>
           
    </div>
    </div>
  )
}

export default Products;