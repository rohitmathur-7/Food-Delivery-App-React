import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { withRestaurantCard } from "./RestaurantCard";
import { useLocation } from "react-router-dom";
import Shimmer from "./Shimmer";

const DishRestaurants = () => {
	const { collectionId } = useParams();
	const [restaurants, setRestaurants] = useState([]);
	const location = useLocation();
	const { dishName } = location.state || {};

	const TopRatedRestaurants = withRestaurantCard(RestaurantCard);

	useEffect(() => {
		const fetchDishRestaurants = async () => {
			try {
				const res = await fetch(
					`https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.924673&lng=75.811756&collection=${collectionId}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
				);
				const json = await res.json();
				const cards = json?.data?.cards || [];
				const restCards = cards.slice(2); // Skip first two cards
				const restList = restCards
					.map((card) => card.card?.card)
					.filter((card) => card?.info);

				setRestaurants(restList);
			} catch (err) {
				console.error("Failed to fetch restaurants for dish", err);
			}
		};

		fetchDishRestaurants();
	}, [collectionId]);

	return restaurants.length === 0 ? (
		<Shimmer />
	) : (
		<div className="pt-12 px-4 max-w-[1560px] w-full m-auto text-center">
			<h1 className="text-2xl font-bold mb-4 ">{dishName}</h1>
			<div className="res-container flex flex-wrap gap-8 gap-y-12 justify-center max-w-full pt-8">
				{restaurants.map((restaurant) => (
					<Link
						to={`/restaurant/${restaurant.info.id}`}
						key={restaurant.info.id}
						className="w-11/12 smt:w-auto"
					>
						{restaurant.info.avgRating >= 4.5 ? (
							<TopRatedRestaurants resData={restaurant.info} />
						) : (
							<RestaurantCard resData={restaurant.info} />
						)}
					</Link>
				))}
			</div>
		</div>
	);
};

export default DishRestaurants;
