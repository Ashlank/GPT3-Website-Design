import React from 'react'
import './App.css'

import { CTA, Brand, Navbar } from './components/index'
import { Header, Blog, Possibility, Features, WhatGPT3, Footer } from './containers/index'

function App() {

  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
