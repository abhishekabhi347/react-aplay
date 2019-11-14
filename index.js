import React,{Fragment} from 'react';
import { render } from 'react-dom';
import './style.scss';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/home";
import PlayZone from "./components/playzone";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

const App = ()=>{
  return(
      <Router>
        <Fragment>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/home" component={Home}/>
            <Route  path="/playzone" component={PlayZone}/>
          </Switch>
          <Footer></Footer>
        </Fragment>
      </Router>
  )
}

render(<App />, document.getElementById('root'));
