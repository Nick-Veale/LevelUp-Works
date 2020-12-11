import Axios from "axios";
import AccountCircleIcon from "../img/account_circle.png";

export const login = async (email, password) => {
  let functionReturn;

  const userInfo = await Axios.post("http://localhost:3030/login", {
    email: email,
    password: password,
  });

  console.log(userInfo);

  if (userInfo.data.length === 0) {
    return "Input does not match our records. Please check your credentials and try again.";
  } else {
    const isTeacher = () => {
      if (userInfo.data[0].IsTeacher === 1) {
        return true;
      } else {
        return false;
      }
    };

    const hasPic = () => {
      if (userInfo.data[0].ProfilePic === null) {
        return AccountCircleIcon;
      } else {
        return userInfo.data[0].ProfilePic;
      }
    };

    if (userInfo) {
      functionReturn = {
        id: userInfo.data[0].UserID,
        isTeacher: isTeacher(),
        TeacherID: userInfo.data[0].TeacherID,
        school: userInfo.data[0].School,
        course: "beginner",
        dateOfBirth: userInfo.data[0].DateOfBirth,
        contactNo: userInfo.data[0].ContactNumber,
        username: userInfo.data[0].FullName,
        email: userInfo.data[0].Email,
        profilePicture: hasPic(),
      };
    } else {
      functionReturn = null;
    }
    console.log(functionReturn);
    return functionReturn;
  }
};

export const fetchTeacherName = async (user) => {
  if (user.TeacherID) {
    const name = await Axios.post("http://localhost:3030/fetchteacher", {
      TeacherID: user.TeacherID,
    });
    const teacherName = name.data[0].FullName;
    return teacherName;
  } else {
    return null;
  }
};

export const signup = async (fullname, email, password, isTeacher) => {
  Axios.post("http://localhost:3030/register", {
    fullName: fullname,
    email: email,
    password: password,
    isTeacher: isTeacher,
  }).then((response) => {
    if (response.data.message) {
      alert(response.data.message);
    } else {
      alert("An error has occured.");
    }
  });
};

export const update = async (user) => {
  Axios.post("http://localhost:3030/updateinfo", {
    id: user.id,
    email: user.email,
    school: user.school,
    profilePic: user.profilePicture,
    dateOfBirth: user.dateOfBirth,
    contactNumber: user.contactNo,
    fullName: user.username,
  }).then((response) => {
    if (response.data.message) {
      alert(response.data.message);
    } else {
      alert("An error has occured");
    }
  });
};

export const fetchTeacherId = async (teacherName) => {
  Axios.post("http://localhost:3030/fetchteacherid", {
    teacherName: teacherName,
  }).then((response) => {
    console.log(response.data[0].FullName);
    const teacherFullName = response.data[0].FullName;
    return teacherFullName;
  });
};
