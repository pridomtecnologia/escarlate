import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Footer from "../../components/Footer";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import WhatsAppComponent from '../../components/WhatsAppComponent';
import { useLanguage } from "../../i18n/LanguageContext";


export default function Contato() {

  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    mensagem: ''
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  return (
    <>
        <Box sx={{ backgroundColor: '#000000', color: 'white',py: 6,
            pt: { xs: 12, md: 16 } }}>
            <Grid container spacing={4} justifyContent="center">
            {/* Texto à esquerda */}
            <Grid item xs={12} md={5}>
                <Box sx={{ px: 4 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    {t("contato.frase")}<br />{t("contato.frase1")}
                </Typography>
                <Typography variant="body1" sx={{ mt: 3 }}>
                    {t("contato.info")}<br />
                    {t("contato.info2")}<br />
                    {t("contato.info3")}
                </Typography>
                </Box>
            </Grid>

            {/* Formulário à direita */}
            <Grid item xs={12} md={5}>
                <Box component="form" onSubmit={handleSubmit} sx={{ px: 4 }}>
                <TextField
                    fullWidth
                    placeholder={t("contato.campoNome")}
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    variant="standard"
                    InputProps={{ disableUnderline: false }}
                    sx={{ mb: 3, backgroundColor: 'transparent', color: 'white', input: { color: 'white' }, '& .MuiInput-underline:before': {
                        borderBottomColor: '#ED0220',
                        },
                        '& .MuiInput-underline:after': {
                        borderBottomColor: '#ED0220',
                        } 
                    }}
                />

                <TextField
                    fullWidth
                    placeholder={t("contato.campoTel")}
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    variant="standard"
                    InputProps={{ disableUnderline: false }}
                    sx={{ mb: 3, input: { color: 'white' }, '& .MuiInput-underline:before': {
                        borderBottomColor: '#ED0220',
                        },
                        '& .MuiInput-underline:after': {
                        borderBottomColor: '#ED0220',
                        } 
                    }}
                />

                <TextField
                    fullWidth
                    placeholder={t("contato.campoEmail")}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="standard"
                    InputProps={{ disableUnderline: false }}
                    sx={{ mb: 3, input: { color: 'white' }, '& .MuiInput-underline:before': {
                        borderBottomColor: '#ED0220',
                        },
                        '& .MuiInput-underline:after': {
                        borderBottomColor: '#ED0220',
                        } }}
                />

                <TextField
                    fullWidth
                    placeholder={t("contato.campoMensagem")}
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    variant="standard"
                    InputProps={{ disableUnderline: false }}
                    sx={{ mb: 4, textarea: { color: 'white' }, '& .MuiInput-underline:before': {
                        borderBottomColor: '#ED0220',
                        },
                        '& .MuiInput-underline:after': {
                        borderBottomColor: '#ED0220',
                        } }}
                />

                <Button
                    variant="outlined"
                    type="submit"
                    fullWidth
                    sx={{
                    color: 'white',
                    borderColor: '#ED0220',
                    fontWeight: 'bold',
                    py: 1.5,
                    mb: 2,
                    '&:hover': {
                        backgroundColor: '#ED0220',
                        borderColor: '#ED0220'
                    }
                    }}
                >
                  {t("contato.enviar")}
                </Button>

                <Typography variant="caption" display="block" align="center" sx={{ mt: 1 }}>
                  {t("contato.aviso")}
                </Typography>
                </Box>
            </Grid>
            </Grid>
        </Box>

      <WhatsAppComponent />
      <Footer />
      <LanguageSwitcher />
    </>
  );
}
