import React from "react";
import s from "./Messages.module.css";




const Dialog = (props) => {

  let Msg = props.message.map((m) => (
    <div className={s.item}>{m.message}</div>
  ));
  return <div className={s.dialog}>{Msg}</div>;
};

export default Dialog;
