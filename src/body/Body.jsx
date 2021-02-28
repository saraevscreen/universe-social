import React from "react";
import { Route } from "react-router-dom";
import s from "./Body.module.css";

const Body = () => {
  return (
        <div className={s.body}>
          <Route exact path="/">
            <div>News</div>
          </Route>
          <Route path="/profile">
            <div>Profile</div>
          </Route>
          <Route path="/messages">
            <div>Messages</div>
          </Route>
          <Route path="/music">
            <div>Music</div>
          </Route>
        </div>
  );
};

export default Body;
