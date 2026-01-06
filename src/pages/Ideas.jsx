import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Chip,
  Grid,
  Stack,
  Link
} from '@mui/material';

export default function Ideas() {
  const ideas = [
    {
      id: 1,
      title: "Digital attendance system",
      desc: "Propose adding a QR-based attendance system to reduce paper-based records.",
      category: "Campus Improvement",
      votes: 42,
      status: "Under Review",
      posted: "3 days ago",
    },
    {
      id: 2,
      title: "Monthly student tech meet-up",
      desc: "Organize an informal tech-sharing evening every month for idea exchange.",
      category: "Community",
      votes: 19,
      status: "New",
      posted: "1 week ago",
    },
    {
      id: 3,
      title: "Recycling bins for each block",
      desc: "Increase campus sustainability by installing more categorized waste bins.",
      category: "Environment",
      votes: 33,
      status: "Approved",
      posted: "5 days ago",
    },
  ];

  const getStatusStyles = (status) => {
    switch (status) {
      case "New":
        return {
          color: '#3b82f6',
          bgcolor: 'rgba(59, 130, 246, 0.1)',
          borderColor: 'rgba(59, 130, 246, 0.2)'
        };
      case "Under Review":
        return {
          color: '#f59e0b',
          bgcolor: 'rgba(245, 158, 11, 0.1)',
          borderColor: 'rgba(245, 158, 11, 0.2)'
        };
      case "Approved":
        return {
          color: '#10b981',
          bgcolor: 'rgba(16, 185, 129, 0.1)',
          borderColor: 'rgba(16, 185, 129, 0.2)'
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
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: '#1f2937' }}>Idea Incubator</Typography>
          <Typography variant="body1" sx={{ color: '#4b5563', maxWidth: 800, lineHeight: 1.7 }}>
            Share your innovative ideas that could improve campus life, events,
            workflows or student engagement. Students can vote, review and help
            shape real improvements.
          </Typography>
        </Box>

        {/* Submit CTA */}
        <Paper elevation={0} sx={{
          p: { xs: 3, md: 4 },
          borderRadius: '24px',
          mb: 6,
          bgcolor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)'
        }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: '#1f2937' }}>Submit a New Idea</Typography>
          <Typography variant="body2" sx={{ color: '#6b7280', mt: 1, mb: 3 }}>
            Contribute something new or propose enhancements to existing systems.
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/ideas/new"
            sx={{
              bgcolor: '#00c4cc',
              fontWeight: 700,
              px: 4,
              py: 1.2,
              borderRadius: '12px',
              textTransform: 'none',
              boxShadow: '0 4px 14px 0 rgba(0, 196, 204, 0.3)',
              '&:hover': {
                bgcolor: '#00b0b8',
                boxShadow: '0 6px 20px 0 rgba(0, 196, 204, 0.4)'
              }
            }}
          >
            + Submit Idea
          </Button>
        </Paper>

        {/* Ideas List */}
        <Stack spacing={3} sx={{ mb: 8 }}>
          {ideas.map((idea) => (
            <Link
              key={idea.id}
              component={RouterLink}
              to={`/ideas/${idea.id}`}
              sx={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: '20px',
                  border: '1px solid #f3f4f6',
                  bgcolor: '#ffffff',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 30px -10px rgba(0,0,0,0.08)',
                    borderColor: '#e5e7eb'
                  }
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { md: 'center' }, gap: 2, mb: 1.5 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#1f2937', fontSize: '1.1rem' }}>{idea.title}</Typography>
                  <Stack direction="row" spacing={1}>
                    <Chip
                      label={idea.status}
                      variant="outlined"
                      size="small"
                      sx={{
                        ...getStatusStyles(idea.status),
                        fontWeight: 600,
                        borderRadius: '8px',
                        borderWidth: '1px'
                      }}
                    />
                    <Chip
                      label={idea.category}
                      size="small"
                      sx={{
                        color: '#00c4cc',
                        bgcolor: 'rgba(0, 196, 204, 0.08)',
                        fontWeight: 600,
                        borderRadius: '8px'
                      }}
                    />
                  </Stack>
                </Box>

                <Typography variant="body2" sx={{ color: '#4b5563', mb: 3, lineHeight: 1.6 }}>{idea.desc}</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" sx={{ color: '#9ca3af', fontWeight: 500 }}>
                    <Box component="span" sx={{ color: '#6b7280', fontWeight: 600 }}>{idea.votes} votes</Box> · Posted {idea.posted}
                  </Typography>
                </Box>
              </Paper>
            </Link>
          ))}
        </Stack>

        {/* Info Panels */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 4, height: '100%', borderRadius: '24px', border: '1px solid #f3f4f6', bgcolor: '#ffffff' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1f2937' }}>How Idea Incubator Works</Typography>
              <Typography variant="body2" sx={{ color: '#4b5563', lineHeight: 1.7 }}>
                Students submit ideas. Others can vote for them. Highly rated ideas
                move into review. Approved ideas can be forwarded to administration
                or included in campus development plans.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 4, height: '100%', borderRadius: '24px', border: '1px solid #f3f4f6', bgcolor: '#ffffff' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1f2937' }}>What Makes a Good Idea?</Typography>
              <Box component="ul" sx={{ color: '#4b5563', fontSize: '0.9rem', pl: 2.5, '& li': { mb: 1 } }}>
                <li>Clear and actionable</li>
                <li>Realistic and practical</li>
                <li>Improves the campus or community</li>
                <li>Encourages collaboration</li>
                <li>Can be expanded into a project</li>
              </Box>
            </Paper>
          </Grid>
        </Grid>


      </Container>
    </Box>
  );
}