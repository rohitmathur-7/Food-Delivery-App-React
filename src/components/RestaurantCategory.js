import RestaurantCategoryItem from "./RestaurantCategoryItem";

const RestaurantCategory = ({ data, showItem, setShowItem }) => {
  const handleClick = () => {
    setShowItem();
  };

  return (
    <div
      className="p-4 border-b border-solid border-gray-300 w-6/12 mx-auto cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex justify-between ">
        <h1>
          {data.title}({data.itemCards.length})
        </h1>
        <span>⬇️</span>
      </div>
      {showItem && <RestaurantCategoryItem data={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
