import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../../App";
import List from "../List";

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App}/>
        <Route path="/list" component={List}/>
        <Route/>
      </Switch>
    </BrowserRouter>
  );
};