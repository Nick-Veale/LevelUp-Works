import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../userContext";
import "./Projects.css";
import { Link, Redirect } from "react-router-dom";
import Footer from "../Homepage/HomepageComponents/Footer/Footer";
import { Link as ScrollLink } from "react-scroll";
import Axios from "axios";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { filterButtonArray } from "./ProjectsFilterButtons";

export default function Projects() {
  const [profileData, setProfileData] = useState([1, 2, 3]);
  const [q, setQ] = useState([]);
  const [complexity, setComplexity] = useState("Beginner");
  const [complexityArray] = useState(["Beginner", "Intermediate", "Advanced"]);
  const [numberShownArray] = useState([25, 50, 100]);
  const [numberShown, setNumberShown] = useState(25);
  const [filterHeadings] = useState([
    "Subscription",
    "Activity Type",
    "Year Level",
    "Subject Matter",
  ]);
  const [queryHeadings] = useState([
    "Subscription",
    "ActivityType",
    "SubjectMatter1",
    "SubjectMatter2",
    "SubjectMatter3",
  ]);
  const [filterButtons] = useState(filterButtonArray);

  useEffect(() => {
    Axios.get("http://localhost:3030/fetchallprojects").then((res) => {
      console.log(res);
      setProfileData(res.data);
    });
  }, []);

  const search = profileData.filter((item) =>
    q.some((query) =>
      queryHeadings.some(
        (heading) => item[heading].toLowerCase() === query.toLowerCase()
      )
    )
  );

  console.log(search);

  const alteredSearch = () => {
    if (search.length === 0) {
      return profileData;
    } else {
      return search;
    }
  };

  const finalSearch = alteredSearch();

  const projectList = finalSearch.map((item) => (
    <ProjectItem content={item} number={numberShown} />
  ));

  const handleSetNumber = (num) => {
    setNumberShown(num);
  };

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
    console.log(q);
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
  const handleComp = (event) => {
    setComplexity(event);
  };
  const complexityRadioButtonClassName = (num) => {
    if (num === complexity) {
      return "complexityRadioButton";
    } else {
      return "complexityRadioButtonGrey";
    }
  };

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
  const numberRadioButtonClassName = (num) => {
    if (num === numberShown) {
      return "numberRadioButton";
    } else {
      return "numberRadioButtonGrey";
    }
  };

  const complexityButtons = complexityArray.map((value) => (
    <Button
      id={complexityRadioButtonClassName(value)}
      variant={complexityVariant(value)}
      color={complexityColor(value)}
      onClick={() => handleComp(value)}
    >
      {value}
    </Button>
  ));

  const numberShownButtons = numberShownArray.map((value) => (
    <Button
      id={numberRadioButtonClassName(value)}
      variant={showVariant(value)}
      onClick={() => handleSetNumber(value)}
      color={showColor(value)}
    >
      {value}
    </Button>
  ));

  const filteredFilterButtons = (heading) =>
    filterButtons.map((item) => {
      if (item.formLabel === heading) {
        return (
          <FormControlLabel
            id="FormControlLabel"
            value={item.checkbox}
            control={
              <Checkbox
                onChange={(e) => handleSetQ(e)}
                checked={q.includes(item.checkbox)}
                name={item.checkbox}
                value={item.checkbox}
                color="primary"
              />
            }
            label={
              <span style={{ fontFamily: "nunito" }}>{item.checkbox}</span>
            }
          />
        );
      } else {
        return null;
      }
    });

  const filterControlsUI = filterHeadings.map((item) => (
    <FormControl>
      <FormLabel id="FormLabel">{item}</FormLabel>
      {filteredFilterButtons(item)}
    </FormControl>
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
        <div>
          <div className="projFilterControlsTop">
            <ButtonGroup size="small">{complexityButtons}</ButtonGroup>
            <ButtonGroup size="small">
              <div style={{ marginRight: "20px" }}>SHOW</div>
              {numberShownButtons}
            </ButtonGroup>
          </div>
          <div className="projFilterControls">{filterControlsUI}</div>
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
        <img src={props.content.ThumbNail} alt="" className={itemImageStyles} />
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
