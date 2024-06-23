import React from 'react';
import { ItemList } from './ItemList';

const RestaurantCategory = ({ category, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className='my-4 mx-auto w-6/12 bg-gray-50 shadow-lg p-4'>
      <div
        className='flex justify-between hover:cursor-pointer'
        onClick={handleClick}>
        <span className='font-bold'>
          {category?.card?.card?.title} ({category.card.card.itemCards.length})
        </span>
        <span>{showItems ? '⬆' : '⬇'}</span>
      </div>
      {showItems && <ItemList items={category.card.card.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
