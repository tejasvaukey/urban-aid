import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import './index.css'

export default function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}
