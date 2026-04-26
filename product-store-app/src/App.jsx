import { useState,useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import SettingsContent from "./components/SettingsContent";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { state } = useContext(ThemeContext);
  return (
    <>
    
      <Navbar openSettings={() => setIsSettingsOpen(true)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      {/* Settings Sidebar */}
      {isSettingsOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setIsSettingsOpen(false)}
            style={styles.overlay}
          />

          {/* Sidebar */}
          <div style={styles.sidebar}>
            <h2>⚙ Settings</h2>

            <button onClick={() => setIsSettingsOpen(false)}>Close ❌</button>

            <hr />

            <SettingsContent />
          </div>
        </>
      )}
    </>
  );
}

const styles = {
  
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 999,
  },
  sidebar: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "300px",
    height: "100vh",
    backgroundColor: "#fff",
    padding: "20px",
    zIndex: 1000,
    boxShadow: "-2px 0 10px rgba(0,0,0,0.2)",
  },
};

export default App;
