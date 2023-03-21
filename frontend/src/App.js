import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Login from './components/Login'
import './App.css';
import React, { useState, useEffect } from 'react';
import {Routes, Route} from "react-router-dom"


function App() {

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);


  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
