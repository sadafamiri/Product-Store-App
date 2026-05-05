import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { FaShoppingCart, FaCog } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";

function Navbar({ openSettings }) {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const { t } = useContext(LanguageContext);

  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <h2 style={styles.logo}>🛍 MyStore</h2>

      {/* Links */}
      <div style={styles.links}>
        <Link to="/" style={styles.link}>
          {t("home")}
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
    background: "var(--nav-bg)",
    color: "var(--nav-text)",
  },

  logo: {
    margin: 0,
    fontSize: "18px",
  },

  links: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  link: {
    color: "var(--nav-text)",
    textDecoration: "none",
    fontSize: "14px",
  },

  cart: {
    position: "relative",
    color: "var(--nav-text)",
    display: "flex",
    alignItems: "center",
    gap: "5px",
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
    color: "var(--nav-text)",
    cursor: "pointer",
  },
};

export default Navbar;
