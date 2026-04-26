import { useContext } from "react";
<<<<<<< HEAD
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
=======
// یا اگر فایل اسمش همونه

function SettingsContent() {
  const { state, dispatch } = useContext(SettingsContext);

  return (
    <div>
      <h4>Theme</h4>

      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        {state.darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <hr />

      <h4>Language</h4>
      <select
        value={state.language}
        onChange={(e) =>
          dispatch({ type: "SET_LANGUAGE", payload: e.target.value })
        }
      >
        <option value="en">English</option>
        <option value="fa">Persian</option>
      </select>

      <hr />

      <h4>Layout</h4>
      <button onClick={() => dispatch({ type: "TOGGLE_LAYOUT" })}>
        {state.layout}
      </button>
>>>>>>> cc4dd7aa2951dd31891557d2bc7368bcfa374813
    </div>
  );
}

export default SettingsContent;