import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import SettingsContent from "./components/SettingsContent";

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <Navbar openSettings={() => setIsSettingsOpen(true)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

      {isSettingsOpen && (
        <>
          <div
            onClick={() => setIsSettingsOpen(false)}
            className="fixed inset-0 bg-black/50"
          />

          <div className="fixed right-0 top-0 w-80 h-full bg-white p-5 z-50">
            <h2>Settings</h2>
            <button onClick={() => setIsSettingsOpen(false)}>
              Close
            </button>

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