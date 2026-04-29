import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import { LanguageContext } from "../context/LanguageContext";

function Navbar({ openSettings }) {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const { t } = useContext(LanguageContext);

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#222" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        {/* Logo */}
        <Typography variant="h6">
          🛍 MyStore
        </Typography>

        {/* Links */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>

          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            {t("home") || "Home"}
          </Link>

          {/* Cart */}
          <IconButton component={Link} to="/cart" color="inherit">
            <Badge badgeContent={totalQuantity} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {/* Settings */}
          <IconButton color="inherit" onClick={openSettings}>
            <SettingsIcon />
          </IconButton>

        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;