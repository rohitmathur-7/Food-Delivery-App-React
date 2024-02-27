import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import RestaurantCategoryItem from "./RestaurantCategoryItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1>Cart</h1>
      <button onClick={handleClearCart}>Clear Cart</button>
      {cartItems.length === 0 && <h1>Cart is empty! Please add some items.</h1>}
      <div>
        <RestaurantCategoryItem data={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
