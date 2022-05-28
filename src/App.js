import React, { useEffect, useState } from "react";
import "./App.css";
import "./style.css";
import { auth } from "./firebase";



function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);


  const login = (e) => {
    e.preventDefault();

    console.log("logging in")
    auth
    .signInWithEmailAndPassword(username, password)
    .then((response) => {
      setUser(response.user);
      console.log('logged in');
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
      setError(error.message);
    });
  };

  const register = (e) => {
    e.preventDefault();
    console.log("registering")

    auth
    .createUserWithEmailAndPassword(username, password)
    .then((response) => {
      console.log('the new user is', response);
    })
    .catch((error) => {
      console.log(error);
      setError(error.message);
    });
  };

  console.log(user);

    return (
      
      <div>
        <meta charSet="UTF-8" />
        <link href="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="style.css" />

        <div className="container">
          <div className="left-section">
            <div className="header">
              <h1 bgcolor="yellow" className="animation a1">Welcome Back!</h1>
              <h4 className="animation a2">Log in to access your third eye.</h4>

            </div>
            <div className="form">

              {user ? <p>Logged in</p> : <p>You are logged out</p>}
              
              <input value={username} onChange={(e) => setUsername(e.target.value)} type="email" className="form-field animation a3" placeholder="Username" />
              <input value={password} type="text" onChange={(e) => setPassword(e.target.value)} type="password" className="form-field animation a4" placeholder="Password" />
              <p className="animation a5"><a href="#">Forgot Password</a></p>

              <button type="submit" onClick={login} className="animation a6">LOGIN</button>
              <button onClick={register} className="animation a6">REGISTER</button>

              {error && <p>{error}</p>}
              
            </div>
          </div>
          <div className="right-section" />
        </div>
      </div>
    );
  };

export default App;

