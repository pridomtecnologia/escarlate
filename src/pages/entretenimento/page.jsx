import Carousel from "../../components/Carousel";
import FilmsComponent from "../../components/FilmsComponent";
import WhatsAppComponent from '../../components/WhatsAppComponent';
import Footer from "../../components/Footer";
import LanguageSwitcher from "../../components/LanguageSwitcher";

export default function Entretenimento() {
  return (
    <>
      <Carousel />
      <FilmsComponent />
      <WhatsAppComponent />
      <Footer />
      <LanguageSwitcher />
    </>
  );
}
