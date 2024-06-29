import { useDispatch, useSelector } from "react-redux";

import { CartItems } from "./CartItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);

  //converting items into array.

  console.log(cart)
  const cartItems = Object.values(cart);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-auto p-4 w-6/12 min-h-lvh">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button onClick={handleClearCart}>clearcart</button>
      <CartItems cartItems={cartItems} />
    </div>
  );
};

export default Cart;
