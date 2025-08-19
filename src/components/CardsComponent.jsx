import { Container, Grid, Typography, Box } from "@mui/material";
import EscarlateJoana from "../assets/images/equipe/escarlate_joana.jpg";
import Escarlatecandy from "../assets/images/equipe/escarlate_candy.png";
import Escarlatedanielle from "../assets/images/equipe/escarlate_danielle-1.jpg";
import Escarlategisele from "../assets/images/equipe/escarlate_gisele.jpg";
import Escarlatepaula from "../assets/images/equipe/escarlate_paula-1-1.jpg";
import Escarlatepriscila from "../assets/images/equipe/escarlate_priscila.png";
import Escarlatetatiana from "../assets/images/equipe/escarlate_tatiana.jpg";
import { useLanguage } from "../i18n/LanguageContext";

export default function CardsComponent() {

const { lang, t } = useLanguage();

  // const team = t("team");
  
  // Dados da equipe
  const team = [
    {
      name: "JOANA HENNING",
      role: "Sócia e CEO",
      bio: "Atua desde 2002 nas áreas de audiovisual, entretenimento e multiplataforma, assumindo funções de planejamento e execução de conteúdos artísticos, gestão de negócios e produção de eventos. Implantou e coordenou projetos como Especiais de Fim de Ano e Lançamento de Grades da Rede Globo, Globosat e MTV, SESI Ação Global, Rua do Circo - Rede Cirque Del Monde, FLUPP - Festa Literária Internacional das Periferias, Futr On Air (Rio x San Francisco), Planeta Ginga Film Festival (França-Brasil), Rio +20 Peace Child, Turnês Musicais Nacionais e Internacionais, Circuitos e Festivais de Teatro e Circo, entre outros. Cria, elabora e executa projetos na área de desenvolvimento cultural e social. Como CEO da Escarlate, está à frente de todos os projetos do portfólio da empresa, além de liderar e articular o posicionamento dos mesmos, promove e desenvolve ações alinhadas ao conceito de economia criativa, novas mídias e redes virtuais e presenciais.",
      image: EscarlateJoana,
    },
    {
      name: "PAULA TORRES",
      role: "Sócia e CPO",
      bio: "Produtora Executiva formada pela FAAP (SP), Tem 30 anos de experiência na área de audiovisual. Trabalhou por mais de 20 anos na TV Globo, onde liderou diversos programas, como Domingão do Faustão, Caldeirão do Huck, Criança Esperança, Carnaval Rio e São Paulo, Show da Virada. Professora de produção executiva para o primeiro curso de Autor Roteirista na faculdade Estácio de Sá , Rio de Janeiro. Desde 2018 é sócia do Estúdio Escarlate, responsável pelos longas “De Perto Ela Não É Normal” (2020), Sequestro do Voo 375 (2023), e pelas séries “O Caso Celso Daniel” (2022) e “Música Preta Brasileira” para o programa Fantástico TVGlobo. Atualmente desenvolve os longas metragens “Chico Mendes”,” Sylvie” e “Yanomamis”, entre outros.",
      image: Escarlatepaula,
    },
    {
      name: "TATIANA REUTER",
      role: "Diretora de Conteúdo e Planejamento.",
      bio: "Cineasta pós-graduada em Cinema Documentário e em Literatura, arte e pensamento contemporâneo, Tatiana realiza coordenação, curadoria e análise de conteúdos e desenvolvimento de projetos. Foi Coordenadora de Produção na Globo por mais de 10 anos em projetos de publicidade para os canais de tv por assinatura. Curiosa por natureza, escreve por hobby e sempre está de olho em uma boa história para contar. É crítica de cinema, sendo componente do Elviras - o coletivo de mulheres críticas de cinema do Brasil.",
      image: Escarlatetatiana,
    },
    {
      name: "DANIELLE FERNANDES",
      role: "Adm Financeiro",
      bio: "Mais de 10 anos de experiência em rotinas administrativas e financeiras, Danielle Fernandes atua prestando serviços como Contas a Pagar e Receber, Controle e Análise de Crédito e Atendimento em Bancos, Financeiras e Importadoras.",
      image: Escarlatedanielle,
    },
    {
      name: "PRISCILA PARAGUASSÚ",
      role: "Diretora de Produção",
      bio: "Priscila Paraguassú é natural do Rio de Janeiro, graduada em Gestão e Tecnologia em Eventos, Técnica em Segurança do Trabalho é Produtora de Cinema e Cultural, com passagens pela área de Gestão de RH, Comercial , Executiva e Atendimento ao público, fluente em Libras e Inglês, tendo vasta experiência e atuação em importantes segmentos e Organizações como Anistia Internacional e Museu do Amanhã. Iniciou sua carreira produzindo eventos culturais e musicais e após anos de vivência no mercado, migrou para o Audiovisual com a necessidade, intenção e missão de contribuir para a transformação do setor tornando-o cada vez mais inclusivo, seguro, respeitoso e sustentável atuando na produção de séries , filmes e projetos tais como : Sob Pressão, DOM, How to be a Carioca, A Divisão, Arcanjo Renegado entre outros. Atualmente Diretora de Produção e Captação pela Escarlate atuou na Direção de produção do projeto Música Preta Brasileira e na Coordenação de Produção do longa O Sequestro Voo 375.",
      image: Escarlatepriscila,
    },
    {
      name: "CANDY SAAVEDRA",
      role: "Produtora Executiva",
      bio: "Formada em Cinema, trilhou uma jornada de 15 anos no universo do audiovisual. “A paixão pela sétima arte me levou a explorar todos os aspectos de conteúdo e da produção, desde a direção até a edição. Ao longo dessa trajetória, busquei inovação e excelência, resultando em projetos cinematográficos que contam histórias emocionantes e impactantes. Meu comprometimento com a narrativa visual me permitiu conquistar novos mundos, reforçando minha dedicação à arte de contar histórias através da cinematografia.",
      image: Escarlatecandy,
    },
    {
      name: "GISELE VITÓRIA",
      role: "Comunicação",
      bio: "Gisele Vitória é diretora de comunicação da Escarlate. Foi diretora de redação da revista IstoÉ Gente, da qual também participou de sua criação e lançamento. Foi colunista e editora especial da Revista IstoÉ, passando por áreas de política, gente, economia e negócios, comportamento, medicina e cultura. Dirigiu a IstoÉ Platinum, Planeta e Menu. Foi repórter do Jornal do Brasil, O Globo e Rádio Globo. Criou em 2018 o projeto editorial da RoBB Report Brasil, da qual é editora-chefe. Com pós-graduação em direção editorial pela ESPM, é co-autora do livro “A Imprensa entre Antígona e Maquiavel”. Gisele integrou por cinco anos a comissão editorial da ANER. Na Escarlate, é pesquisadora e diretora de produção jornalística da série documental “Quem Matou Celso Daniel”.",
      image: Escarlategisele,
    },
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 6,
        pt: { xs: 12, md: 16 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 300,
          letterSpacing: 2,
          mb: 6,
          fontFamily: "Roboto, sans-serif",
        }}
      >
        {t("teamTitle")}
      </Typography>

      {t("team").map((member, index) => (
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="center"
          key={index}
          sx={{ mb: 8, maxWidth: "1200px" }} 
        >
          {index % 2 === 0 ? (

            <>
              {/* Texto à esquerda */}
              <Grid item xs={12} md={7} size={{ xs: 10, md: 8 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 300, mb: 2, color: "#ED0220" }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 3,
                    color: "text.secondary",
                    fontStyle: "italic",
                    fontSize: "1rem",
                  }}
                >
                  {member.role}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    lineHeight: 1.6,
                    textAlign: "justify",
                    textAlignLast: "left",
                  }}
                >
                  {member.bio}
                </Typography>
              </Grid>

              {/* Imagem à direita */}
              <Grid
                item
                xs={12}
                md={5}
                sx={{ display: "flex", justifyContent: "center" }}
                
              >
                <Box
                  component="img"
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: "100%",
                    maxWidth: "400px",
                    borderRadius: "12px",
                  }}
                />
              </Grid>
            </>

          ) : (

            <>
            
              {/* Imagem à esquerda */}
              <Grid
                item
                xs={12}
                md={5}
                sx={{ 
                  display: "flex", 
                  justifyContent: "center",
                  "@media (max-width: 1200px)": {
                    display: 'none'
                  }
                }}
              >
                <Box
                  component="img"
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: "100%",
                    maxWidth: "400px",
                    borderRadius: "12px",
                  }}
                />
              </Grid>

              {/* Texto à direita */}
              <Grid item xs={12} md={7} size={{ xs: 10, md: 8 }} >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 300, mb: 2, color: "#ED0220" }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 3,
                    color: "text.secondary",
                    fontStyle: "italic",
                    fontSize: "1rem",
                  }}
                >
                  {member.role}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    lineHeight: 1.6,
                    textAlign: "justify",
                    textAlignLast: "left",
                  }}
                >
                  {member.bio}
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                md={5}
                sx={{ 
                  display: "flex", 
                  justifyContent: "center",
                  "@media (min-width: 1200px)": {
                    display: 'none'
                  }
                }}
              >
                <Box
                  component="img"
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: "100%",
                    maxWidth: "400px",
                    borderRadius: "12px",
                  }}
                />
              </Grid>
            </>
            
          )}
        </Grid>
      ))}
    </Container>
  );
}
