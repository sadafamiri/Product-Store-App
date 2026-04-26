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
    padding: "15px 25px",
    backgroundColor: "#222",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default Navbar;
