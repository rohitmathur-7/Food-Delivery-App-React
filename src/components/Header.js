import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [userLogin, setUserLogin] = useState("Login");
  useEffect(() => {}, [userLogin]);
  const { loggedInUser } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header flex items-center justify-between m-4 p-4">
      <Link to="/">
        <img src={LOGO_URL} className="logo w-40" />
      </Link>
      <ul className="nav-items flex flex-row gap-4">
        <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
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
        <Link to="/grocery">
          <li>Grocery</li>
        </Link>
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
        <li>{loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Header;
