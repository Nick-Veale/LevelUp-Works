import React from 'react';
import './Nav.css';
import Logo from '../img/starLogo.png';
import nzFlag from '../img/nzFlag.png';
import maoriFlag from '../img/maoriFlag.png';
import {Link} from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import students from '../img/Students.png';
import teachers from '../img/teacher.png';


function Nav() {

    const [open, setOpen] = React.useState(false);
    const [logSign, setLogSign] = React.useState(true);
    // const [loggedIn, setLoggedIn] = React.useState(false);

    // const handleLogIn = () => {

    // }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

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
                    <span onClick={handleOpen}>Register | Login</span>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-title"
                            aria-describedby="modal-description"
                        >
                            <div className="modalStyle">
                                <div id="modalStudents">
                                    <br/>
                                    <img id="centerImage" src={students} alt="??"/>
                                    <br/>
                                    <h2 id="modalTitle">Students</h2>
                                    
                                    <input type="text" id="modalInputBox" placeholder="Full Name"/>
                                    <input type="email" id="modalInputBox" placeholder="Email Address"></input>
                                    <input type="password" id="modalInputBox" placeholder="Password"></input>
                                    <input type="password" id="modalInputBox" placeholder="Confirm Password"></input>
                                </div>
                                <div id="modalTeachers">
                                    <br/>
                                    <img id="centerImage" src={teachers} alt="??"/>  
                                    <br/>
                                    <h2 id="modalTitle">Teachers</h2>
                                    <input type="text" id="modalInputBox" placeholder="Full Name"></input>
                                    <input type="email" id="modalInputBox" placeholder="Email Address"></input>
                                    <input type="password" id="modalInputBox" placeholder="Password"></input>
                                    <input type="password" id="modalInputBox" placeholder="Confirm Password"></input>
                                </div>   
                            </div>
                        </Modal>
                </div>
        </div>
    )
};

export default Nav;