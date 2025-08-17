import React, { createContext, useContext, useEffect, useState } from "react";

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
    }
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
    }
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

