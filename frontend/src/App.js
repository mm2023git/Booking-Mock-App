import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Search from './components/Search'
import './App.css';
import React, { useState, useEffect } from 'react';
import {Routes, Route} from "react-router-dom"


function App() {
  
  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
