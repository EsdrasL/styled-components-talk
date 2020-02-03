import React from "react";
import styled from "styled-components";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";

const code = `const Container = styled.div\`
  display: flex;
  flex-direction: column;
  height: 100%;
\`;

const Header = styled.h1\`
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.8);
\`;

const Text = styled.h2\`
  font-size: 2.5rem;
  color: #448AFF;
  margin: auto 0;
  text-align: \${props => props.align};

  &:hover {
    color: #2962FF;
  }
\`;

render(
  <Container>
    <Header>O que é?</Header>
    <Text align="center">
      Primitivas visuais para a era dos componentes.
    </Text>
  </Container>
);`;

const Slide1 = () => {
  return (
    <div className="slide slide-row slide-1">
      <LiveProvider code={code} scope={{ styled }} noInline>
        <LivePreview className="code-preview" />
        <div className="code-editor-container">
          <LiveEditor className="code-editor" />
        </div>
      </LiveProvider>
    </div>
  );
};

export default Slide1;
