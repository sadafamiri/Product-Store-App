import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { FaShoppingCart } from "react-icons/fa";
import { FaCog } from "react-icons/fa";

function Navbar({ openSettings }) {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>🛍 MyStore</h2>
      {/* دکمه Settings */}
        

      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          Home
        </Link>

        <Link to="/cart" style={styles.cart}>
          <FaShoppingCart size={20} />
          <span style={styles.badge}>{totalQuantity}</span>
        </Link>
        <button onClick={openSettings} style={styles.iconBtn}>
          <FaCog size={20} />
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
    padding: "15px 20px",
    background: "#222",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  cart: {
    position: "relative",
    color: "#fff",
  },
  badge: {
    position: "absolute",
    top: "-8px",
    right: "-10px",
    background: "red",
    color: "#fff",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "12px",
  },
  iconBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#fff",
  },
};

export default Navbar;
