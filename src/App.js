import React, { useState } from "react";
import "./App.css";
import "./style.css";
import { auth } from "./firebase.js";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./login";
import { AuthProvider } from "./AuthContext";
import Home from "./home";
import NumberPlate from "./numberPlate";
import Mask from "./mask.js";
import Theft from "./theft.js";

function App() {

  return (
    <AuthProvider>
      <Router>
        <Route exact path='/' component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/number-plate" component={NumberPlate} />
        <Route path="/mask" component={Mask} />
        <Route path="/theft-violence" component={Theft} />
      </Router>
    </AuthProvider>
  );
};

export default App;
