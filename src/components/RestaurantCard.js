import { RES_CARD_IMG } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData, search } = props;
  const { name, avgRating, sla, cuisines, cloudinaryImageId } = resData;

  if (name.toLowerCase().includes(search.toLowerCase())) {
    return (
      <div className="res-card">
        <img className="card-img" src={RES_CARD_IMG + cloudinaryImageId} />
        <h3>{name}</h3>
        <h5>{avgRating}</h5>
        <h5>{sla.slaString}</h5>
        <h5>{cuisines.join(",")}</h5>
      </div>
    );
  } else {
    return;
  }
};

export default RestaurantCard;
