import React from "react";
import { Link } from 'react-router-dom';

export const ProfileData = () => {
  const getCookie = (name) => {
    let cookie = " " + document.cookie;
    let search = " " + name + "=";
    let setStr = null;
    let offset = 0;
    let end = 0;
    if (cookie.length > 0) {
      offset = cookie.indexOf(search);
      if (offset !== -1) {
        offset += search.length;
        end = cookie.indexOf(";", offset);
        if (end === -1) {
          end = cookie.length;
        }
        setStr = unescape(cookie.substring(offset, end));
      }
    }
    return setStr;
  };
  let email = getCookie("email");
  if (email) {
    if (getCookie("email").length >= 10) {
      if (document.documentElement.clientWidth <= 991) {
        email = getCookie("email").substring(0, 10) + "...";
      }
      if (
        document.documentElement.clientWidth >= 991 &&
        document.documentElement.clientWidth <= 1550
      ) {
        email = getCookie("email").substring(0, 15) + "...";
      }
    }
  }
  return (
    <div className="header-profile-data">
      <div className="header-profile-data-image-box">
        <img src="" className="header-profile-data-image" alt="" />
      </div>
      <div className="header-profile-data-email-box">
        <Link className="header-profile-data-email">{email}</Link>
      </div>
    </div>
  );
};
