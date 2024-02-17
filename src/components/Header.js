import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [userLogin, setUserLogin] = useState("Login");
  useEffect(() => {}, [userLogin]);

  return (
    <div className="header">
      <Link to="/">
        <img src={LOGO_URL} className="logo" />
      </Link>
      <ul className="nav-items">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About Us</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us</li>
        </Link>
        <li>Cart</li>
        <button
          className="user-login"
          onClick={() => {
            userLogin === "Login"
              ? setUserLogin("Logout")
              : setUserLogin("Login");
          }}
        >
          {userLogin}
        </button>
      </ul>
    </div>
  );
};

export default Header;
