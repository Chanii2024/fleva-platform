import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Chip,
  Grid,
  Link,
  Stack
} from '@mui/material';

export default function Home() {
  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #537ea8ff, #e5f5f4ff)',
      color: '#2d333a',
      position: 'relative',
      overflowX: 'hidden'
    }}>

      {/* Background Glow Accents */}
      <Box sx={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <Box sx={{
          position: 'absolute', top: '10%', right: '-5%', width: 600, height: 600,
          borderRadius: '50%', bgcolor: 'rgba(0, 196, 204, 0.1)', filter: 'blur(120px)'
        }} />
        <Box sx={{
          position: 'absolute', bottom: '10%', left: '-5%', width: 500, height: 500,
          borderRadius: '50%', bgcolor: 'rgba(125, 42, 232, 0.08)', filter: 'blur(120px)'
        }} />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: { xs: 8, md: 18 }, pb: 10 }}>
        {/* HERO SECTION GRID */}
        <Grid container spacing={6} alignItems="center">

          {/* LEFT CONTENT: Headline & Primary Actions */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                // Reduced size by ~30% (was 4.5rem)
                fontSize: { xs: '2.2rem', md: '3.2rem' },
                lineHeight: 1.1,
                mb: 3,
                letterSpacing: '-0.02em',
                color: '#2d333a'
              }}
            >
              A better way to <br />
              <Box component="span" sx={{
                // Changed from gradient to solid Cyan to match your image
                color: '#00c4cc',
              }}>
                connect, collaborate <br /> & create
              </Box> on campus.
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: '#545d6a',
                fontWeight: 400,
                mb: 5,
                maxWidth: '550px',
                lineHeight: 1.6,
                fontSize: '1.15rem'
              }}
            >
              FLEVA is a clean, structured student platform that organizes your campus life —
              anonymous posts, problem solving, notes, skill exchange and more.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                component={RouterLink}
                to="/register"
                sx={{
                  bgcolor: '#00c4cc',
                  color: '#fff',
                  px: 4,
                  py: 1.5,
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  textTransform: 'none',
                  boxShadow: '0 8px 20px rgba(0, 196, 204, 0.2)',
                  '&:hover': { bgcolor: '#00a9b0' }
                }}
              >
                Create an Account
              </Button>
              <Button
                variant="outlined"
                component={RouterLink}
                to="/login"
                sx={{
                  borderColor: 'rgba(0, 196, 204, 0.3)',
                  color: '#545d6a',
                  px: 4,
                  py: 1.5,
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textTransform: 'none',
                  bgcolor: 'rgba(235, 241, 247, 0.5)',
                  '&:hover': { borderColor: '#00c4cc', bgcolor: '#9ad8e9ff' }
                }}
              >
                Already a member?
              </Button>
            </Stack>
          </Grid>

          {/* RIGHT CONTENT: Platform Snapshot Glass Card */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: '24px',
                background: 'linear-gradient(to bottom, #7aa1c9ff, #e5f5f4ff)',
                border: '1px solid #f0f2f5',
                boxShadow: '0 20px 60px rgba(0,0,0,0.05)'
              }}
            >
              <Typography variant="overline" sx={{ letterSpacing: 2, color: '#49607bff', fontWeight: 600, mb: 3, display: 'block', fontSize: '0.75rem' }}>
                PLATFORM SNAPSHOT
              </Typography>

              <Stack spacing={2.5}>
                {/* Mock Anonymous Post */}
                <Box sx={{ p: 2.5, borderRadius: '16px', bgcolor: '#c2d1e4ff', border: '1px solid #f0f2f5', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
                  <Typography variant="caption" sx={{ color: '#8b949e', fontWeight: 500 }}>Anonymous Post</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600, mt: 0.5, color: '#2d333a' }}>“Why is wifi down in Block B again?”</Typography>
                  <Typography variant="caption" sx={{ display: 'block', mt: 1, color: '#8b949e' }}>18 replies · added to Problem Hub</Typography>
                </Box>

                {/* Grid for Problem & Skill */}
                <Grid container spacing={2}>
                  <Grid size={{ xs: 6 }}>
                    <Box sx={{ p: 2, borderRadius: '16px', bgcolor: '#c2d1e4ff', border: '1px solid #f0f2f5', height: '100%', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
                      <Typography variant="caption" sx={{ color: '#8b949e', fontWeight: 600, fontSize: '0.7rem', textTransform: 'uppercase' }}>PROBLEM HUB</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 700, mt: 0.5, color: '#2d333a' }}>Library AC not working</Typography>
                      <Chip label="Pending" size="small" sx={{ mt: 1, height: 20, fontSize: '0.65rem', bgcolor: '#ffffffff', color: '#ff3c01ff', fontWeight: 700 }} />
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <Box sx={{ p: 2, borderRadius: '16px', bgcolor: '#c2d1e4ff', border: '1px solid #f0f2f5', height: '100%', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
                      <Typography variant="caption" sx={{ color: '#8b949e', fontWeight: 600, fontSize: '0.7rem', textTransform: 'uppercase' }}>SKILL EXCHANGE</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 700, mt: 0.5, color: '#2d333a' }}>“Teach me Java → I help with UX”</Typography>
                      <Typography variant="caption" sx={{ color: '#8b949e', display: 'block', mt: 0.5 }}>4 matches</Typography>
                    </Box>
                  </Grid>
                </Grid>

                {/* Bottom Stats Banner */}
                <Box sx={{
                  p: 2,
                  borderRadius: '12px',
                  bgcolor: '#dcfce7', // Approximate teal/green bg from your image
                  background: 'linear-gradient(90deg, #9fbce2ff 0%, #b2e8f7ff 100%)',
                  textAlign: 'center'
                }}>
                  <Typography variant="body2" sx={{ color: '#4a5058', fontWeight: 500, fontSize: '0.85rem' }}>
                    Today in FLEVA: <strong>22</strong> new posts, <strong>9</strong> problems logged, <strong>3</strong> ideas promoted.
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>

        {/* FEATURES GRID SECTION */}
        <Box sx={{ mt: 10 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 6, color: '#1f3546ff' }}>
            Everything you need in one place.
          </Typography>

          <Grid container spacing={4}>
            {[
              ["Anonymous Posts", "Speak freely. Stay safe.", "/posts"],
              ["Discussion Rooms", "Real-time student conversations.", "/rooms"],
              ["Problem Hub", "Turn issues into solutions.", "/problems"],
              ["Skill Exchange", "Learn from each other.", "/skills"],
              ["Notes & Resources", "Organized knowledge base.", "/notes"],
              ["Idea Incubator", "Grow ideas into projects.", "/ideas"],
            ].map(([title, desc, link]) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={title}>
                <Link component={RouterLink} to={link} sx={{ textDecoration: 'none' }}>
                  <Paper
                    sx={{
                      p: 4,
                      borderRadius: '16px',
                      height: '100%',
                      bgcolor: '#e0e9f4ff', // Pure white cards
                      border: 'none',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.02)', // Very subtle shadow
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
                      }
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#4b5354ff', mb: 1, fontSize: '1.1rem' }}>{title}</Typography>
                    <Typography variant="body2" sx={{ color: '#79808aff', lineHeight: 1.6 }}>{desc}</Typography>
                  </Paper>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}