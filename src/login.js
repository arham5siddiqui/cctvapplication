import React, { useState } from "react";
import { auth } from "./firebase";
import './login.css';
import { AuthContext } from "./AuthContext";
import { useHistory } from "react-router-dom";

export default function Login() {
  const { currentUser } = React.useContext(AuthContext);
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    console.log("logging in")
    auth
      .signInWithEmailAndPassword(username, password)
      .then(user => {
        console.log('logged in');
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const register = () => {
    console.log("registering")
  }

  if(currentUser) {
    history.push('/home');
  }

  return (
    <div>

      <div className="container">
        <div className="left-section">
          <div className="header">
            <h1 bgcolor="white" className="animation a1">Welcome Back!</h1>
            <h4 className="animation a2">Log in to access your third eye.</h4>
          </div>
          <div className="form">
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="email" className="form-field animation a3" placeholder="Username" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-field animation a4" placeholder="Password" />
            <p className="animation a5"><a href="#">Forgot Password</a></p>
            <button onClick={login} className="animation a6">LOGIN</button>
            <button onClick={register} className="animation a6">REGISTER</button>
          </div>
        </div>
        <div className="right-section" />
      </div>
    </div>
  );
};
