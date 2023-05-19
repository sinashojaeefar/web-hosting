import React from 'react'

const Cards = () => {
  return (
    <div className='cards w-full px-4'>
        <div className='max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full flex flex-col p-4 my-4 shadow-xl border-y-4 border-y-red-800 hover:scale-105 duration-500 rounded-lg'>
                <h2 className='text-2xl font-bold text-center py-5'>Single Web Hosting</h2>
                <p className='text-3xl text-center font-bold'>$3.99</p>
                <div className='text-center'>
                    <p className='py-4 border-b mt-8'><span className='font-bold'>1</span> Website</p>
                    <p className='py-4 border-b'><span className='font-bold'>50GB</span> SSD</p>
                    <p className='py-4 border-b'><span className='font-bold'>100GB</span> Bandwidth</p>
                </div>

                <button className='bg-green-800 w-[150px] font-bold text-white my-4 p-3 rounded-md mx-auto'>Start Trial</button>
            </div>

            <div className='w-full flex flex-col p-4 my-4 shadow-xl border-y-4 border-y-lime-700 hover:scale-105 duration-500 rounded-lg'>
                <h2 className='text-2xl font-bold text-center py-5'>Premium Web Hosting</h2>
                <p className='text-3xl text-center font-bold'>$5.99</p>
                <div className='text-center'>
                    <p className='py-4 border-b mt-8'><span className='font-bold'>100</span> Website</p>
                    <p className='py-4 border-b'><span className='font-bold'>100GB</span> SSD</p>
                    <p className='py-4 border-b'><span className='font-bold'>Unlimited</span> Bandwidth</p>
                </div>

                <button className='bg-green-800 w-[150px] font-bold text-white my-4 p-3 rounded-md mx-auto'>Start Trial</button>
            </div>

            <div className='w-full flex flex-col p-4 my-4 shadow-xl border-y-4 border-y-yellow-600 hover:scale-105 duration-500 rounded-lg'>
                <h2 className='text-2xl font-bold text-center py-5'>Business Web Hosting</h2>
                <p className='text-3xl text-center font-bold'>$9.99</p>
                <div className='text-center'>
                    <p className='py-4 border-b mt-8'><span className='font-bold'>200</span> Website</p>
                    <p className='py-4 border-b'><span className='font-bold'>500GB</span> SSD</p>
                    <p className='py-4 border-b'><span className='font-bold'>Unlimited</span> Bandwidth</p>
                </div>

                <button className='bg-green-800 w-[150px] font-bold text-white my-4 p-3 rounded-md mx-auto'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards