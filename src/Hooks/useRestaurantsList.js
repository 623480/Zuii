import { useState, useEffect } from 'react';
import { API_URL } from '../utils/constant';

export const useRestaurantsList = () => {
  const [listofRestaurants, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchRestuarants();
  }, []);

  const fetchRestuarants = async () => {
    const response = await fetch(API_URL);
    const responseData = await response.json();

    setFilteredRestaurant(
      responseData?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setListofRestaurant(
      responseData?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return [listofRestaurants,filteredRestaurant, setFilteredRestaurant];
};
