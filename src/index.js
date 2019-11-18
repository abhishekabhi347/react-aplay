import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import PlayZone from "./components/playzone";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Notes from "./components/notes";
import * as serviceWorker from "./serviceWorker";

const App = () => {
  return (
    <Router>
      <Fragment>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/playzone" component={PlayZone} />
          <Route path="/notes" component={Notes} />
        </Switch>
        <Footer></Footer>
      </Fragment>
    </Router>
  );
};

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}
serviceWorker.register();
