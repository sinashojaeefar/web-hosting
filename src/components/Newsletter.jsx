import React from 'react'

const Newsletter = () => {
  return (
    <div className="newsletter w-full bg-gray-600 text-white py-8">
    <div className="max-w-[1200px] text-center mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">Sign up for our newsletter</h2>
      <p className="mb-4">Be the first to know about releases and industry news and insights.</p>
      <form className="flex flex-col md:flex-row items-center justify-center">
        <input type="email" placeholder="Enter your email" className="md:w-[300px] px-4 py-2 text-black rounded-l-lg md:rounded-l-none md:rounded-r-none md:rounded-l-lg mb-4 md:mb-0" />
        <button type="submit" className="md:w-[150px] bg-red-900 hover:bg-red-950 text-white font-bold py-2 rounded-r-lg md:rounded-l-none md:rounded-r-lg">Subscribe</button>
      </form>
    </div>
  </div>
    
  );
}

export default Newsletter;