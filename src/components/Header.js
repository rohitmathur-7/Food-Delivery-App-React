import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  console.log("Header");
  const [userLogin, setUserLogin] = useState("Login");
  useEffect(() => {
    console.log("useEffect called");
  }, [userLogin]);

  return (
    <div className="header">
      <img src={LOGO_URL} className="logo" />
      <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
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
