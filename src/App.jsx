import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import 'antd/dist/reset.css'
import { ConfigProvider, theme } from 'antd'

const App = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm
      }}
    >
      <main className='max-w-7xl mx-auto'>
        <Navbar />
        <Hero />
        <About />
        <Projects />

        <Contact />
        <Footer />
      </main>
    </ConfigProvider>
  )
}

export default App