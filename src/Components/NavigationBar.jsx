import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import { useHistory } from "react-router";
// import { Provider as AlertProvider } from 'react-alert';
//import AlertTemplate from 'react-alert-template-basic';
// import Alert from './Alert';
const Nav = ({user}) => {
  const history=useHistory()
  return (
    <>
   
    
      <div style={styles.Nav}>
        {/* <div style={styles.Alert}>
      <AlertProvider template={AlertTemplate}>
    <Alert />
  </AlertProvider> */}
   <Link style={styles.btn} to="/">To do</Link>
   { 
   user ?
   <button style={styles.btn} onClick={
     () => {
       auth.signOut();
       history.push('/')
     }
   }>logout</button>
   :
   <>
      <Link style={styles.btn} to="/LogIn">Login</Link>
        <Link style={styles.btn} to="/SignUp">Sign up</Link>
        </>
   }

      </div>
    </>
  )
};

const styles = {
  Nav: {
    position: 'sticky',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#34c759',

  },
  Alert:{
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#F0FFFF',
    color: '#000000',
    padding: '7px',
    margin: '1%',
    fontSize: '15px',
    //borderStyle: 'solid',
    //borderWidth: '1px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontFamily: 'Poppins',

  },
};
export default Nav