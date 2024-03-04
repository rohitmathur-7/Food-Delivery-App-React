import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import RestaurantCategoryItem from "./RestaurantCategoryItem";
import { clearCart } from "../utils/cartSlice";
import { useEffect, useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center w-[700px] mx-auto mt-10">
      <h1 className="text-3xl border-b-2 py-4">Cart</h1>
      <button
        onClick={handleClearCart}
        className="bg-black text-white px-[12px] py-[10px] rounded-lg mt-4 "
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h2 className="text-xl py-4">Cart is empty! Please add some items.</h2>
      )}
      <div>
        <RestaurantCategoryItem data={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
