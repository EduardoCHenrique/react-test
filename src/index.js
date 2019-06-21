import React from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import ReactDOM from "react-dom";
import Header from 'src/components/organisms/Header';
import Home from 'src/components/pages/Home';
import Repos from 'src/components/pages/Repos';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/repos"} component={Home}/>
        </Switch>
        <Route path="/repos/:id" component={Repos}/>
      </div>
    </Router>
  )
};

ReactDOM.render(<App />, document.querySelector("#root"));


