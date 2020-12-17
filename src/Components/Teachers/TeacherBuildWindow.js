import React from "react";
import "./TeacherDashboard.css";
import HelpReq from "./HelpReq/HelpReq.js";
import ProgTrack from "./ProgTrack/ProgTrack.js";
import StudProf from "./StudProf/StudProf.js";
import { UserContext } from "../../userContext";
import { Redirect } from "react-router-dom";

export default function ProjectBuildWindow(props) {
  const { user, userContext } = React.useContext(UserContext);

  const handleRender = () => {
    //prog track
    if (props.contentId === 0) {
      return <ProgTrack />;
      //stud prof
    } else if (props.contentId === 1) {
      return <div className="teacherContentDiv"></div>;
      //help req
    } else if (props.contentId === 2) {
      let x = 80;

      return <div className="teacherContextDiv"></div>;
      //proj sub
    } else if (props.contentId === 3) {
      let x = 88;

      return <div className="teacherContentDiv"></div>;
    } else if (props.contentId === 4) {
      return <Redirect to="/projects" />;
    }
  };

  if (!user) {
    return <Redirect to="/" />;
  } else {
    return (
      <div style={{ height: "90vh" }}>
        <div className="projectBuildWindowCurlyBox">{handleRender()}</div>
      </div>
    );
  }
}
