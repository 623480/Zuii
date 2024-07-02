import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Shimmer } from "./Shimmer";

import { useOnlineStatus } from "../Hooks/useOnlineStatus";
import { useRestaurantsList } from "../Hooks/useRestaurantsList";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listofRestaurants, filteredRestaurant, setFilteredRestaurant] =
    useRestaurantsList();

  console.log(listofRestaurants);

  // console.log(listofRestaurants);
  const RestaurantCardWithLabel = withPromotedLabel(RestaurantCard);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    console.log(onlineStatus);
    return <h1>You are offline please check Internet and Try Again</h1>;
  }

  return listofRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="sm:mx-6 sm:w-auto flex flex-col py-6 min-h-lvh ">
      <div className="flex flex-row justify-center">
        <input
          className="border-2 px-3  border-gray-300 rounded-md"
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>

        <button
          className="text-white bg-blue-400 rounded-md mx-2 px-2 border-blue-700 text-base font-medium py-1"
          onClick={() => {
            const filteredRestaurant = listofRestaurants.filter((restaurant) =>
              restaurant?.info?.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="mx-10 sm:mx-auto md:mx-30 md:my-10 lg:w-auto xl:m-auto flex flex-wrap">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
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
