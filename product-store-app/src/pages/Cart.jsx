import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const { items, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart
  );

  return (
    <div>
      <h1>Cart</h1>

      <h3>Total Items: {totalQuantity}</h3>
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>

      <button onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>

      {items.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>${item.price}</p>
          <p>Qty: {item.quantity}</p>

          <button onClick={() => dispatch(increaseQty(item.id))}>
            +
          </button>

          <button onClick={() => dispatch(decreaseQty(item.id))}>
            -
          </button>

          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;