import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../userContext";
import "./Projects.css";
import { Link, Redirect } from "react-router-dom";
import Footer from "../Homepage/HomepageComponents/Footer/Footer";
import project1 from "../../img/project1.png";
import project2 from "../../img/project2.png";
import project3 from "../../img/project3.png";
import project4 from "../../img/project4.png";
import project5 from "../../img/project5.png";
import project6 from "../../img/project6.png";
import project7 from "../../img/project7.png";
import project8 from "../../img/project8.png";
import project9 from "../../img/project9.png";
import project10 from "../../img/project10.png";
import project11 from "../../img/project11.png";
import project12 from "../../img/project12.png";
import project13 from "../../img/project13.png";
import project14 from "../../img/project14.png";
import project15 from "../../img/project15.png";
import { ProjectsUI } from "./ProjectsComponents";
import { Link as ScrollLink } from "react-scroll";

export default function Projects() {
  const [projectItemContent, setProjectItemContent] = useState([
    {
      imgUrl: project1,
      name: "Introduction",
      subject: "Art",
      level: "Beginner",
      type: "Animation",
      id: 0,
    },
    {
      imgUrl: project2,
      name: "My Birthday",
      subject: "Art",
      level: "Beginner",
      type: "Animation",
      id: 1,
    },
    {
      imgUrl: project3,
      name: "10 Block Challenge",
      subject: "Art",
      level: "Beginner",
      type: "Animation",
      id: 2,
    },
    {
      imgUrl: project4,
      name: "Build a Band",
      subject: "Music",
      level: "Beginner",
      type: "Animation",
      id: 3,
    },
    {
      imgUrl: project5,
      name: "The bear and the Monkey",
      subject: "Art",
      level: "Beginner",
      type: "Animation",
      id: 4,
    },
    {
      imgUrl: project6,
      name: "Debugging",
      subject: "Computer Science",
      level: "Beginner",
      type: "Animation",
      id: 5,
    },
    {
      imgUrl: project7,
      name: "About Me",
      subject: "Language",
      level: "Beginner",
      type: "Animation",
      id: 6,
    },
    {
      imgUrl: project8,
      name: "I Am Here!",
      subject: "Language",
      level: "Beginner",
      type: "Animation",
      id: 7,
    },
    {
      imgUrl: project9,
      name: "Funny Faces",
      subject: "Art",
      level: "Beginner",
      type: "Animation",
      id: 8,
    },
    {
      imgUrl: project10,
      name: "It Tickles!",
      subject: "Science",
      level: "Beginner",
      type: "Animation",
      id: 9,
    },
    {
      imgUrl: project11,
      name: "Penguin in a Desert",
      subject: "Math",
      level: "Beginner",
      type: "Animation",
      id: 10,
    },
    {
      imgUrl: project12,
      name: "Time Travel",
      subject: "Science",
      level: "Beginner",
      type: "Animation",
      id: 11,
    },
    {
      imgUrl: project13,
      name: "Birthday Card",
      subject: "Art",
      level: "Beginner",
      type: "Animation",
      id: 12,
    },
    {
      imgUrl: project14,
      name: "The Lion and the Mouse Part 1",
      subject: "Language",
      level: "Beginner",
      type: "Animation",
      id: 13,
    },
    {
      imgUrl: project15,
      name: "The Lion and the Mouse Part 2",
      subject: "Language",
      level: "Beginner",
      type: "Animation",
      id: 14,
    },
  ]);
  const [filterItemContent, setFilterItemContent] = useState([]);
  const [numberShown, setNumberShown] = useState(25);

  // const filteredList = projectItemContent.filter((item) => {
  //   item.includes(searchParams[i]);
  // });

  const projectList = projectItemContent.map((item) => (
    <ProjectItem content={item} number={numberShown} />
  ));
  const handleSetNumber = (num) => {
    setNumberShown(num);
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
        <h3 className={itemHeading1Styles}>{props.content.name}</h3>
        <h5 className={itemHeading2Styles}>
          {props.content.level} | {props.content.type}
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
