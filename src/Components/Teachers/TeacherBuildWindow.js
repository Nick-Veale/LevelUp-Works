import React from "react";
import "./TeacherDashboard.css";
import { UserContext } from "../../userContext";
import { Redirect } from "react-router-dom";

export default function ProjectBuildWindow(props) {
  const { user, userContext } = React.useContext(UserContext);

  const handleRender = () => {
    if (props.contentId === 0) {
      return <div className="teacherContentDiv"></div>;
    } else if (props.contentId === 1) {
      return <div className="teacherContentDiv"></div>;
    } else if (props.contentId === 2) {
      return <div className="teacherContextDiv"></div>;
    } else if (props.contentId === 3) {
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
