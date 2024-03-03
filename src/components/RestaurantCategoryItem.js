import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { RES_CARD_IMG } from "../utils/constants";

const RestaurantCategoryItem = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex justify-between items-center my-8 ${
            index !== data.length - 1 ? "border-b-2  pb-[2.8rem]" : ""
          }`}
        >
          <div>
            <h2 className="text-left font-semibold ">{item.card.info.name}</h2>
            <h4 className="text-left font-light ">
              ₹{item.card.info.price / 100}
            </h4>
            <h4 className="text-left font-light ">{item.card.info.category}</h4>
          </div>
          <div className="relative">
            <img
              src={RES_CARD_IMG + item.card.info.imageId}
              className="w-[200px] h-[150px] object-cover rounded-lg "
            />
            <button
              className="bg-black text-white px-[12px] py-[10px] rounded-lg absolute -bottom-4 left-[70px] "
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantCategoryItem;
