import React, {useState,useEffect} from 'react';
import './App.css';
import { auth } from './Components/Firebase';
import Todo from './Components/Todo';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Nav from './Components/NavigationBar';

import { Route, BrowserRouter, Switch } from 'react-router-dom'
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
      <Nav  user={user}/>
      <div>
        
          <Switch>
            <Route exact path="/"><Todo user={user}/></Route>
            <Route path="/LogIn"><LogIn /></Route>
            <Route path="/SignUp"><SignUp /></Route>
            
          
          </Switch>

            </div>
    </ BrowserRouter >




  </>
  );
}

export default App;
