import React, { useState, useContext } from "react";
import { UserContext } from "../../userContext";
import { login, signup } from "../../utils/login";
import Modal from "@material-ui/core/Modal";
import students from "../../img/Students.png";
import teachers from "../../img/teacher.png";
import ClearIcon from "@material-ui/icons/Clear";
import "./Nav.css";

export default function NavModal(props) {
  const TeacherLogInPuts = () => {
    const { user, setUser } = useContext(UserContext);
    const [emailLog, setEmailLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");
    return (
      <form
        onSubmit={async () => {
          setUser(await login(emailLog, passwordLog));
          if (!user) {
            alert(
              "Log in Unsuccesful. Please check your credentials and try again."
            );
          }
        }}
      >
        <input
          type="email"
          id="modalInputBox"
          placeholder="Email Address"
          onChange={(e) => {
            setEmailLog(e.target.value);
          }}
        ></input>
        <input
          type="password"
          id="modalInputBox"
          placeholder="Password"
          onChange={(e) => {
            setPasswordLog(e.target.value);
          }}
        ></input>
        <button type="submit" id="modalButton">
          LOG IN
        </button>
      </form>
    );
  };

  const StudentLogInPuts = () => {
    const { user, setUser } = useContext(UserContext);
    const [emailLog, setEmailLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");
    return (
      <form
        onSubmit={async () => {
          setUser(await login(emailLog, passwordLog));
          if (!user) {
            alert(
              "Log in Unsuccesful. Please check your credentials and try again."
            );
          }
        }}
      >
        <input
          type="email"
          id="modalInputBox"
          placeholder="Email Address"
          onChange={(e) => {
            setEmailLog(e.target.value);
            console.log(emailLog);
          }}
        ></input>
        <input
          type="password"
          id="modalInputBox"
          placeholder="Password"
          onChange={(e) => {
            setPasswordLog(e.target.value);
            console.log(passwordLog);
          }}
        ></input>
        <button type="submit" id="modalButton">
          LOG IN
        </button>
      </form>
    );
  };

  const TeacherSignUpPuts = () => {
    const [fullNameReg, setFullNameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [confirmPasswordReg, setConfirmPasswordReg] = useState("");
    const [isTeacherReg, setIsTeacherReg] = useState(true);

    return (
      <div>
        <input
          type="text"
          id="modalInputBox"
          placeholder="Full Name"
          onChange={(e) => {
            setFullNameReg(e.target.value);
          }}
        ></input>
        <input
          type="email"
          id="modalInputBox"
          placeholder="Email Address"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        ></input>
        <input
          type="password"
          id="modalInputBox"
          placeholder="Password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        ></input>
        <input
          type="password"
          id="modalInputBox"
          placeholder="Confirm Password"
          onChange={(e) => {
            setConfirmPasswordReg(e.target.value);
          }}
        ></input>
        <button
          onClick={async () => {
            if (passwordReg === confirmPasswordReg) {
              await signup(fullNameReg, emailReg, passwordReg, isTeacherReg);
            } else {
              alert("Passwords do not match");
            }
          }}
          id="modalButton"
        >
          SIGN UP
        </button>
      </div>
    );
  };

  const StudentSignUpPuts = () => {
    const [fullNameReg, setFullNameReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [confirmPasswordReg, setConfirmPasswordReg] = useState("");
    const [isTeacherReg, setIsTeacherReg] = useState(false);
    return (
      <div>
        <input
          type="text"
          id="modalInputBox"
          placeholder="Full Name"
          onChange={(e) => {
            setFullNameReg(e.target.value);
          }}
        ></input>
        <input
          type="email"
          id="modalInputBox"
          placeholder="Email Address"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        ></input>
        <input
          type="password"
          id="modalInputBox"
          placeholder="Password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        ></input>
        <input
          type="password"
          id="modalInputBox"
          placeholder="Confirm Password"
          onChange={(e) => {
            setConfirmPasswordReg(e.target.value);
          }}
        ></input>
        <button
          onClick={async () => {
            if (passwordReg === confirmPasswordReg) {
              await signup(fullNameReg, emailReg, passwordReg, isTeacherReg);
            } else {
              alert("Passwords do not match");
            }
          }}
          id="modalButton"
        >
          SIGN UP
        </button>
      </div>
    );
  };

  const [StudentModalinputs, setStudentModalInputs] = useState(
    <StudentSignUpPuts />
  );
  const [TeacherModalinputs, setTeacherModalInputs] = useState(
    <TeacherSignUpPuts />
  );
  const [studentSignStyle, setStudentSignStyle] = useState({
    borderBottom: "4px solid #f91c85",
  });
  const [teacherSignStyle, setTeacherSignStyle] = useState({
    borderBottom: "4px solid #f91c85",
  });
  const [studentLogStyle, setStudentLogStyle] = useState({});
  const [teacherLogStyle, setTeacherLogStyle] = useState({});

  const handleStudentLogIn = () => {
    setStudentModalInputs(<StudentLogInPuts />);
    setStudentSignStyle({});
    setStudentLogStyle({
      borderBottom: "4px solid #43c0f6",
      transition: "0.2s",
      transitionTimingFunction: "ease-out",
      color: "rgb(90, 90, 90)",
    });
  };

  const handleStudentSignUp = () => {
    setStudentModalInputs(<StudentSignUpPuts />);
    setStudentLogStyle({});
    setStudentSignStyle({
      borderBottom: "4px solid #f91c85",
      transition: "0.2s",
      transitionTimingFunction: "ease-out",
      color: "rgb(90, 90, 90)",
    });
  };

  const handleTeacherLogIn = () => {
    setTeacherModalInputs(<TeacherLogInPuts />);
    setTeacherSignStyle({});
    setTeacherLogStyle({
      borderBottom: "4px solid #43c0f6",
      transition: "0.2s",
      transitionTimingFunction: "ease-out",
      color: "rgb(90, 90, 90)",
    });
  };

  const handleTeacherSignUp = () => {
    setTeacherModalInputs(<TeacherSignUpPuts />);
    setTeacherLogStyle({});
    setTeacherSignStyle({
      borderBottom: "4px solid #f91c85",
      transition: "0.2s",
      transitionTimingFunction: "ease-out",
      color: "rgb(90, 90, 90)",
    });
  };

  const clearIconStyles = {
    position: "relative",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    color: "grey",
    height: "50px",
    width: "50px",
    zIndex: "1",
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        id="ModalStyle"
      >
        <div className="modalStyle">
          <div id="modalStudents">
            <br />
            <img id="centerImage" src={students} alt="??" />
            <br />
            <h2 id="modalTitle">Students</h2>
            <div id="modalLogInSignUp">
              <div id="modalLogInDiv" onClick={() => handleStudentLogIn()}>
                <h3 style={studentLogStyle} id="modalLogIn">
                  LOG IN
                </h3>
              </div>
              <div id="modalSignUpDiv" onClick={() => handleStudentSignUp()}>
                <h3 style={studentSignStyle} id="modalSignUp">
                  SIGN UP
                </h3>
              </div>
            </div>
            {StudentModalinputs}
          </div>
          <div id="modalTeachers">
            <br />
            <img id="centerImage" src={teachers} alt="??" />
            <br />
            <h2 id="modalTitle">Teachers</h2>
            <div id="modalLogInSignUp">
              <div id="modalLogInDiv" onClick={() => handleTeacherLogIn()}>
                <h3 style={teacherLogStyle} id="modalLogIn">
                  LOG IN
                </h3>
              </div>
              <div id="modalSignUpDiv" onClick={() => handleTeacherSignUp()}>
                <h3 style={teacherSignStyle} id="modalSignUp">
                  SIGN UP
                </h3>
              </div>
            </div>
            {TeacherModalinputs}
          </div>
          <ClearIcon onClick={props.handleClose} style={clearIconStyles} />
        </div>
      </Modal>
    </div>
  );
}
