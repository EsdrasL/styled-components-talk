import React from "react";

import Header from "../components/Header";
import PreviewContainer from "../components/PreviewContainer";

const Slide7 = () => {
  return (
    <div className="slide slide-column slide-7">
      <PreviewContainer>
        <Header>Então, devo usar?</Header>

        <ul>
          <li>Ganho em semântica</li>
          <li>Componentes mais limpos</li>
          <li>Reutilização e extensão de componentes</li>
          <li>Facilidade em adaptar componentes de acordo com as props</li>
          <li>styled-components v5</li>
        </ul>
      </PreviewContainer>
    </div>
  );
};

export default Slide7;
