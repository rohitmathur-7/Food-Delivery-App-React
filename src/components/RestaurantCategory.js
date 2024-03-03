import RestaurantCategoryItem from "./RestaurantCategoryItem";
import accordion from "../assets/accordion.svg";

const RestaurantCategory = ({ data, showItem, setShowItem }) => {
  const handleClick = () => {
    setShowItem();
  };

  return (
    <div className="p-4 pb-[28px] mt-3 border-b-4 border-gray-300 cursor-pointer">
      <div className="flex justify-between items-center " onClick={handleClick}>
        <h1 className="font-bold">
          {data.title}({data.itemCards.length})
        </h1>
        <span>
          <img src={accordion} />
        </span>
      </div>
      {showItem && <RestaurantCategoryItem data={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
