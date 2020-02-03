import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";

import Header from "../components/Header";
import PreviewContainer from "../components/PreviewContainer";

import { ReactComponent as CoolIcon } from "../assets/cool-outline.svg";

const code = `const blueTheme = {
  primary: "#448aff",
  fontSize: "2.5rem"
}
const redTheme = {
  primary: "#ff5252",
  fontSize: "5rem"
}

const Text = styled.p\`
  font-size: \${props => props.theme.fontSize};
  text-align: center;
\`;

const ThemedIcon = styled(CoolIcon)\`
  width: 100px;
  height: 100px;
  fill: \${props => props.theme.primary};
  margin: 0 auto;
\`;

render(
  <ThemeProvider theme={blueTheme}>
    <PreviewContainer>
      <Header>Temas?</Header>
      <Text>Sim!</Text>
      <ThemedIcon />
    </PreviewContainer>
  </ThemeProvider>
);`;

const Slide6 = () => {
  return (
    <div className="slide slide-row slide-6">
      <LiveProvider
        code={code}
        scope={{
          styled,
          Header,
          PreviewContainer,
          ThemeProvider,
          CoolIcon
        }}
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

export default Slide6;
