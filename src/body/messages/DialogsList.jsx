import React from "react";
import s from "./Messages.module.css";
import { NavLink } from "react-router-dom";




const DialogsList = (props) => {
  let DialogsUsers = props.DialogUsers.map((D_users) => (
    <div className={s.item}>
      <NavLink to={"/messages/" + D_users.id}>{D_users.name}</NavLink>
    </div>
  ));
  return (
    <div>
      <div className={s.list}>{DialogsUsers}</div>
    </div>
  );
};

export default DialogsList;
