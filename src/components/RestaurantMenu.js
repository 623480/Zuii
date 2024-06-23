import React, { useState } from 'react';

import { useParams } from 'react-router-dom';
import { Shimmer } from './Shimmer';
import { useRestaurantMenu } from '../Hooks/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const restaurantInfo = useRestaurantMenu(resId);

  if (restaurantInfo === null) return <Shimmer />;

  const categories =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card.card['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

  return (
    <div className='text-center min-h-lvh'>
      <h1>{restaurantInfo?.cards[2]?.card?.card?.info?.name}</h1>
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
