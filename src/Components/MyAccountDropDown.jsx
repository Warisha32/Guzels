import React from 'react';
// import "../../styles/main.scss";
// import MyAccount from "../../assets/Images/MyAccount.png";
// import { Link, useHistory } from "react-router-dom";
// import {resetLoading, setLoading, signOut} from "../../redux/Actions/actions";
// import {auth} from "../../firebaseSetup";
// import {store} from "../../redux/Store/store"

const MyAccountDropDown = React.forwardRef((props, ref) => {

    // const user = store.getState().user;

    const clickHandler = () => {
        props.setVisibility(!props.visible);
    }

    // const history = useHistory();
    
    // const signOutHandler = async () => {
        // clickHandler();
        // setLoading();


        // signOut();
        // history.push("/");
        
        // await auth
        // .signOut()
        // .then(() => {})
        // .catch((error) => {
            // resetLoading();
        // })
    // }

    

    return (
        <div id="dropdown-container"   ref={ref}>
            <div className="dropdown-element-profile" style={{flex:2.5, paddingBottom:30}}>
                {/* <div><img style={{ width: 40 ,  height: 40, borderRadius:"50%"}} src={user.photoURL} alt="myAccount"/></div> */}
                {/* <div style={{paddingTop:13, paddingBottom:7}}>{user.displayName}</div> */}
                {/* <div>{user.email}</div> */}
            </div>
            <div  className="dropdown-element"  style={{flex:1}}>
            {/* <Link className="dropdown-link" to="/MyAccount" onClick={clickHandler}>My Account</Link> */}
            </div>
            <div  className="dropdown-element"  style={{flex:1}}>
            {/* <Link  className="dropdown-link" to="/MyCreed" onClick={clickHandler}>My Cart</Link> */}
          
            </div>
            {/* <div  className="dropdown-element"  style={{flex:1}}>
            <Link  className="dropdown-link" to="/Write_forCreed" onClick={clickHandler}>Write For Creed </Link> 
            </div>
            <div  className="dropdown-element"  style={{flex:1}}>
            <Link className="dropdown-link" to="/MyCart" onClick={clickHandler}>My Cart</Link>
            </div> */}
            <div  className="dropdown-element"  style={{flex:1}}>
            {/* <a className="dropdown-link" onClick={signOutHandler} href=" ">Sign Out</a> */}
            </div>
        </div>
    );
});

export default MyAccountDropDown