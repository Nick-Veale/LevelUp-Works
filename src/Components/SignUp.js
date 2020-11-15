import React from 'react';
import './SignUp.css';
import background from '../img/heroImage1.jpg';

class SignUp extends React.Component {

    render() {

        const signUpDivStyle = {
            backgroundImage: "url(" + background + ")",
            backgroundSize: "120%",
            backgroundPosition: "center",
            zIndex: '-1'
        };

        return (
            <div className="signUpDiv" style={signUpDivStyle}>
                    <div className="prepareText">
                        <h1>Prepare young minds for a better <b>future.</b></h1>
                        <p>Let us help you advance students in Digital Technologies and other learning areas with our project-based learning programme.</p>
                        <div className="signUpButtons">
                            <button className="learnMoreButton">Learn More</button>
                            <button className="signUpButton" name="signUp">SIGN UP</button>
                            <div className="buttonLabel">
                            <label for="signUp"><small>*Basic Subscription includes the first 15 projects <b>free</b> of charge</small></label>
                            </div>
                        </div>
                    </div>  
            </div>
        )
    }
};

export default SignUp;