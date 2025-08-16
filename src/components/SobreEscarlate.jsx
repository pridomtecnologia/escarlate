import { Container, Grid, Typography, Link, Box } from "@mui/material";
import LogoEscarlate from "../assets/images/logo/logo-escarlate.png";

export default function SobreEscarlate() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Título superior */}
      <Typography
        variant="h4"
        align="right"
        sx={{
          fontWeight: 300,
          letterSpacing: 2,
          mb: 6,
          fontFamily: "Roboto, sans-serif",
        }}
      >
        Sobre à ESCARLATE
      </Typography>

      {/* Conteúdo principal */}
      <Grid container spacing={6} columns={{ xs: 10, md: 16 }}>
        
        {/* Texto à esquerda */}
        <Grid item xs={12} md={7} size={{ xs: 10, md: 8 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 300,
              lineHeight: 1.3,
              fontFamily: "Roboto, sans-serif",
              mb: 2,
              color: "#ED0220"
            }}
          >
            CRIANDO EXPERIÊNCIAS QUE TRANSFORMAM A CULTURA
          </Typography>

          <Typography
            variant="body2"
            sx={{ 
              mb: 3, 
              color: "text.secondary", 
              fontStyle: "italic",
              fontSize: "1rem"
            }}
          >
            Escarlate
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, textAlign: "justify", textAlignLast: "left" }}>
            A Escarlate é especializada em <Box component="span" fontWeight="bold">gestão de conteúdo de alta cultura</Box>,
            oferecendo soluções completas de <Box component="span" fontWeight="bold">criação</Box>, <Box component="span" fontWeight="bold">desenvolvimento</Box>,
            <Box component="span" fontWeight="bold"> produção</Box> e <Box component="span" fontWeight="bold">distribuição</Box>. Atuamos de forma estratégica e
            inovadora para transformar ideias em experiências que fortalecem a arte e a cultura.
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6, textAlign: "justify", textAlignLast: "left" }}>
            Nosso trabalho é pautado por <Box component="span" fontWeight="bold">concepções estratégicas para lançamentos e eventos</Box>,
            garantindo que cada projeto seja conduzido com excelência, originalidade e impacto.
            A Escarlate é mais do que uma produtora: é uma parceira na construção de narrativas que conectam pessoas,
            marcas e expressões artísticas de forma memorável.
          </Typography>

          <Link
            href="#"
            underline="hover"
            sx={{
              backgroundColor: "#ED0220",
              padding: "10px 20px",
              borderRadius: '3px',
              display: "inline-block",
              mt: 2,
              fontWeight: "bold",
              color: "#ffffff",
              fontSize: "0.9rem",
              textTransform: "uppercase",
              letterSpacing: 1,
              '&:hover': {
                color: '#ffffff'
              }
            }}
          >
            FALE COM A ESCARLATE
          </Link>
        </Grid>

        {/* Imagem à direita */}
        <Grid 
          item 
          xs={12} 
          md={5} 
          size={{ xs: 10, md: 8 }} 
          sx={{
            // backgroundColor: 'lightgray', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            p: { xs: 2, md: 4 }, // Padding responsivo
            minHeight: { xs: '300px', md: 'auto' }
          }}>

            <Box
              component="img"
              src={LogoEscarlate}
              alt="Escarlate Logo"
              sx={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                objectFit: "contain",
                display: "block",
                // ml: "auto",
                mr: { xs: "auto", md: 0 },
                mt: { xs: 4, md: 0 }
              }}
            />

        </Grid>

      </Grid>
    </Container>
  );
}