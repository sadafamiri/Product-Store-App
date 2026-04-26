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

export default Navbar;
