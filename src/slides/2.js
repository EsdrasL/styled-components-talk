import React from "react";

import Header from "../components/Header";
import exampleImg from "../assets/tagged-template-literals.png";

const Slide2 = () => {
  return (
    <div className="slide slide-column slide-2">
      <Header>Tagged Template Literals</Header>

      <div>
        <img src={exampleImg} alt="tagged-template-literals" />
      </div>
    </div>
  );
};

export default Slide2;
