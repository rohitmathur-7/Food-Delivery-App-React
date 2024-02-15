import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [userLogin, setUserLogin] = useState("Login");
  return (
    <div className="header">
      <img src={LOGO_URL} className="logo" />
      <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
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
    </div>
  );
};

export default Header;
