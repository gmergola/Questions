import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import Question from "./Question";

function Routes() {

  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/questions/:question_main">
          <Question />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );

}

export default Routes;