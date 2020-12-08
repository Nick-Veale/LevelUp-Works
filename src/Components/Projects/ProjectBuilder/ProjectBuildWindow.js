import React from "react";
import "./ProjectBuilder.css";
import lookBlocks from "../../../img/lookBlocks.png";
import lookBlocksSmall from "../../../img/lookBlocksSmall.png";
import lookBlocksSmall2 from "../../../img/lookBlocksSmall2.png";
import controlBlocks from "../../../img/controlBlocks.png";
import controlBlocksSmall from "../../../img/controlBlocksSmall.png";
import motionBlocks from "../../../img/motionBlocks.png";
import motionBlocksSmall from "../../../img/motionBlocksSmall.png";
import scratchSignUp from "../../../img/scratchSignUp.png";
import ImageIcon from "@material-ui/icons/Image";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import screenShotExample from "../../../img/screenShotExample.png";
import teacherShow from "../../../img/teacherShow.png";
import { UserContext } from "../../../userContext";
import scratchScreenshot from "../../../img/scratchScreenshot.png";

export default function ProjectBuildWindow(props) {
  const { user, setUser } = React.useContext(UserContext);

  const handleRender = () => {
    if (props.contentId === 0) {
      return (
        <div className="projectContentDiv">
          <h2 className="projectObjectivesH2">Explore Scratch Blocks</h2>
          <p>
            Learn the basic function of some basic scratch blocks such as "say",
            "wait", "go to", and "hide".
          </p>
          <div className="projectObjectivesImageContainer">
            <div className="projectObjectivesImageDiv">
              <h4>Look Blocks</h4>
              <div className="projectObjectivesImages">
                <img src={lookBlocks} alt="" />
                <div>
                  <img src={lookBlocksSmall} alt="" />
                  <img
                    style={{ marginRight: "125px" }}
                    src={lookBlocksSmall2}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <h4>Control Blocks</h4>
              <div className="projectObjectivesImages">
                <img src={controlBlocks} alt="" />
                <img src={controlBlocksSmall} alt="" />
              </div>
            </div>
            <div>
              <h4>Motion Blocks</h4>
              <div className="projectObjectivesImages">
                <img src={motionBlocks} alt="" />
                <img src={motionBlocksSmall} alt="" />
              </div>
            </div>
          </div>
        </div>
      );
    } else if (props.contentId === 1) {
      return (
        <div className="projectContentDivInline">
          <button className="projectInstructionsButtonLeft">
            <div className="projectInstructionsButtonLeftArrow"></div>
          </button>
          <div className="projectInstructionsMainDiv">
            <br />
            <br />
            <br />
            <h2>1. Join Scratch</h2>
            <p>
              If you haven't used scratch before, you will need to join Scratch
              first.
            </p>
            <p>
              Go to the <a href="https://scratch.mit.edu">Scratch Website</a>{" "}
              and click on <b>Join Scratch</b>
            </p>
            <img src={scratchSignUp} alt="" />
            <br />
            <br />
            <p>
              Follow the instructions to join. You will need a username and a
              password that you will remember. If possible, you should also
              verify your email address so that you can Share projects later.
              Ask your teacher to help with this step if you don’t have an email
              address, or if you are not sure what to do.
            </p>
          </div>
          <button className="projectInstructionsButtonRight">
            <div className="projectInstructionsButtonRightArrow"></div>
          </button>
        </div>
      );
    } else if (props.contentId === 2) {
      let x = 80;
      return (
        <div className="projectContentDivInline">
          <iframe
            title="scratchTutorial"
            width={x * 16}
            height={x * 9}
            src="https://www.youtube.com/embed/7eh4d6sabA0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      );
    } else if (props.contentId === 3) {
      let x = 88;
      return (
        <div className="projectContentDiv">
          <br />
          <img
            src={scratchScreenshot}
            alt=""
            style={{
              width: "80vw",
            }}
          />
        </div>
      );
    } else if (props.contentId === 4) {
      if (user.isTeacher) {
        return (
          <div>
            <span className="teacherSubmissionsTextSpan">
              <h2>Project Submissions</h2>
              <div />
              <button className="teacherBuilderButton">
                Download All Files
              </button>
              <button className="teacherBuilderButton">
                Mark All as Complete
              </button>
            </span>
          </div>
        );
      } else {
        return (
          <div className="projectContentDivInline">
            <div className="projectContentDivHalf halfLeft">
              <img
                style={{ width: "600px", margin: "20px" }}
                src={screenShotExample}
                alt=""
              />
              <h2>Submit Project Photo</h2>
              <p>
                After completing your project, take a screenshot of your project
                and upload here.
              </p>
              <button className="largeButton">
                <div className="largeButtonContent">
                  <ImageIcon style={{ fontSize: "60px" }} />
                  <p>Send Photo</p>
                </div>
              </button>
            </div>
            <div className="projectContentDivHalf halfRight">
              <img
                style={{ width: "600px", margin: "20px" }}
                src={teacherShow}
                alt=""
              />
              <h2>Show your Teacher</h2>
              <p>
                If your teacher is in the same room as you, clcik the button
                below to let them know you're done.
              </p>
              <button className="largeButton">
                <div className="largeButtonContent">
                  <EmojiPeopleIcon style={{ fontSize: "60px" }} />
                  <p>Call Teacher</p>
                </div>
              </button>
            </div>
          </div>
        );
      }
    } else if (props.contentId === 5) {
      return (
        <div className="projectContentDivInline">
          <div className="bonusChallengeDiv">
            <div className="bonusChallengeDivMargin">As a Bonus</div>
            <h2 className="bonusChallengeDivMargin">
              Try this same excercise and add your twist!
            </h2>
            <h3 className="bonusChallengeDivMargin">
              For some ideas, you can add ...
            </h3>
            <ul className="bonusChallengeList">
              <li>Extra images of your own</li>
              <li>Sound to the animations</li>
              <li>Another chapter to the story!</li>
            </ul>
            <div className="bonusChallengeDivMargin">
              Use your imagination and go wild! The bigger and crazier, the
              better!
            </div>
          </div>
        </div>
      );
    } else if (props.contentId === 6) {
      return (
        <div className="projectContentDivInline">
          <div className="quizDiv">
            <h2>Test your Skills!</h2>
            <div>Answer these questions correctly to move on!</div>
            <form className="quizForm">
              <div className="quizInputCheckbox">
                <label>
                  <input type="checkbox" className="quizInputCheckbox2" />
                  Check this box if you think the answer to the question is
                  this.
                </label>
              </div>
              <div classname="quizInputCheckbox">
                <label>
                  <input type="checkbox" className="quizInputCheckbox2" />
                  Check this box if you think that 1 is greater than 2.
                </label>
              </div>
              <div className="quizInputCheckbox">
                <label>
                  <input type="checkbox" className="quizInputCheckbox2" />
                  Lol i don't know what you've been working on so i don't know
                  what to ask.
                </label>
              </div>
            </form>
          </div>
        </div>
      );
    }
  };

  return (
    <div style={{ height: "90vh" }}>
      <div className="projectBuildWindowCurlyBox">{handleRender()}</div>
    </div>
  );
}
