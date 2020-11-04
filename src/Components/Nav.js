import React from 'react';
import './Nav.css';
import Logo from '../img/starLogo.png';
import nzFlag from '../img/nzFlag.png';
import maoriFlag from '../img/maoriFlag.png';

function Nav() {
    return(
        <div className="NavBar">
            <div className="leftDiv">
                <img className="logoImage" src={Logo} alt="" />
            </div>
            <div className="CenterDiv">
                <ul className="CenterList">
                    <li>HOME</li>
                    <li>FEATURES</li>
                    <li>TEACHERS</li>
                </ul>
            </div>
            <div className="RightDiv">
                <span className="langSpan"><small>Lang</small> <img className="smallFlag" src={nzFlag} alt=""/> <img className="smallFlag" src={maoriFlag} alt=""/></span>
                <span>Register | Login</span>
            </div>
        </div>
    )
};

export default Nav;