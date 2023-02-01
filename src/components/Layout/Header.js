import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Button from "react-bootstrap/Button";

const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <div>
      <div className="font-sans flex justify-end gap-3 pr-14">
        <Link to="/"> Home</Link>
        <span> | </span>
        <Link to="/main"> Main </Link>
        <span> | </span>
        {user ? (
          <p onClick={logoutUser}>Logout</p>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
      {user && <p>Hello {user.username}</p>}
    </div>
  );
};

export default Header;
