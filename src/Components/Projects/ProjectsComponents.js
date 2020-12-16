import React, { useState, useContext } from "react";
import { FilterContext } from "../../userContext";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export const ProjectsUI = (props) => {
  const { filter, setFilter } = useContext(FilterContext);
  const [complexity, setComplexity] = useState("Beginner");

  //Filter Functions
  const handleComp = (event) => {
    setComplexity(event);
  };

  const handleSearchParams = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.checked });
    console.log(filter);
  };

  const showVariant = (string) => {
    if (string === props.numberShown) {
      return "contained";
    } else {
      return null;
    }
  };
  const showColor = (string) => {
    if (string === props.numberShown) {
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
    if (num === props.numberShown) {
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

  return (
    <div>
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
            onClick={() => props.handleSetNumber(25)}
            color={showColor(25)}
          >
            25
          </Button>
          <Button
            id={numberRadioButtonClassName(50)}
            variant={showVariant(50)}
            onClick={() => props.handleSetNumber(50)}
            color={showColor(50)}
          >
            50
          </Button>
          <Button
            id={numberRadioButtonClassName(100)}
            variant={showVariant(100)}
            onClick={() => props.handleSetNumber(100)}
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
    </div>
  );
};
