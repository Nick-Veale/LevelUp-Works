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
            imgUrl: "",
            name: "Introduction",
            level: "Beginner",
            type: "Animation",
            id: 0
        },
        {
            imgUrl: "",
            name: "My Birthday",
            level: "Beginner",
            type: "Animation",
            id: 1
        },
        {
            imgUrl: "",
            name: "10 Block Challenge",
            level: "Beginner",
            type: "Animation",
            id: 2
        }
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
                        <FormLabel>Subscription</FormLabel>                            
                        <RadioGroup name="subscription" value={subscription} onChange={handleSub}>
                            <FormControlLabel value="Free" control={<Radio color="primary"/>} label="Free" />
                            <FormControlLabel value="Premium" control={<Radio color="primary"/>} label="Premium" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Activity Type</FormLabel>                            
                        <RadioGroup name="activity" value={activity} onChange={handleAct}>
                            <FormControlLabel value="Animation" control={<Radio color="primary"/>} label="Animation" />
                            <FormControlLabel value="Game" control={<Radio color="primary"/>} label="Game" />
                            <FormControlLabel value="Chatbot" control={<Radio color="primary"/>} label="Chatbot" />
                            <FormControlLabel value="Augmented Reality" control={<Radio color="primary"/>} label="Augmented Reality" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Year Level</FormLabel>                            
                        <RadioGroup name="yearLevel" value={yearLevel} onChange={handleYear}>
                            <FormControlLabel value="1-4" control={<Radio color="primary"/>} label="1-4" />
                            <FormControlLabel value="5-6" control={<Radio color="primary"/>} label="5-6" />
                            <FormControlLabel value="7-8" control={<Radio color="primary"/>} label="7-8" />
                            <FormControlLabel value="9-13" control={<Radio color="primary"/>} label="9-13" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Subject Matter</FormLabel>                            
                        <RadioGroup name="subscription" value={subject} onChange={handleSubject}>
                            <FormControlLabel value="Computer Science" control={<Radio color="primary"/>} label="Computer Science" />
                            <FormControlLabel value="Maths" control={<Radio color="primary"/>} label="Maths" />
                            <FormControlLabel value="Science" control={<Radio color="primary"/>} label="Science" />
                            <FormControlLabel value="Language" control={<Radio color="primary"/>} label="Language" />
                            <FormControlLabel value="Art" control={<Radio color="primary"/>} label="Art" />
                            <FormControlLabel value="Music" control={<Radio color="primary"/>} label="Music" />
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
            <Link to="/students/projectbuilder">
                <img src="" alt="" className="projectItemImage"/>
            </Link>
            <div className="projectItemText">
                <h3 className="projectItemHeading">{props.content.name}</h3>
                <h5 className="projectItemHeading">{props.content.level} | {props.content.type}</h5>
            </div>
        </div>
    )
};
