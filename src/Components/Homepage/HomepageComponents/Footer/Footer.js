import React from 'react';
import './Footer.css';

export default function Footer() {

    return (
        
        <div className="footerContainer">
            <div className="footerColumnDiv">
                <h3 className="footerH3">Company</h3>
                <ul className="footerUl">
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Partners</li>
                </ul>
            </div>

            <div className="footerColumnDiv">
                <h3 className="footerH3">Register</h3>
                <ul className="footerUl">
                    <li>Register</li>
                    <li>Login</li>
                    <li>Projects</li>
                    <li>Teachers</li>
                    <li>Parents</li>
                    <li>Resources</li>
                </ul>
            </div>


            <div className="footerColumnDiv">
                <h3 className="footerH3">Support</h3>
                <ul className="footerUl">
                    <li>FAQS</li>
                    <li>Helpdesk</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div className="footerColumnDiv">
                <h3 className="footerH3">Legal</h3>
                <ul className="footerUl">
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footerTextDiv">
                <h3 className="footerH3">LevelUp Works</h3>
                <p>
                    LevelUp Works is an Auckland-based Enterprise dedicated to 
                    developing game-based learning softward to help teachers in response
                    to the New Zealand Digital Technologies & Hangarau Matihiko.
                </p>
                <p>alan@levelupworks.com</p>
                <p>(021) 668 185</p>
            </div>
        </div>
    )
};
