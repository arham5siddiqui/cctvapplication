import React from "react";
import Login from './login.js';
import "./App.css";
import './login.css';
import { Route, Routes } from "react-router-dom";



  function render(){
    class App extends React.Component{
      state={
        isLog: false
      }
    
      handleLogin = (isLog) => this.setState({isLog})
    
    const {isLog} = this.state;
    return(
      <div>
        <Routes>
          <Route exact path='/' render={() => !isLog ?<Login isLogin={this.handleLogin}/>:<home/> }/>
        </Routes>
      </div>
    )
  }

}



export default render;

