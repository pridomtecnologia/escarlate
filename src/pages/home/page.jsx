import Carousel from "../../components/Carousel";
import SobreEscarlate from "../../components/SobreEscarlate";
import PortfolioSection from "../../components/PortfolioSection";
import NossosNumeros from "../../components/NossosNumeros";
import ServicesHome from "../../components/ServicesHome";
import Footer from "../../components/Footer";
import LanguageSwitcher from "../../components/LanguageSwitcher";

export default function Home() {
  return (
    <>
      <Carousel />
      <SobreEscarlate />
      <PortfolioSection />
      <NossosNumeros />
      <ServicesHome />
      <Footer />
      <LanguageSwitcher />
    </>
  );
}
