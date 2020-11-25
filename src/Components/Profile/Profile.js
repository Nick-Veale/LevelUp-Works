import React, { useContext } from 'react';
import './Profile.css';
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../../userContext';
import Footer from '../Homepage/HomepageComponents/Footer/Footer';

export default function Profile() {

    const { user, setUser } = useContext(UserContext);

    if (!user) {
        return <Redirect to="/" />
    } else {
        if (user.isTeacher) {
            return (
                <div className="profileDiv">
                    <span className="profileContent">
                        <div className="profilePhoto">
                            <img src={user.profilePicture} className="photo" alt=""></img>
                            <button className="profileEditButton">EDIT PROFILE</button>
                            <button className="profileEditButton">CHANGE PHOTO</button>
                            <button className="profileEditButton">SETTINGS</button>
                        </div>
                        <div className="profileInfo">
                            <h2 id="profileNameHeading">Jasmina Salvador</h2>
                            <div className="infoSpanContainer">
                                <span className="infoSpan">
                                    <p>School</p>
                                    <p>{user.school}</p>
                                </span>
                                <span className="infoSpan">
                                    <p>Courses Purchased</p>
                                    <p>{user.coursesPurchased}</p>
                                </span>
                                <span className="infoSpan">
                                    <p>Date of Birth</p>
                                    <p>{user.dateOfBirth}</p>
                                </span>
                                <span className="infoSpan">
                                    <p>Contact No.</p>
                                    <p>{user.contactNo}</p>
                                </span>
                                <span className="infoSpan">
                                    <p>Email Address</p>
                                    <p>{user.email}</p>
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
                    <Footer />
                </div>
            );
        } else {
            return (
                <div className="profileDiv">
                    <span className="profileContent">
                        <div className="profilePhoto">
                            <img src={user.profilePicture} className="photo" alt=""></img>
                            <button className="profileEditButton">EDIT PROFILE</button>
                            <button className="profileEditButton">CHANGE PHOTO</button>
                        </div>
                        <div className="profileInfo">
                            <h2 id="profileNameHeading">{user.username}</h2>
                            <div className="infoSpanContainer">
                                <span className="infoSpan">
                                    <p>School</p>
                                    <p>{user.school}</p>
                                </span>
                                <span className="infoSpan">
                                    <p>Teacher</p>
                                    <p>{user.username}</p>
                                </span>
                                <span className="infoSpan">
                                    <p>Course</p>
                                    <p>{user.course}</p>
                                </span>
                                <span className="infoSpan">
                                    <p>Date of Birth</p>
                                    <p>{user.dateOfBirth}</p>
                                </span>
                                <span className="infoSpan">
                                    <p>Contact No.</p>
                                    <p>{user.contactNo}</p>
                                </span>
                                <span className="infoSpan">
                                    <p>Email Address</p>
                                    <p>{user.email}</p>
                                </span>
                            </div>
                        </div>
                    </span>
                    <Link to="/projects">
                        <button className="backButton">BACK TO PROJECTS</button>
                    </Link>
                    <Footer />
                </div>
            );
        };
    };
};
