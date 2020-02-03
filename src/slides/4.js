import React from "react";
import styled from "styled-components";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";
import { NavLink } from "react-router-dom";

import PreviewContainer from "../components/PreviewContainer";

import slides from "./index";

const code = `const Link = styled(NavLink)\`
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
  margin: auto;

  &.active {
    color: #448AFF;
    font-style: italic;
  }

  &:hover {
    color: #448AFF;
  }
\`;

render(
  <PreviewContainer>
    <ul>
      {slides.map(slide => (
        <li key={slide.path}>
          <Link to={slide.path}>{slide.name}</Link>
        </li>
      ))}
    </ul>
    <Link to="/5">Próximo ></Link>
  </PreviewContainer>
);`;

const Slide4 = () => {
  return (
    <div className="slide slide-row slide-4">
      <LiveProvider
        code={code}
        scope={{
          styled,
          slides: slides.slice(0, 5),
          NavLink,
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

export default Slide4;
