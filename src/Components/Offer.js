import React from 'react';
import './Offer.css';
import proj1 from '../img/proj1.png'
import proj2 from '../img/proj2.png'
import proj3 from '../img/proj3.png'
import proj4 from '../img/proj4.png'
import rightArrow from '../img/rightArrow.png'
import leftArrow from '../img/leftArrow.png'

class Offer extends React.Component{

    state = {
        counter: 0,
        image: [
            proj1,
            proj2,
            proj3,
            proj4
        ]
    }

    imagePlus = () => {
        this.setState(prevState => {
            let x = prevState.counter + 1;
            if (x === 4) {x = 0};
            return {counter: x,}
        })
    }

    imageMinus = () => {
        this.setState(prevState => {
            let y = prevState.counter - 1;
            if (y === -1) {y = 3};
            return {counter: y,}
        })
    }

    render() {
        return(
            <div className="whatWeOffer">
                <div className="leftODiv">
                    <div className="wwoText">
                        <h2>What we offer</h2>
                        <p>The Creative Problem Solving programme is series of digital creation projects 
                            aimed to encourage self-motivation and student agency, designed by New Zealand’s 
                            leading IT industry experts and schools.</p>
                    </div>
                    <div className="wwoImageButtons">
                        <h2>What will students create?</h2>
                        <button className="imageButton">Animation</button>
                        <button className="imageButton">Games</button>
                        <button className="imageButton">ChatBots</button>
                        <button className="imageButton">Augmented Reality</button>
                    </div>
                </div>
                <div className="wwoSlider">
                    <div className="imageSlider">
                        <img className="leftArrow" onClick={this.imageMinus} src={leftArrow} alt="" />
                        <img src={this.state.image[this.state.counter]} alt="" />
                        <img className="rightArrow" onClick={this.imagePlus} src={rightArrow} alt="" />
                    </div>
                    <div classname="wwoSliderButtons">
                        <img alt="" />
                        <img alt="" />
                        <img alt="" />
                        <img alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Offer;