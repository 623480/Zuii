import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-auto p-4 w-6/12 min-h-lvh">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button onClick={handleClearCart}>clearcart</button>
      <ItemList items={cartItems} />
    </div>
  );
};

export default Cart;
