import React, { useContext } from "react";
import SignUp from "./HomepageComponents/SignUp/SignUp";
import Offer from "./HomepageComponents/Offer/Offer";
import Skills from "./HomepageComponents/Skills/Skills";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../userContext";
import Footer from "./HomepageComponents/Footer/Footer";
import KeyComp from "./HomepageComponents/KeyComp/KeyComp";
import Waiting from "./HomepageComponents/Waiting/Waiting";

export default function Homepage() {
  const { user, setUser } = useContext(UserContext);

  if (!user) {
    return (
      <div className="homepageDiv">
        <SignUp />
        <Offer />
        <Skills />
        <KeyComp />
        <Waiting />
        <Footer />
      </div>
    );
  } else {
    return <Redirect to="/profile" />;
  }
}
