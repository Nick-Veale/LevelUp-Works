import React from "react";
import "./ProgTrack.css";
import { progTrackerArray } from "./ProgArr.js";

function ProgTrack() {
  const [progTrackerInfo, setProgTrackerInfo] = React.useState(
    progTrackerArray
  );

  const handleCompleted = (item, array) => {
    const newArray = progTrackerInfo.map((progTracker) => {
      const returnThing = progTracker.data.map((prevItem) => {
        if (
          prevItem.number === item.number &&
          progTracker.name === array.name
        ) {
          return {
            number: prevItem.number,
            complete: !prevItem.complete,
          };
        } else {
          return prevItem;
        }
      });

      const realReturnThing = {
        name: progTracker.name,
        data: returnThing,
      };

      return realReturnThing;
    });
    console.log(newArray);
    setProgTrackerInfo(newArray);
  };
  //changes button colour when clicked
  const handleBackgroundStyle = (item) => {
    if (item.complete) {
      return { backgroundColor: "#99E4A3" };
    } else {
      return { backgroundColor: "white" };
    }
  };
  // Creates buttons
  const buttonArray = (array) =>
    array.data.map((item) => {
      return (
        <button
          style={handleBackgroundStyle(item)}
          onClick={() => handleCompleted(item, array)}
          key={item.number}
        >
          {item.number}
        </button>
      );
    });

  const renderProgressTables = progTrackerInfo.map((array) => {
    let cum = array.data.filter((item) => item.complete);
    return (
      <div className="trackBox">
        <div className="PTleftDiv">
          <h1>{array.name}</h1>
          <p>{cum.length}/15 Projects Completed</p>
        </div>
        <div className="PTrightDiv">{buttonArray(array)}</div>
      </div>
    );
  });

  return (
    <div>
      <div className="teacherContentDiv">
        <div className="teachDashContainer">
          <h1>BEGINNER COURSE</h1>
          {renderProgressTables}
        </div>
      </div>
    </div>
  );
}

export default ProgTrack;
