import React from "react";

import Header from "../components/Header";
import styledLogo from "../assets/styled.png";

const Slide0 = () => {
  return (
    <div className="slide slide-column slide-0">
      <Header>CSS de forma simples, rápida e reutilizável com</Header>
      <img src={styledLogo} alt="styled-components" />
    </div>
  );
};

export default Slide0;
