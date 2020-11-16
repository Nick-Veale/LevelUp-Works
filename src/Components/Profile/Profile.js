import React from 'react';
import './Profile.css';
import ProfilePicture from '../../img/profilePicture.png';

export default function Profile() {
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
            <button className="backButton">BACK TO PROJECTS</button>
        </div>
    );
};
