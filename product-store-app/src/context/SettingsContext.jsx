import { createContext, useReducer } from "react";

export const SettingsContext = createContext();

const initialState = {
  darkMode: false,
  layout: "grid",
  language: "en",
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, darkMode: !state.darkMode };

    case "TOGGLE_LAYOUT":
      return {
        ...state,
        layout: state.layout === "grid" ? "list" : "grid",
      };

    case "SET_LANGUAGE":
      return { ...state, language: action.payload };

    default:
      return state;
  }
}

export function SettingsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
}