import React, { useContext } from "react";
import Modal from "@material-ui/core/Modal";
import { Link } from "react-router-dom";
import { UserContext } from "../../userContext";
import { submitProfilePicture } from "../../utils/profileQueries";

export default function TeacherFalse(props) {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <Modal
        open={props.open}
        onClose={() => props.handleClose()}
        aria-labelledby="modalTitle"
        aria-describedby="welcomeModalDescription"
      >
        <div style={props.modalStyle}>
          <h3 id="welcomeModalTitle">Welcome to LevelUp Works!</h3>
          <p id="comeModalDescription">
            To complete your profile, please fill in the empty fields by
            clicking the Edit Profile Button.
          </p>
        </div>
      </Modal>
      <Modal
        open={props.openPic}
        onClose={props.handleClosePic}
        aria-labelledby="profilePicModalTitle"
        aria-describedby="profilePicModalDescription"
      >
        <div style={props.picModalStyle}>
          <div className="profPicModalHeading">
            <h3 id="profilePicModalTitle">Upload your new Profile Picture!</h3>
            <p id="profilePicModalDescription">
              Upload a picture so everyone knows who you are!
            </p>
          </div>
          <div className="profPicModalContent">
            <div className="profPicModalContentDivLeft">
              <form
                onSubmit={() => {
                  props.handleSubmitPic();
                }}
              >
                <input
                  id="profilePicFileInput"
                  type="file"
                  onChange={(e) => {
                    props.handleSetProfilePic(e.target.files[0]);
                  }}
                  name="profilePic"
                  accept=".jpg, .jpeg, .png"
                  encType="multipart/form-data"
                ></input>
                <button type="submit">Set Picture</button>
              </form>
            </div>
            <div className="profPicModalContentDivRight">
              <div className="profPicPreviewDiv">
                <img source={props.profilePic} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <span className="profileContent">
        <div className="profilePhoto">
          <img src={props.profilePic} className="photo" alt=""></img>
          <button
            className="profileEditButton"
            onClick={() => props.handleInputChange()}
          >
            EDIT PROFILE
          </button>
          <button
            className="profileEditButton"
            onClick={() => props.handleOpenPic()}
          >
            CHANGE PHOTO
          </button>
          <button className="profileEditButton">SETTINGS</button>
        </div>
        <div className="profileInfo">
          <h2 id="profileNameHeading">{user.username}</h2>
          <div className="infoSpanContainer">
            <span className="infoSpan">
              <p>School</p>
              <p>{user.school ? user.school : "-"}</p>
            </span>
            <span className="infoSpan">
              <p>Courses Purchased</p>
              <p>{user.course ? user.course : "-"}</p>
            </span>
            <span className="infoSpan">
              <p>Date of Birth</p>
              <p>{user.dateOfBirth ? user.dateOfBirth : "-"}</p>
            </span>
            <span className="infoSpan">
              <p>Contact No.</p>
              <p>{user.contactNo ? user.contactNo : "-"}</p>
            </span>
            <span className="infoSpan">
              <p>Email Address</p>
              <p>{user.email ? user.email : "-"}</p>
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
}
