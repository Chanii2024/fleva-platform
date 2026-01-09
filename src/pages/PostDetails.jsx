import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  Button,
  Paper,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { fetchPost } from '../services/PostService';

export default function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetchPost(id).then(p => {
      if (mounted) setPost(p);
    });
    return () => { mounted = false; };
  }, [id]);

  if (!post) {
    return (
      <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6" sx={{ color: '#6b7280' }}>Loading post...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f0f4f8 0%, #e6f7ff 100%)', py: 8 }}>
      <Container maxWidth="md">
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate('/posts')} sx={{ mb: 3 }}>
          Back to feed
        </Button>

        <Paper sx={{ p: 4, borderRadius: '16px' }} elevation={0}>
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#1f2937' }}>{post.title}</Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                <Chip label={post.tag || 'Other'} sx={{ bgcolor: 'rgba(0,0,0,0.04)', fontWeight: 700 }} />
                <Chip label={post.status || 'New'} sx={{ fontWeight: 700 }} />
                <Chip label={`Replies: ${post.replies ?? 0}`} sx={{ fontWeight: 700 }} />
              </Stack>
            </Box>
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="body2" sx={{ color: '#6b7280' }}>{post.reportedFrom || 'Community'}</Typography>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1, justifyContent: 'flex-end' }}>
                <AccessTimeIcon sx={{ color: '#9ca3af', fontSize: '1rem' }} />
                <Typography variant="caption" sx={{ color: '#9ca3af' }}>{new Date(post.createdAt || Date.now()).toLocaleString()}</Typography>
              </Stack>
            </Box>
          </Stack>

          <Box sx={{ mt: 3 }}>
            <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8 }}>{post.body}</Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
