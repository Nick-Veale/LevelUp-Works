import React, { useContext, useState, useEffect } from "react";
import "./Profile.css";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../userContext";
import Footer from "../Homepage/HomepageComponents/Footer/Footer";
import {
  fetchTeacherId,
  update,
  submitProfilePicture,
} from "../../utils/profileQueries";
import TeacherFalse from "./teacher-false";
import TeacherTrue from "./teacher-true";
import StudentFalse from "./student-false";
import StudentTrue from "./student-true";

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
    console.log(user.profilePicture);

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
  }, []);

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

  const handleApplyChange = () => {
    if (TeacherID === null && teacher) {
      const newTeacherID = fetchTeacherId(teacher);
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

    setUser(userChanges);
    update(userChanges);
    handleInputChange();
  };

  const handleSubmitPic = async () => {
    console.log(profilePic);

    await submitProfilePicture(profilePic, user.id).then((URI) => {
      console.log(URI);
      setProfilePic(URI);
    });

    const userChanges = {
      id: user.id,
      isTeacher: user.isTeacher,
      TeacherID: user.TeacherID,
      school: user.school,
      course: user.course,
      dateOfBirth: user.dateOfBirth,
      contactNo: user.contactNo,
      username: user.username,
      email: user.email,
      profilePicture: profilePic,
      teacher: user.teacher,
    };

    console.log(userChanges);
    setUser(userChanges);

    setOpenPic(false);
  };

  if (!user) {
    return <Redirect to="/" />;
  } else {
    if (user.isTeacher === true && inputMode === false) {
      return (
        <div className="profileDiv">
          <TeacherFalse
            open={open}
            modalStyle={modalStyle}
            picModalStyle={picModalStyle}
            openPic={openPic}
            profilePic={user.profilePicture}
            handleClose={handleClose}
            handleOpenPic={handleOpenPic}
            handleClosePic={handleClosePic}
            handleSubmitPic={handleSubmitPic}
            handleSetProfilePic={(e) => setProfilePic(e)}
            handleInputChange={handleInputChange}
          />
          <Footer />
        </div>
      );
    } else if (user.isTeacher === true && inputMode === true) {
      return (
        <div className="profileDiv">
          <TeacherTrue
            modalStyle={modalStyle}
            picModalStyle={picModalStyle}
            handleApplyChange={handleApplyChange}
            handleOpenPic={handleOpenPic}
            openPic={openPic}
            handleClosePic={handleClosePic}
            handleClose={handleClose}
            profilePic={user.profilePicture}
            handleSetSchool={(e) => {
              setSchool(e);
              console.log(school);
            }}
            handleSetDateOfBirth={(e) => {
              setDateOfBirth(e);
              console.log(dateOfBirth);
            }}
            handleSetContactNo={(e) => {
              setContactNo(e);
              console.log(contactNo);
            }}
            handleSetEmail={(e) => {
              setEmail(e);
              console.log(email);
            }}
          />
          <Footer />
        </div>
      );
    } else if (user.isTeacher === false && inputMode === false) {
      return (
        <div className="profileDiv">
          <StudentFalse
            modalStyle={modalStyle}
            picModalStyle={picModalStyle}
            open={open}
            openPic={openPic}
            profilePic={user.profilePicture}
            handleOpenPic={handleOpenPic}
            handleInputChange={handleInputChange}
            handleClose={handleClose}
            handleClosePic={handleClosePic}
            handleSubmitPic={handleSubmitPic}
            handleSetProfilePic={(e) => setProfilePic(e)}
          />
          <Footer />
        </div>
      );
    } else if (user.isTeacher === false && inputMode === true) {
      return (
        <div className="profileDiv">
          <StudentTrue
            openPic={openPic}
            open={open}
            profilePic={user.profilePicture}
            modalStyle={modalStyle}
            picModalStyle={picModalStyle}
            handleOpenPic={handleOpenPic}
            handleInputChange={handleInputChange}
            handleClose={handleClose}
            handleClosePic={handleClosePic}
            handleSubmitPic={() => handleSubmitPic}
            handleApplyChange={handleApplyChange}
            handleSetProfilePic={(e) => setProfilePic(e)}
            handleSetSchool={(e) => {
              setSchool(e);
            }}
            handleSetTeacher={(e) => {
              setTeacher(e);
            }}
            handleSetDateOfBirth={(e) => {
              setDateOfBirth(e);
            }}
            handleSetContactNo={(e) => {
              setContactNo(e);
            }}
            handleSetEmail={(e) => {
              setEmail(e);
            }}
          />
          <Footer />
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}
