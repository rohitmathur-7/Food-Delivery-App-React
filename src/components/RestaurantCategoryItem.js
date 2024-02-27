import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantCategoryItem = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.card.info.name} className="flex justify-between m-4">
          <h2>{item.card.info.name}</h2>
          <button
            className="bg-black text-white p-4"
            onClick={() => handleAddItem(item)}
          >
            Add+
          </button>
        </div>
      ))}
    </div>
  );
};

export default RestaurantCategoryItem;
