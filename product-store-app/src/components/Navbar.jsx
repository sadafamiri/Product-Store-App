import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <nav style={styles.nav}>
      {" "}
      <h2 style={styles.logo}>🛍 MyStore</h2>{" "}
      <div style={styles.links}>
        {" "}
        <Link to="/" style={styles.link}>
          {" "}
          Home{" "}
        </Link>{" "}
        <Link to="/cart" style={styles.link}>
          {" "}
          Cart ({totalQuantity}){" "}
        </Link>{" "}
      </div>{" "}
    </nav>
  );
}
const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 25px",
    backgroundColor: "#222",
    color: "#fff",
  },
  logo: { margin: 0 },
  links: { display: "flex", gap: "20px" },
  link: { color: "#fff", textDecoration: "none", fontSize: "16px" },
};
export default Navbar;
