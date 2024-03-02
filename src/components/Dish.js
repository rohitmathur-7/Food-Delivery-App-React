import useDishes from "../utils/useDishes";
import { RES_CARD_IMG } from "../utils/constants";

const Dish = () => {
  const dishes = useDishes();

  return (
    <div className="flex overflow-x-scroll no-scrollbar w-[1000px] cursor-pointer border-b-2 mb-10 ">
      {dishes.map((item) => (
        <div className="min-w-[200px]" key={item.action.text}>
          <img src={RES_CARD_IMG + item.imageId} />
        </div>
      ))}
    </div>
  );
};

export default Dish;
