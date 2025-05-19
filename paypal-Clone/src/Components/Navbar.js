
import './code.css';
import { Link, useNavigate } from 'react-router-dom';
// import Login from './DataCredential/Login.jsx';




function NavScrollExample() {

  const navigate = useNavigate()
  return (
    <div className="fullBlock">

      <div className="logoBlock">
        <img src="https://logos-download.com/wp-content/uploads/2016/03/PayPal_horizontally_Logo_2014.png"  className="imgb"/>
      </div>

      <div className="dropdownBlock">
        <div>
          <select value="selct" className="select"> 
            <option value="hi">select Options</option>
            <option value="hi">hi</option>
            <option value="hi">hi</option>
            <option value="hi">hi</option>

          </select>
        </div>

        <div>
          <select value="selct" className="select"> 
              <option value="hi">select Options</option>
              <option value="hi">hi</option>
              <option value="hi">hi</option>
              <option value="hi">hi</option>

            </select>
        </div>

        <div>
          <select value="selct" className="select"> 
              <option value="hi">select Options</option>
              <option value="hi">hi</option>
              <option value="hi">hi</option>
              <option value="hi">hi</option>

            </select>
        </div>
        <div>
          <select value="selct" className="select"> 
              <option value="hi">select Options</option>
              <option value="hi">hi</option>
              <option value="hi">hi</option>
              <option value="hi">hi</option>

            </select>
        </div>
      </div>

      <div className="loginBlock">
          <div style={{ 
              color: 'blue', 
              borderRadius: '30px', 
              textAlign: 'center', 
              border: "1px solid blue", 
              width: '80px', 
              height: '40px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontFamily: 'Arial, sans-serif' 
          }} >
            <Link to="./Login"><p style={{ margin: 0 }} onClick={() => navigate('./Login')} >Login</p></Link>
          </div>
          <div style={{ 
              color: 'white', 
              borderRadius: '10px', 
              padding: '10px', 
              backgroundColor: 'blue', 
              height: '40px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontFamily: 'Arial, sans-serif' 
            }} onClick={() => navigate('/Signup')}>
            <p style={{ margin: 0 }} >Sign Up</p>
          </div>
      </div>

    </div>
  );
}

export default NavScrollExample;