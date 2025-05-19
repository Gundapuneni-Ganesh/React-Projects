import React from 'react'
import './code.css'; // Import your custom CSS file
function Footer() {
  return (
    <div>
      <div className="footerblock">
        <div className="ffirst">
            <div><a href="#" style={{color:"black",fontWeight:"bolder"}}>Help</a></div>
            <div><a href="#" style={{color:"black" ,fontWeight:"bolder"}}>Contact</a></div>
            <div><a href="#" style={{color:"black" ,fontWeight:"bolder"}}>Fees</a></div>
            <div><a href="#" style={{color:"black",fontWeight:"bolder"}}>Security</a></div>
            <div><a href="#" style={{color:"black",fontWeight:"bolder"}}>Shop</a></div>
        </div>
        <hr/>
        <div className="fsecond">
            <div><a href="#">About</a></div>
            <div><a href="#">Newsroom</a></div>
            <div><a href="#">Jobs</a></div>
            <div><a href="#">Developers</a></div>
            <div><a href="#">parteners</a></div>
            <div id="empty">

            </div>
            <div><a href="#">1995-2025</a></div>
            <div><a href="#">Accessibility</a></div>
            <div><a href="#">Cookies</a></div>
            <div><a href="#">Privacy</a></div>
            <div><a href="#">CSR</a></div>
            <div><a href="#">Anual Returns</a></div>
            <div><a href="#">Legal</a></div>
        </div>
        <br/>
        <p>PayPal Services in India are provided by PayPal Payments Private Limited (CIN U74990MH2009PTC194653). Users are advised to read the terms and conditions carefully.</p>
        <p>When you visit or interact with our sites, services, applications, tools or messaging, we or our authorised service providers may use cookies, web beacons, and other similar technologies for storing information to help provide you with a better, faster and safer experience and for advertising purposes. Learn more here.</p>
      </div>
    </div>
  )
}

export default Footer
