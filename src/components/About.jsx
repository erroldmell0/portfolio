import React from 'react'
import FadeIn from './FadeIn'

const About = () => {
  return (
    <>
    <FadeIn>
    <div className='flex flex-col md:flex-row py-20 md:py-28 px-6 md-px-16 font-sans text-gray-800 ' id='about'>

      {/* left-section */}
      <div className='md:w-1/2 flex justify-center items-center'>
        <div className="max-w-md">
          <p className="text-sm text-gray-500 mb-3">Curious? Here you have it.</p>
          <div className="w-16 h-1 bg-gray-800 mb-4"></div>
          <h2 className="font-extrabold text-4xl md:text-6xl leading-tight">About Me</h2>
          <div className="w-16 h-1 bg-gray-800 mt-6"></div>
        </div>
    </div>

      {/* right-section */}
      <div className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <div className='max-w-lg text-sm md:text-base leading-relaxed text-gray-700 space-y-5'>
          
          <p >
            I’m a third-year <span className="font-semibold text-gray-900">Computer Engineering</span> student at Dwarkadas J. Sanghvi College of Engineering, driven by a strong curiosity for technology and a desire to understand how things work at a deeper level. 
          </p>
          <p>
            I enjoy learning new concepts and applying them to real-world problems through hands-on projects and continuous experimentation.
          </p>
          <p>
            My interests lie in data structures and algorithms in java, competitive programming with a rating of 2 stars on codechef, web development, and machine learning, with a strong emphasis on problem-solving and writing clean, efficient, code. 
          </p>
          <p>
            I’m constantly pushing myself to grow as an engineer by exploring new technologies, refining my fundamentals, and building solutions that are both practical and impactful.
          </p>
        </div>
      </div>

    </div>
    <hr className="border-t-2 border-gray-400 w-full mx-auto" />

    </FadeIn>
    </>
  )
}

export default About

{/* <div className='w-60 sm:w-72 md:w-80 lg:w-110 h-auto flex'>
  <img src='../../public/aboutme_pic.jpg' alt='Profile Picture' className='h-full w-auto rounded-2xl object-cover shadow-2xl'/>
</div> */}