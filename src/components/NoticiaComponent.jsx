import { useState } from "react";
import { Box, Button, Typography, Card, CardMedia, CardContent, CardActions } from "@mui/material";

// Importações de imagens (mantidas conforme seu código original)
import DePerto from "../assets/images/ddeperto2.jpg";
import aculpa from "../assets/images/aculpa.jpg";
import chicomendes from "../assets/images/chicomendes.jpg";
import nascidos from "../assets/images/nascidos.jpg";
import sequestro from "../assets/images/sequestro.jpg";
import ocasocelsodaniel from "../assets/images/ocasocelsodaniel.jpg";
import tiros from "../assets/images/21Tiros.jpg";
import agentedomedo from "../assets/images/agentedomedo.png";
import vozes from "../assets/images/vozes.jpg";
import GuaraCapa from "../assets/images/Guara_Capa.jpg";
import juiza from "../assets/images/juiza.png";
import po from "../assets/images/po.jpg";
import Senha from "../assets/images/Senha.png";
import SylvieCapa from "../assets/images/SylvieCapa.png";
import noticia1 from "../assets/images/noticia1.jpg";
import noticia2 from "../assets/images/noticia2.jpg";
import noticia3 from "../assets/images/noticia3.webp";
import noticia4 from "../assets/images/noticia4.jpg";
import noticia5 from "../assets/images/noticia5.webp";

const shows = [
  {
    title: "Salto Preciso",
    img: noticia1,
    description: "História de Joana",
    newsUrl: "https://www.escarlateweb.com/wp-content/uploads/2022/09/19a.jpg"
  },
  {
    title: "De Perto ela não é normal",
    img: DePerto,
    description: "pressionada por tudo e todos, Suzie (Suzana Pires)",
    newsUrl: "https://www.adorocinema.com/filmes/filme-261145/"
  },
  {
    title: "Monica",
    img: noticia2,
    description: "'Monica' recebe o prêmio ARCA em Veneza",
    newsUrl: "https://rollingstone.com.br/noticia/monica/"
  },
  {
    title: "Chico Mendes",
    img: noticia3,
    description: "A história do ambientalista Chico Mendes",
    newsUrl: "https://oglobo.globo.com/blogs/ancelmo-gois/post/2023/04/a-vida-do-ambientalista-chico-mendes-que-morreu-assassinado-em-xapuri-no-acre-vai-virar-filme.ghtml"
  },
  {
    title: "Vencedor do Urso de Ouro",
    img: noticia4,
    description: "Vencedor do Urso de Ouro terá Première na mostra de SP",
    newsUrl: "https://www.marciapiovesan.com.br/cinema/vencedor-do-urso-de-ouro-no-festival-de-berlim-synonyms-tera-premiere-na-mostra-de-sao-paulo.phtml"
  },
  {
    title: "Trapezista troca carreira no circo e vira produtora",
    img: noticia5,
    description: "Equipe de doze mulheres comandada por Joana Henning prepara pelo menos vinte filmes e séries nacionais.",
    newsUrl: "https://vejasp.abril.com.br/coluna/terraco-paulistano/trapezista-troca-carreira-no-circo-e-vira-produtora-de-filmes-e-series/"
  }
];

export default function NoticiaComponent() {
  const handleNewsClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 3,
        padding: 3,
        background: "#f5f5f5",
        minHeight: "100vh",
        boxSizing: "border-box",
        overflowX: "hidden",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      {shows.map((show, index) => (
        <Card 
          key={index}
          sx={{ 
            width: 300,
            height: 420,
            display: "flex",
            flexDirection: "column",
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: 6
            },
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={show.img}
            alt={show.title}
            sx={{ 
              objectFit: "cover",
            }}
          />
          <CardContent sx={{ flexGrow: 1, padding: 2 }}>
            <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              {show.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
              {show.description}
            </Typography>
          </CardContent>
          <CardActions sx={{ padding: 2, paddingTop: 0 }}>
            <Button 
              size="small" 
              variant="contained"
              onClick={() => handleNewsClick(show.newsUrl)}
              sx={{ 
                backgroundColor: "#ED0220",
                "&:hover": {
                  backgroundColor: "#ED0220"
                }
              }}
              fullWidth
            >
              Veja Notícia
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}