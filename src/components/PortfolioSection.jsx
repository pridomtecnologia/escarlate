"use client";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { useLanguage } from "../i18n/LanguageContext"; 

import DePerto from "../assets/images/ddeperto2.jpg";
import aculpa from "../assets/images/aculpa.jpg";
import chicomendes from "../assets/images/chicomendes.jpg";
import nascidos from "../assets/images/nascidos.jpg";
import sequestro from "../assets/images/sequestro.jpg";
import ocasocelsodaniel from "../assets/images/ocasocelsodaniel.jpg";
import tiros from "../assets/images/21Tiros.jpg";
import agentedomedo from "../assets/images/agentedomedo.png";
import vozes from "../assets/images/vozes.jpg";
import { Link } from "react-router-dom";

const portfolioItems = {
  pt: [
    { id: 1, title: "A Culpa", image: aculpa },
    { id: 2, title: "De Perto ela não é normal", image: DePerto },
    { id: 3, title: "Chico Mendes", image: chicomendes },
    { id: 4, title: "Nascidos da Dança", image: nascidos },
    { id: 5, title: "O Sequestro do voo 375", image: sequestro },
    { id: 6, title: "O Caso Celso Daniel", image: ocasocelsodaniel },
    { id: 7, title: "21 Tiros na justiça", image: tiros },
    { id: 8, title: "O Agente do Medo", image: agentedomedo },
    { id: 9, title: "Vozes da mata", image: vozes },
  ],
  en: [
    { id: 1, title: "The Guilt", image: aculpa },
    { id: 2, title: "Up Close She’s Not Normal", image: DePerto },
    { id: 3, title: "Chico Mendes", image: chicomendes },
    { id: 4, title: "Born from Dance", image: nascidos },
    { id: 5, title: "The Hijacking of Flight 375", image: sequestro },
    { id: 6, title: "The Celso Daniel Case", image: ocasocelsodaniel },
    { id: 7, title: "21 Shots in Justice", image: tiros },
    { id: 8, title: "The Agent of Fear", image: agentedomedo },
    { id: 9, title: "Voices of the Forest", image: vozes },
  ],
};

export default function PortfolioSection() {
  const { lang } = useLanguage();

  return (
    <Box sx={{ py: 8, px: 2, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mb: 6 }}>
        {lang === "pt" ? "Nosso Portfólio" : "Our Portfolio"}
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {portfolioItems[lang].map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        component={Link}
        to={`/entretenimento`}
        sx={{
          mt: 4,
          borderRadius: "3px",
          px: 4,
          background: "#ED0220",
          textTransform: "uppercase",
          letterSpacing: 1,
          fontWeight: "bold",
        }}
      >
        {lang === "pt" ? "Veja nosso portfólio" : "See Our Portfolio"}
      </Button>
    </Box>
  );
}
