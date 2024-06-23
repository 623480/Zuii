import React from "react";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

export const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - Rs{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 pl-4 pr-4 pt-2 pb-5">
            <button
              className="text-white bg-black"
              onClick={() => handleAddItem(item)}
            >
              add
            </button>
            <button
              className="text-white bg-black"
              onClick={() => handleRemoveItem(item)}
            >
              remove
            </button>
            {item.card.info.imageId === undefined ? (
              <div className="w-full rounded-md bg-slate-50"></div>
            ) : (
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full rounded-md"
                alt={item.card.info.id}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
