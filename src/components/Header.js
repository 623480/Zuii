import ZUIII_LOGO from "../assets/ZUIII_LOGO.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../Hooks/useOnlineStatus";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [btnName, setbtnName] = useState("Login");
  const Status = useOnlineStatus();
  return (
    <div className="flex justify-between shadow-xl">
      <div className="ml-16">
        <img className="w-24 rounded-full" src={ZUIII_LOGO} alt="Logo" />
      </div>

      <div className="mr-16 py-8 ">
        <div className="flex">
          <div className="mx-4 text-base font-medium">
            <p>Status{Status ? "🟢" : "🔴"}</p>
          </div>
          <div className="mx-4 text-base font-medium hover:text-blue-500">
            <Link to="/">Home</Link>
          </div>
          <div className="mx-4 text-base font-medium hover:text-blue-500">
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/cart" className="flex mx-4">
              <TiShoppingCart size={26} color="green" />
              <p className="text-base font-medium">{cartItems.length}</p>
            </Link>
          </div>
          <div className="mx-4 text-base font-medium hover:text-blue-500">
            <Link to="/contact">Cart</Link>
          </div>
          <div>
            <button
              className="mx-4 text-base font-medium hover:text-blue-500"
              onClick={() => {
                btnName === "login"
                  ? setbtnName("Logout")
                  : setbtnName("Login");
              }}
            >
              {btnName}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// <ul className="flex justify-evenly">
// <li className="mx-2">onlineStatus:{Status ? "🟢" : "🔴"}</li>
// <li>
//   {" "}
//   <Link to="/about">About us</Link>
// </li>
// <li className="mx-2">
//   <Link to="/">Home</Link>
// </li>
// <li className="mx-2 mr-3 mt-1">
//   <Link to="/cart">
//     <TiShoppingCart size={20} color="green" />
//     {cartItems.length}
//   </Link>
// </li>
