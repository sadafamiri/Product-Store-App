import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import {
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
  Stack,
} from "@mui/material";


function SettingsContent() {
  const { state, dispatch } = useContext(ThemeContext);
  const { language, changeLanguage, t } = useContext(LanguageContext);

  return (
    <Box sx={{ width: "100%", p: 2 }}>
      
      {/* 🌙 Theme */}
      <Typography variant="h6" mb={2}>
        {t("theme")}
      </Typography>

      <Button
        variant="contained"
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        sx={{ mb: 2 }}
      >
        {state.theme === "light"
          ? `🌙 ${t("dark")}`
          : `☀️ ${t("light")}`}
      </Button>

      <Divider sx={{ my: 2 }} />

      {/* 🌐 Language */}
      <Typography variant="h6" mb={2}>
        {t("language")}
      </Typography>

      <FormControl fullWidth>
        <InputLabel>{t("language")}</InputLabel>

        <Select
          value={language}
          label={t("language")}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <MenuItem value="en">{t("english")}</MenuItem>
          <MenuItem value="fa">{t("persian")}</MenuItem>
          <MenuItem value="ps">{t("pashto")}</MenuItem>
        </Select>
      </FormControl>

      <Divider sx={{ my: 2 }} />

      {/* 📦 Layout */}
      <Typography variant="h6" mb={2}>
        Layout
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button variant="outlined">Grid</Button>
        <Button variant="outlined">List</Button>
      </Stack>
    </Box>
  );
}

export default SettingsContent;