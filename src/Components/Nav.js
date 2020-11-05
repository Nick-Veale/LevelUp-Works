import React from 'react';
import './Nav.css';
import Logo from '../img/starLogo.png';
import nzFlag from '../img/nzFlag.png';
import maoriFlag from '../img/maoriFlag.png';
import {Link, withRouter} from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }

    return(
        <div className="NavBar">
                <div className="leftDiv">
                    <img className="logoImage" src={Logo} alt="" />
                </div>
                <div className="CenterDiv">
                    <ul className="CenterList">
                        <Link style={navStyle} to="/">
                            <li>HOME</li>
                        </Link>
                        <Link style={navStyle} to="/projects">
                            <li>PROJECTS</li>
                        </Link>
                        <Link style={navStyle} to="/teachers">
                            <li>TEACHERS</li>
                        </Link>
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