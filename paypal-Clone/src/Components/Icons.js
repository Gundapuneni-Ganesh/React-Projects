import React from 'react';
import './code.css'; // Import your custom CSS file

function Icons() {
    const data = [
        {
            url: "fa fa-users",
            tet: "427M Active Accounts"
        },
        {
            url: "fa fa-credit-card",
            tet: "6.5B Total payment transactions."
        },
        {
            url: "fa fa-cc-diners-club",
            tet: "$403.9B total payment volume."
        },
        {
            url: "fa fa-paypal",
            tet: "74% increase in buyer confidence."
        }
    ];

    return (
        <div id="iconsblock" style={{ textAlign: 'center',backgroundColor:'white' }}> {/* Center the entire block */}
            <h1 id="paypalIconText">PayPal by the numbers.</h1>
            <div className='iconsgrid'>
                {data.map((text, index) => (
                    <div key={index} className="icn">
                        <div>
                            <i className={text.url} aria-hidden="true" id="color"></i>
                        </div>
                        <div id="tt">
                            {text.tet}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Icons;