import { useState } from "react";
import { Box, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import monica from "../assets/images/monica1.jpg";

const shows = [
    {
        title: "Monica",
        img: monica,
        video: 'https://youtu.be/os8xbNzqA2I?si=BTcqEI1hheAy-TXY',
        type: "youtube"
    }
];

export default function FilmsInternacionalComponent() {
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [videoType, setVideoType] = useState("");

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
