import React from 'react'
import './code.css'; // Import your custom CSS file
function PhoneBlock() {
  return (
    <div className="phoneblock">
        <div className="mainbox">

            <div className="boxes">
                <h1> Make and receive</h1>
                <h1>payments with ease.</h1>
                <h5>Popular payments, happy customers.</h5>
                <p>Help maximise conversion and reduce cart abandonment with a wide range of digital payment options, customisable in one account.</p>
                <input type="button" value="optimise checkout" className="buttonBlocks"></input>

            </div>

            <div className="boxes">
                <h1></h1>
                <h1>Invoice and get paid fast.</h1>
                <p>Send unlimited invoices that customers can pay even if they don’t have a PayPal account – with Seller Protection from fraud and unauthorised transactions.3</p>
                <input type="button" value="Send an invoice" className="buttonBlocks"></input>
            </div>

        </div>

        <div id="phoneBlock">
            <img src="https://www.paypalobjects.com/marketing/web23/us/en/quantum-leap/smb/accept-payments/hero_size-mobile-up.jpg?quality=40&width=300" className="phone"></img>
        </div>
      
    </div>
  )
}

export default PhoneBlock;
