const RestaurantCategoryItem = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.card.info.name}>
          <span>{item.card.info.name}</span>;
        </div>
      ))}
    </div>
  );
};

export default RestaurantCategoryItem;
