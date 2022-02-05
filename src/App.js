import React, {useState,useEffect} from 'react';
import './App.css';
// import 'firebase/auth';

import Home from './Pages/home';
import Jwelery from './Pages/Jwelery';
import Gifts from './Pages/Gifts';
import Nav from './Components/NavBar';
import Cart from './Pages/Cart/Cart';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
function App() {
  
  
   
  return (
    <>
    < BrowserRouter >
      <Nav/>
      <div>
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Jwelery" element={<Jwelery />} />
        <Route path="/Gifts" element={<Gifts />} />
         <Route  path="/cart" element={<Cart/>} />
      </Routes>
     

            </div>
    </ BrowserRouter >




  </>
  );
}

export default App;
