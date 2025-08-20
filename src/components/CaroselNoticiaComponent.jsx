import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLanguage } from "../i18n/LanguageContext";
import DePerto from "../assets/images/ddeperto2.jpg";
import aculpa from "../assets/images/aculpa.jpg";
import chicomendes from "../assets/images/chicomendes.jpg";
import nascidos from "../assets/images/nascidos.jpg";
import sequestro from "../assets/images/sequestro.jpg";
import noticia1 from "../assets/images/noticia1.jpg";
import noticia2 from "../assets/images/noticia2.jpg";
import noticia3 from "../assets/images/noticia3.webp";
import noticia4 from "../assets/images/noticia4.jpg";
import noticia5 from "../assets/images/noticia5.webp";


export default function CaroselNoticiaComponent() {
  const { t } = useLanguage();

  const images = [
    noticia3,
    chicomendes,
    noticia2,
    noticia5,
  ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,           
        autoplay: true,     
        autoplaySpeed: 2000, 
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        pauseOnHover: false, 
        pauseOnFocus: false,  
        dotsClass: "slick-dots custom-dots",
        customPaging: () => <div className="dot" />,
        appendDots: (dots) => (
            <div style={{ position: "absolute", bottom: 28, width: "100%" }}>
            <ul style={{ margin: 0, padding: 0, display: "flex", justifyContent: "center", gap: 10 }}>
                {dots}
            </ul>
            </div>
        ),
    };



  return (
    <Slider {...settings}>
      {images.map((img, i) => (
        <div key={i} style={{ position: "relative" }}>
          <img src={img} alt={`slide-${i}`} style={{ width: "100%", height: "100vh", objectFit: "cover" }} />
          <div
            style={{
              position: "absolute",
              bottom: "18%",
              left: "10%",
              color: "#fff",
              fontSize: "2.2rem",
              textShadow: "2px 2px 6px rgba(0,0,0,.8)",
            }}
          >
          </div>
        </div>
      ))}
    </Slider>
  );
}
