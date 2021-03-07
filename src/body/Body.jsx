import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Profile from "./profile/Profile";
import s from "./Body.module.css";
import Messages from "./messages/Messages";

const Body = (props) => {

  return (
    <div className={s.body}>
      <div className={s.body_left}>
        <Navbar/>
      </div>
      {/* Ниже погружаем страницу на выбор пользователя */}
      <div className={s.body_right}>
        <Route exact path="/">
          <div>News</div>
        </Route>
        <Route path="/profile" render={()=> <Profile />}/>
        <Route path="/messages" render={()=><Messages DialogUsers={props.DialogUsers} messages={props.messages}/>}/>
        <Route path="/music">
          <div>Music</div>
        </Route>
      </div>
    </div>
  );
};

export default Body;
