import React from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Forget from "./Forget";
import Blank from "./Blank";
import Charts from "./Charts";
import Error from "./Error";
import Manufactures from "./Manufactures";
import Test from "./Test";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="outer">
            <div className="inner">
              <Switch>
                <Route exact path="/" component={Test} />
                <Route path="/Login" component={Login} />
                <Route path="/Register" component={Register} />
                <Route path="/Forget" component={Forget} />
                <Route path="/Blank" component={Blank} />
                <Route path="/Error" component={Error} />
                <Route path="/Dashboard" component={Dashboard} />
                <Route path="/Manufactures" component={Manufactures} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
