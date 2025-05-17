import { useEffect, useState } from "react";
import { SWIGGY_ALL_RESTAURANTS, SWIGGY_TOP_PICKS } from "../utils/constants";

const useDishes = () => {
	const [dishes, setDishes] = useState([]);
	const [dishesData, setDishesData] = useState([]);

	useEffect(() => {
		fetchInitialDishes();
	}, []);

	const fetchInitialDishes = async () => {
		try {
			let data, json, initialDishes;

			if (window.innerWidth > 768) {
				data = await fetch(SWIGGY_ALL_RESTAURANTS);
				json = await data.json();
				initialDishes =
					json?.data?.cards?.[0]?.card?.card?.imageGridCards?.info || [];
			} else {
				data = await fetch(SWIGGY_TOP_PICKS);
				json = await data.json();
				initialDishes =
					json?.data?.success?.cards?.[1]?.gridWidget?.gridElements
						?.infoWithStyle?.restaurants || [];
			}

			setDishes(initialDishes);
			fetchCollections(initialDishes); // fetch collections based on dishes
		} catch (err) {
			console.error("Error fetching initial dishes:", err);
		}
	};

	// const extractCollectionId = (link) => {
	// 	const match = link?.match(/collection_id=(\d+)/);
	// 	return match ? match[1] : null;
	// };

	// const fetchCollections = async (dishesArray) => {
	// 	const seen = new Set();

	// 	const fetchPromises = dishesArray.map((dish) => {
	// 		const link = dish?.action?.link;
	// 		const collectionId = extractCollectionId(link);

	// 		if (collectionId && !seen.has(collectionId)) {
	// 			seen.add(collectionId);
	// 			return fetch(
	// 				`https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.924673&lng=75.811756&collection=${collectionId}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
	// 			)
	// 				.then((res) => res.json())
	// 				.then((json) => ({
	// 					collectionId,
	// 					data: json,
	// 				}))
	// 				.catch((err) => {
	// 					console.error(`Failed to fetch collection ${collectionId}`, err);
	// 					return null;
	// 				});
	// 		}

	// 		return null; // Skip duplicates or invalid links
	// 	});

	// 	const results = await Promise.all(fetchPromises);
	// 	const filteredResults = results.filter((r) => r !== null);
	// 	setDishesData(filteredResults);
	// };

	return { dishes };
};

export default useDishes;
