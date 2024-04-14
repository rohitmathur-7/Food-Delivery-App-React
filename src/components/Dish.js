import React, { useRef } from "react";
import useDishes from "../utils/useDishes";
import { RES_CARD_IMG } from "../utils/constants";
import arrow from "../assets/right-arrow-removebg-preview.png";
import DishShimmer from "./DishShimmer";

const Dish = () => {
  const dishes = useDishes();
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft - 600,
        behavior: "smooth", // Smooth scrolling transition
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + 600,
        behavior: "smooth", // Smooth scrolling transition
      });
    }
  };

  return dishes.length === 0 ? (
    <DishShimmer />
  ) : (
    <div className="flex flex-col items-center">
      <div className="flex justify-between w-full">
        <h2 className="font-bold text-2xl">What's on your mind</h2>
        <div className="flex gap-3">
          <button
            onClick={scrollLeft}
            className="bg-[#E7E2E2] rounded-[100%] p-2.5 "
          >
            <img src={arrow} width={15} className="rotate-180" />
          </button>
          <button
            onClick={scrollRight}
            className="bg-[#E7E2E2] rounded-[100%] p-2.5 "
          >
            <img src={arrow} width={15} />
          </button>
        </div>
      </div>
      <div className="relative">
        <div
          className="flex overflow-x-scroll no-scrollbar w-[1000px] cursor-pointer border-b-2 mb-10 transition-all ease-in-out delay-1000"
          ref={scrollRef}
        >
          {dishes.map((item) => (
            <div className="min-w-[200px]" key={item.action.text}>
              <img src={RES_CARD_IMG + item.imageId} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dish;
