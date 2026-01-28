import React from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row md:py-24 py-16 bg-black font-sans pt-25' id='home'>
      {/* left-section */}
      <div className='md:w-1/2 flex flex-col justify-center items-center text-white px-6'>

        <div className='max-w-lg text-left'>
          <p className='font-extrabold text-4xl md:text-6xl leading-tight'>Hi, I AM</p>
          <p className='font-extrabold text-4xl md:text-6xl leading-tight text-gray-200'>Errol D'mello.</p>
          <p className=' text-gray-300 py-4 text-sm md:text-base'>DJSCE’27 | 2⭐️ on CodeChef | Web Dev | I solve. I build. I learn.</p>
          {/* contact button and links */}
          <div className="flex items-center gap-3 mt-2">
            <a href="#contact" className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition duration-300 my-2 inline-block">Contact me</a>
            <a href="https://www.linkedin.com/in/errol-dmell0/" target="_blank" rel="noopener noreferrer" className="bg-white text-black text-xl p-2 rounded-full hover:bg-gray-200 transition duration-300"><FaLinkedinIn /></a>
            <a href="https://github.com/erroldmell0" target="_blank" rel="noopener noreferrer" className="bg-white text-black text-xl p-2 rounded-full hover:bg-gray-200 transition duration-300"><FaGithub /></a>
          </div>
        </div>
        
      </div>

      {/* right-section */}
      <div className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <div className='w-60 sm:w-72 md:w-80 lg:w-110 h-auto flex'>
          <img src='../../public/profile_pic.jpg' alt='Profile Picture' className='h-full w-auto rounded-2xl object-cover shadow-2xl'/>
        </div>
      </div>

    </div>
  )
}

export default Home
