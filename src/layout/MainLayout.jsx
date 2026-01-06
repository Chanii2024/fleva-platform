import { Box, AppBar, Toolbar, Typography, Button, Container, Grid, Link, Stack, IconButton } from '@mui/material';
import { Link as RouterLink, Outlet, useLocation } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function MainLayout() {
    const location = useLocation();

    // Helper to determine if a path is active
    const isActive = (path) => location.pathname === path;

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

            {/* DARK FLOATING HEADER (Matches your Reference Image) */}
            <AppBar
                position="fixed"
                elevation={4}
                sx={{
                    top: 24, // Floats from top
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: { xs: '95%', md: '90%', lg: '1200px' }, // Responsive width
                    bgcolor: '#0f172a', // Dark Navy/Black background
                    borderRadius: '999px', // Full Pill Shape
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(20px)',
                    zIndex: 1200,
                    px: 1
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between', minHeight: '64px !important', px: 2 }}>

                    {/* LEFT: BRANDING */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        {/* Logo Icon Box */}
                        <Box sx={{
                            width: 40,
                            height: 40,
                            bgcolor: '#00c4cc',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 0 15px rgba(0, 196, 204, 0.4)'
                        }}>
                            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 900 }}>F</Typography>
                        </Box>
                        <Typography
                            variant="h6"
                            component={RouterLink}
                            to="/"
                            sx={{
                                fontWeight: 700,
                                textDecoration: 'none',
                                color: '#fff',
                                letterSpacing: '0.02em',
                                display: { xs: 'none', sm: 'block' }
                            }}
                        >
                            FLEVA
                        </Typography>
                    </Box>

                    {/* CENTER: PILL NAVIGATION (Matches "Overview/Projects" style) */}
                    <Box sx={{
                        display: { xs: 'none', md: 'flex' },
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                        p: 0.5,
                        borderRadius: '999px',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                        {[
                            { label: 'Home', path: '/' },
                            { label: 'Platform', path: '/features' }, // Mock link
                            { label: 'Community', path: '/community' } // Mock link
                        ].map((item) => (
                            <Button
                                key={item.label}
                                component={RouterLink}
                                to={item.path}
                                sx={{
                                    borderRadius: '999px',
                                    px: 3,
                                    py: 0.8,
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    color: isActive(item.path) ? '#fff' : '#94a3b8',
                                    bgcolor: isActive(item.path) ? '#00c4cc' : 'transparent',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: '#fff',
                                        bgcolor: isActive(item.path) ? '#00b0b8' : 'rgba(255,255,255,0.1)'
                                    }
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>

                    {/* RIGHT: AUTH ACTIONS */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Button
                            component={RouterLink}
                            to="/login"
                            sx={{
                                color: '#cbd5e1',
                                fontWeight: 600,
                                textTransform: 'none',
                                px: 2,
                                '&:hover': { color: '#fff' }
                            }}
                        >
                            Log In
                        </Button>
                        <Button
                            variant="contained"
                            component={RouterLink}
                            to="/register"
                            sx={{
                                bgcolor: '#1e293b', // Darker gray button
                                color: '#fff',
                                borderRadius: '999px',
                                textTransform: 'none',
                                fontWeight: 600,
                                px: 3,
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                '&:hover': {
                                    bgcolor: '#334155',
                                    borderColor: '#fff'
                                }
                            }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* PAGE CONTENT */}
            <Box component="main" sx={{ flexGrow: 1 }}>
                <Outlet />
            </Box>

            {/* FOOTER */}
            <Box component="footer" sx={{
                bgcolor: '#ffffff',
                borderTop: '1px solid #f3f4f6',
                pt: 8,
                pb: 4,
                mt: 'auto' // Keeps footer at bottom even on short pages
            }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4} justifyContent="space-between">

                        {/* Column 1: Brand & Socials */}
                        <Grid item xs={12} md={5}>
                            <Typography variant="h6" sx={{ fontWeight: 800, color: '#1f2937', mb: 2 }}>
                                <Box component="span" sx={{ color: '#00c4cc' }}>FLEVA</Box> Platform
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#6b7280', mb: 3, lineHeight: 1.6, maxWidth: 320 }}>
                                A structured student platform designed to improve campus collaboration, communication, and problem-solving.
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                {[FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon].map((Icon, index) => (
                                    <IconButton
                                        key={index}
                                        size="small"
                                        sx={{
                                            color: '#9ca3af',
                                            border: '1px solid #f3f4f6',
                                            '&:hover': { color: '#00c4cc', borderColor: '#00c4cc', bgcolor: 'transparent' }
                                        }}
                                    >
                                        <Icon fontSize="small" />
                                    </IconButton>
                                ))}
                            </Stack>
                        </Grid>

                        {/* Column 2: Platform Links */}
                        <Grid item xs={6} md={3}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#1f2937', mb: 2.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                Platform
                            </Typography>
                            <Stack spacing={1.5} alignItems="flex-start">
                                {['Anonymous Posts', 'Discussion Rooms', 'Problem Hub', 'Skill Exchange'].map((item) => (
                                    <Link key={item} component={RouterLink} to="#" underline="none" sx={{ color: '#6b7280', fontSize: '0.9rem', '&:hover': { color: '#00c4cc' } }}>
                                        {item}
                                    </Link>
                                ))}
                            </Stack>
                        </Grid>

                        {/* Column 3: Support Links */}
                        <Grid item xs={6} md={3}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#1f2937', mb: 2.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                Support
                            </Typography>
                            <Stack spacing={1.5} alignItems="flex-start">
                                {['Help Center', 'Guidelines', 'Privacy Policy', 'Terms of Service'].map((item) => (
                                    <Link key={item} component={RouterLink} to="#" underline="none" sx={{ color: '#6b7280', fontSize: '0.9rem', '&:hover': { color: '#00c4cc' } }}>
                                        {item}
                                    </Link>
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>

                    {/* Bottom Copyright Bar */}
                    <Box sx={{ mt: 8, pt: 3, borderTop: '1px solid #f3f4f6', textAlign: 'center' }}>
                        <Typography variant="caption" sx={{ color: '#9ca3af' }}>
                            © 2025 FLEVA Platform. Built for Agile Coursework. All rights reserved.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}