import React, { createContext, useContext, useEffect, useState } from "react";
import EscarlateJoana from "../assets/images/equipe/escarlate_joana.jpg";
import Escarlatecandy from "../assets/images/equipe/escarlate_candy.png";
import Escarlatedanielle from "../assets/images/equipe/escarlate_danielle-1.jpg";
import Escarlategisele from "../assets/images/equipe/escarlate_gisele.jpg";
import Escarlatepaula from "../assets/images/equipe/escarlate_paula-1-1.jpg";
import Escarlatepriscila from "../assets/images/equipe/escarlate_priscila.png";
import Escarlatetatiana from "../assets/images/equipe/escarlate_tatiana.jpg";

const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

const labels = {
  pt: {
    menu: [ "HOME","EQUIPE","PUBLICIDADE","ENTRETENIMENTO","BLOG","SERVIÇOS","CONTATO" ],
    nossosNumeros: "Nossos Números",
    stats: [
      { number: "900", label: "Projetos realizados" },
      { number: "500", label: "Clientes Atendidos" },
      { number: "150", label: "Diárias de Trabalho" },
      { number: "85%", label: "Clientes que Voltam a Trabalhar Conosco" },
    ],
    servicesTitle: "Nossos Serviços",
    services: [
      {
        title: "Produção de Vídeo",
        description:
          "Vídeos institucionais, campanhas publicitárias, conteúdo, videoaulas, palestras, depoimentos, motion graphics e muito mais. Com iluminação, captação de áudio, direção, tratamento de cor/áudio e edição finalizada.",
      },
      {
        title: "Produção de Fotos",
        description:
          "Fotos comerciais, corporativas, institucionais, conteúdo e muitos outros. Processo completo de produção de fotos em alta qualidade, com iluminação e direção.",
      },
      {
        title: "Transmissão ao vivo",
        description:
          "Transmissão ao vivo de shows, eventos corporativos, lançamentos, webinários e muitos outros. Plataformas: Youtube, Instagram, Facebook, Twitch, entre outras. Utilização de múltiplas câmeras.",
      },
      {
        title: "Cobertura de Evento",
        description:
          "Fotos e vídeos de eventos corporativos, esportivos, feiras, exposições, palestras, festas, shows e muito mais. Cobertura simultânea nos stories, gravação na íntegra e edição em tempo real.",
      },
    ],
    footer: {
      menuTitle: "MENU RÁPIDO",
      sendFilm: "CONTATO",
      // contact: "CONTATO",
      officeHours: "Horário de Atendimento",
      officeDays: "Segunda a sexta das 9h às 18h",
      social: "REDES SOCIAIS"
    },
    teamTitle: "Nossa Equipe",
    team: [
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
    ]
  },
  en: {
    menu: [ "HOME","TEAM","ADVERTISING","ENTERTAINMENT","BLOG","SERVICES","CONTACT" ],
    nossosNumeros: "Our Numbers",
    stats: [
      { number: "900", label: "Projects Completed" },
      { number: "500", label: "Clients Served" },
      { number: "150", label: "Work Days" },
      { number: "85%", label: "Returning Clients" },
    ],
    servicesTitle: "Our Services",
    services: [
      {
        title: "Video Production",
        description:
          "Institutional videos, advertising campaigns, content, video lessons, lectures, testimonials, motion graphics and more. With lighting, audio capture, directing, color/sound editing and final post-production.",
      },
      {
        title: "Photo Production",
        description:
          "Commercial, corporate, institutional photos, content and much more. Complete photo production process in high quality, with lighting and direction.",
      },
      {
        title: "Live Streaming",
        description:
          "Live streaming of concerts, corporate events, launches, webinars and more. Platforms: YouTube, Instagram, Facebook, Twitch, among others. Using multiple cameras.",
      },
      {
        title: "Event Coverage",
        description:
          "Photos and videos of corporate events, sports, fairs, exhibitions, lectures, parties, concerts and more. Simultaneous stories coverage, full recording and real-time editing.",
      },
    ],
    footer: {
      menuTitle: "QUICK MENU",
      sendFilm: "CONTACT",
      // contact: "CONTACT",
      officeHours: "Opening Hours",
      officeDays: "Monday to Friday from 9am to 6pm",
      social: "SOCIAL MEDIA"
    },
    teamTitle: "Our Team",
    team:[
      {
        name: "JOANA HENNING",
        role: "Partner and CEO",
        bio: "She has been working since 2002 in the areas of audiovisual, entertainment, and multiplatform content, taking on roles in planning and executing artistic content, business management, and event production. She implemented and coordinated projects such as End of Year Specials and Programming Launches for Rede Globo, Globosat, and MTV, SESI Ação Global, Rua do Circo - Rede Cirque Del Monde, FLUPP - International Literary Festival of the Peripheries, Futr On Air (Rio x San Francisco), Planeta Ginga Film Festival (France-Brazil), Rio +20 Peace Child, national and international music tours, theater and circus circuits and festivals, among others. She creates, designs, and executes projects in the field of cultural and social development. As CEO of Escarlate, she leads all projects in the company’s portfolio, as well as directing their positioning, promoting and developing initiatives aligned with the concept of creative economy, new media, and both online and offline networks.",
        image: EscarlateJoana,
      },
      {
        name: "PAULA TORRES",
        role: "Partner and CPO",
        bio: "Executive Producer, graduated from FAAP (São Paulo), with 30 years of experience in the audiovisual sector. She worked for more than 20 years at TV Globo, where she led several programs such as Domingão do Faustão, Caldeirão do Huck, Criança Esperança, Rio and São Paulo Carnival, and Show da Virada. She was also a professor of Executive Production for the first Scriptwriting course at Estácio de Sá University, Rio de Janeiro. Since 2018, she has been a partner at Estúdio Escarlate, responsible for feature films such as “De Perto Ela Não É Normal” (2020), “The Hijacking of Flight 375” (2023), and for the series “The Celso Daniel Case” (2022) and “Black Brazilian Music” for Fantástico (TV Globo). She is currently developing the feature films “Chico Mendes,” “Sylvie,” and “Yanomamis,” among others.",
        image: Escarlatepaula,
      
      },
      {
        name: "TATIANA REUTER",
        role: "Content and Planning Director",
        bio: "A filmmaker with postgraduate degrees in Documentary Cinema and in Literature, Art and Contemporary Thought, Tatiana works with coordination, curatorship, content analysis, and project development. She was Production Coordinator at Globo for over 10 years in advertising projects for cable channels. Curious by nature, she writes as a hobby and is always on the lookout for a good story to tell. She is also a film critic and a member of Elviras — the Brazilian collective of female film critics.",
        image: Escarlatetatiana,
      
      },
      {
        name: "DANIELLE FERNANDES",
        role: "Financial Administrator",
        bio: "With more than 10 years of experience in administrative and financial routines, Danielle Fernandes has worked providing services such as Accounts Payable and Receivable, Credit Control and Analysis, and Customer Service in banks, finance companies, and import companies.",
        image: Escarlatedanielle,
      
      },
      {
        name: "PRISCILA PARAGUASSÚ",
        role: "Production Director",
        bio: "Originally from Rio de Janeiro, Priscila Paraguassú graduated in Event Management and Technology, is a certified Occupational Safety Technician, and works as a Film and Cultural Producer. She has also worked in HR management, commercial, executive, and public service areas. Fluent in Brazilian Sign Language (Libras) and English, she has extensive experience in major organizations such as Amnesty International and the Museum of Tomorrow. She began her career producing cultural and musical events and, after years in the market, migrated to the audiovisual sector with the mission of making it more inclusive, safe, respectful, and sustainable. She has worked in the production of series, films, and projects such as: Under Pressure, DOM, How to Be a Carioca, The Division, Renegade Angel, among others. Currently, as Production and Fundraising Director at Escarlate, she oversaw production management for the project 'Black Brazilian Music' and was Production Coordinator for the feature film 'The Hijacking of Flight 375'.",
        image: Escarlatepriscila,
      
      },
      {
        name: "CANDY SAAVEDRA",
        role: "Executive Producer",
        bio: "With a degree in Film, Candy has built a 15-year career in the audiovisual industry. “My passion for the seventh art led me to explore all aspects of content and production, from directing to editing. Throughout this journey, I have pursued innovation and excellence, resulting in cinematic projects that tell emotional and impactful stories. My commitment to visual storytelling has allowed me to conquer new horizons, reinforcing my dedication to the art of storytelling through cinematography.”",
        image: Escarlatecandy,
      
      },
      {
        name: "GISELE VITÓRIA",
        role: "Communications Director",
        bio: "Gisele Vitória is Escarlate’s Communications Director. She was the editor-in-chief of IstoÉ Gente magazine, where she also took part in its creation and launch. She worked as a columnist and special editor at IstoÉ magazine, covering politics, society, economy and business, lifestyle, medicine, and culture. She also directed IstoÉ Platinum, Planeta, and Menu magazines. Gisele was a reporter for Jornal do Brasil, O Globo, and Rádio Globo. In 2018, she created the editorial project for Robb Report Brasil, where she is editor-in-chief. With a postgraduate degree in Editorial Direction from ESPM, she is co-author of the book 'The Press Between Antigone and Machiavelli.' Gisele was a member of the editorial board of ANER for five years. At Escarlate, she is a researcher and editorial production director for the documentary series 'Who Killed Celso Daniel'.",
        image: Escarlategisele,
      }
    ]
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "pt");

  useEffect(() => localStorage.setItem("lang", lang), [lang]);

  const t = (key) => {
    return key.split(".").reduce((obj, k) => (obj ? obj[k] : null), labels[lang]);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

