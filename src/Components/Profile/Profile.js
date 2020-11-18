import React from 'react';
import './Profile.css';
import ProfilePicture from '../../img/profilePicture.png';
import teacherProfilePicture from '../../img/teacherProfilePicture.png';
import { Link } from 'react-router-dom';

export default function Profile() {

    const [teacher, setTeacher] = React.useState(true);

    if (teacher) {
        return (
            <div className="profileDiv">
                <span className="profileContent">
                    <div className="profilePhoto">
                        <img src={teacherProfilePicture} className="photo" alt=""></img>
                        <button className="profileEditButton">EDIT PROFILE</button>
                        <button className="profileEditButton">CHANGE PHOTO</button>
                        <button className="profileEditButton">SETTINGS</button>
                    </div>
                    <div className="profileInfo">
                        <h2 id="profileNameHeading">Jasmina Salvador</h2>
                        <div className="infoSpanContainer">
                            <span className="infoSpan">
                                <p>School</p>
                                <p>Homai School</p>
                            </span>
                            <span className="infoSpan">
                                <p>Courses Purchased</p>
                                <p>Beginner</p>
                            </span>
                            <span className="infoSpan">
                                <p>Date of Birth</p>
                                <p>25 June 1986</p>
                            </span>
                            <span className="infoSpan">
                                <p>Contact No.</p>
                                <p>027 754 28 00</p>
                            </span>
                            <span className="infoSpan">
                                <p>Email Address</p>
                                <p>jsalvador@homai.edu</p>
                            </span>
                        </div>
                    </div>
                </span>
                <Link to="/projects">
                    <button className="backProjButton">BACK TO PROJECTS</button>
                </Link>
                <Link to="/teachers">
                    <button className="backDashButton">BACK TO DASHBOARD</button>
                </Link>
                
            </div>
        );
    } else {
        return (
            <div className="profileDiv">
                <span className="profileContent">
                    <div className="profilePhoto">
                        <img src={ProfilePicture} className="photo" alt=""></img>
                        <button className="profileEditButton">EDIT PROFILE</button>
                        <button className="profileEditButton">CHANGE PHOTO</button>
                    </div>
                    <div className="profileInfo">
                        <h2 id="profileNameHeading">Rawiri Fletcher</h2>
                        <div className="infoSpanContainer">
                            <span className="infoSpan">
                                <p>School</p>
                                <p>Homai School</p>
                            </span>
                            <span className="infoSpan">
                                <p>Teacher</p>
                                <p>Jasmina Salvador</p>
                            </span>
                            <span className="infoSpan">
                                <p>Course</p>
                                <p>Beginner</p>
                            </span>
                            <span className="infoSpan">
                                <p>Date of Birth</p>
                                <p>25 June 2010</p>
                            </span>
                            <span className="infoSpan">
                                <p>Contact No.</p>
                                <p>022 524 63 99</p>
                            </span>
                            <span className="infoSpan">
                                <p>Email Address</p>
                                <p>fletchy.r@gmail.com</p>
                            </span>
                        </div>
                    </div>
                </span>
                <Link to="/projects">
                    <button className="backButton">BACK TO PROJECTS</button>
                </Link>
            </div>
        );
    };
};
