import { useState } from "react";
import {
  AppBar, Toolbar, Button, Box, IconButton, Drawer, List,
  ListItem, ListItemButton, ListItemText, useScrollTrigger
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useLanguage } from "../i18n/LanguageContext";
import logo from "../assets/Escarlate_LogoTransparente-1.png";
import { Link } from "react-router-dom";

export default function Header() {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { t } = useLanguage();
  const menuItems = t("menu");

  return (
    <>
      {/* AppBar transparente sobre o banner */}
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{
          top: 0,
          backgroundColor: trigger ? "rgba(0,0,0,0.85)" : "rgba(0, 0, 0, 0.38)",
          transition: "background-color .3s ease",
          px: { xs: 1, md: 3 },
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", minHeight: 72 }}>
          <Box component="img" src={logo} alt="Escarlate" sx={{ height: 50 }} />

          {/* Menu Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, alignItems: "center" }}>
            {menuItems.map((item) => {
              const path = item.toLowerCase();
              return (
                <Button
                  key={item}
                  component={Link}
                  to={`/${path === "home" ? "" : path}`} // "/" para home
                  sx={{
                    color: "#fff",
                    fontWeight: 500,
                    "&:hover": { borderBottom: "2px solid #fff" }
                  }}
                >
                  {item}
                </Button>
              );
            })}
          </Box>

          {/* Botão Mobile */}
          <IconButton
            sx={{ display: { xs: "inline-flex", md: "none" }, color: "#fff" }}
            onClick={() => setDrawerOpen(true)}
            aria-label="abrir menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: "78%",
            maxWidth: 360,
            bgcolor: "#fff",
          },
        }}
      >
        {/* Botão Fechar */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton aria-label="fechar menu" onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Lista com linhas divisórias */}
        <List sx={{ px: 2 }}>
          {menuItems.map((text, index) => {
            const path = text.toLowerCase();
            return (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  borderBottom: index !== menuItems.length - 1
                    ? "1px solid rgba(0,0,0,0.1)"
                    : "none",
                }}
              >
                <ListItemButton
                  component={Link}
                  to={`/${path === "home" ? "" : path}`}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      align: "center",
                      sx: { fontSize: 16, letterSpacing: 1, color: "#000" },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

      </Drawer>
    </>
  );
}
