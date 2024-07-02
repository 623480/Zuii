import ZUIII_LOGO from "../assets/ZUIII_LOGO.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../Hooks/useOnlineStatus";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.totalItems);
  const [btnName, setBtnName] = useState("Login");
  const [dropdown, setDropdown] = useState(false); // Initialize dropdown state correctly

  const handleDropDown = () => {
    setDropdown(!dropdown); // Toggle dropdown state
  };

  const Status = useOnlineStatus();

  return (
    <div className="md:w-auto flex justify-between shadow-md md:shadow-xl">
      <div className="my-auto ml-10 md:ml-16">
        <img className="w-24 rounded-full" src={ZUIII_LOGO} alt="Logo" />
      </div>

      {/* Dropdown menu */}
      <div
        className={`flex pr-2 absolute sm:bg-white top-[86px]  rounded-md left-[260px] bg-gray-300 sm:static sm:mr-16 sm:py-8 ${
          dropdown ? "block" : "hidden"
        } md:block`}
      >
        <div className="flex flex-col sm:flex sm:flex-row">
          <div className="mx-4 text-base font-medium">
            <p>Status {Status ? "🟢" : "🔴"}</p>
          </div>
          <div className="mx-4 text-base font-medium hover:text-blue-500">
            <Link to="/">Home</Link>
          </div>
          <div className="mx-4 text-base font-medium hover:text-blue-500">
            <Link to="/about">About</Link>
          </div>
          <div className="">
            <Link to="/cart" className="flex w-6/12 m-auto sm:flex sm:mx-4">
              <TiShoppingCart size={26} className="hover:text-blue-500" />
              <p className="text-base font-medium">{cartItems}</p>
            </Link>
          </div>
          <div className="mx-4 text-base font-medium hover:text-blue-500">
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <Link to="/login">
              <button className="mx-4 text-base font-medium hover:text-blue-500">
                {btnName}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="m-auto pl-28 sm:hidden">
        {dropdown ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
            onClick={handleDropDown}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer"
            onClick={handleDropDown}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Header;
