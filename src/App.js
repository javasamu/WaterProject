import React from 'react';
import './App.css';
import Login from './UI/Components/Pages/Login/Login';
import Home from './UI/Components/Pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/Home' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
