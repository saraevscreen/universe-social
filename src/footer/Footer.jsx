import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div>
        <p>&copy; Saraevscreen, 2021</p>
      </div>
      <div>
        <a
          href="https://github.com/saraevscreen"
          target="_blank"
          alt="GitHub Profile"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Footer;
