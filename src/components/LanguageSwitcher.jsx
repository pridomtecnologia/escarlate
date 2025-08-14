import { Box } from "@mui/material";
import { useLanguage } from "../i18n/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <Box
      sx={{
        position: "fixed",
        right: 16,
        bottom: 16,
        zIndex: 1400,
        display: "flex",
        alignItems: "center",
        gap: 1,
        px: 1.5,
        py: 0.5,
        color: "#fff",
        bgcolor: "rgba(0,0,0,.55)",
        borderRadius: "999px",
        border: "1px solid rgba(255,255,255,.35)",
        backdropFilter: "blur(2px)",
        userSelect: "none",
      }}
    >
      <Box
        onClick={() => setLang("pt")}
        sx={{ cursor: "pointer", fontWeight: lang === "pt" ? 700 : 400, opacity: lang === "pt" ? 1 : 0.7 }}
      >
        PT
      </Box>
      <Box sx={{ opacity: 0.5 }}>|</Box>
      <Box
        onClick={() => setLang("en")}
        sx={{ cursor: "pointer", fontWeight: lang === "en" ? 700 : 400, opacity: lang === "en" ? 1 : 0.7 }}
      >
        EN
      </Box>
    </Box>
  );
}
