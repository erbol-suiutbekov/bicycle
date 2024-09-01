import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router";
function Login() {
    const [passWord, setPassword] = useState('')
    const [name, setName] = useState('')
    const nav = useNavigate()
    const addLogin = () => {
        if (name.trim() === '') {
        alert('заполните userName')
        }
      else if (passWord === '2024') {
        nav('/createProduct') 
       }
       else {
        alert(404)
       }
    }
  return (
    <div>
      <div className="container">
        <div className="login">
          <div className="">
            <h1>Login</h1>
          </div>
          <div className="loginn">
            <input type="text" placeholder="userName" className="login_iput" onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="passWord" className="login_iput" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => addLogin()}>addLogin</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
