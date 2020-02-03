import React from "react";
import styled from "styled-components";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";

import Header from "../components/Header";
import PreviewContainer from "../components/PreviewContainer";

const code = `const Paragraph = styled.p\`
  font-size: 1.5rem;
  
  &:first-of-type {
    margin-top: auto;
  }

  &:last-child {
    margin-bottom: auto;
  }

  & + & {
    font-style: italic;
    font-size: 1.25rem;
  }

  a {
    color: #448AFF;
  }

  @media(min-width: 1200px) {
    font-size: 2.5rem;
  }
\`;

render(
  <PreviewContainer>
    <Header>Não apenas CSS</Header>
    <Paragraph>
      Além de todas as features do CSS, os 
      styled-components suportam uma sintaxe scss-like.
    </Paragraph>
    <Paragraph>
      A sintaxe suportada é a do preprocessador usado, o 
      <a
        href="https://github.com/thysultan/stylis.js"
        target="_blank"
      >
        stylis
      </a>.
    </Paragraph>
  </PreviewContainer>
);`;

const Slide5 = () => {
  return (
    <div className="slide slide-row slide-5">
      <LiveProvider
        code={code}
        scope={{
          styled,
          Header,
          PreviewContainer
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

export default Slide5;
