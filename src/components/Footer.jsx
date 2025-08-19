import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <Box sx={{ background: "#ED0220", color: "white", py: 6 }}>
      <Grid container spacing={4} justifyContent="center">

        {/* Menu Rápido */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {t("footer.menuTitle")}
          </Typography>
          <Box>
            {t("menu").map((item, index) => (
              <Link
                key={index}
                href="#"
                underline="hover"
                color="inherit"
                display="block"
              >
                {item}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Contato */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {t("footer.sendFilm")}
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            {t("footer.contact")}
          </Typography>
          <Typography variant="body2">{t("footer.officeHours")}</Typography>
          <Typography variant="body2" gutterBottom>
            {t("footer.officeDays")}
          </Typography>
          <Typography variant="body2">+55 11 3839-9400</Typography>
          <Typography variant="body2" gutterBottom>
            +55 11 4455-9933
          </Typography>
          <Typography variant="body2">Rua exemplo, 930 - Exemplo</Typography>
          <Typography variant="body2">
            CEP 00000-000 - São Paulo
          </Typography>
        </Grid>

        {/* Redes sociais */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {t("footer.social")}
          </Typography>
          <Box>
            <IconButton
              href="https://www.linkedin.com/company/estudioescarlate/"
              target="_blank"
              color="inherit"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/estudioescarlate"
              target="_blank"
              color="inherit"
            >
              <Instagram />
            </IconButton>
            <IconButton
              href="https://www.facebook.com/estudioescarlate/"
              target="_blank"
              color="inherit"
            >
              <Facebook />
            </IconButton>
          </Box>
        </Grid>

        {/* Código de Ética */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {t("footer.etica")}
          </Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <IconButton
                // href="https://www.linkedin.com/company/estudioescarlate/"
                // target="_blank"
                color="inherit"
              >
                <PictureAsPdfIcon />
              </IconButton>
              <Typography variant="p" fontWeight="bold" gutterBottom>
                {t("footer.lerEtica")}
              </Typography>
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
