import { Box, Typography, Grid, Container } from "@mui/material";
import { useLanguage } from "../i18n/LanguageContext";

export default function NossosNumeros() {
  const { lang, t } = useLanguage();

  return (
    <Box sx={{ bgcolor: "black", color: "white", py: 6 }}>
      <Container>
        {/* Título */}
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ mb: 6 }}
        >
          {t("nossosNumeros")}
        </Typography>

        {/* Estatísticas */}
        <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
          {t("stats").map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} textAlign="center">
              <Typography variant="h3" fontWeight="bold">
                {stat.number}
              </Typography>
              <Typography variant="body1">{stat.label}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
