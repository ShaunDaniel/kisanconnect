// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Login from './components/Login';
import Register from './components/Register';
import Register_Buyer from './components/Register_Buyer';
import Register_Seller from './components/Register_Seller';
import Footer from './components/Footer'; 

import './App.css';
import Logout from './components/Logout';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup/buyer" element={<Register_Buyer />} />
        <Route path="/signup/seller" element={<Register_Seller />} />
        <Route path="/products" element={<Products />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;