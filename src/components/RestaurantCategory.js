import RestaurantCategoryItem from "./RestaurantCategoryItem";
import accordion from "../assets/accordion.svg";

const RestaurantCategory = ({ data, showItem, setShowItem, isVeg }) => {
  const handleClick = () => {
    setShowItem();
  };

  if (isVeg) {
    const cards = data.itemCards;
    const newArr = cards.filter((item) =>
      item.card.info.hasOwnProperty("isVeg")
    );
    data = { ...data, itemCards: newArr };
  }

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
      {showItem && (
        <RestaurantCategoryItem data={data.itemCards} isVeg={isVeg} />
      )}
    </div>
  );
};

export default RestaurantCategory;
