import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "../utils/constant";

export const useRestaurantsList = () => {
  const [listofRestaurants, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchRestuarants();
  }, []);

  const fetchRestuarants = async () => {
    const response = await fetch(SWIGGY_API_URL);

    const responseData = await response.json();
    function checkJsonData(responseData) {
      for (let i = 0; i < responseData?.data?.cards.length; i++) {
        // initialize checkData for Swiggy Restaurant data
        let checkData =
          responseData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    // call the checkJsonData() function which return Swiggy Restaurant data
    const resData = checkJsonData(responseData);
    setFilteredRestaurant(resData);
    setListofRestaurant(resData);
  };
  return [listofRestaurants, filteredRestaurant, setFilteredRestaurant];
  // return listofRestaurants
};
