import React, {useState,useEffect} from 'react';
import './App.css';
import { auth } from './Components/Firebase';
import Home from './Pages/home';
import Jwelery from './Pages/Jwelery';
import Gifts from './Pages/Gifts';
import Nav from './Components/NavBar';
import Cart from './Pages/Cart/Cart';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import Landing from './Pages/Cart/Landing';

function App() {
  
  const [user, setUser]=useState('');
  useEffect( () => {
    auth.onAuthStateChanged(user=>{
      if(user) setUser(user)
      else setUser(null)
    })
  },[])
  
  return (
    <>
    < BrowserRouter >
    { 
   user ?
   <>
   <Nav  user={user}/>
   
    
   </> :
   <>
  <Landing/>
      
        </>
   }
    
    
      <div>
        
      <Routes>
      
         <Route exact path="/Landing" element={<Landing />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Jwelery" element={<Jwelery />} />
        <Route path="/Gifts" element={<Gifts />} />
         <Route  path="/cart" element={<Cart/>} />  
         <Route  path="/LogIn" element={<LogIn/>} />
         <Route  path="/SignUp" element={<SignUp/>} />
      </Routes>
     

            </div>
    </ BrowserRouter >




  </>
  );
}

export default App;
