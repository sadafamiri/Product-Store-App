import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

function SettingsContent() {
  const { state, dispatch } = useContext(ThemeContext);
  const { language, changeLanguage, t } = useContext(LanguageContext);

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>{t("theme")}</h3>

      <button
        style={styles.themeBtn}
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
      >
        {state.darkMode ? t("lightMode") : t("darkMode")}
      </button>

      <hr style={styles.line} />

      <h3 style={styles.title}>{t("language")}</h3>

      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
        style={styles.select}
      >
        <option value="en">{t("english")}</option>
        <option value="fa">{t("persian")}</option>
        <option value="ps">{t("pashto")}</option>
      </select>

      <hr style={styles.line} />

      <h3 style={styles.title}>{t("layout")}</h3>

      <div style={styles.row}>
        <button style={styles.outlinedBtn}>Grid</button>
        <button style={styles.outlinedBtn}>List</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    padding: "15px",
    fontFamily: "sans-serif",
  },

  title: {
    fontSize: "18px",
    marginBottom: "10px",
  },

  themeBtn: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    background: "#2563eb",
    color: "#fff",
    marginBottom: "10px",
  },

  select: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid var(--border-color)",
    background: "var(--surface-color)",
    color: "var(--text-color)",
  },

  row: {
    display: "flex",
    gap: "10px",
  },

  outlinedBtn: {
    flex: 1,
    padding: "10px",
    border: "1px solid var(--border-color)",
    background: "transparent",
    color: "var(--text-color)",
    borderRadius: "8px",
    cursor: "pointer",
  },

  line: {
    margin: "15px 0",
    border: "none",
    borderTop: "1px solid var(--border-color)",
  },
};

export default SettingsContent;
