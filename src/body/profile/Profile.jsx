import React from "react";
import s from "./Profile.module.css";
import ProfileLeft from "./Profile_left";
import ProfileRight from "./Profile_right";

const Profile = () => {
  return (
    <div className={s.profile}>
      <ProfileLeft />
      <ProfileRight />
    </div>
  );
};

export default Profile;
