import React from 'react'
import Demo1 from './Demo.js';
import Login from './DataCredential/Login.jsx';
import Signup from './DataCredential/Signup.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './DataCredential/Login.jsx';
function App() {
  return (
    <div>
      
      <BrowserRouter>
          <Demo1/>
          <Routes>
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
      </BrowserRouter>   
    </div>
  )
}

export default App
