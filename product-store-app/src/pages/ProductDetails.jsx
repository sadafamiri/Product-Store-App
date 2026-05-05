import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../api/productsAPI";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });

  if (isLoading) return <h2 style={{ padding: 20 }}>Loading...</h2>;
  if (error) return <h2 style={{ padding: 20 }}>Error loading product</h2>;

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* IMAGE */}
        <div style={styles.imageBox}>
          <img src={data.image} alt={data.title} style={styles.image} />
        </div>

        {/* CONTENT */}
        <div style={styles.content}>
          <h1 style={styles.title}>{data.title}</h1>

          <p style={styles.category}>Category: {data.category}</p>

          <p style={styles.desc}>{data.description}</p>

          <div style={styles.priceRow}>
            <span style={styles.price}>${data.price}</span>

            <span style={styles.rating}>
              ⭐ {data.rating?.rate || 4.5}
            </span>
          </div>

          {/* BUTTONS */}
          <div style={styles.buttons}>
            <button
              style={styles.addBtn}
              onClick={() => dispatch(addToCart(data))}
            >
              Add to Cart
            </button>

            <button
              style={styles.backBtn}
              onClick={() => window.history.back()}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    background: "var(--page-soft-bg)",
  },

  card: {
    display: "flex",
    gap: "20px",
    maxWidth: "900px",
    width: "100%",
    background: "var(--surface-color)",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  },

  imageBox: {
    flex: "0 0 220px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "var(--card-color)",
    borderRadius: "12px",
    padding: "10px",
  },

  image: {
    width: "160px",
    height: "160px",
    objectFit: "contain",
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: "20px",
    marginBottom: "10px",
  },

  category: {
    fontSize: "13px",
    color: "var(--muted-color)",
    marginBottom: "10px",
  },

  desc: {
    fontSize: "14px",
    color: "var(--text-color)",
    lineHeight: "1.5",
    marginBottom: "15px",
  },

  priceRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },

  price: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#16a34a",
  },

  rating: {
    background: "#fff7cc",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "13px",
  },

  buttons: {
    display: "flex",
    gap: "10px",
  },

  addBtn: {
    flex: 1,
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    background: "#16a34a",
    color: "#fff",
    cursor: "pointer",
  },

  backBtn: {
    padding: "10px 15px",
    border: "1px solid var(--border-color)",
    borderRadius: "8px",
    background: "var(--surface-color)",
    color: "var(--text-color)",
    cursor: "pointer",
  },

  "@media (max-width: 768px)": {
    card: {
      flexDirection: "column",
      alignItems: "center",
    },
    imageBox: {
      width: "100%",
    },
  },
};

export default ProductDetails;
