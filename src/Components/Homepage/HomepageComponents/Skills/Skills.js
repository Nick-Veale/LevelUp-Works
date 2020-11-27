import React from 'react';
import './Skills.css';
import lilAtom from '../../../../img/lilAtom.png';
import ideaCloud from '../../../../img/ideaCloud.png';
import collabHands from '../../../../img/collabHands.png';
import brainBulb from '../../../../img/brainBulb.png';


class Skills extends React.Component {
    render() {
        return(
            <div>
                <br/>
                <br/>
                <br/>
                <div className="skillsHeadingDiv">
                    <h2 className="skillsHeadingDiv">Teaching kids programming and digital skills is <i className="skillsHeadingItalics">MORE</i> than just writing code.</h2>
                </div>
                <div className="pictureBoxContainer">
                    <div className="pictureBox pb1">
                        <img className="pbImage" src={ideaCloud} alt="" />
                        <div className="pbText">Creativity and Individuality</div>
                    </div>
                    <div className="pictureBox pb2">
                        <img className="pbImage" src={brainBulb} alt="" />
                        <div className="pbText">Critical Thinking and Problem Soliving</div>
                    </div>
                    <div className="pictureBox pb3">
                        <img className="pbImage" src={collabHands} alt="" />
                        <div className="pbText">Communication and Collaboration</div>
                    </div>
                    <div className="pictureBox pb4">
                        <img className="pbImage" src={lilAtom} alt="" />
                        <div className="pbText">Technology and Future Focus</div>
                    </div>
                </div>
                <div className="skillsFooterDiv">
                    <h2 className="skillsFooterDiv">How our programme helps teacher and schools</h2>
                </div>
            </div>
        )
    }
};

export default Skills;