import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './loginPage';
import Register from './registerPage';
import Home from './home'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
