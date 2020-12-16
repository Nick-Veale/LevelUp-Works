import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../userContext";
import "./Projects.css";
import { Link, Redirect } from "react-router-dom";
import Footer from "../Homepage/HomepageComponents/Footer/Footer";
import { ProjectsUI } from "./ProjectsComponents";
import { Link as ScrollLink } from "react-scroll";
import Axios from "axios";

export default function Projects() {
  const [profileData, setProfileData] = useState([1, 2, 3]);
  const [q, setQ] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3030/fetchallprojects").then((res) => {
      console.log(res);
      setProfileData(res.data);
    });
  }, []);

  const [numberShown, setNumberShown] = useState(25);

  const fields = Object.keys(profileData[0]);
  const search = profileData.filter((item) =>
    q.some((param) =>
      fields.some(
        (field) =>
          item[field].toString().toLowerCase().indexOf(param.toLowerCase()) > -1
      )
    )
  );
  const projectList = search.map((item) => (
    <ProjectItem content={item} number={numberShown} />
  ));

  const handleSetNumber = (num) => {
    setNumberShown(num);
  };

  //  appending the value to the array on the onChange function for the buttons
  const handleSetQ = (e) => {
    let newQuery = q;
    const check = e.target.checked;
    const param = e.target.value;

    if (check) {
      setQ([...q, param]);
    } else {
      let index = newQuery.indexOf(param);
      if (index > -1) {
        newQuery.splice(index, 1);
        setQ([...newQuery]);
      }
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div id="projectsHeader">
        <h1 className="projectsH1">PROJECTS</h1>
        <h4 className="projectsH4">
          Welcome to the Projects Library. You can use the filters on the left
          to help you search for specific projects.
        </h4>
        <br />
      </div>
      <main className="projMain">
        <ProjectsUI
          handleSetNumber={(num) => handleSetNumber(num)}
          numberShown={numberShown}
          handleSetQ={(e) => handleSetQ(e)}
          queryValue={q}
        />
        <div className="projContent">{projectList}</div>
        <div>
          <ConditionalButtons />
        </div>
        <Footer />
      </main>
    </div>
  );
}

const ProjectItem = (props) => {
  const [itemDivStyles, setItemDivStyles] = useState("projectItemDiv");
  const [itemImageStyles, setItemImageStyles] = useState("projectItemImage");
  const [itemTextDivStyles, setItemTextDivStyles] = useState("projectItemText");
  const [itemHeading1Styles, setItemHeading1Styles] = useState(
    "projectItemHeading"
  );
  const [itemHeading2Styles, setItemHeading2Styles] = useState(
    "projectItemHeading2"
  );

  useEffect(() => {
    if (props.number === 25) {
      setItemDivStyles("projectItemDiv");
      setItemImageStyles("projectItemImage");
      setItemTextDivStyles("projectItemText");
      setItemHeading1Styles("projectItemHeading");
      setItemHeading2Styles("projectItemHeading2");
    } else if (props.number === 50) {
      setItemDivStyles("projectItemDiv50");
      setItemImageStyles("projectItemImage50");
      setItemTextDivStyles("projectItemText50");
      setItemHeading1Styles("projectItemHeading50");
      setItemHeading2Styles("projectItemHeading250");
    } else if (props.number === 100) {
      setItemDivStyles("projectItemDiv100");
      setItemImageStyles("projectItemImage100");
      setItemTextDivStyles("projectItemText100");
      setItemHeading1Styles("projectItemHeading100");
      setItemHeading2Styles("projectItemHeading2100");
    }
  }, [props.number]);

  return (
    <div className={itemDivStyles}>
      <Link to="/projectbuilder">
        <img src={props.content.imgUrl} alt="" className={itemImageStyles} />
      </Link>
      <div className={itemTextDivStyles}>
        <h3 className={itemHeading1Styles}>{props.content.ProjectName}</h3>
        <h5 className={itemHeading2Styles}>
          {props.content.Course} | {props.content.ActivityType}
        </h5>
      </div>
    </div>
  );
};

const ConditionalButtons = () => {
  const { user, setUser } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/" />;
  } else {
    if (user.isTeacher === true) {
      return (
        <div className="projectsFootButtons">
          <ScrollLink
            activeClass="active"
            to="projectsHeader"
            spy={true}
            smooth={true}
          >
            <button className="projectsBackToTopButton">Back to Top</button>
          </ScrollLink>
          <Link to="/teachers">
            <button className="projectsBackToDashButton">
              Back to Dashboard
            </button>
          </Link>
        </div>
      );
    } else if (user.isTeacher === false) {
      return (
        <div className="projectsFootButtons">
          <ScrollLink
            activeClass="active"
            to="projectsHeader"
            spy={true}
            smooth={true}
          >
            <button className="projectsBackToTopButton">Back to Top</button>
          </ScrollLink>
        </div>
      );
    }
  }
};
