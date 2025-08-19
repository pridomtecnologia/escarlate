import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import Header from "./components/Header";
import Home from "./pages/home/page";
import Equipe from "./pages/equipe/page";
import Entretenimento from "./pages/entretenimento/page";
import Internacional from "./pages/internacional/page";
// import Servicos from "./pages/Servicos";
// import Contato from "./pages/Contato";
import "./App.css";
import logo from "./assets/Escarlate_LogoTransparente-1.png";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/entretenimento" element={<Entretenimento />} />
            <Route path="/internacional" element={<Internacional />} />
            {/* 
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/contato" element={<Contato />} /> */}
          </Routes>
        </Router>
      )}
    </LanguageProvider>
  );
}
