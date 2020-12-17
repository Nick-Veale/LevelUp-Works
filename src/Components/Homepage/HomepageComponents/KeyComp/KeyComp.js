import React from "react";
import "./KeyComp.css";

function KeyComp() {
  const [pageNumber, setPageNumber] = React.useState(2);

  const handleClick = (num) => {
    setPageNumber(num);
  };

  const handleClassName = (num) => {
    if (pageNumber === num) {
      return "skillsButtonGrey";
    } else {
      return "skillsButtons";
    }
  };

  return (
    <div>
      <div className="skillsButtonContainer">
        <button className={handleClassName(0)} onClick={() => handleClick(0)}>
          LEARNING PATHWAYS
        </button>
        <button className={handleClassName(1)} onClick={() => handleClick(1)}>
          DIGITAL TECHNOLOGIES
        </button>
        <button className={handleClassName(2)} onClick={() => handleClick(2)}>
          KEY COMPETENCIES
        </button>
        <button className={handleClassName(3)} onClick={() => handleClick(3)}>
          IR4.0
        </button>
      </div>
      <br />
      <div className="KCcontainer">
        <div className="KCtextBox">
          <Title pageNumber={pageNumber} />
          <DisplayWindow pageNumber={pageNumber} />
        </div>
      </div>
    </div>
  );
}

const Title = (props) => {
  if (props.pageNumber === 0) {
    return (
      <div className="KCtitle">
        <h2>Project-Based Learning Programme</h2>
        <h4>
          LevelUp Works is an Auckland-based enterprise providing an authentic,
          project-based learning programme as a turn-key solution for teachers
          and students to advance their skills in Digital Technologies and other
          learning areas, in response to the New Zealand Digital Technologies &
          Hangarau Matihiko.
        </h4>
      </div>
    );
  } else if (props.pageNumber === 1) {
    return (
      <div className="KCtitle">
        <h2>Creative Problem Solving</h2>
        <h4>
          Co-designed by IT industry experts and schools in New Zealand, the
          Creative Problem Solving programme is designed as a series of
          Scratch-based digital creation projects and unplugged activities,
          aimed to encourage self-motivation and student agency, and achieve
          both Progress Outcomes of the Digital Technologies Curriculum,
          including:
        </h4>
      </div>
    );
  } else if (props.pageNumber === 2) {
    return (
      <div className="KCtitle">
        <h2>Enhance key competencies</h2>
        <h4>
          The programme enhances capabilities of students in the 5 Key
          Competencies identified in the New Zealand Curriculum:
        </h4>
      </div>
    );
  } else if (props.pageNumber === 3) {
    return (
      <div className="KCtitle">
        <h2>Future-Proof Students for a Career in IR4.0</h2>
        <h4>
          Designed with IT industry experts, the programme develops the
          cognitive and social competencies students will find applicable to
          jobs and careers in the Fourth Industrial Revolution (IR4). Below are
          some of these competencies:
        </h4>
      </div>
    );
  }
};

