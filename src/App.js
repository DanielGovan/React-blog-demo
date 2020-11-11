import React from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import AboutPage from "./components/AboutPage";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import LogIn from "./components/LogIn";
import NotFoundPage from "./components/NotFoundPage";

import "./App.css";
import reducer from "./state/reducer";
import { StateProvider } from "./state/stateManager";

const App = () => {
  const initialState = {
    postsContent: [],
    pagesContent: [],
    userInfo: {},
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Header />
        <Switch>
          <Route path={["/", "/home"]} exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/login" exact component={LogIn} />
          <Route path="/404" exact component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </StateProvider>
  );
};

export default App;
