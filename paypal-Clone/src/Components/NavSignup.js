import React from 'react';
 import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './code.css'; // Import your custom CSS file

function NavSignup() {
   const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    navigate('/Signup'); // Navigate to the signup route
  };

  return (
    <div className="nav-signup">
      <h1 id="ttt">Join the global community of PayPal users who are sending,</h1>
      <h1>spending, and receiving money securely every day.</h1>
      <input 
        type="button" 
        value="Sign Up Now" 
        className="buttonBlockss" 
        onClick={handleButtonClick} // Add onClick handler
      />
    </div>
  );
}

export default NavSignup;