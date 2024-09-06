// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Register_Buyer from './components/Register_Buyer';
import Register_Seller from './components/Register_Seller';
import Footer from './components/Footer'; // Import the Footer component

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signup/buyer" element={<Register_Buyer />} />
        <Route path="/signup/seller" element={<Register_Seller />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;