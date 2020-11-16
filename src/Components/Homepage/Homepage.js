import React from 'react';
import SignUp from './HomepageComponents/SignUp/SignUp';
import Offer from './HomepageComponents/Offer/Offer';
import Skills from './HomepageComponents/Skills/Skills';

export default function Homepage() {

        return ( 
            <div>
                <SignUp />
                <Offer />
                <Skills />  
            </div>
         );

};