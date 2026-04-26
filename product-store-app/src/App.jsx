
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




export default App;

