import React, {useState} from 'react';
import './TeacherDashboard.css';
import scratchScreenshot from '../../img/scratchScreenshot.png';
import { UserContext } from '../../userContext';
import {Redirect} from 'react-router-dom';
import Modal from '../../Modal'

export default function ProjectBuildWindow(props) {

    const [isOpen, setIsOpen] = useState(false)

    const { user, userContext } = React.useContext(UserContext);

    const handleRender = () => {
        if (props.contentId === 0) {
            return (
                <div className="teacherContentDiv">
                          </div>
            )
        } else if (props.contentId === 1) {
            return (
                <div className="teacherContentDiv">
                  
                </div>
            )
        } else if (props.contentId === 2) {

            let x = 80;

            return (
                <div className="teacherContextDiv">
                </div>
            )
        } else if (props.contentId === 3) {

            let x = 88;

            return (
                                    <>
                    <div>
                        <span className="teacherSubmissionsTextSpan">
                            <h2>PROJECT SUBMISSIONS</h2>
                            <div />
                            <button className="teacherBuilderButton">
                             <span>&#10515; </span>
                             DOWNLOAD FILES
                            </button>
                            <button className="teacherBuilderButton">
                            <span>&#128505; </span>                                    
                            MARK AS COMPLETE PROJECT
                            </button>
                        </span>
                       </div>
                       <div className="submittedProjects">
                        <div className="projectCard">
                        <div className="projectCardLeft">
                        <img style={{width: "50px", height: "50px", margin: "20px"}} src={user.profilePicture} className="photo" alt=""></img>
                        </div>
                        <div className="projectCardMiddle">
                        <p>AIDEN submitted his project</p>
                        <img id="myImg" style={{width: "200x", height: "100px", margin: "20px"}} src={scratchScreenshot} alt="scratchScreenshotModal"></img>
                        <br/>
                        <button onClick={() => setIsOpen(true)} className="enlargePhoto">&#128269; ENLARGE PHOTO</button>          

<Modal open = {isOpen} onClose={() => setIsOpen(false)}>
    <img src={scratchScreenshot}></img>
</Modal>
                     </div>
                        <div className="projectCardRight">
                        <p>TUE 28 April 2020</p>
                        <p>10:41 AM</p>
                        </div>
                        </div>
                        <div className="projectCard">
                        <div className="projectCardLeft">
                        <img style={{width: "50px", height: "50px", margin: "20px"}} src={user.profilePicture} className="photo" alt=""></img>
                        </div>
                        <div className="projectCardMiddle">
                        <p>RAWIRI wants to show his project</p>
                        </div>
                        <div className="projectCardRight">
                        <p>TUE 28 April 2020</p>
                        <p>10:27 AM</p>
                        </div>
                        </div>
                        <div className="projectCard">
                        <div className="projectCardLeft">
                        <img style={{width: "50px", height: "50px", margin: "20px"}} src={user.profilePicture} className="photo" alt=""></img>
                        </div>
                        <div className="projectCardMiddle">
                        <p>NEVEAH wants to show her project</p>
                        </div>
                        <div className="projectCardRight">
                        <p>TUE 28 April 2020</p>
                        <p>09:58 AM</p>
                        </div>
                        </div>
                       </div>
                       </>
                )
        } else if (props.contentId === 4) {
                return (
                    <Redirect to="/projects" />
                )
        } else if (props.contentId === 5) {
            return (
                <div className="teacherContentDiv">
                
                </div>
            )
        } else if (props.contentId === 6) {
            return (
                <div className="teacherContentDiv">
                </div>
            )
        }
    } 

    if (!user) {
        return (
            <Redirect to="/" />
        );
    } else {
        return (
            <div style={{height: '90vh'}}>
                <div className="projectBuildWindowCurlyBox">
                    {handleRender()}
                </div>
            </div>
        );
    };
};

