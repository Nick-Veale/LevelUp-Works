import React, { useState, useEffect } from 'react';
import './Projects.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {Link} from 'react-router-dom';
import project1 from '../../img/project1.png';
import project2 from '../../img/project2.png';
import project3 from '../../img/project3.png';
import project4 from '../../img/project4.png';
import project5 from '../../img/project5.png';
import project6 from '../../img/project6.png';
import project7 from '../../img/project7.png';
import project8 from '../../img/project8.png';
import project9 from '../../img/project9.png';
import project10 from '../../img/project10.png';
import project11 from '../../img/project11.png';
import project12 from '../../img/project12.png';
import project13 from '../../img/project13.png';
import project14 from '../../img/project14.png';
import project15 from '../../img/project15.png';

export default function Projects() {

    const [subscription, setSubscription] = useState('Free');
    const [activity, setActivity] = useState('Animation');
    const [yearLevel, setYearLevel] = useState('1-4');
    const [subject, setSubject] = useState('Computer Science');
    const [complexity, setComplexity] = useState('Beginner');
    const [callDetails, setCallDetails] = useState({
        subscription: subscription,
        activity: activity,
        yearLevel: yearLevel,
        subject: subject,
        complexity: complexity,
    });
    const [projectItemContent, setProjectItemContent] = useState([
        {
            imgUrl: project1,
            name: "Introduction",
            level: "Beginner",
            type: "Animation",
            id: 0
        },
        {
            imgUrl: project2,
            name: "My Birthday",
            level: "Beginner",
            type: "Animation",
            id: 1
        },
        {
            imgUrl: project3,
            name: "10 Block Challenge",
            level: "Beginner",
            type: "Animation",
            id: 2
        },
        {
            imgUrl: project4,
            name: "Build a Band",
            level: "Beginner",
            type: "Animation",
            id: 3
        },
        {
            imgUrl: project5,
            name: "The bear and the Monkey",
            level: "Beginner",
            type: "Animation",
            id: 4
        },
        {
            imgUrl: project6,
            name: "Debugging",
            level: "Beginner",
            type: "Animation",
            id: 5
        },
        {
            imgUrl: project7,
            name: "About Me",
            level: "Beginner",
            type: "Animation",
            id: 6
        },
        {
            imgUrl: project8,
            name: "I Am Here!",
            level: "Beginner",
            type: "Animation",
            id: 7
        },
        {
            imgUrl: project9,
            name: "Funny Faces",
            level: "Beginner",
            type: "Animation",
            id: 8
        },
        {
            imgUrl: project10,
            name: "It Tickles!",
            level: "Beginner",
            type: "Animation",
            id: 9
        },
        {
            imgUrl: project11,
            name: "Penguin in a Desert",
            level: "Beginner",
            type: "Animation",
            id: 10
        },
        {
            imgUrl: project12,
            name: "Time Travel",
            level: "Beginner",
            type: "Animation",
            id: 11
        },
        {
            imgUrl: project13,
            name: "Birthday Card",
            level: "Beginner",
            type: "Animation",
            id: 12
        },
        {
            imgUrl: project14,
            name: "The Lion and the Mouse Part 1",
            level: "Beginner",
            type: "Animation",
            id: 13
        },
        {
            imgUrl: project15,
            name: "The Lion and the Mouse Part 2",
            level: "Beginner",
            type: "Animation",
            id: 14
        },
    ])

    const handleComp = (event) => {
        setComplexity(event.target.value);
    };
    const handleSub = (event) => {
        setSubscription(event.target.value);
    };
    const handleYear = (event) => {
        setYearLevel(event.target.value);
    };
    const handleSubject = (event) => {
        setSubject(event.target.value);
    };
    const handleAct = (event) => {
        setActivity(event.target.value);
    };

    useEffect(() => {
        // this is where I would put my fetch call the either the server or the API.
        setCallDetails({
            subscription: subscription,
            activity: activity,
            yearLevel: yearLevel,
            subject: subject,
            complexity: complexity
        });
        
    }, [subscription], [activity], [yearLevel], [subject], [complexity]);

    const projectList = projectItemContent.map(item => <ProjectItem content={item} />);

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="projectsHeader">
                <h1 className="projectsH1">PROJECTS</h1>
                <h4 className="projectsH4">Welcome to the Projects Library. You can use the filters on the left to help you search for specific projects.</h4>
                <br/>
            </div>
            <main className="projMain">
                <div className="projFilterControlsTop">
                    <ButtonGroup size="small">
                        <Button onClick={handleComp}>Beginner</Button>
                        <Button onClick={handleComp}>Intermediate</Button>
                        <Button onClick={handleComp}>Advanced</Button>
                    </ButtonGroup>
                    <ButtonGroup size="small">
                        <div style={{marginRight: '20px'}}>SHOW</div>
                        <Button>25</Button>
                        <Button>50</Button>
                        <Button>100</Button>
                    </ButtonGroup>
                </div>
                <div className="projFilterControls">
                    <FormControl>
                        <FormLabel id="FormLabel">Subscription</FormLabel>                            
                        <RadioGroup name="subscription" value={subscription} onChange={handleSub}>
                            <FormControlLabel id="FormControlLabel" value="Free" control={<Radio color="primary"/>} label="Free" />
                            <FormControlLabel id="FormControlLabel" value="Premium" control={<Radio color="primary"/>} label="Premium" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel id="FormLabel">Activity Type</FormLabel> 
                        <RadioGroup name="activity" value={activity} onChange={handleAct}>
                            <FormControlLabel id="FormControlLabel" value="Animation" control={<Radio color="primary"/>} label="Animation" />
                            <FormControlLabel id="FormControlLabel" value="Game" control={<Radio color="primary"/>} label="Game" />
                            <FormControlLabel id="FormControlLabel" value="Chatbot" control={<Radio color="primary"/>} label="Chatbot" />
                            <FormControlLabel id="FormControlLabel" value="Augmented Reality" control={<Radio color="primary"/>} label="Augmented Reality" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel id="FormLabel">Year Level</FormLabel>                            
                        <RadioGroup name="yearLevel" value={yearLevel} onChange={handleYear}>
                            <FormControlLabel id="FormControlLabel" value="1-4" control={<Radio color="primary"/>} label="1-4" />
                            <FormControlLabel id="FormControlLabel" value="5-6" control={<Radio color="primary"/>} label="5-6" />
                            <FormControlLabel id="FormControlLabel" value="7-8" control={<Radio color="primary"/>} label="7-8" />
                            <FormControlLabel id="FormControlLabel" value="9-13" control={<Radio color="primary"/>} label="9-13" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel id="FormLabel">Subject Matter</FormLabel>                            
                        <RadioGroup name="subscription" value={subject} onChange={handleSubject}>
                            <FormControlLabel id="FormControlLabel" value="Computer Science" control={<Radio color="primary"/>} label="Computer Science" />
                            <FormControlLabel id="FormControlLabel" value="Maths" control={<Radio color="primary"/>} label="Maths" />
                            <FormControlLabel id="FormControlLabel" value="Science" control={<Radio color="primary"/>} label="Science" />
                            <FormControlLabel id="FormControlLabel" value="Language" control={<Radio color="primary"/>} label="Language" />
                            <FormControlLabel id="FormControlLabel" value="Art" control={<Radio color="primary"/>} label="Art" />
                            <FormControlLabel id="FormControlLabel" value="Music" control={<Radio color="primary"/>} label="Music" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="projContent">
                    {projectList}
                </div>
            </main>
        </div>
        );
};

const ProjectItem = (props) => {
    return(
        <div className="projectItemDiv">
            <Link to="/projectbuilder">
                <img src={props.content.imgUrl} alt="" className="projectItemImage"/>
            </Link>
            <div className="projectItemText">
                <h3 className="projectItemHeading">{props.content.name}</h3>
                <h5 className="projectItemHeading2">{props.content.level} | {props.content.type}</h5>
            </div>
        </div>
    )
};
