import React from "react";
import s from "./Profile.module.css";

const ProfileLeft = () => {
  return (
    <div className={s.profile_left}>
      <div className={s.crop}>
        <img alt="Avatar" src="https://i.ibb.co/tY7rKzC/QZ6A5608.jpg"></img>
      </div>
      <div>описание под аватаром</div>
    </div>
  );
};

export default ProfileLeft;
