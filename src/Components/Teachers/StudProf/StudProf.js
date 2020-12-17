import React, { useState, useEffect } from "react";
import "./StudProf.css";
import Axios from "axios";

export default function StudProf() {
  const [studentProfiles, setStudentProfiles] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3030/getstudents").then((res) => {
      console.log(res);
      setStudentProfiles(res.data);
    });
  }, []);

  const profileList = studentProfiles.map((item) => (
    <div className="studentProfilesDiv">
      <img className="studentProfilesImage" src={item.ProfilePic} alt="/" />
      <h2 className="studentProfilesTitle">{item.FullName}</h2>
    </div>
  ));

  return <div className="studentProfilesListContainer">{profileList}</div>;
}
