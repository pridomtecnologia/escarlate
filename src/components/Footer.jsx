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

        {/* Localização */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {t("footer.localizacao")}
          </Typography>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9357880998605!2d-46.66551412478822!3d-23.570749561937014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59db0e525353%3A0x1a6b95f08d943cb7!2sAv.%20Nove%20de%20Julho%2C%203624%20-%20Jardim%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001406-000!5e0!3m2!1spt-BR!2sbr!4v1755709822960!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="200" 
            style={{border: 0}} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Estúdio Escarlate"
          ></iframe>
        </Grid>

      </Grid>
      <Grid container spacing={4} justifyContent="center">
        <Typography variant="p" fontWeight="bold" gutterBottom>
            {t("desenvolvimento")} <a href="https://pridom.com.br/" target="_blank">{t("pridom")}</a>
          </Typography>
      </Grid>
    </Box>
  );
}