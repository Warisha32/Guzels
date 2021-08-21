import React from "react";
import { auth } from "./Firebase";
import { useHistory } from "react-router";
const LogIn = ()=> {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
 const history=useHistory();

  const handleSubmit = async(event) => {
    console.log(`
      Email: ${email}
      Password: ${password}
     
    `);

    event.preventDefault();
try{
    const result=await auth.signInWithEmailAndPassword(email,password);
    history.push('/');
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