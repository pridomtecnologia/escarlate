import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box sx={{ background: '#ED0220', bgcolor: "linear-gradient(to right, #2196f3, #42a5f5)", color: "white", py: 6 }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Menu Rápido */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            MENU RÁPIDO
          </Typography>
          <Box>
            <Link href="#" underline="hover" color="inherit" display="block">
              Home
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block">
              Equipe
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block">
              Publicidade
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block">
              Entretenimento
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block">
              Blog
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block">
              Serviços
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block">
              Contato
            </Link>
          </Box>
        </Grid>

        {/* Contato */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            MANDE SEU FILME
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            CONTATO
          </Typography>
          <Typography variant="body2">Horário de Atendimento</Typography>
          <Typography variant="body2" gutterBottom>
            Segunda a sexta das 9h às 18h
          </Typography>
          <Typography variant="body2">+55 11 3839-9400</Typography>
          <Typography variant="body2" gutterBottom>
            +55 11 4455-9933
          </Typography>
          <Typography variant="body2">
            Rua exemplo, 930 - Exemplo
          </Typography>
          <Typography variant="body2">CEP 00000-000 - São Paulo</Typography>
        </Grid>

        {/* Redes sociais */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            REDES SOCIAIS
          </Typography>
          <Box>
            <IconButton href="https://www.linkedin.com/company/estudioescarlate/" target="_blank" color="inherit">
              <LinkedIn />
            </IconButton>
            <IconButton href="https://www.instagram.com/estudioescarlate?utm_source=ig_web_button_share_sheet&igsh=ZHhmNDh2cGRud2Nt" target="_blank" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton href="https://www.facebook.com/estudioescarlate/" target="_blank" color="inherit">
              <Facebook />
            </IconButton>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
}
