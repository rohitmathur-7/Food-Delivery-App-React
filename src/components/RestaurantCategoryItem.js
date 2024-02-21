const RestaurantCategoryItem = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div>
          <span>{item.card.info.name}</span>;
        </div>
      ))}
    </div>
  );
};

export default RestaurantCategoryItem;
