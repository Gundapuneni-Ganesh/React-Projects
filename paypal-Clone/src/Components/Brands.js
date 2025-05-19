import React from 'react';
import './code.css'; // Import your custom CSS file

function Brands() {
    const imgdata = [
        { url: "https://th.bing.com/th/id/OIP.9eS4MTEnRP_eR7nDP8_TfwHaFj?w=238&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
        { url: "https://th.bing.com/th/id/OIP.cZl2awXp3fI5rEyhqoIkdAHaEK?rs=1&pid=ImgDetMain" },
        { url: "https://ts2.mm.bing.net/th?id=OIP.nxNgSidVSFDQe88Rvm1LMQHaE8&pid=15.1" },
        { url: "https://logodix.com/logo/1069050.jpg" },
        { url: "https://th.bing.com/th/id/OIP.wpup_GLUu4-AfY1WTD4fVAHaDt?rs=1&pid=ImgDetMain" }
    ];

    return (
        <div style={{ textAlign: 'center' }} id="br">
            <h1 id="brandstext">Shop from brands you love.</h1>
            <div className="iblock">
                {imgdata.map((src, index) => (
                    <div key={index} className="image-container">
                        <img src={src.url} className="brands" alt={`Brand ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Brands;