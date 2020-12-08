import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../userContext";
import "./Projects.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
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
import { Link as ScrollLink } from "react-scroll";

export default function Projects() {
  const [complexity, setComplexity] = useState("Beginner");
  const [numberShown, setNumberShown] = useState(25);
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
  const [filter, setFilter] = useState({
    free: false,
    premium: false,
    animation: false,
    game: false,
    chatbot: false,
    augmentedReality: false,
    oneToFour: false,
    fiveToSix: false,
    sevenToEight: false,
    nineToThirteen: false,
    computerScience: false,
    maths: false,
    science: false,
    language: false,
    art: false,
    music: false,
  });

  //Filter Functions
  const handleComp = (event) => {
    setComplexity(event);
  };
  const handleSetNumber = (num) => {
    setNumberShown(num);
  };
  const handleSearchParams = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.checked });
    console.log(filter);
  };
  // useEffect(() => {
  //   setFilterItemContent(projectItemContent.map)
  // } [filter])
  // Styling Functions
  const showVariant = (string) => {
    if (string === numberShown) {
      return "contained";
    } else {
      return null;
    }
  };
  const showColor = (string) => {
    if (string === numberShown) {
      return "primary";
    } else {
      return null;
    }
  };
  const complexityRadioButtonClassName = (num) => {
    if (num === complexity) {
      return "complexityRadioButton";
    } else {
      return "complexityRadioButtonGrey";
    }
  };
  const numberRadioButtonClassName = (num) => {
    if (num === numberShown) {
      return "numberRadioButton";
    } else {
      return "numberRadioButtonGrey";
    }
  };
  const complexityVariant = (string) => {
    if (string === complexity) {
      return "contained";
    } else {
      return null;
    }
  };
  const complexityColor = (string) => {
    if (string === complexity) {
      return "primary";
    } else {
      return null;
    }
  };

  // const filteredList = projectItemContent.filter((item) => {
  //   item.includes(searchParams[i]);
  // });

  const projectList = projectItemContent.map((item) => (
    <ProjectItem content={item} number={numberShown} />
  ));

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
        <div className="projFilterControlsTop">
          <ButtonGroup size="small">
            <Button
              id={complexityRadioButtonClassName("Beginner")}
              variant={complexityVariant("Beginner")}
              color={complexityColor("Beginner")}
              onClick={() => handleComp("Beginner")}
            >
              Beginner
            </Button>
            <Button
              id={complexityRadioButtonClassName("Intermediate")}
              variant={complexityVariant("Intermediate")}
              color={complexityColor("Intermediate")}
              onClick={() => handleComp("Intermediate")}
            >
              Intermediate
            </Button>
            <Button
              id={complexityRadioButtonClassName("Advanced")}
              variant={complexityVariant("Advanced")}
              color={complexityColor("Advanced")}
              onClick={() => handleComp("Advanced")}
            >
              Advanced
            </Button>
          </ButtonGroup>

          <ButtonGroup size="small">
            <div style={{ marginRight: "20px" }}>SHOW</div>
            <Button
              id={numberRadioButtonClassName(25)}
              variant={showVariant(25)}
              onClick={() => handleSetNumber(25)}
              color={showColor(25)}
            >
              25
            </Button>
            <Button
              id={numberRadioButtonClassName(50)}
              variant={showVariant(50)}
              onClick={() => handleSetNumber(50)}
              color={showColor(50)}
            >
              50
            </Button>
            <Button
              id={numberRadioButtonClassName(100)}
              variant={showVariant(100)}
              onClick={() => handleSetNumber(100)}
              color={showColor(100)}
            >
              100
            </Button>
          </ButtonGroup>
        </div>

        <div className="projFilterControls">
          <FormControl>
            <FormLabel id="FormLabel">Subscription</FormLabel>
            <FormControlLabel
              id="FormControlLabel"
              value="Free"
              control={
                <Checkbox
                  checked={filter.free}
                  onChange={handleSearchParams}
                  color="primary"
                  name="free"
                />
              }
              label={<span style={{ fontFamily: "nunito" }}>Free</span>}
            />
            <FormControlLabel
              id="FormControlLabel"
              value="Premium"
              control={
                <Checkbox
                  checked={filter.premium}
                  onChange={handleSearchParams}
                  color="primary"
                  name="premium"
                />
              }
              label={<span style={{ fontFamily: "nunito" }}>Premium</span>}
            />
          </FormControl>

          <FormControl>
            <FormLabel id="FormLabel">Activity Type</FormLabel>
            <FormControlLabel
              id="FormControlLabel"
              value="Animation"
              control={
                <Checkbox
                  checked={filter.animation}
                  onChange={handleSearchParams}
                  name="animation"
                  color="primary"
                />
              }
              label={<span style={{ fontFamily: "nunito" }}>Animation</span>}
            />
            <FormControlLabel
              id="FormControlLabel"
              value="Game"
              control={
                <Checkbox
                  onChange={handleSearchParams}
                  checked={filter.game}
                  color="primary"
                  name="game"
                />
              }
              label={<span style={{ fontFamily: "nunito " }}>Game</span>}
            />
            <FormControlLabel
              id="FormControlLabel"
              value="Chatbot"
              control={
                <Checkbox
                  onChange={handleSearchParams}
                  checked={filter.chatbot}
                  color="primary"
                  name="chatbot"
                />
              }
              label={<span style={{ fontFamily: "nunito " }}>Chatbot</span>}
            />
            <FormControlLabel
              id="FormControlLabel"
              value="Augmented Reality"
              control={
                <Checkbox
                  color="primary"
                  onChange={handleSearchParams}
                  checked={filter.augmentedReality}
                  name="augmentedReality"
                />
              }
              label={
                <span style={{ fontFamily: "nunito " }}>Augmented Reality</span>
              }
            />
          </FormControl>

          <FormControl>
            <FormLabel id="FormLabel">Year Level</FormLabel>
            <FormControlLabel
              id="FormControlLabel"
              value="1-4"
              control={
                <Checkbox
                  name="oneToFour"
                  onChange={handleSearchParams}
                  checked={filter.oneToFour}
                  color="primary"
                />
              }
              label={<span style={{ fontFamily: "nunito " }}>1-4</span>}
            />
            <FormControlLabel
              id="FormControlLabel"
              value="5-6"
              control={
                <Checkbox
                  onChange={handleSearchParams}
                  name="fiveToSix"
                  checked={filter.fiveToSix}
                  color="primary"
                />
              }
              label={<span style={{ fontFamily: "nunito " }}>5-6</span>}
            />
            <FormControlLabel
              id="FormControlLabel"
              value="7-8"
              control={
                <Checkbox
                  onChange={handleSearchParams}
                  name="sevenToEight"
                  checked={filter.sevenToEight}
                  color="primary"
                />
              }
              label={<span style={{ fontFamily: "nunito " }}>7-8</span>}
            />
            <FormControlLabel
              id="FormControlLabel"
              value="9-13"
              control={
                <Checkbox
                  onChange={handleSearchParams}
                  name="nineToThirteen"
                  value={filter.nineToThirteen}
                  color="primary"
                />
              }
              label={<span style={{ fontFamily: "nunito" }}>9-13</span>}
            />
          </FormControl>

          <FormControl>
            <FormLabel id="FormLabel">Subject Matter</FormLabel>
            <FormControlLabel
              id="FormControlLabel"
              value="Computer Science"
              control={
                <Checkbox
                  onChange={handleSearchParams}
                  name="computerScience"
                  checked={filter.computerScience}
                  color="primary"
                />
              }
              label={
                <span style={{ fontFamily: "nunito " }}>Computer Science</span>
              }
            />
            <FormControlLabel
              id="FormControlLabel"
              value="Maths"
              control={
                <Checkbox
                  onChange={handleSearchParams}
                  name="maths"
                  checked={filter.maths}
                  color="primary"
                />
              }
              label={<span style={{ fontFamily: "nunito " }}>Maths</span>}
            />
            <FormControlLabel
              id="FormControlLabel"
              value="Science"
              control={
                <Checkbox
                  onChange={handleSearchParams}
                  checked={filter.science}
                  name="science"
                  color="primary"
                />
              }
              label={<span style={{ fontFamily: "nunito " }}>Science</span>}
            />
            <FormControlLabel
              id="FormControlLabel"
              value="Language"
              control={
                <Checkbox
                  onChange={handleSearchParams}
                  name="language"
                  checked={filter.language}
                  color="primary"
                />
              }
              label={<span style={{ fontFamily: "nunito " }}>Language</span>}
            />
            <FormControlLabel
              id="FormControlLabel"
              value="Art"
              control={
                <Checkbox
                  onChange={handleSearchParams}
                  name="art"
                  checked={filter.art}
                  color="primary"
                />
              }
              label={<span style={{ fontFamily: "nunito " }}>Art</span>}
            />
            <FormControlLabel
              id="FormControlLabel"
              value="Music"
              control={
                <Checkbox
                  onChange={handleSearchParams}
                  name="music"
                  checked={filter.music}
                  color="primary"
                />
              }
              label={<span style={{ fontFamily: "nunito " }}>Music</span>}
            />
          </FormControl>
        </div>
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
