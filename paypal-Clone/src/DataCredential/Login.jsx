import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
import './style.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // const history = useHistory(); // Initialize useHistory

    // Sample user data for validation
    const validUser  = {
        email: 'test@example.com',
        password: 'password123'
    };

    const verify = (e) => {
        e.preventDefault(); // Prevent form submission

        // Validate login credentials
        if (email === validUser .email && password === validUser .password) {
            // Successful login logic here
            alert('Login successful!');
            // You can redirect to another page or perform other actions
        } else {
            // If credentials are incorrect, set error message
            setError('Invalid email or password. Please try again.');
            // Optionally navigate to signup page
            // history.push('/signup'); // Uncomment this line to navigate to signup
        }

        // Clear input fields after submission
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <div className="loginBlock">

                <div className="lo"  >
                    <img src="https://logos-world.net/wp-content/uploads/2020/08/PayPal-Symbol.png" className="logosmall"/>
                </div>
                <br/>

                <form onSubmit={verify}>
                    <div>
                        {error && <div className="error">{error}</div>} {/* Display error message */}
                        <input
                            type="email"
                            placeholder="Enter the Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            className="inp"// Update email state
                        />
                    </div>
                    <br/>
                    <a href="#" id="ak">Forgot the email</a>

                    <br/>
                    
                    <input type="submit" value="Next" id="nt" />
                    
                    
                    <p style={{marginLeft:"40px",marginTop:"20px"}}>-------------------------- or -------------------------------</p>

                    <button id="sgn">Sign Up</button>
                    <br></br>
            
                </form>

            </div>
        </div>
    );
}

export default Login;