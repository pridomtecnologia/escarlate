import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

const labels = {
  pt: {
    menu: [
      "CONHEÇA A ESCARLATE",
      "DIRETORES",
      "PUBLICIDADE",
      "ENTRETENIMENTO",
      "NOTÍCIAS",
      "SERVIÇOS",
      "CONTATO"
    ],
    film: "Filme",
  },
  en: {
    menu: [
      "ABOUT ESCARLATE",
      "DIRECTORS",
      "ADVERTISING",
      "ENTERTAINMENT",
      "NEWS",
      "SERVICES",
      "CONTACT"
    ],
    film: "Film",
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "pt");
  useEffect(() => localStorage.setItem("lang", lang), [lang]);
  const t = (key) => labels[lang][key];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
