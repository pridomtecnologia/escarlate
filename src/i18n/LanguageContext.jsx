import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

const labels = {
  pt: {
    menu: [
      "CONHEÇA A ESCARLATE",
      "EQUIPE",
      "PUBLICIDADE",
      "ENTRETENIMENTO",
      "BLOG",
      "SERVIÇOS",
      "CONTATO"
    ],
  },
  en: {
    menu: [
      "ABOUT ESCARLATE",
      "TEAM",
      "ADVERTISING",
      "ENTERTAINMENT",
      "BLOG",
      "SERVICES",
      "CONTACT"
    ],
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
