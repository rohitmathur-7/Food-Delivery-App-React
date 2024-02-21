const RestaurantCategory = ({ data }) => {
  console.log("🚀 ~ RestaurantCategory ~ data:", data);

  return (
    <>
      <div className="p-4 border-b border-solid border-gray-300 w-6/12 mx-auto cursor-pointer">
        <div className="flex justify-between ">
          <h1>
            {data.title}({data.itemCards.length})
          </h1>
          <span>⬇️</span>
        </div>
      </div>
    </>
  );
};

export default RestaurantCategory;
