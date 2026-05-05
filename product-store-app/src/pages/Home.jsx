import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getProducts } from "../api/productsAPI";
import { addToCart } from "../features/cart/cartSlice";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");

  const dispatch = useDispatch();

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <h2>Loading products...</h2>;
  if (error) return <h2>Something went wrong!</h2>;

  const categories = ["all", ...new Set(data?.map((p) => p.category))];

  let filtered = data
    ?.filter((p) => (category === "all" ? true : p.category === category))
    .filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );

  if (sort === "low") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  }
  if (sort === "high") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  return (
    <div style={styles.container}>
      <h1>🛍 Products</h1>

      {/* SEARCH + SORT */}
      <div style={styles.topBar}>
        <div style={styles.searchBox}>
          <FaSearch style={styles.icon} />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.input}
          />
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          style={styles.select}
        >
          <option value="default">Sort</option>
          <option value="low">Low Price</option>
          <option value="high">High Price</option>
        </select>
      </div>

      {/* CATEGORY */}
      <div style={styles.categoryBox}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              padding: "6px 10px",
              marginRight: "8px",
              border: "1px solid #ccc",
              background: category === cat ? "#333" : "#fff",
              color: category === cat ? "#fff" : "#000",
              cursor: "pointer",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS GRID */}
      <div style={styles.grid}>
        {filtered?.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} style={styles.image} />

            <h3 style={styles.title}>{product.title}</h3>

            <p>${product.price}</p>

            {/* BUTTONS */}
            <div style={styles.buttons}>
              <button
                style={styles.addBtn}
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </button>

              <Link to={`/product/${product.id}`} style={{ flex: 1 }}>
                <button style={styles.detailsBtn}>
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "sans-serif",
  },

  /* TOP BAR */
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    marginBottom: "15px",
    flexWrap: "wrap",
  },

  searchBox: {
    flex: 1,
    position: "relative",
    minWidth: "100px",
  },

  icon: {
    position: "absolute",
    left: "10px",
    top: "10px",
    color: "#888",
  },

  input: {
    width: "95%",
    padding: "10px 10px 10px 15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },

  select: {
    flex: 1,
    minWidth: "150px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },

  /* CATEGORY */
  categoryBox: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "20px",
  },

  catBtn: {
    padding: "6px 14px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    transition: "0.3s",
  },

  /* GRID RESPONSIVE */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "15px",
  },

  card: {
    border: "1px solid #eee",
    padding: "12px",
    borderRadius: "12px",
    textAlign: "center",
    background: "#f9f6f7",
  },

  image: {
    width: "100%",
    height: "160px",
    objectFit: "contain",
  },

  title: {
    fontSize: "14px",
    height: "40px",
    overflow: "hidden",
  },

  btnRow: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },

  addBtn: {
    flex: 1,
    padding: "8px",
    background: "#21b34a",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  detailsBtn: {
    flex: 1,
    padding: "8px",
    background: "#79295b",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Home;