import React, { useContext, useState, useEffect } from "react";
import "./Profile.css";
import { Link, Redirect } from "react-router-dom";
import { UserContext } from "../../userContext";
import Footer from "../Homepage/HomepageComponents/Footer/Footer";
import {
  fetchTeacherId,
  update,
  sendProfilePic,
} from "../../utils/profileQueries";
import Modal from "@material-ui/core/Modal";

export default function Profile() {
  const { user, setUser } = useContext(UserContext);

  const [inputMode, setInputMode] = useState(false);
  const [school, setSchool] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [email, setEmail] = useState();
  const [profilePic, setProfilePic] = useState();
  const [contactNo, setContactNo] = useState();
  const [teacher, setTeacher] = useState();
  const [TeacherID, setTeacherID] = useState();
  const [open, setOpen] = useState(false);
  const [openPic, setOpenPic] = useState(false);

  useEffect(() => {
    if (!user) {
      return null;
    } else {
      setSchool(user.school);
      setDateOfBirth(user.dateOfBirth);
      setEmail(user.email);
      setProfilePic(user.profilePic);
      setContactNo(user.contactNo);
      setTeacher(user.Teacher);
      setTeacherID(user.TeacherID);
    }
    if (
      user.school === null ||
      user.dateOfBirth === null ||
      user.contactNo === null
    ) {
      setOpen(true);
    }
  }, [user]);

  const handleInputChange = () => {
    const newInputMode = !inputMode;
    setInputMode(newInputMode);
    console.log(inputMode);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenPic = () => {
    setOpenPic(true);
  };
  const handleClosePic = () => {
    setOpenPic(false);
  };

  const modalStyle = {
    width: "30vw",
    height: "30vh",
    margin: "auto",
    marginTop: "25vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    padding: "50px",
    textAlign: "center",
    fontFamily: "nunito",
  };

  const picModalStyle = {
    width: "50vw",
    height: "50vh",
    margin: "auto",
    marginTop: "25vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    padding: "50px",
    textAlign: "center",
    fontFamily: "nunito",
  };

  const handleApplyChange = async () => {
    if (TeacherID === null && teacher) {
      const newTeacherID = await fetchTeacherId(teacher);
      setTeacherID(newTeacherID);
    }
    const userChanges = {
      id: user.id,
      isTeacher: user.isTeacher,
      TeacherID: TeacherID,
      school: school,
      course: user.course,
      dateOfBirth: dateOfBirth,
      contactNo: contactNo,
      username: user.username,
      email: email,
      profilePicture: profilePic,
      teacher: teacher,
    };
    await setUser(userChanges);
    await update(user);
    handleInputChange();
  };

  const handleSubmitPic = async () => {
    const userChanges = {
      id: user.id,
      isTeacher: user.isTeacher,
      TeacherID: TeacherID,
      school: school,
      course: user.course,
      dateOfBirth: dateOfBirth,
      contactNo: contactNo,
      username: user.username,
      email: email,
      profilePicture: profilePic,
      teacher: teacher,
    };

    await setUser(userChanges);
    await update(user);
    setOpenPic(false);
  };

  if (!user) {
    return <Redirect to="/" />;
  } else {
    if (user.isTeacher === true && inputMode === false) {
      return (
        <div className="profileDiv">
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modalTitle"
            aria-describedby="welcomeModalDescription"
          >
            <div style={modalStyle}>
              <h3 id="welcomeModalTitle">Welcome to LevelUp Works!</h3>
              <p id="welcomeModalDescription">
                To complete your profile, please fill in the empty fields by
                clicking the Edit Profile Button.
              </p>
            </div>
          </Modal>
          <Modal
            open={openPic}
            onClose={handleClosePic}
            aria-labelledby="profilePicModalTitle"
            aria-describedby="profilePicModalDescription"
          >
            <div style={picModalStyle}>
              <div className="profPicModalHeading">
                <h3 id="profilePicModalTitle">
                  Upload your new Profile Picture!
                </h3>
                <p id="profilePicModalDescription">
                  Upload a picture so everyone knows who you are!
                </p>
              </div>
              <div className="profPicModalContent">
                <div className="profPicModalContentDivLeft">
                  <form
                    onSubmit={handleSubmitPic}
                    encType="multipart/form-data"
                  >
                    <input
                      id="profilePicFileInput"
                      type="file"
                      onChange={(e) => {
                        setProfilePic(e.target.files[0]);
                        console.log(profilePic);
                      }}
                      name="profilePic"
                      accept="image/png, image/jpeg"
                    ></input>
                    <button type="submit">Set Picture</button>
                  </form>
                </div>
                <div className="profPicModalContentDivRight">
                  <div className="profPicPreviewDiv">
                    <img srcObject={profilePic} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          <span className="profileContent">
            <div className="profilePhoto">
              <img
                srcObject={user.profilePicture}
                className="photo"
                alt=""
              ></img>
              <button className="profileEditButton" onClick={handleInputChange}>
                EDIT PROFILE
              </button>
              <button className="profileEditButton" onClick={handleOpenPic}>
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
          <Footer />
        </div>
      );
    } else if (user.isTeacher === true && inputMode === true) {
      return (
        <div className="profileDiv">
          <Modal open={open} onClose={handleClose}>
            <div style={modalStyle}>
              <h3 id="modalTitle">Welcome to LevelUp Works!</h3>
              <p>
                To complete your profile, please fill in the empty fields by
                clicking the Edit Profile Button.
              </p>
            </div>
          </Modal>
          <span className="profileContent">
            <div className="profilePhoto">
              <img src={user.profilePicture} className="photo" alt=""></img>
              <button className="profileEditButton" onClick={handleApplyChange}>
                APPLY CHANGES
              </button>
              <button className="profileEditButton">CHANGE PHOTO</button>
            </div>
            <div className="profileInfo">
              <h2 id="profileNameHeading">{user.username}</h2>
              <div className="infoSpanContainer">
                <span className="infoSpan">
                  <p>School</p>
                  <input
                    onChange={(e) => {
                      setSchool(e.target.value);
                    }}
                    defaultValue={user.school}
                  ></input>
                </span>
                <span className="infoSpan">
                  <p>Courses Purchased</p>
                  <p>{user.course}</p>
                </span>
                <span className="infoSpan">
                  <p>Date of Birth</p>
                  <input
                    onChange={(e) => {
                      setDateOfBirth(e.target.value);
                    }}
                    defaultValue={user.dateOfBirth}
                  ></input>
                </span>
                <span className="infoSpan">
                  <p>Contact No.</p>
                  <input
                    onChange={(e) => {
                      setContactNo(e.target.value);
                    }}
                    defaultValue={user.contactNo}
                  ></input>
                </span>
                <span className="infoSpan">
                  <p>Email Address</p>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    defaultValue={user.email}
                  ></input>
                </span>
              </div>
            </div>
          </span>
          <button className="backProjButton" onClick={handleApplyChange}>
            APPLY CHANGES
          </button>
          <Footer />
        </div>
      );
    } else if (user.isTeacher === false && inputMode === false) {
      return (
        <div className="profileDiv">
          <Modal open={open} onClose={handleClose}>
            <div style={modalStyle}>
              <h3 id="modalTitle">Welcome to LevelUp Works!</h3>
              <p>
                To complete your profile, please fill in the empty fields by
                clicking the Edit Profile Button.
              </p>
            </div>
          </Modal>
          <span className="profileContent">
            <div className="profilePhoto">
              <img src={user.profilePicture} className="photo" alt=""></img>
              <button className="profileEditButton" onClick={handleInputChange}>
                EDIT PROFILE
              </button>
              <button
                type="file"
                name="profilePic"
                className="profileEditButton"
              >
                CHANGE PHOTO
              </button>
            </div>
            <div className="profileInfo">
              <h2 id="profileNameHeading">{user.username}</h2>
              <div className="infoSpanContainer">
                <span className="infoSpan">
                  <p>School</p>
                  <p>{user.school ? user.school : "-"}</p>
                </span>
                <span className="infoSpan">
                  <p>Teacher</p>
                  <p>{user.Teacher ? user.Teacher : "-"}</p>
                </span>
                <span className="infoSpan">
                  <p>Course</p>
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
            <button className="backButton">BACK TO PROJECTS</button>
          </Link>
          <Footer />
        </div>
      );
    } else if (user.isTeacher === false && inputMode === true) {
      return (
        <div className="profileDiv">
          <Modal open={open} onClose={handleClose}>
            <div style={modalStyle}>
              <h3 id="modalTitle">Welcome to LevelUp Works!</h3>
              <p>
                To complete your profile, please fill in the empty fields by
                clicking the Edit Profile Button.
              </p>
            </div>
          </Modal>
          <span className="profileContent">
            <div className="profilePhoto">
              <img src={user.profilePicture} className="photo" alt=""></img>
              <button className="profileEditButton" onClick={handleApplyChange}>
                APPLY CHANGES
              </button>
              <button className="profileEditButton">CHANGE PHOTO</button>
            </div>
            <div className="profileInfo">
              <h2 id="profileNameHeading">{user.username}</h2>
              <div className="infoSpanContainer">
                <span className="infoSpan">
                  <p>School</p>
                  <input
                    onChange={(e) => {
                      setSchool(e.target.value);
                    }}
                    defaultValue={user.school}
                  ></input>
                </span>
                <span className="infoSpan">
                  <p>Teacher</p>
                  <input
                    onChange={(e) => {
                      setTeacher(e.target.value);
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
                      setDateOfBirth(e.target.value);
                    }}
                    defaultValue={user.dateOfBirth}
                  ></input>
                </span>
                <span className="infoSpan">
                  <p>Contact No.</p>
                  <input
                    onChange={(e) => {
                      setContactNo(e.target.value);
                    }}
                    defaultValue={user.contactNo}
                  ></input>
                </span>
                <span className="infoSpan">
                  <p>Email Address</p>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    defaultValue={user.email}
                  ></input>
                </span>
              </div>
            </div>
          </span>
          <button className="backProjButton" onClick={handleApplyChange}>
            APPLY CHANGES
          </button>
          <Footer />
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}
