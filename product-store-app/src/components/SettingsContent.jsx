import { useContext } from "react";
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
    </div>
  );
}

export default SettingsContent;