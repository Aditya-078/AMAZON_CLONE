import React from "react";
import './App.css';
import Login from "./Login";
import Header from './Header'
import Home from "./Home";
import Prime from "./Prime";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";import Checkout from "./Checkout";


function App() {
  return (<Router>
    <div className="app">
      
    <Routes>
          <Route path = "/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path= "/login" element={[<Login />]} /> 
          <Route path="/YourPrime" element={[<Prime />]}/>
        </Routes>
      </div>
      </Router>
  );
}

export default App;
