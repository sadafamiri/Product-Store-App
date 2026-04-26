import { Link } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productsAPI";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
<<<<<<< HEAD


function Home() {
  const [search, setSearch] = useState("");
=======

function Home() {
  const dispatch = useDispatch();
>>>>>>> cc4dd7aa2951dd31891557d2bc7368bcfa374813
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const dispatch = useDispatch();

  //  Loading
  if (isLoading) {
    return <h2>Loading products...</h2>;
  }

  // Error
  if (error) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <div style={styles.container}>
      <h1>🛍 Products</h1>

     <div style={{ position: "relative", width: "100%", marginBottom: "20px" }}>
  
  {/*search icon */}
  <FaSearch
    style={{
      position: "absolute",
      left: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#999",
    }}
  />

  {/*  search input  */}
  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{
      width: "50%",
      padding: "10px 10px 10px 38px", 
      border: "1px solid #ccc",
      borderRadius: "8px",
    }}
  />
</div>

      <div style={styles.grid}>
        {data.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.title} style={styles.image} />

            <h3>{product.title}</h3>
            <p>${product.price}</p>

            <button
<<<<<<< HEAD
              style={styles.button}
              onClick={() => dispatch(addToCart(product))}
=======
              onClick={() => {
                console.log(product);
                dispatch(addToCart(product));
              }}
>>>>>>> cc4dd7aa2951dd31891557d2bc7368bcfa374813
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "10px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "contain",
  },
  button: {
    padding: "8px 12px",
    marginTop: "10px",
    cursor: "pointer",
  },
};

export default Home;
