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
import Login from "./components/Login";
import NotFoundPage from "./components/NotFoundPage";

import "./App.css";
import reducer from "./reducer";
import { StateProvider } from "./state";

const App = () => {
  const initialState = {
    postsContent: [],
    pagesContent: [],
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Header />
        <Switch>
          <Route path={["/", "/home"]} exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/404" exact component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </StateProvider>
  );
};

export default App;
