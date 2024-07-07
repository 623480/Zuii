import React, { useState } from "react";

import { useParams } from "react-router-dom";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";
import { useRestaurantMenu } from "../Hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
// import { useCheckRestaurantMenuData } from "../Hooks/useCheckRestaurantMenuData";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const restaurantInfo = useRestaurantMenu(resId);
  const CheckRestaurantMenuData = (restaurantInfo) => {
    for (let i = 0; i < restaurantInfo.cards.length; i++) {
      let checkData =
        restaurantInfo?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      if (checkData !== undefined) {
        return checkData;
      }
    }
  };

  if (restaurantInfo === null) return <RestaurantMenuShimmer />;

  const cards = CheckRestaurantMenuData(restaurantInfo);
  const categories = cards.filter(
    (category) =>
      category.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="text-center min-h-lvh my-4">
      <div className="w-6/12 mx-auto my-8 py-2">
        <h1 className="text-lg font-bold">
          {restaurantInfo?.cards[2]?.card?.card?.info?.name}
        </h1>
      </div>
      <div>
        {categories.map((category, index) => (
          <RestaurantCategory
            category={category}
            key={category?.card?.card?.title}
            showItems={index === showIndex}
            setShowIndex={() => {
              setShowIndex(index === showIndex ? null : index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
