import React from "react";
import "./KeyComp.css";

function KeyComp() {
  return (
    <section className="container">
      <div className="textBox">
        <Title />
        <KeyCompetencies />
      </div>
    </section>
  );
}

const KeyCompetencies = () => (
  <section>
    <ul className="list">
      <li className="star">
        <div className="key">
          <p className="keyTitle">THINKING</p>
          <p className="keyPara">
            In particular the programme focused on prblem solving, design
            thinking and computational thinking.
          </p>
        </div>
      </li>
    </ul>
    <ul className="list">
      <li className="star">
        <div className="key">
          <p className="keyTitle">DISCERNING CODES</p>
          <p className="keyPara">
            Analysing language, symbols, and texts in order to understand and
            make sense of the codes in which knowledge is expressed.
          </p>
        </div>
      </li>
    </ul>
    <ul className="list">
      <li className="star">
        <div className="key">
          <p className="keyTitle">SELF-MANAGEMENT</p>
          <p className="keyPara">
            Projects and challenges are designed to motivate students to explore
            and experiment with self-motivation
          </p>
        </div>
      </li>
    </ul>
    <ul className="list">
      <li className="star">
        <div className="key">
          <p className="keyTitle">RELATIONSHIPS WITH PEERS</p>
          <p className="keyPara">
            The programme is designed with unplugged sessions where students
            interact in a range of different situations, including things like
            being able to listen well, recognise different points of view, and
            share ideas.
          </p>
        </div>
      </li>
    </ul>
    <ul className="list">
      <li className="star">
        <div className="key">
          <p className="keyTitle">PARTICIPATION AND COLLABORATION</p>
          <p className="keyPara">
            The programme encourages students to be involved in communities,
            such as family, whānau, school, and contribute and make connections
            with other people
          </p>
        </div>
      </li>
    </ul>
  </section>
);
const Title = () => (
  <div className="title">
    <h2>Enhance key compitencies</h2>
    <h4>
      The programme enhances capabilities of students in the 5 Key Competencies
      identified in the New Zealand Curriculum:
    </h4>
  </div>
);

export default KeyComp;
