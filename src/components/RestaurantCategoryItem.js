import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { RES_CARD_IMG } from "../utils/constants";

const RestaurantCategoryItem = ({ data }) => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log("🚀 ~ RestaurantCategoryItem ~ cartItems:", cartItems);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    if (item.quantity) {
      const newItem = { ...item, quantity: item.quantity + 1 };
      dispatch(addItem(newItem));
    } else {
      const newItem = { ...item, quantity: 1 };
      dispatch(addItem(newItem));
    }
  };

  const isQuantityGreater = (item) => {
    const idx = cartItems.findIndex((element) => {
      return element.card.info.id === item.card.info.id;
    });

    if (idx === -1) return -1;

    return cartItems[idx].quantity;
  };

  return (
    <div>
      {data.map((item, index) => {
        // console.log("🚀 ~ {data.map ~ item:", item);
        const itemQuantity = isQuantityGreater(item);

        return (
          <div
            key={index}
            className={`flex justify-between items-center my-8 ${
              index !== data.length - 1 ? "border-b-2  pb-[2.8rem]" : ""
            }`}
          >
            <div>
              <h2 className="text-left font-semibold ">
                {item?.card?.info?.name}
              </h2>
              <h4 className="text-left font-light ">
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </h4>
              <h4 className="text-left font-light ">
                {item?.card?.info?.category}
              </h4>
            </div>
            <div className="relative">
              <img
                src={RES_CARD_IMG + item?.card?.info?.imageId}
                className="w-[200px] h-[150px] object-cover rounded-lg "
              />
              {itemQuantity > 0 ? (
                <div>
                  <button
                    className="bg-black text-white px-[12px] py-[10px] rounded-lg absolute -bottom-4 left-[130px] "
                    onClick={() => handleAddItem(item)}
                  >
                    +
                  </button>
                  <span className="bg-black text-white py-[13px] px-[15px] absolute -bottom-4 left-[86px] text-[12px] w-[50px] max-w-[50px] ">
                    {itemQuantity}
                  </span>
                  <button
                    className="bg-black text-white px-[12px] py-[10px] rounded-lg absolute -bottom-4 left-[60px] "
                    onClick={() => handleAddItem(item)}
                  >
                    -
                  </button>
                </div>
              ) : (
                <button
                  className="bg-black text-white px-[12px] py-[10px] rounded-lg absolute -bottom-4 left-[70px] "
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantCategoryItem;
