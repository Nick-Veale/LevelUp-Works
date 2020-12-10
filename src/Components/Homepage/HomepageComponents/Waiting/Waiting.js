import teacherPicture from "../../../../img/teacherPicture.png";
import React, { useState } from "react";
import "./Waiting.css";
import NavModal from "../../../Nav/NavModal";

export default function Waiting() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="waitingMainDiv">
      <div className="waitingLeftDiv">
        <img className="waitingLeftDivImage" src={teacherPicture} alt="" />
      </div>
      <div className="waitingRightDiv">
        <div className="waitingTextDiv">
          <h2>What are you waiting for?</h2>
          <h3>Start teaching Digital Technologies today.</h3>
          <p>
            If you need more information, we are happy to answer any questions
            you may have.
          </p>
        </div>
        <div className="waitingButtonDiv">
          <button className="waitingEnquireButton">ENQUIRE NOW</button>
          <button onClick={() => handleOpen()} className="waitingSignUpButton">
            SIGN UP
          </button>
          <NavModal open={open} handleClose={handleClose} />
        </div>
      </div>
    </div>
  );
}
