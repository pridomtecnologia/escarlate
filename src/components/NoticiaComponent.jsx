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

const shows = [
  {
    title: "21 Tiros na Justiça",
    img: tiros,
    description: "Documentário sobre o caso dos 21 tiros que chocou o país, investigando as falhas do sistema judicial.",
    newsUrl: "https://exemplo.com/noticia/21-tiros"
  },
  {
    title: "De Perto",
    img: DePerto,
    description: "Uma análise profunda dos casos de violência policial nas comunidades carentes.",
    newsUrl: "https://exemplo.com/noticia/de-perto"
  },
  {
    title: "A culpa",
    img: aculpa,
    description: "Investigação sobre como a culpa é atribuída em casos complexos do sistema judicial.",
    newsUrl: "https://exemplo.com/noticia/a-culpa"
  },
  {
    title: "Chico Mendes",
    img: chicomendes,
    description: "A história do ambientalista Chico Mendes e seu legado na defesa da Amazônia.",
    newsUrl: "https://exemplo.com/noticia/chico-mendes"
  },
  {
    title: "Nascidos",
    img: nascidos,
    description: "Documentário sobre crianças nascidas em sistema carcerário e seus desafios.",
    newsUrl: "https://exemplo.com/noticia/nascidos"
  },
  {
    title: "Sequestro",
    img: sequestro,
    description: "Análise de casos de sequestro relâmpago e a resposta das autoridades.",
    newsUrl: "https://exemplo.com/noticia/sequestro"
  },
  {
    title: "O Caso Celso Daniel",
    img: ocasocelsodaniel,
    description: "A investigação do assassinato do prefeito Celso Daniel e suas ramificações políticas.",
    newsUrl: "https://exemplo.com/noticia/caso-celso-daniel"
  },
  {
    title: "A gente do medo",
    img: agentedomedo,
    description: "Como o medo é utilizado como mecanismo de controle em diversas esferas da sociedade.",
    newsUrl: "https://exemplo.com/noticia/gente-do-medo"
  },
  {
    title: "Vozes",
    img: vozes,
    description: "As vozes silenciadas do sistema judicial e suas histórias não contadas.",
    newsUrl: "https://exemplo.com/noticia/vozes"
  },
  {
    title: "Guará",
    img: GuaraCapa,
    description: "A operação Guará e seu impacto no combate ao crime organizado.",
    newsUrl: "https://exemplo.com/noticia/guara"
  },
  {
    title: "Juíza",
    img: juiza,
    description: "Perfil de uma juíza que desafia o sistema para fazer justiça.",
    newsUrl: "https://exemplo.com/noticia/juiza"
  },
  {
    title: "PO",
    img: po,
    description: "A história do Programa de Proteção a Vítimas e Testemunhas Ameaçadas.",
    newsUrl: "https://exemplo.com/noticia/po"
  },
  {
    title: "Senha",
    img: Senha,
    description: "Investigação sobre vazamento de informações sigilosas do sistema judicial.",
    newsUrl: "https://exemplo.com/noticia/senha"
  },
  {
    title: "Sylvie",
    img: SylvieCapa,
    description: "A trajetória da defensora pública Sylvie e suas batalhas judiciais.",
    newsUrl: "https://exemplo.com/noticia/sylvie"
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