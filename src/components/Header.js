import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <img src={LOGO_URL} className="logo" />
      <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
