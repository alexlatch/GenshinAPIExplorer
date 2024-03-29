import { useState } from 'react'
import './App.css'
import MainSection from './components/MainSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <MainSection />
      <Footer />
    </>
  )
}

export default App
