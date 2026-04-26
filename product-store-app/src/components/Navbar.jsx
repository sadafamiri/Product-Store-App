import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaCog } from "react-icons/fa";
function Navbar({ openSettings }) {
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
         {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <FaShoppingCart size={22} />

          {/* Badge */}
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalQuantity}
            </span>
          )}
        </Link>

        {/* Settings Icon */}
        <button
          onClick={openSettings}
          className="hover:text-gray-300"
        >
          <FaCog size={22} />
        </button>

      </div>
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
