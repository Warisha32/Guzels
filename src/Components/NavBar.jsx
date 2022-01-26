/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect, createRef } from 'react';
import { NavLink, useNavigate, Link, Navigate } from "react-router-dom";
// import "../../styles/main.scss";
// import logo from '../../assets/Images/Logo PNG.png';
// import { SearchIcon, BackIcon, HamburgerIcon } from '../SvgComponents/svgs';
import MyAccountDropDown from './MyAccountDropDown'
// import { store } from '../../redux/Store/store';





const Nav = props => {
  const [displayed, setIfDisplayed] = useState(false);
  const dropdownRef = useRef();
  const profile =  useRef();
//   const hamburger = useRef();
  const [search, setSearchState] = useState(false);
  const [keyword, setKeyword] = useState("");
//   const [hamburgerDisplayed, setIfHamburgerDisplayed] = useState(false);
  const navigate = useNavigate();


  const media_buttonId = useRef(0);

//   const user = store.getState().user;

  const handleClickOutside = (event) =>  {
    
    if(profile.current && profile.current.contains(event.target)){
      setIfDisplayed(!displayed);
    }
    if(displayed && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIfDisplayed(false);
    }

    // if(hamburgerDisplayed && hamburger.current && hamburger.current.contains(event.target)){

    //   if(event.path.length > 3 && (event.path[1].id=="back-button" || event.path[2].id=="back-button")){
        // setIfHamburgerDisplayed(false);
    //   }
    //   else if(event.target.name === "1") {
        // navigate.push("/Home")
        // setIfHamburgerDisplayed(false);
      }
    //   else if(event.target.name === "2") {
        // navigate.push("/Media", {refresh:true, buttonId:media_buttonId.current, mediaData:[]})
        // setIfHamburgerDisplayed(false);
    //   }
    //   else if(event.target.name === "3") {
        // navigate.push("/Forum")
        // setIfHamburgerDisplayed(false);
    //   }
    //   else if(event.target.name === "4") {
        // navigate.push("/Cafe")
        // setIfHamburgerDisplayed(false);
    //   }
    //   else if(event.target.name === "5") {
        // navigate.push("/Shop")
        // setIfHamburgerDisplayed(false);
    //   }
    // }
    
//   }

  const handleInput = (event) => {
    if(event.target.name=="search") {
      setKeyword(event.target.value);
    }
  } 

  const handleEnter = (event) => {
    if(event.target.name=="search" && event.key=="Enter") {
      navigate.push({pathname:"/SearchResults", state:{keyword:keyword}})
      setSearchState(!search);
    }
  }

  const searchClickHandler = () => {
    console.log(search);
    setSearchState(!search);
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

//   const clickHandler = (event) =>{
    // console.log(event);
    // setIfHamburgerDisplayed(false);
    // console.log(hamburgerDisplayed)
//   }

  return (
    <>
      <div className="main">
        {/* <div className="first"> <img src={logo} alt="logo"/></div> */}
        <div className="second">
          <div style={{width:"6vw", height:40, display:"inline-block"}} align="center"><NavLink activeClassName="link1" className="link" to="/home">  Home</NavLink></div>
          <div style={{width:"6vw", height:40, display:"inline-block"}} align="center"><NavLink activeClassName="link1" className="link" to={{pathname:"/Media", state:{refresh:true, buttonId:media_buttonId.current, mediaData:[]}}} >Media</NavLink></div>
          <div style={{width:"6vw", height:40, display:"inline-block"}} align="center"><NavLink activeClassName="link1" className="link" to="/Forum">Forum</NavLink></div>
          <div style={{width:"6vw", height:40, display:"inline-block"}} align="center"><NavLink activeClassName="link1" className="link" to="/Cafe" >Cafe</NavLink></div>
          <div style={{width:"6vw", height:40, display:"inline-block"}} align="center"><NavLink activeClassName="link1" className="link" to="/Shop" >Shop</NavLink></div>
        </div>       
        <div className="third">
          <div style={{width:"11vw"}} className="search-box-container">{search? <input type="text" name="search" className="searchbox-input" onChange={handleInput} onKeyDown={handleEnter}/> : <></>}</div>
          {/* <div className="search icon-hover" onClick={searchClickHandler}> <SearchIcon /> </div> */}
          <div ref={profile}
                className={displayed? "active-profile icon-hover" : "profile icon-hover"}
          >
            {/* <img src={user.photoURL} alt="img"/> */}
          </div>
           {displayed ? <MyAccountDropDown ref={dropdownRef} visible={displayed} setVisibility={setIfDisplayed} className="dropdown-component"/> : null}
          {/* <div className="hamburger" onClick={() => {setIfHamburgerDisplayed(true)}}> */}
            {/* {hamburgerDisplayed? */}
              {/* <HamburgerIcon /> */}
              {/* <div className="hamburger-container" style={{ display: hamburgerDisplayed? "block" : "none", width:window.innerWidth, height:window.innerHeight}}>
                <div ref={hamburger}>
                  <div><div style={{display:"inline-flex", zIndex:2}}  id="back-button" onClick={() => {setIfHamburgerDisplayed(false)}}><BackIcon /></div></div>
                  <div className="hamburger-link-container"><Link name="1" className="link" to="/home" onClick={clickHandler}>Home</Link></div>
                  <div className="hamburger-link-container"><Link name="2" onClick={clickHandler} className="link" to={{pathname:"/Media", state:{refresh:true, buttonId:media_buttonId.current, mediaData:[]}}} >Media</Link></div>
                  <div className="hamburger-link-container"><Link name="3" onClick={clickHandler} className="link" to="/Forum">Forum</Link></div>
                  <div className="hamburger-link-container"><Link name="4" onClick={clickHandler} className="link" to="/Cafe" >Cafe</Link></div>
                  <div className="hamburger-link-container"><Link name="5" onClick={clickHandler} className="link" to="/Shop" >Shop</Link></div>
                </div>
            </div> */}
            {/* : <></>} */}
          {/* </div> */}
        </div>
      </div>
    </>
  )
};

export default Nav