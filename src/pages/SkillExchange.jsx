import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Chip,
  Grid,
  Stack
} from '@mui/material';

export default function SkillExchange() {
  const skills = [
    {
      id: 1,
      title: "React.js for Beginners",
      type: "Teach",
      learners: 12,
      level: "Beginner",
      desc: "I can help you understand components, props, hooks and basic UI building.",
      posted: "Today",
      category: "Programming",
    },
    {
      id: 2,
      title: "UI/UX Fundamentals",
      type: "Learn",
      learners: 6,
      level: "Any",
      desc: "Looking for someone who can guide me on wireframes, layouts and minimal design.",
      posted: "2 days ago",
      category: "Design",
    },
    {
      id: 3,
      title: "Cybersecurity Basics",
      type: "Teach",
      learners: 4,
      level: "Beginner",
      desc: "Topics include network security, encryption basics, and threat awareness.",
      posted: "1 week ago",
      category: "IT / Security",
    },
  ];

  const getTypeStyles = (type) => {
    switch (type) {
      case "Teach":
        return {
          color: '#059669',
          bgcolor: 'rgba(5, 150, 105, 0.1)',
          borderColor: 'rgba(5, 150, 105, 0.2)'
        };
      case "Learn":
        return {
          color: '#0891b2',
          bgcolor: 'rgba(8, 145, 178, 0.1)',
          borderColor: 'rgba(8, 145, 178, 0.2)'
        };
      default:
        return {
          color: '#6b7280',
          bgcolor: 'rgba(107, 114, 128, 0.1)',
          borderColor: 'rgba(107, 114, 128, 0.2)'
        };
    }
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f4f8 0%, #e6f7ff 100%)',
      py: 8,
      fontFamily: '"Inter", "Roboto", sans-serif'
    }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ mt: 10, mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: '#1f2937' }}>Skill Exchange</Typography>
          <Typography variant="body1" sx={{ color: '#4b5563', maxWidth: 800, lineHeight: 1.6 }}>
            A structured way to share knowledge within your community. Offer your skills or request help — build a supportive learning network.
          </Typography>
        </Box>

        {/* CTA Section */}
        <Paper elevation={0} sx={{
          p: { xs: 3, md: 4 },
          borderRadius: '24px',
          mb: 6,
          bgcolor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)'
        }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#1f2937' }}>Share or request a skill</Typography>
          <Typography variant="body2" sx={{ color: '#6b7280', mt: 1, mb: 3 }}>
            Help others learn something new or find mentors to grow your own skills.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              component={RouterLink}
              to="/skills/new-teach"
              sx={{
                bgcolor: '#00c4cc',
                fontWeight: 700,
                px: 3,
                py: 1,
                borderRadius: '12px',
                textTransform: 'none',
                boxShadow: '0 4px 14px 0 rgba(0, 196, 204, 0.3)',
                '&:hover': {
                  bgcolor: '#00b0b8',
                  boxShadow: '0 6px 20px 0 rgba(0, 196, 204, 0.4)'
                }
              }}
            >
              + Offer to Teach
            </Button>
            <Button
              variant="outlined"
              component={RouterLink}
              to="/skills/new-learn"
              sx={{
                borderColor: '#e5e7eb',
                color: '#4b5563',
                fontWeight: 600,
                px: 3,
                py: 1,
                borderRadius: '12px',
                textTransform: 'none',
                '&:hover': {
                  borderColor: '#00c4cc',
                  color: '#00c4cc',
                  bgcolor: '#fff'
                }
              }}
            >
              + Request to Learn
            </Button>
          </Stack>
        </Paper>

        {/* Skill List */}
        <Stack spacing={3} sx={{ mb: 8 }}>
          {skills.map((s) => (
            <Paper
              key={s.id}
              elevation={0}
              sx={{
                p: 3,
                borderRadius: '20px',
                border: '1px solid #f3f4f6',
                bgcolor: '#ffffff',
                transition: 'all 0.2s ease-in-out',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 30px -10px rgba(0,0,0,0.08)',
                  borderColor: '#e5e7eb'
                }
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#1f2937', fontSize: '1.1rem' }}>{s.title}</Typography>
                <Chip
                  label={s.type}
                  variant="outlined"
                  size="small"
                  sx={{
                    ...getTypeStyles(s.type),
                    fontWeight: 600,
                    borderRadius: '8px',
                    borderWidth: '1px'
                  }}
                />
              </Box>
              <Typography variant="body2" sx={{ color: '#4b5563', mb: 3, lineHeight: 1.6 }}>{s.desc}</Typography>
              <Stack direction="row" flexWrap="wrap" gap={3} sx={{ color: '#9ca3af', fontSize: '0.85rem' }}>
                <Typography variant="inherit">Category: <Box component="span" sx={{ fontWeight: 500, color: '#6b7280' }}>{s.category}</Box></Typography>
                <Typography variant="inherit">Level: <Box component="span" sx={{ fontWeight: 500, color: '#6b7280' }}>{s.level}</Box></Typography>
                <Typography variant="inherit">Interest: <Box component="span" sx={{ fontWeight: 500, color: '#6b7280' }}>{s.learners} learners</Box></Typography>
                <Typography variant="inherit">Posted: <Box component="span" sx={{ fontWeight: 500, color: '#6b7280' }}>{s.posted}</Box></Typography>
              </Stack>
            </Paper>
          ))}
        </Stack>

        {/* Info Panels */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 4, height: '100%', borderRadius: '24px', border: '1px solid #f3f4f6', bgcolor: '#ffffff' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1f2937' }}>Why Skill Exchange?</Typography>
              <Box component="ul" sx={{ color: '#4b5563', fontSize: '0.9rem', pl: 2.5, '& li': { mb: 1 } }}>
                <li>Encourages collaborative learning</li>
                <li>Builds confidence and communication</li>
                <li>Helps discover hidden talents</li>
                <li>Strengthens student community</li>
                <li>Creates long-term learning habits</li>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 4, height: '100%', borderRadius: '24px', border: '1px solid #f3f4f6', bgcolor: '#ffffff' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1f2937' }}>How It Works</Typography>
              <Typography variant="body2" sx={{ color: '#4b5563', lineHeight: 1.7 }}>
                Anyone can offer to teach something they know or request guidance on a topic they want to learn. Other students can join as learners or mentors, forming supportive micro-communities around each skill.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box component="footer" sx={{ mt: 10, pt: 4, borderTop: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
          <Typography variant="caption" sx={{ color: '#9ca3af' }}>© 2025 FLEVA Platform — Skill Exchange Module</Typography>
        </Box>
      </Container>
    </Box>
  );
}