import React from "react";

import Header from "../components/Header";
import PreviewContainer from "../components/PreviewContainer";
import PreviewContent from "../components/PreviewContent";

const Slide8 = () => {
  return (
    <div className="slide slide-column slide-8">
      <PreviewContainer>
        <Header>Obrigado pela atenção!</Header>
        <PreviewContent>
          <h3>Links:</h3>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://styled-components.com/docs/"
                rel="noopener noreferrer"
              >
                styled-components docs
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://mxstbr.blog/2016/11/styled-components-magic-explained/"
                rel="noopener noreferrer"
              >
                styled-components magic explained
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://medium.com/building-crowdriff/styled-components-to-use-or-not-to-use-a6bb4a7ffc21"
                rel="noopener noreferrer"
              >
                styled-components to use or not to use
              </a>
            </li>
          </ul>
        </PreviewContent>
      </PreviewContainer>
    </div>
  );
};

export default Slide8;
