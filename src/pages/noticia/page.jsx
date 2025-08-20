import CaroselNoticiaComponent from "../../components/CaroselNoticiaComponent";
import NoticiaComponent from "../../components/NoticiaComponent";
import WhatsAppComponent from '../../components/WhatsAppComponent';
import Footer from "../../components/Footer";
import LanguageSwitcher from "../../components/LanguageSwitcher";

export default function Noticia() {
  return (
    <>
      <CaroselNoticiaComponent />
      <NoticiaComponent />
      <WhatsAppComponent />
      <Footer />
      <LanguageSwitcher />
    </>
  );
}
