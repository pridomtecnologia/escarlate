import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import producaoAoVivo from "../assets/images/producaoAoVivo.jpg";
import producaoFoto from "../assets/images/producaoFoto.jpg";
import producaoVideo from "../assets/images/producaoVideo.jpg";
import cobertura from "../assets/images/cobertura.jpg";

const Item = styled(Box)(({ theme }) => ({
  height: '380px',
  width: '280px',
  borderRadius: '12px',
  position: 'relative',
  color: '#fff',
  overflow: 'hidden',
  boxShadow: '0 6px 14px rgba(0,0,0,0.25)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  margin: 'auto', // garante centralização
}));

const services = [
  {
    title: "Produção de Vídeo",
    description:
      "Vídeos institucionais, campanhas publicitárias, conteúdo, videoaulas, palestras, depoimentos, motion graphics e muito mais. Com iluminação, captação de áudio, direção, tratamento de cor/áudio e edição finalizada.",
    image: producaoVideo,
  },
  {
    title: "Produção de Fotos",
    description:
      "Fotos comerciais, corporativas, institucionais, conteúdo e muitos outros. Processo completo de produção de fotos em alta qualidade, com iluminação e direção.",
    image: producaoFoto,
  },
  {
    title: "Transmissão ao vivo",
    description:
      "Transmissão ao vivo de shows, eventos corporativos, lançamentos, webinários e muitos outros. Plataformas: Youtube, Instagram, Facebook, Twitch, entre outras. Utilização de múltiplas câmeras.",
    image: producaoAoVivo,
  },
  {
    title: "Cobertura de Evento",
    description:
      "Fotos e vídeos de eventos corporativos, esportivos, feiras, exposições, palestras, festas, shows e muito mais. Cobertura simultânea nos stories, gravação na íntegra e edição em tempo real.",
    image: cobertura,
  },
];

export default function ServicesHome() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        py: 8,
        px: { xs: 2, md: 6 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "#000", fontWeight: "bold", mb: 4 }}
      >
        Nossos Serviços
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Item
              sx={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Gradiente no rodapé */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "55%",
                  background: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  p: 2,
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", textTransform: "uppercase", mb: 1 }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
                  {service.description}
                </Typography>
              </Box>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
