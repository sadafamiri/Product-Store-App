import { useSelector, useDispatch } from "react-redux";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const { t } = useContext(LanguageContext);

  const { items, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart,
  );

  return (
    <div style={styles.container}>
      {/* Title */}
      <h1 style={styles.title}>{t("cart")}</h1>

      <p style={styles.info}>
        {t("totalItems")}: {totalQuantity}
      </p>

      <p style={styles.info}>
        {t("totalPrice")}: ${totalPrice.toFixed(2)}
      </p>

      {/* Clear */}
      <button style={styles.clearBtn} onClick={() => dispatch(clearCart())}>
        {t("clearCart")}
      </button>

      {items.length === 0 ? (
        <p style={styles.empty}>{t("emptyCart")}</p>
      ) : (
        <div style={styles.list}>
          {items.map((item) => (
            <div key={item.id} style={styles.card}>
              <img src={item.image} alt={item.title} style={styles.image} />

              <div style={styles.content}>
                <h3 style={styles.productTitle}>{item.title}</h3>

                <p>
                  {t("price")}: ${item.price}
                </p>

                <p>
                  {t("qty")}: {item.quantity}
                </p>

                <div style={styles.buttons}>
                  <button
                    style={styles.plus}
                    onClick={() => dispatch(increaseQty(item.id))}
                  >
                    +
                  </button>

                  <button
                    style={styles.minus}
                    onClick={() => dispatch(decreaseQty(item.id))}
                  >
                    -
                  </button>

                  <button
                    style={styles.remove}
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    {t("remove")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "sans-serif",
  },

  title: {
    fontSize: "28px",
    marginBottom: "10px",
  },

  info: {
    fontSize: "16px",
    margin: "5px 0",
  },

  clearBtn: {
    background: "#dc2626",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    margin: "15px 0",
  },

  empty: {
    marginTop: "20px",
    fontSize: "18px",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  card: {
    display: "flex",
    gap: "15px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "12px",
    alignItems: "center",
  },

  image: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  },

  content: {
    flex: 1,
  },

  productTitle: {
    fontSize: "16px",
    marginBottom: "5px",
  },

  buttons: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },

  plus: {
    background: "#16a34a",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  minus: {
    background: "#f59e0b",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  remove: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Cart;
