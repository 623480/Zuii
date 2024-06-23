
import { useState, useEffect } from 'react';
import { MENU_API_URL } from '../utils/constant';

export const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuResponse = await fetch(MENU_API_URL + resId);
    const json = await menuResponse.json();
    // console.log(json?.data);
    setRestaurantInfo(json?.data);
  };
  return restaurantInfo;
};
