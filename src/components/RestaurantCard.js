import { RES_CARD_IMG } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData, search } = props;
  const { name, avgRating, sla, cuisines, cloudinaryImageId } = resData;

  return (
    <div className="res-card w-48 my-5">
      <img className="card-img" src={RES_CARD_IMG + cloudinaryImageId} />
      <h3 className="font-bold">{name}</h3>
      <h5>{avgRating}</h5>
      <h5>{sla.slaString}</h5>
      <h5>{cuisines.join(",")}</h5>
    </div>
  );
};

export const withRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <h1 className="font-bold">Top Rated</h1>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
