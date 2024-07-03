import { useState, useEffect } from "react";
import { MENU_API_URL } from "../utils/constant";

export const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  useEffect(() => {
    const fetchMenu = async () => {
      const menuResponse = await fetch(MENU_API_URL + resId);
      const json = await menuResponse.json();
      setRestaurantInfo(json?.data);
    };

    fetchMenu();
  }, [resId]);
  return restaurantInfo;
};
