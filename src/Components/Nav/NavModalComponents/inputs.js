import { useState, useContext } from "react";
import { UserContext } from "../../../userContext";
import { Redirect } from "react-router-dom";
import { login, signup, fetchTeacherName } from "../../../utils/profileQueries";

export const TeacherLogInPuts = () => {
  const { user, setUser } = useContext(UserContext);
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit Init");
    const defineUser = await login(emailLog, passwordLog);
    if (typeof defineUser === String) {
      alert({ defineUser });
    } else {
      const defineTeacherName = await fetchTeacherName(defineUser);
      const definedUser = { ...defineUser, Teacher: defineTeacherName };
      console.log(definedUser);
      await setUser(definedUser);
    }
  };

  if (user) {
    return <Redirect to="/profile" />;
  } else {
    return (
      <form onSubmit={handleSubmit}>
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
  }
};

export const StudentLogInPuts = () => {
  const { user, setUser } = useContext(UserContext);
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit Init");
    const defineUser = await login(emailLog, passwordLog);
    if (typeof defineUser === String) {
      alert({ defineUser });
    } else {
      const defineTeacherName = await fetchTeacherName(defineUser);
      const definedUser = { ...defineUser, Teacher: defineTeacherName };
      console.log(definedUser);
      await setUser(definedUser);
    }
  };

  if (user) {
    return <Redirect to="/profile" />;
  } else {
    return (
      <form onSubmit={handleSubmit}>
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
  }
};

export const TeacherSignUpPuts = () => {
  const [fullNameReg, setFullNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [confirmPasswordReg, setConfirmPasswordReg] = useState("");
  const [isTeacherReg] = useState(true);

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

export const StudentSignUpPuts = () => {
  const [fullNameReg, setFullNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [confirmPasswordReg, setConfirmPasswordReg] = useState("");
  const [isTeacherReg] = useState(false);

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
