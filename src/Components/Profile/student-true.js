import React, { useContext } from "react";
import Modal from "@material-ui/core/Modal";
import { UserContext } from "../../userContext";

export default function StudentTrue(props) {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <Modal open={props.open} onClose={() => props.handleClose}>
        <div style={props.modalStyle}>
          <h3 id="modalTitle">Welcome to LevelUp Works!</h3>
          <p>
            To complete your profile, please fill in the empty fields by
            clicking the Edit Profile Button.
          </p>
        </div>
      </Modal>
      <Modal
        open={props.openPic}
        onClose={() => props.handleClosePic}
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
                onSubmit={() => props.handleSubmitPic}
                encType="multipart/form-data"
              >
                <input
                  id="profilePicFileInput"
                  type="file"
                  onChange={(e) => {
                    props.handleProfilePic(e.target.files[0]);
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
                <img srcObject={props.profilePic} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <span className="profileContent">
        <div className="profilePhoto">
          <img src={user.profilePicture} className="photo" alt=""></img>
          <button
            className="profileEditButton"
            onClick={() => props.handleApplyChange}
          >
            APPLY CHANGES
          </button>
          <button
            className="profileEditButton"
            onClick={() => props.handleOpenPic}
          >
            CHANGE PHOTO
          </button>
        </div>
        <div className="profileInfo">
          <h2 id="profileNameHeading">{user.username}</h2>
          <div className="infoSpanContainer">
            <span className="infoSpan">
              <p>School</p>
              <input
                onChange={(e) => {
                  props.handleSetSchool(e.target.value);
                }}
                defaultValue={user.school}
              ></input>
            </span>
            <span className="infoSpan">
              <p>Teacher</p>
              <input
                onChange={(e) => {
                  props.handleSetTeacher(e.target.value);
                }}
                defaultValue={user.Teacher}
              ></input>
            </span>
            <span className="infoSpan">
              <p>Course</p>
              <p>{user.course}</p>
            </span>
            <span className="infoSpan">
              <p>Date of Birth</p>
              <input
                onChange={(e) => {
                  props.handleSetDateOfBirth(e.target.value);
                }}
                defaultValue={user.dateOfBirth}
              ></input>
            </span>
            <span className="infoSpan">
              <p>Contact No.</p>
              <input
                onChange={(e) => {
                  props.handleSetContactNo(e.target.value);
                }}
                defaultValue={user.contactNo}
              ></input>
            </span>
            <span className="infoSpan">
              <p>Email Address</p>
              <input
                onChange={(e) => {
                  props.handleSetEmail(e.target.value);
                }}
                defaultValue={user.email}
              ></input>
            </span>
          </div>
        </div>
      </span>
      <button
        className="backProjButton"
        onClick={() => props.handleApplyChange}
      >
        APPLY CHANGES
      </button>
    </div>
  );
}
