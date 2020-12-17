import React, { useState } from "react";
import "./SignUp.css";
import background from "../../../../img/heroImage1.jpg";
import NavModal from "../../../Nav/NavModal";

export default function SignUp() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const signUpDivStyle = {
    backgroundImage: "url(" + background + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: "-1",
  };

  return (
    <div className="signUpDiv" style={signUpDivStyle}>
      <div className="prepareText">
        <h1>
          Prepare young minds for a better
          <b className="signUpDivBoldText"> future.</b>
        </h1>
        <p>
          Let us help you advance students in Digital Technologies and other
          learning areas with our project-based learning programme.
        </p>
        <div className="signUpButtons">
          <button className="learnMoreButton">LEARN MORE</button>
          <button
            onClick={() => handleOpen()}
            className="signUpButton"
            name="signUp"
          >
            SIGN UP
          </button>
          <NavModal open={open} handleClose={handleClose} />
          <div className="buttonLabel">
            <p for="signUp">
              *Basic Subscription includes the first 15 projects <b>free</b> of
              charge
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
