import ZUIII_LOGO from "../assets/ZUIII_LOGO.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../Hooks/useOnlineStatus";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.totalItems);
  const [btnName, setbtnName] = useState("Login");
  const Status = useOnlineStatus();
  return (
    <div className="flex justify-between shadow-xl">
      <div className="ml-16">
        <img className="w-24 rounded-full" src={ZUIII_LOGO} alt="Logo" />
      </div>

      <div className="mr-16 py-8">
        <div className="flex flex-col sm:flex sm:flex-row">
          <div className="mx-4 text-base font-medium">
            <p>Status{Status ? "🟢" : "🔴"}</p>
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
              <button
                className="mx-4 text-base font-medium hover:text-blue-500"
                // onClick={() => {
                //   btnName === "Login"
                //     ? setbtnName("Logout")
                //     : setbtnName("Login");
                // }}
              >
                {btnName}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
