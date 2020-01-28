import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import Slide0 from "./slides/0";
import Slide1 from "./slides/1";

import { ReactComponent as Logo } from "./assets/mobills.svg";
import "./App.css";

const history = createBrowserHistory();

const slides = [
  { path: "/0", component: Slide0 },
  { path: "/1", component: Slide1 }
];

function App() {
  const handleKeyDown = event => {
    const current = +window.location.pathname.substr(1);

    if (event.key === "ArrowRight") {
      history.push(slides[current + 1]?.path);
    } else if (event.key === "ArrowLeft") {
      history.push(slides[current - 1]?.path);
    }
  };

  return (
    <div className="container" tabIndex="0" onKeyDown={handleKeyDown}>
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
