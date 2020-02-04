import React, { useRef } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createHashHistory } from "history";

import slides from "./slides";

import { ReactComponent as Logo } from "./assets/mobills.svg";
import "./App.css";

const history = createHashHistory();

function App() {
  const containerRef = useRef();

  const handleKeyDown = event => {
    if (containerRef.current !== document.activeElement) return;

    const current = +window.location.hash.substr(-1);
    if (event.key === "ArrowRight") {
      history.push(slides[current + 1]?.path);
    } else if (event.key === "ArrowLeft") {
      history.push(slides[current - 1]?.path);
    }
  };

  return (
    <div
      className="container"
      tabIndex="0"
      ref={containerRef}
      onKeyDown={handleKeyDown}
    >
      <Router history={history}>
        <Switch>
          {slides.map(slide => (
            <Route
              key={slide.path}
              exact
              path={slide.path}
              component={slide.component}
            />
          ))}

          <Redirect to="/0" />
        </Switch>
      </Router>

      <Logo className="logo" />
    </div>
  );
}

export default App;
