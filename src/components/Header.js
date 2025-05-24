import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import burger from "../assets/hamburger.png";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";

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

	useEffect(() => {
		if (isNavOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
	}, [isNavOpen]);

	return (
		<nav className="header flex items-center justify-center mb-4 tb:mb-12 py-4 shadow-md font-montserrat w-full">
			<div className="flex w-11/12 justify-between relative">
				<Link to="/">
					<div className="text-2xl lg:text-4xl flex gap-2">
						🍔 <span className="logo">FoodMania</span>
					</div>
				</Link>
				{isNavOpen && (
					<div
						className={`fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm z-10 sm:hidden
					transition-opacity duration-300 ease-in-out
					${
						isNavOpen
							? "opacity-100 pointer-events-auto"
							: "opacity-0 pointer-events-none"
					}`}
						onClick={handleMobileMenu}
					/>
				)}

				<ul
					className={`mobileMenu text-base font-medium bg-white transition-transform duration-300 ease-in-out
    fixed top-0 right-0 h-screen w-3/4 z-10 flex flex-col transform
	${isNavOpen ? "translate-x-0 mobileMenuOpen" : "translate-x-full"}
    sm:static sm:h-auto sm:w-auto sm:translate-x-0 sm:transform-none sm:flex sm:flex-row sm:gap-8 sm:items-center md:text-base lg:text-xl`}
				>
					<Link className="flex items-center gap-1" to="/">
						<AiOutlineHome />
						<li>Home</li>
					</Link>
					<Link to="/cart">
						<li className="relative flex items-center gap-1">
							<IoCartOutline className="text-2xl" />
							{totalItems > 0 && (
								<span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
									{totalItems}
								</span>
							)}
							<span>Cart</span>
						</li>
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
