import { useState, useEffect } from "react";
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
  CircularProgress,
} from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ImageIcon from '@mui/icons-material/Image';
import { fetchPosts } from '../services/PostService';

export default function AnonymousPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('Newest');

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchPosts().then(data => {
      if (mounted) {
        setPosts(data);
        setLoading(false);
      }
    }).catch(() => {
      if (mounted) setLoading(false);
    });
    return () => { mounted = false; };
  }, []);

  // Sort posts based on filter
  const sortedPosts = [...posts].sort((a, b) => {
    switch (filter) {
      case 'Trending':
        return ((b.upvotes || 0) - (b.downvotes || 0)) - ((a.upvotes || 0) - (a.downvotes || 0));
      case 'Most Upvoted':
        return (b.upvotes || 0) - (a.upvotes || 0);
      case 'Newest':
      default:
        return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
    }
  });

  const formatTimeAgo = (dateString) => {
    if (!dateString) return 'Just now';
    const now = new Date();
    const date = new Date(dateString);
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  const getTagColor = (tag) => {
    const colors = {
      'Academic': { bg: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' },
      'Facilities': { bg: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' },
      'Canteen': { bg: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' },
      'IT': { bg: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' },
      'Campus Life': { bg: 'rgba(16, 185, 129, 0.1)', color: '#10b981' },
      'Events': { bg: 'rgba(236, 72, 153, 0.1)', color: '#ec4899' },
    };
    return colors[tag] || { bg: 'rgba(107, 114, 128, 0.1)', color: '#6b7280' };
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
          {["Newest", "Trending", "Most Upvoted"].map((f) => (
            <Button
              key={f}
              variant="outlined"
              onClick={() => setFilter(f)}
              sx={{
                bgcolor: filter === f ? '#00c4cc' : 'rgba(255, 255, 255, 0.8)',
                color: filter === f ? '#fff' : '#4b5563',
                borderColor: filter === f ? '#00c4cc' : '#e5e7eb',
                textTransform: 'none',
                borderRadius: '12px',
                fontWeight: 600,
                px: 2.5,
                '&:hover': {
                  borderColor: '#00c4cc',
                  color: filter === f ? '#fff' : '#00c4cc',
                  bgcolor: filter === f ? '#00b3bb' : '#fff'
                }
              }}
            >
              {f}
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
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress sx={{ color: '#00c4cc' }} />
          </Box>
        ) : sortedPosts.length === 0 ? (
          <Paper elevation={0} sx={{ p: 6, borderRadius: '20px', textAlign: 'center', bgcolor: '#fff' }}>
            <Typography variant="h6" sx={{ color: '#6b7280', mb: 1 }}>No posts yet</Typography>
            <Typography variant="body2" sx={{ color: '#9ca3af' }}>Be the first to share something!</Typography>
          </Paper>
        ) : (
          <Stack spacing={2} sx={{ mb: 8 }}>
            {sortedPosts.map((post) => {
              const tagStyle = getTagColor(post.tags?.[0] || 'Other');
              return (
                <Paper
                  key={post.id}
                  component={RouterLink}
                  to={`/posts/${post.id}`}
                  elevation={0}
                  sx={{
                    p: 2.5,
                    borderRadius: '16px',
                    border: '1px solid #f3f4f6',
                    bgcolor: '#ffffff',
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 30px -10px rgba(0,0,0,0.08)',
                      borderColor: '#00c4cc'
                    }
                  }}
                >
                  {/* Header Row: Title + Tag + Image indicator */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#1f2937',
                        fontSize: '1rem',
                        flex: 1,
                        mr: 2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {post.title}
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      {post.imageUrl && (
                        <ImageIcon sx={{ color: '#9ca3af', fontSize: '1.2rem' }} />
                      )}
                      <Chip
                        label={post.tags?.[0] || 'Other'}
                        size="small"
                        sx={{
                          bgcolor: tagStyle.bg,
                          color: tagStyle.color,
                          fontWeight: 600,
                          borderRadius: '8px',
                          height: '24px',
                          fontSize: '0.75rem'
                        }}
                      />
                    </Stack>
                  </Box>

                  {/* Footer Row: Time + Votes + Anonymous indicator */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <AccessTimeIcon sx={{ color: '#9ca3af', fontSize: '0.9rem' }} />
                        <Typography variant="caption" sx={{ color: '#9ca3af', fontWeight: 500 }}>
                          {formatTimeAgo(post.createdAt)}
                        </Typography>
                      </Stack>
                      {post.anonymous && !post.identityRevealed && (
                        <Chip
                          label="Anonymous"
                          size="small"
                          sx={{
                            bgcolor: 'rgba(107, 114, 128, 0.1)',
                            color: '#6b7280',
                            fontWeight: 500,
                            borderRadius: '6px',
                            height: '20px',
                            fontSize: '0.7rem'
                          }}
                        />
                      )}
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <ThumbUpOutlinedIcon sx={{ color: '#10b981', fontSize: '1rem' }} />
                        <Typography variant="caption" sx={{ color: '#10b981', fontWeight: 600 }}>
                          {post.upvotes || 0}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <ThumbDownOutlinedIcon sx={{ color: '#ef4444', fontSize: '1rem' }} />
                        <Typography variant="caption" sx={{ color: '#ef4444', fontWeight: 600 }}>
                          {post.downvotes || 0}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Paper>
              );
            })}
          </Stack>
        )}

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