import { useDispatch, useSelector } from "react-redux";

import { CartItems } from "./CartItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);

  //converting items into array.

  console.log(cart);
  const cartItems = Object.values(cart);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-auto p-4 w-6/12 min-h-lvh">
      <h1 className="text-2xl font-bold mt-8 mb-4">Cart</h1>
      <button
        onClick={handleClearCart}
        className={`bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mb-4 ${
          cartItems.length === 0 ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        isDisabled={cartItems === 0}
      >
        clear cart
      </button>
      {cartItems.length !== 0 ? (
        <CartItems cartItems={cartItems} />
      ) : (
        <h1 className="my-2">Your Cart is Empty !</h1>
      )}
    </div>
  );
};

export default Cart;
