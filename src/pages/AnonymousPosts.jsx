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

export default function AnonymousPosts() {
  const posts = [
    {
      id: 1,
      title: "WiFi down in Block B again?",
      body: "It's been slow for 2 days. Anyone else having issues?",
      tag: "Facilities",
      replies: 14,
      status: "Being Discussed",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Exam timetable release delay",
      body: "Semester 2 exam dates still not updated by admin.",
      tag: "Academic",
      replies: 9,
      status: "Forwarded to Problem Hub",
      time: "5 hours ago",
    },
    {
      id: 3,
      title: "Canteen food prices increasing?",
      body: "Rice plate from 120 → 160. Any official update?",
      tag: "Canteen",
      replies: 6,
      status: "New",
      time: "1 day ago",
    },
  ];

  const getStatusStyles = (status) => {
    switch (status) {
      case "Forwarded to Problem Hub":
        return {
          color: '#00c4cc',
          bgcolor: 'rgba(0, 196, 204, 0.1)',
          borderColor: 'rgba(0, 196, 204, 0.2)'
        };
      case "Being Discussed":
        return {
          color: '#f59e0b',
          bgcolor: 'rgba(245, 158, 11, 0.1)',
          borderColor: 'rgba(245, 158, 11, 0.2)'
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
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: '#1f2937' }}>
            Anonymous Community Space
          </Typography>
          <Typography variant="body1" sx={{ color: '#4b5563', maxWidth: 700, lineHeight: 1.6 }}>
            Share experiences, concerns, thoughts and ideas — anonymously. Posts needing attention are automatically forwarded to the{" "}
            <Box component="span" sx={{ color: '#00c4cc', fontWeight: 700 }}>Problem Hub</Box>.
          </Typography>
        </Box>

        {/* Filter Buttons */}
        <Stack direction="row" spacing={1.5} sx={{ mb: 6, flexWrap: 'wrap', gap: 1.5 }}>
          {["Trending", "Newest", "Most Replies", "Recently Resolved"].map((filter) => (
            <Button
              key={filter}
              variant="outlined"
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.8)',
                color: '#4b5563',
                borderColor: '#e5e7eb',
                textTransform: 'none',
                borderRadius: '12px',
                fontWeight: 600,
                px: 2.5,
                '&:hover': {
                  borderColor: '#00c4cc',
                  color: '#00c4cc',
                  bgcolor: '#fff'
                }
              }}
            >
              {filter}
            </Button>
          ))}
        </Stack>

        {/* Create Post CTA */}
        <Paper elevation={0} sx={{
          p: { xs: 3, md: 4 },
          borderRadius: '24px',
          mb: 6,
          bgcolor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)'
        }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: '#1f2937' }}>Start a new anonymous post</Typography>
          <Typography variant="body2" sx={{ color: '#6b7280', mb: 3 }}>
            Share your thoughts safely. No identity stored or displayed.
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/posts/create"
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
            + Create Anonymous Post
          </Button>
        </Paper>

        {/* Posts List */}
        <Stack spacing={3} sx={{ mb: 8 }}>
          {posts.map((post) => (
            <Paper
              key={post.id}
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
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                <Typography
                  variant="h6"
                  component={RouterLink}
                  to={`/posts/${post.id}`}
                  sx={{
                    fontWeight: 700,
                    color: '#1f2937',
                    fontSize: '1.1rem',
                    textDecoration: 'none',
                    '&:hover': { color: '#00c4cc' }
                  }}
                >
                  {post.title}
                </Typography>
                <Chip
                  label={post.tag}
                  size="small"
                  sx={{
                    bgcolor: 'rgba(0, 196, 204, 0.08)',
                    color: '#00c4cc',
                    fontWeight: 600,
                    borderRadius: '8px',
                    height: '24px'
                  }}
                />
              </Box>
              <Typography variant="body2" sx={{ color: '#4b5563', mb: 3, lineHeight: 1.6 }}>{post.body}</Typography>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="caption" sx={{ color: '#9ca3af', fontWeight: 500 }}>
                  {post.replies} replies · {post.time}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <Chip
                    label={post.status}
                    variant="outlined"
                    size="small"
                    sx={{
                      ...getStatusStyles(post.status),
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      borderRadius: '8px',
                      borderWidth: '1px'
                    }}
                  />
                  <Button
                    component={RouterLink}
                    to="/posts/create"
                    state={{ post }}
                    size="small"
                    sx={{ textTransform: 'none', fontWeight: 700, ml: 1 }}
                  >
                    Edit
                  </Button>
                  <Button
                    component={RouterLink}
                    to={`/posts/${post.id}`}
                    size="small"
                    sx={{ textTransform: 'none', fontWeight: 700, ml: 0 }}
                  >
                    View
                  </Button>
                </Box>
              </Box>
            </Paper>
          ))}
        </Stack>

        {/* Info Panels */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{
              p: 4,
              height: '100%',
              borderRadius: '24px',
              border: '1px solid #f3f4f6',
              bgcolor: '#ffffff'
            }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1f2937' }}>Posting Guidelines</Typography>
              <Box component="ul" sx={{
                color: '#4b5563',
                fontSize: '0.9rem',
                pl: 2.5,
                '& li': { mb: 1 }
              }}>
                <li>No personal attacks</li>
                <li>No identifying information about others</li>
                <li>No threats or abusive content</li>
                <li>Use respectful language</li>
                <li>For urgent issues, use the Problem Hub</li>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{
              p: 4,
              height: '100%',
              borderRadius: '24px',
              border: '1px solid #f3f4f6',
              bgcolor: '#ffffff'
            }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1f2937' }}>How It Works</Typography>
              <Typography variant="body2" sx={{ color: '#4b5563', lineHeight: 1.7 }}>
                Anonymous posts allow students to raise concerns without fear. Moderators may forward posts needing attention into the Problem Hub. Students can reply and help collaboratively solve issues.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
}