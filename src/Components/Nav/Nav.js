import React, { useState} from 'react';
import './Nav.css';
import Logo from '../../img/starLogo.png';
import nzFlag from '../../img/nzFlag.png';
import maoriFlag from '../../img/maoriFlag.png';
import { Link } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import students from '../../img/Students.png';
import teachers from '../../img/teacher.png';
import ClearIcon from '@material-ui/icons/Clear';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import profilePicture from '../../img/profilePicture.png';

function Nav() {

    const [open, setOpen] = useState(false);
    const [modalinputs, setModalInputs] = useState(<SignUpPuts />);
    const [signStyle, setSignStyle] = useState({borderBottom: '4px solid #f91c85'});
    const [logStyle, setLogStyle] = useState({});
    const [loggedIn, setLoggedIn] = useState(true);

    const clearIconStyles = {
        position: 'relative',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
        color: 'grey',
        height: '50px',
        width: '50px',
        zIndex: '1',
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogIn = () => {
        setModalInputs(<LogInPuts />);
        setSignStyle({});
        setLogStyle({
            borderBottom: '4px solid #43c0f6', 
            transition: '0.2s', 
            transitionTimingFunction: 'ease-out',
            color: 'rgb(90, 90, 90)',
        });
    };

    const handleSignUp = () => {
        setModalInputs(<SignUpPuts />);
        setLogStyle({});
        setSignStyle({
            borderBottom: '4px solid #f91c85', 
            transition: '0.2s', 
            transitionTimingFunction: 'ease-out',
            color: 'rgb(90, 90, 90)',
        });
    };

    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    const handleWhenLoggedIn = () => {
        if (loggedIn === false) {
            return (<span>
                <span style={{cursor: 'pointer'}} onClick={() => handleOpen()}><AccountCircleIcon style={{marginRight: '3px'}}/> Register | Login</span>
                            <Modal
                                open={open}
                                onClose={() => handleClose()}
                                aria-labelledby="modal-title"
                                aria-describedby="modal-description"
                                id="ModalStyle"
                            >
                                <div className="modalStyle">
                                    <div id="modalStudents">
                                        <br/>
                                        <img id="centerImage" src={students} alt="??"/>
                                        <br/>
                                        <h2 id="modalTitle">Students</h2>
                                        <div id="modalLogInSignUp">
                                            <div id="modalLogInDiv" onClick={() => handleLogIn()}>
                                                <h3 style={logStyle} id="modalLogIn" >LOG IN</h3>
                                            </div>
                                            <div id="modalSignUpDiv" onClick={() => handleSignUp()}>
                                                <h3 style={signStyle} id="modalSignUp" >SIGN UP</h3>
                                            </div>
                                        </div>
                                        {modalinputs}
                                    </div>
                                    <div id="modalTeachers">
                                        <br/>
                                        <img id="centerImage" src={teachers} alt="??"/>  
                                        <br/>
                                        <h2 id="modalTitle">Teachers</h2>
                                        <div id="modalLogInSignUp">
                                            <div id="modalLogInDiv" onClick={() => handleLogIn()}>
                                                <h3 style={logStyle} id ="modalLogIn" >LOG IN</h3>
                                            </div>
                                            <div id="modalSignUpDiv" onClick={() => handleSignUp()}>
                                                <h3 style={signStyle} id="modalSignUp" >SIGN UP</h3>
                                            </div>
                                        </div>
                                        {modalinputs}
                                    </div>
                                    <ClearIcon onClick={() => handleClose()} style={clearIconStyles}/>   
                                </div>
                            </Modal>
            </span>);
        } else {
            return (
                <span>
                    <Link style={navStyle} to="/Profile">
                        <span style={{cursor: 'pointer'}}><img style={{width: '25px', borderRadius: '50%'}} src={profilePicture} alt=""></img> Rawiri Fletcher</span>
                    </Link>
                </span>
            );
        };
    };
    
    
    return(
        <div className="NavBar">
            <Link to="/">
                <div className="leftDiv">
                    <img className="logoImage" src={Logo} alt="" />
                </div>
            </Link>
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
                    <span className="langSpan">
                        <small>Lang</small>
                        <img className="smallFlag" src={nzFlag} alt=""/>
                        <img className="smallFlag" src={maoriFlag} alt=""/>
                    </span>
                    {handleWhenLoggedIn()}
                </div>
        </div>
    )
};

export default Nav;

const LogInPuts = () => {
    return (
        <form>
            <input type="email" id="modalInputBox" placeholder="Email Address"></input>
            <input type="password" id="modalInputBox" placeholder="Password"></input>
            <button id="modalButton">LOG IN</button>
        </form>
    );
};

const SignUpPuts = () => {
    return (
        <form>
            <input type="text" id="modalInputBox" placeholder="Full Name"></input>
            <input type="email" id="modalInputBox" placeholder="Email Address"></input>
            <input type="password" id="modalInputBox" placeholder="Password"></input>
            <input type="password" id="modalInputBox" placeholder="Confirm Password"></input>
            <button id="modalButton">SIGN UP</button>
        </form>
    );
};