import { useState } from "react";
import { Box, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import DePerto from "../assets/images/ddeperto2.jpg";
import aculpa from "../assets/images/aculpa.jpg";
import chicomendes from "../assets/images/chicomendes.jpg";
import nascidos from "../assets/images/nascidos.jpg";
import sequestro from "../assets/images/sequestro.jpg";
import ocasocelsodaniel from "../assets/images/ocasocelsodaniel.jpg";
import tiros from "../assets/images/21Tiros.jpg";
import agentedomedo from "../assets/images/agentedomedo.png";
import vozes from "../assets/images/vozes.jpg";
import GuaraCapa from "../assets/images/Guara_Capa.jpg";
import juiza from "../assets/images/juiza.png";
import po from "../assets/images/po.jpg";
import Senha from "../assets/images/Senha.png";
import SylvieCapa from "../assets/images/SylvieCapa.png";

const shows = [
  {
    title: "De Perto",
    img: DePerto,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    type: "mp4"
  },
  {
    title: "A culpa",
    img: aculpa,
    video: "https://www.w3schools.com/html/movie.mp4",
    type: "mp4"
  },
  {
    title: "Chico Mendes",
    img: chicomendes,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    type: "mp4"
  },
  {
    title: "Nascidos",
    img: nascidos,
    video: "https://www.w3schools.com/html/movie.mp4",
    type: "mp4"
  },
  {
    title: "Sequestro",
    img: sequestro,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    type: "mp4"
  },
  {
    title: "O Caso Celso Daniel",
    img: ocasocelsodaniel,
    video: "https://www.w3schools.com/html/movie.mp4",
    type: "mp4"
  },
  {
    title: "Tiros",
    img: tiros,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    type: "mp4"
  },
  {
    title: "A gente do medo",
    img: agentedomedo,
    video: "https://www.w3schools.com/html/movie.mp4",
    type: "mp4"
  },
  {
    title: "Vozes",
    img: vozes,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    type: "mp4"
  },
  {
    title: "GuaraCapa",
    img: GuaraCapa,
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    type: "mp4"
  },
  {
    title: "juiza",
    img: juiza,
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    type: "mp4"
  },
  {
    title: "po",
    img: po,
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    type: "mp4"
  },
  {
    title: "Senha",
    img: Senha,
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    type: "mp4"
  },
  {
    title: "SylvieCapa",
    img: SylvieCapa,
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    type: "mp4"
  }
];

export default function FilmsComponent() {
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [videoType, setVideoType] = useState(""); // mp4 ou youtube

  const handleOpen = (video, type) => {
    setSelectedVideo(video);
    setVideoType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideo("");
    setVideoType("");
  };

  // Função para extrair o ID do vídeo do YouTube
  const getYouTubeId = (url) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : null;
  };

  return (
    <>
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                background: "#000",
                overflowX: "hidden",
                "&::-webkit-scrollbar": { display: "none" },
                "@media (max-width: 900px)": {
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                },
            }}
        >
            {shows.map((show, index) => (
            <Box
                key={index}
                component="img"
                src={show.img}
                alt={show.title}
                onClick={() => handleOpen(show.video, show.type || "mp4")}
                sx={{
                flex: "0 0 auto",
                width: "25%",
                height: "auto",
                objectFit: "cover",
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": {
                    opacity: 0.8,
                    transform: "scale(1.02)",
                },
                "@media (max-width: 900px)": {
                    width: "100%",
                },
                }}
            />
            ))}
        </Box>

        {/* Modal com vídeo */}
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth="md"
            PaperProps={{
            sx: { background: "black", position: "relative" },
            }}
        >
            <IconButton
            onClick={handleClose}
            sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "white",
                zIndex: 1,
            }}
            >
            <CloseIcon />
            </IconButton>

            {selectedVideo && (
            <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
                {videoType === "youtube" ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${getYouTubeId(selectedVideo)}?autoplay=1`}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none"
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={selectedVideo}
                    controls
                    autoPlay
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                )}
            </Box>
            )}
        </Dialog>
    </>
  );
}
