import React from 'react';
import "./pages.css"
import { serverProxy } from '../globalVars';
  
const Login = () => {
  return (
    <div
      style={{
        display: 'block',
        height: '100vh',
        margin: "25px",
      }}
    >
    
    <form action= {serverProxy+"/user"} method="post">
        
        <div class="headingsContainer">
            <h3>Sign in</h3>
            <p>Sign in with your username and password</p>
        </div>

     
        <div class="mainContainer">

            <label for="username">Your username</label>
            <input type="text" placeholder="Enter Username" name="username" required/>

            <br/>
            <label for="pswrd">Your password</label>
            <input type="password" placeholder="Enter Password" name="pswrd" required/>

            <br/>

          
             <button type="submit">Login</button>


            <p class="register">Not a member?  <a href="#">Register here!</a></p>
        </div>

    </form>

    </div>
  );
};
  
export default Login;