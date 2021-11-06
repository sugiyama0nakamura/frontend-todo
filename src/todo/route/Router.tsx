import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../../App";
import List from "../basic/List"
import Sample from "../sample/Sample";

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/list" component={List} />
        <Route path="/Sample" component={Sample}/>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;