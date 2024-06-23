import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Shimmer } from './Shimmer';

import { useOnlineStatus } from '../Hooks/useOnlineStatus';
import { useRestaurantsList } from '../Hooks/useRestaurantsList';

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [listofRestaurants, filteredRestaurant, setFilteredRestaurant] =
    useRestaurantsList();

  // console.log(restaurantList?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle ?.restaurants)

  // console.log(listofRestaurants);
  const RestaurantCardWithLabel = withPromotedLabel(RestaurantCard);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    console.log(onlineStatus);
    return <h1>You are offline please check Internet and Try Again</h1>;
  }

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='flex flex-col justify-center h-lvh'>
      <div className='mt-[15] flex flex-row justify-center'>
        <div>
          <button
            className='border bg-slate-300'
            onClick={() => {
              setFilteredRestaurant(
                listofRestaurants.filter(
                  (restaurant) => restaurant.info.avgRating > 4.1
                )
              );
            }}>
            Top Rated
          </button>
        </div>
        <div className='flex flex-row justify-center'>
          <div>
            <input
              className='border border-black rounded-md'
              type='text'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}></input>
          </div>
          <div>
            <button
              className='search-icon'
              onClick={() => {
                const filteredRestaurant = listofRestaurants.filter(
                  (restaurant) =>
                    restaurant?.info?.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
              }}>
              se
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap'>
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={'/restaurants/' + restaurant.info.id}
            key={restaurant.info.id}>
            {restaurant.info.isOpen === true ? (
              <RestaurantCardWithLabel resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
