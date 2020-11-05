import React, { Component } from 'react';
import './Projects.css';



class Projects extends Component {
    state = {  }
    render() { 
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
                    <div className="projFilterControlsTop"></div>
                    <div className="projFilterControls"></div>
                    <div className="projContent"></div>
                </main>
            </div>
          );
    }
}


 
export default Projects;
