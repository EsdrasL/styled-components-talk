import React from "react";
import styled from "styled-components";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";

import Header from "../components/Header";
import PreviewContainer from "../components/PreviewContainer";
import PreviewContent from "../components/PreviewContent";

const code = `
const Button = styled.button\`
  background: \${props => props.primary ? "#448AFF" : "#FFF"};
  color: \${props => props.primary ? "#FFF" : "#448AFF"};

  width: 200px;
  font-size: 1.5rem;
  padding: 12px;
  border: 2px solid #448AFF;
  border-radius: 5px;
  margin: 10px auto;
\`;

const CustomButton = styled(Button).attrs({
  primary: true
})\`
  width: 250px;
\`;

render(
  <PreviewContainer>
    <Header>Acesso as props</Header>
    <PreviewContent>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <CustomButton>Custom</CustomButton>
    </PreviewContent>
  </PreviewContainer>
);`;

const Slide3 = () => {
  return (
    <div className="slide slide-row slide-3">
      <LiveProvider
        code={code}
        scope={{ styled, Header, PreviewContainer, PreviewContent }}
        noInline
      >
        <LivePreview className="code-preview" />
        <div className="code-editor-container">
          <LiveEditor className="code-editor" />
        </div>
      </LiveProvider>
    </div>
  );
};

export default Slide3;
