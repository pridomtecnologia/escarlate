import { Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function WhatsAppComponent() {

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/?text=Olá, gostaria de entrar em contato', '_blank');
    };

    return (
        <>
            <Box
                onClick={handleWhatsAppClick}
                sx={{
                position: 'fixed',
                bottom: 55,
                right: 30,
                backgroundColor: '#25D366',
                borderRadius: '50%',
                width: 60,
                height: 60,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 1000,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                '&:hover': {
                    backgroundColor: '#128C7E',
                }
                }}
            >
                <WhatsAppIcon sx={{ color: 'white', fontSize: 32 }} />
            </Box>
        </>
    )
}