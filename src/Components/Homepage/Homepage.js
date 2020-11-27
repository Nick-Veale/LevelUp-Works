import React, { useContext } from 'react';
import SignUp from './HomepageComponents/SignUp/SignUp';
import Offer from './HomepageComponents/Offer/Offer';
import Skills from './HomepageComponents/Skills/Skills';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../userContext';
import KeyComp from "./HomepageComponents/KeyComp/KeyComp";

export default function Homepage() {

    const { user, setUser } = useContext(UserContext)

    if (!user) {
        return ( 
            <div>
                <SignUp />
                <Offer />
                <Skills />  
                <KeyComp />
            </div>
         );
    } else {
        return (
            <Redirect to="/profile" />
        );
    };
};