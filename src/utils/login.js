// import rawiriFletcher from "../img/profilePicture.png";
// import jasminaSalvador from "../img/teacherProfilePicture.png";
import Axios from "axios";

export const login = async (email, password) => {
  let userInfo;
  let functionReturn;

  Axios.get("localhost:3030/login", {
    email: email,
    password: password,
  }).then((response) => {
    if (response.data.message) {
      console.log(response.data.message);
      userInfo = null;
    } else {
      console.log("Woohoo");
      userInfo = response.data[0];
      console.log(userInfo);
    }
  });

  if (userInfo) {
    functionReturn = {
      id: userInfo.UserID,
      isTeacher: userInfo.isTeacher,
      teacherID: userInfo.TeacherID,
      school: userInfo.School,
      course: "beginner",
      dateOfBirth: userInfo.DateOfBirth,
      contactNo: userInfo.ContactNumber,
      username: userInfo.FullName,
      password: userInfo.password,
      email: userInfo.Email,
      profilePicture: userInfo.profilePic,
    };
  } else {
    functionReturn = null;
  }

  return functionReturn;
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

// export const teacherLogin = async (a, b, c) => {
//   return {
//     id: 2,
//     isTeacher: true,
//     school: "Homai School",
//     coursesPurchased: "Beginner",
//     dateOfBirth: "25 June 1986",
//     contactNo: "027 754 28 00",
//     username: "Jasmina Salvador",
//     password: "jasminasalvador123",
//     email: "jsalvador@homai.edu",
//     profilePicture: jasminaSalvador,
//   };
// };

// export const studentSignUp = async (props) => {
//   Axios.post("http://localhost:3030/register", {
//     fullName: props.fullName,
//     email: props.email,
//     password: props.password,
//     isTeacher: false,
//   }).then((response) => {
//     if (response.error) {
//       return `An error has occured: ${response.error}`;
//     } else {
//       return `Registration Recieved! Please Log In.`;
//     }
//   });
// };

// export const teacherSignUp = async (props) => {
//   Axios.post("http://localhost:3030/register", {
//     fullName: props.fullName,
//     email: props.email,
//     password: props.password,
//     isTeacher: true,
//   }).then((response) => {
//     if (response.error) {
//       return `An error has occured: ${response.error}`;
//     } else {
//       return `Registration Recieved! Please Log In.`;
//     }
//   });
// };
