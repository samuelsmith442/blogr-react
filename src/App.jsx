import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Infrastructure from './components/Infrastructure'
import Tools from './components/Tools'
import Footer from './components/Footer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen w-full">
      <header className="bg-gradient-very-light-red relative overflow-hidden rounded-bl-[100px] w-full">
        <Navbar />
        <Hero />
      </header>
      
      <main>
        <Features />
        <Infrastructure />
        <Tools />
      </main>

      <Footer />
    </div>
  )
}

export default App
