import React from 'react';
import './App.css';
import Login from './UI/Components/Pages/Login/Login';
import Request from './UI/Components/Request-Form/Request';

import Home from './UI/Components/Pages/Home';
import About from './UI/Components/Pages/About/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Registration from './UI/Components/Pages/Registration';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/request' element={<Request/>} />
        <Route path='/register' element={<Registration/>} />

      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
