import React from "react";
import * as FaIcons from 'react-icons/fa';
import { ContextProvider } from "../context/ContextProvider";
const Navbar = () => {
  const { register, user, loader, logout } = React.useContext(ContextProvider);
  const userRegister = () => {
    register();
  };
  const userLogout = () => {
    logout();
  };
  const checkUser = () => {
    return !loader ? (
      user ? (
        <div className="navbar__links">
          <li>
            <span className="navbar__img">
              <img src={user.photoURL} alt="user" />
            </span>
          </li>
          <li>
            <button className="navbar__btn" onClick={userLogout}>
              Logout
            </button>
          </li>{" "}
        </div>
      ) : (
        <div className="navbar__links">
          <li>
            <button className="navbar__btn" onClick={userRegister}>
              Register with Google
            </button>
          </li>
        </div>
      )
    ) : (
      "..."
    );
  };
  return (
    <div className="navbar">
      <div className="navbar__container">
        <FaIcons.FaFacebookMessenger />
        <div className="navbar__logo">Messenger</div>
        {checkUser()}
      </div>
    </div>
  );
};

export default Navbar;
