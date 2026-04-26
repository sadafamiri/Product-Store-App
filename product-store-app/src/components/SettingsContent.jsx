import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function SettingsContent() {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <div>
      {/* 🌙 Dark Mode */}
      <div>
        <h4>Theme</h4>
        <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
          {state.theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>

      <hr />

      {/* 🌐 Language */}
      <div>
        <h4>Language</h4>
        <select>
          <option>English</option>
          <option>Persian</option>
        </select>
      </div>

      <hr />

      {/* 📦 Layout */}
      <div>
        <h4>Layout</h4>
        <button>Grid</button>
        <button>List</button>
      </div>
    </div>
  );
}

export default SettingsContent;