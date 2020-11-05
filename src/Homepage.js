import React from 'react';
import SignUp from './Components/SignUp';
import Offer from './Components/Offer';
import Skills from './Components/Skills';

class Homepage extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <SignUp />
                <Offer />
                <Skills />  
            </div>
         );
    }
}
 
export default Homepage;