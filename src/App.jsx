import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
