import React from "react";
import { auth } from "./Firebase";
import {useNavigate} from 'react-router-dom';

const LogIn = ()=> {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
   console.log(email,password)

    event.preventDefault();
   
try{
    const result=await auth.signInWithEmailAndPassword(email,password);
    console.log(result)
    navigate('/');
   
}
catch(err){
    console.log(err);
}
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Please Login</h1>

      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>
<br/><br/>
      <label>
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label>

<br/>
<br/>

    

      <button>Submit</button>
    </form>
  );
}
export default LogIn