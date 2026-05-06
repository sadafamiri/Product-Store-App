import { createContext, useReducer, useEffect } from "react";

export const ThemeContext = createContext();

const initialState = {
  darkMode: false,
  layout: "grid",
  language: "en",
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, darkMode: !state.darkMode };

    // ❌ این را می‌توانی حذف کنی یا نگه داری
    case "TOGGLE_LAYOUT":
      return {
        ...state,
        layout: state.layout === "grid" ? "list" : "grid",
      };

    // ✅ مهم‌ترین
    case "SET_LAYOUT":
      return { ...state, layout: action.payload };

    case "SET_LANGUAGE":
      return { ...state, language: action.payload };

    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // 👇 مهم‌ترین بخش
  useEffect(() => {
    document.body.setAttribute(
      "data-theme",
      state.darkMode ? "dark" : "light"
    );
  }, [state.darkMode]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}