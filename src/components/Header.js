import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [userLogin, setUserLogin] = useState("Login");
  useEffect(() => {}, [userLogin]);
  const { loggedInUser } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header flex items-center justify-around my-4 p-4 shadow-md font-montserrat ">
      <Link to="/">
        <div className="text-4xl">
          🍔 <span className="logo">FoodMania</span>
        </div>
      </Link>
      <ul className="nav-items flex flex-row gap-8 text-xl ">
        {/* <li>Online Status: {onlineStatus ? "✅" : "❌"}</li> */}
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About Us</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us</li>
        </Link>
        <Link to="/cart">
          <li>🛒Cart - ({cartItems.length}) Items</li>
        </Link>
        {/* <Link to="/grocery">
          <li>Grocery</li>
        </Link> */}
        {/* <button
          className="user-login"
          onClick={() => {
            userLogin === "Login"
              ? setUserLogin("Logout")
              : setUserLogin("Login");
          }}
        >
          {userLogin}
        </button>
        <li>{loggedInUser}</li> */}
      </ul>
    </div>
  );
};

export default Header;
