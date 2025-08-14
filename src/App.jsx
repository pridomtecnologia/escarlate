import { useState, useEffect } from "react";
import { LanguageProvider } from "./i18n/LanguageContext";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import LanguageSwitcher from "./components/LanguageSwitcher";
import "./App.css"; // Aqui colocaremos o CSS do preloader
import logo from "./assets/Escarlate_LogoTransparente-1.png";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // tempo do preloader (2s)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      {loading ? (
        <div className="preloader">
          <img src={logo} alt="Escarlate Logo" className="preloader-logo" />
        </div>
      ) : (
        <>
          <Header />
          <Carousel />
          <LanguageSwitcher />
        </>
      )}
    </LanguageProvider>
  );
}
