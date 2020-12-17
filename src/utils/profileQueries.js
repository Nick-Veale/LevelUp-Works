import Axios from "axios";
import AccountCircleIcon from "../img/account_circle.png";

export const login = async (email, password) => {
  let functionReturn;

  const userInfo = await Axios.post("http://localhost:3030/login", {
    email: email,
    password: password,
  });

  console.log(userInfo);

  if (userInfo.data.message) {
    alert(userInfo.data.message);
    return "Please check your credentials and try again";
  } else {
    const isTeacher = () => {
      if (userInfo.data.IsTeacher === 1) {
        return true;
      } else {
        return false;
      }
    };

    const hasPic = () => {
      const currentPic = userInfo.data.ProfilePic;
      // const mimeType = userInfo.data[].MimeType;

      if (currentPic === null) {
        return AccountCircleIcon;
      } else {
        return currentPic;
      }
    };

    if (userInfo) {
      functionReturn = {
        id: userInfo.data.UserID,
        isTeacher: isTeacher(),
        TeacherID: userInfo.data.TeacherID,
        school: userInfo.data.School,
        course: "beginner",
        dateOfBirth: userInfo.data.DateOfBirth,
        contactNo: userInfo.data.ContactNumber,
        username: userInfo.data.FullName,
        email: userInfo.data.Email,
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
  console.log(user);
  await Axios.post("http://localhost:3030/updateinfo", {
    id: user.id,
    email: user.email,
    school: user.school,
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

export const submitProfilePicture = async (data, UserId) => {
  console.log(data);
  const fd = new FormData();
  fd.append("image", data, UserId);
  Axios.post("http://localhost:3030/updateprofilepic", fd).then((response) => {
    console.log(response);
    const URI = response.data.imageURI;
  });
};
