import { useContext } from "react";
import { RES_CARD_IMG } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, sla, cuisines, cloudinaryImageId } = resData;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="res-card w-48 my-5">
      <img className="card-img" src={RES_CARD_IMG + cloudinaryImageId} />
      <h3 className="font-bold">{name}</h3>
      <h5>{avgRating}</h5>
      <h5>{sla.slaString}</h5>
      <h5>{cuisines.join(",")}</h5>
      <h5>{loggedInUser}</h5>
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
