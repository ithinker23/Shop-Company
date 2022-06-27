import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './LoginPage';
import Register from './RegisterPage';
import Home from './Home'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './style.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Router>
      <Routes>
        <Route path="/user/:username" element={<Home/>}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
      <Footer />
    </Router>
  </>
);