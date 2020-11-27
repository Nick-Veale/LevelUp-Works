import React from 'react';
import './Offer.css';
import proj1 from '../../../../img/proj1.png'
import proj2 from '../../../../img/proj2.png'
import proj3 from '../../../../img/proj3.png'
import proj4 from '../../../../img/proj4.png'
import animation from '../../../../img/animation.png'
import augmentedReality from '../../../../img/augmentedReality.png'
import chatBots from '../../../../img/chatBots.png'
import games from '../../../../img/games.png'

class Offer extends React.Component{

    state = {
        counter: 0,
        image: [proj1,proj2,proj3,proj4]
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

    dotHandle = (id) => {
        this.setState({
            counter: id
        })
    }

    render() {

        return(
            <div className="whatWeOffer">
                <div className="leftOfferDiv">
                    <div className="wwoText">
                        <h2 className="wwoh2">What we offer</h2>
                        <p>
                            The Creative Problem Solving programme is series of digital creation projects 
                            aimed to encourage self-motivation and student agency, designed by New Zealand’s 
                            leading IT industry experts and schools.
                        </p>
                    </div>
                    <br/>
                    <div className="wwoImageButtons">
                        <h2 className="wwoh2">What will students create?</h2>
                        <div className="imageButtonContainer">
                            <button className="imageButton" onClick={() => this.dotHandle(0)}>
                                <img src={animation} alt="" /><div>Animation</div>
                            </button>
                            <button className="imageButton" onClick={() => this.dotHandle(1)}>
                                <img src={games} alt="" /><div>Games</div>
                            </button>
                            <button className="imageButton" onClick={() => this.dotHandle(2)}>
                                <img src={chatBots} alt="" /><div>ChatBots</div>
                            </button>
                            <button className="imageButton" onClick={() => this.dotHandle(3)}>
                                <img src={augmentedReality} alt="" /><div>AR</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="wwoSlider">
                    <div className="wwoImageSlider">
                        <div className="arrow leftArrow" onClick={this.imageMinus} />
                        <img className="laptopImage" onClick={this.imagePlus} src={this.state.image[this.state.counter]} alt="" />
                        <div className="arrow rightArrow" onClick={this.imagePlus} />
                    </div>
                    <div className="wwoSliderButtons">
                        <div 
                            onClick={() => this.dotHandle(0)} 
                            style={{backgroundColor: (this.state.counter === 0) ? "grey" : "white"}} 
                            className="smallCircle" 
                        />
                        <div 
                            onClick={() => this.dotHandle(1)} 
                            style={{backgroundColor: (this.state.counter === 1) ? "grey" : "white"}} 
                            className="smallCircle" 
                        />
                        <div 
                            onClick={() => this.dotHandle(2)} 
                            style={{backgroundColor: (this.state.counter === 2) ? "grey" : "white"}} 
                            className="smallCircle" 
                        />
                        <div 
                            onClick={() => this.dotHandle(3)} 
                            style={{backgroundColor: (this.state.counter === 3) ? "grey" : "white"}} 
                            className="smallCircle" 
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Offer;