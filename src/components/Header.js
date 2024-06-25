import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import burger from "../assets/hamburger.png";
import { shopping } from "../assets/shopping.png";
import { instagram } from "../assets/instagram.png";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  let totalItems = 0;
  cartItems.map((item) => {
    totalItems += item.quantity;
  });

  const handleMobileMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, []);

  return (
    <nav className="header flex items-center justify-center mb-4 tb:mb-0 py-4 shadow-md font-montserrat w-full">
      <div className="flex w-11/12 justify-between">
        <Link to="/">
          <div className="text-2xl lg:text-4xl">
            🍔 <span className="logo">FoodMania</span>
          </div>
        </Link>
        <ul
          className={`mobileMenu text-base flex ${
            showNav || isNavOpen
              ? "visible right-0 px-20"
              : "invisible -right-1/3 px-0"
          } sm:flex-row sm:gap-8 sm:items-center md:text-base lg:text-xl font-medium`}
        >
          <li className="hidden sm:block">
            Online Status: {onlineStatus ? "✅" : "❌"}
          </li>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Me!</li>
          </Link>
          <Link to="/cart">
            {window.innerWidth > 768 ? (
              <li>🛒Cart - ({totalItems}) Items</li>
            ) : (
              <li>Cart - ({totalItems}) Items</li>
            )}
          </Link>
          <a
            className="smx:block hidden text-xl md:text-base absolute top-8 right-8 cursor-pointer"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            X
          </a>
        </ul>
        {!showNav && (
          <Link onClick={handleMobileMenu}>
            <img src={burger} width={30} height={30} />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
