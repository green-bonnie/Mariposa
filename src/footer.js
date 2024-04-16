import React from 'react';
import './footer.css';


function Footer() {
    return (
        <div className="Foot">
            <img className="butterfly" src={require("./MBS LogoW.png")} alt="Butterfly"></img>
            <a href="https://www.instagram.com/mariposabirthservices/" target="_blank" rel="noreferrer">
             <button className="follow">FOLLOW US @MARIPOSABIRTHSERVICES</button>
            </a>
            <p className="Credit">MARIPOSA BIRTH SERVICES | Designed by Redwood Rendering</p>
         </div>
    )
}

export default Footer;