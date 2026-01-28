import React, {useState} from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const downloadCV = () => {
    window.open(
    'https://drive.google.com/file/d/1ICJK1j18inYgS3kL9MMsb36JLYM1QMMr/view?usp=sharing',
    '_blank'
  )
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className='flex items-center h-18 justify-between px-10'>
        <div className="logo font-bold text-2xl md:px-10">
          Errol D'mello
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-6 items-center'>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='/projects'>Projects</a>
          <a href='/contact'>Contact</a>

          <button onClick={downloadCV} className="cv-btn text-white bg-black px-4 py-2 rounded-2xl hover:bg-gray-800">
            Download CV
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className='md:hidden text-2xl' onClick={()=>setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      { isOpen && (
        <div className='md:hidden flex flex-col items-center gap-4 py-6 bg-white shadow'>
          <a href='#home' onClick={()=>setIsOpen(false)}>Home</a>
          <a href='#about' onClick={()=>setIsOpen(false)}>About</a>
          <a href='/projects' onClick={()=>setIsOpen(false)}>Projects</a>
          <a href='/contact' onClick={()=>setIsOpen(false)}>Contact</a>

          <button onClick={downloadCV} className="cv-btn text-white bg-black px-4 py-2 rounded-2xl hover:bg-gray-800">
            Download CV
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