const DisplayWindow = (props) => {
  if (props.pageNumber === 0) {
    return (
      <div>
        <ul className="KClist">
          <li className="KCstar">
            <div className="KCkey">
              <p className="KCkeyTitle">For Teachers, and Students</p>
              <p className="KCkeyPara">
                Not only is the learning experience a streamlined way for
                children to experience digital exposure, but it also allows
                teachers to assist in a fluid and interactive way.
              </p>
            </div>
          </li>
        </ul>
        <ul className="KClist">
          <li className="KCstar">
            <div className="KCkey">
              <p className="KCkeyTitle">Milestone Achievement</p>
              <p className="KCkeyPara">
                All of the projects that the children complete are based on real
                world examples, meaning they are learning useful skills that
                translate into real job opportunities.
              </p>
            </div>
          </li>
        </ul>
      </div>
    );
  } else if (props.pageNumber === 1) {
    return (
      <section>
        <ul className="KClist">
          <li className="KCstar">
            <div className="KCkey">
              <p className="KCkeyPara">
                Computational thinking for digital technologies.
              </p>
            </div>
          </li>
        </ul>
        <ul className="KClist">
          <li className="KCstar">
            <div className="KCkey">
              <p className="KCkeyPara">
                Designing and developing digital outcomes.
              </p>
            </div>
          </li>
        </ul>
      </section>
    );
  } else if (props.pageNumber === 2) {
    return (
      <section>
        <ul className="KClist">
          <li className="KCstar">
            <div className="KCkey">
              <p className="KCkeyTitle">THINKING</p>
              <p className="KCkeyPara">
                In particular the programme focused on problem solving, design
                thinking and computational thinking.
              </p>
            </div>
          </li>
        </ul>
        <ul className="KClist">
          <li className="KCstar">
            <div className="KCkey">
              <p className="KCkeyTitle">DISCERNING CODES</p>
              <p className="KCkeyPara">
                Analysing language, symbols, and texts in order to understand
                and make sense of the codes in which knowledge is expressed.
              </p>
            </div>
          </li>
        </ul>
        <ul className="KClist">
          <li className="KCstar">
            <div className="KCkey">
              <p className="KCkeyTitle">SELF-MANAGEMENT</p>
              <p className="KCkeyPara">
                Projects and challenges are designed to motivate students to
                explore and experiment with self-motivation
              </p>
            </div>
          </li>
        </ul>
        <ul className="KClist">
          <li className="KCstar">
            <div className="KCkey">
              <p className="KCkeyTitle">RELATIONSHIPS WITH PEERS</p>
              <p className="KCkeyPara">
                The programme is designed with unplugged sessions where students
                interact in a range of different situations, including things
                like being able to listen well, recognise different points of
                view, and share ideas.
              </p>
            </div>
          </li>
        </ul>
        <ul className="KClist">
          <li className="KCstar">
            <div className="KCkey">
              <p className="KCkeyTitle">PARTICIPATION AND COLLABORATION</p>
              <p className="KCkeyPara">
                The programme encourages students to be involved in communities,
                such as family, whānau, school, and contribute and make
                connections with other people
              </p>
            </div>
          </li>
        </ul>
      </section>
    );
  } else if (props.pageNumber === 3) {
    return (
      <section>
        <ul className="KClist">
          <li className="KCstar">
            <div className="KCkey">
              <p className="KCkeyTitle">CREATIVITY</p>
              <p className="KCkeyPara">
                Provide students with a range of outlets for exercising their
                creativity.
              </p>
            </div>
          </li>
        </ul>
        <ul className="KClist">
          <li className="KCstar">
            <div className="KCkey">
              <p className="KCkeyTitle">
                CRITICAL THINKING & PROBLEM SOLVING SKILLS
              </p>
              <p className="KCkeyPara">
                Students are exposed to the necessary digital entities to give
                them the skills necessary to actively problem solve in a growing
                digital world.
              </p>
            </div>
          </li>
        </ul>
        <ul className="KClist">
          <li className="KCstar">
            <div className="KCkey">
              <p className="KCkeyTitle">COMMUNICATION & COLLABORATION SKILLS</p>
              <p className="KCkeyPara">
                Daily exposure to a highly collaborative environment creates a
                natural ability to communicate and work together.
              </p>
            </div>
          </li>
        </ul>
        <ul className="KClist">
          <li className="KCstar">
            <div className="KCkey">
              <p className="KCkeyTitle">TECHNOLOGY SKILLS</p>
              <p className="KCkeyPara">
                The tech sector is the fastest growing industry on the planet
                and shows no sign of stopping. Gearing up children with the
                necessary skills provides them with the platform they need to
                launch a lucrative career in the modern world.
              </p>
            </div>
          </li>
        </ul>
        <div className="KCtitle">
          <h4>Relevant Career Opportunities Include:</h4>
        </div>
        <ul className="KClist">
          <li className="KCstar">
            <div className="KCkey">
              <p className="KCkeyTitle">Software Developer</p>
            </div>
          </li>
        </ul>
        <ul className="KClist">
          <li className="KCstar">
            <div className="KCkey">
              <p className="KCkeyTitle">UX Designer</p>
            </div>
          </li>
        </ul>
        <ul className="KClist">
          <li className="KCstar">
            <div className="KCkey">
              <p className="KCkeyTitle">Process Automation Specialist</p>
            </div>
          </li>
        </ul>
      </section>
    );
  }
};

export default KeyComp;
