import React, { Component } from "react";
import firebase from 'firebase/app';
import 'firebase/database';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "../react-auth0-spa";
import history from "../history";
import Feed from "./Feed";
import Jumbotron from "./Jumbotron";
import Navigation from "./Navigation";
import Contact from './Contact';
import About from './About';
import Loading from "./Loading";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumbotronTitle: "Products catalogue",
      feeds: [],
    };
  }
  
  async componentDidMount() {
    const url = "https://hplussport.com/api/products/order/price/sort/asc/qty/8";
    const resp = await axios.get(url);
    return this.setState({ feeds: resp.data })
  }
  render() {
    const { jumbotronTitle, feeds } = this.state;
    return (
      <Router history={history}>
        <div className="container">
          <Navigation></Navigation>
          <Jumbotron title={jumbotronTitle}></Jumbotron>
          <Switch>
            {/* <Route
                exact
                path="/"
                render={(props) => <Feed feeds={feeds}></Feed>}
              ></Route> */}
            <Route
              exact
              path="/"
            >
              <Feed feeds={feeds}></Feed>
            </Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>


          <div className="footer">
            <p>&copy; demi.y.zhao@gmail.com</p>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
