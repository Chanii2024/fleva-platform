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
  Divider,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Tooltip,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import PersonIcon from '@mui/icons-material/Person';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { fetchPost, getPostImageUrl, deletePost } from '../services/PostService';

export default function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchPost(id).then(p => {
      if (mounted) {
        setPost(p);
        setLoading(false);
      }
    }).catch(() => {
      if (mounted) setLoading(false);
    });
    return () => { mounted = false; };
  }, [id]);

  const handleEdit = () => {
    // Navigate to create/edit page with post data
    navigate('/posts/create', { state: { post } });
  };

  const handleDeleteClick = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
  };

  const handleDeleteConfirm = async () => {
    setDeleting(true);
    try {
      const userId = localStorage.getItem('userId') || 'anonymous-user';
      await deletePost(post.id, userId);
      setDeleteDialogOpen(false);
      navigate('/posts');
    } catch (err) {
      console.error('Failed to delete post:', err);
      alert('Failed to delete post. Please try again.');
      setDeleting(false);
      setDeleteDialogOpen(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
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

  if (loading) {
    return (
      <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6" sx={{ color: '#6b7280' }}>Loading post...</Typography>
      </Box>
    );
  }

  if (!post) {
    return (
      <Box sx={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6" sx={{ color: '#6b7280', mb: 2 }}>Post not found</Typography>
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate('/posts')} variant="outlined">
          Back to feed
        </Button>
      </Box>
    );
  }

  const tagStyle = getTagColor(post.tags?.[0] || 'Other');

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f0f4f8 0%, #e6f7ff 100%)', py: 8 }}>
      <Container maxWidth="md">
        {/* Header with Back Button and Actions */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, mt: 8 }}>
          <Button 
            startIcon={<ArrowBackIcon />} 
            onClick={() => navigate('/posts')} 
            sx={{ 
              color: '#4b5563',
              fontWeight: 600,
              '&:hover': { color: '#00c4cc' }
            }}
          >
            Back to feed
          </Button>
          
          {/* Edit and Delete Buttons */}
          <Stack direction="row" spacing={1}>
            <Tooltip title="Edit post">
              <IconButton
                onClick={handleEdit}
                sx={{
                  bgcolor: 'rgba(59, 130, 246, 0.1)',
                  color: '#3b82f6',
                  '&:hover': {
                    bgcolor: 'rgba(59, 130, 246, 0.2)',
                  }
                }}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete post">
              <IconButton
                onClick={handleDeleteClick}
                sx={{
                  bgcolor: 'rgba(239, 68, 68, 0.1)',
                  color: '#ef4444',
                  '&:hover': {
                    bgcolor: 'rgba(239, 68, 68, 0.2)',
                  }
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>

        <Paper 
          sx={{ 
            borderRadius: '24px',
            overflow: 'hidden',
            bgcolor: '#fff',
            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.08)'
          }} 
          elevation={0}
        >
          {/* Post Image (if exists) - fetched via GET /posts/{postId}/image */}
          {post.imageUrl && (
            <Box
              sx={{
                width: '100%',
                maxHeight: 400,
                overflow: 'hidden',
                bgcolor: '#f3f4f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Box
                component="img"
                src={getPostImageUrl(post.id)}
                alt={post.title}
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 400,
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  // Hide image if it fails to load
                  e.target.style.display = 'none';
                }}
              />
            </Box>
          )}

          {/* Post Content */}
          <Box sx={{ p: { xs: 3, md: 5 } }}>
            {/* Tags Row */}
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              {post.tags?.map((tag, idx) => {
                const style = getTagColor(tag);
                return (
                  <Chip
                    key={idx}
                    label={tag}
                    size="small"
                    sx={{
                      bgcolor: style.bg,
                      color: style.color,
                      fontWeight: 600,
                      borderRadius: '8px'
                    }}
                  />
                );
              })}
              {post.community && (
                <Chip
                  label={post.community}
                  size="small"
                  variant="outlined"
                  sx={{
                    fontWeight: 500,
                    borderRadius: '8px',
                    borderColor: '#e5e7eb',
                    color: '#6b7280'
                  }}
                />
              )}
            </Stack>

            {/* Title */}
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 800, 
                color: '#1f2937',
                mb: 2,
                lineHeight: 1.3
              }}
            >
              {post.title}
            </Typography>

            {/* Meta Info Row */}
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2} 
              alignItems={{ xs: 'flex-start', sm: 'center' }}
              sx={{ mb: 3 }}
            >
              {/* Time */}
              <Stack direction="row" spacing={0.5} alignItems="center">
                <AccessTimeIcon sx={{ color: '#9ca3af', fontSize: '1rem' }} />
                <Typography variant="body2" sx={{ color: '#6b7280' }}>
                  {formatDate(post.createdAt)}
                </Typography>
              </Stack>

              {/* Anonymous Status */}
              <Stack direction="row" spacing={0.5} alignItems="center">
                {post.anonymous && !post.identityRevealed ? (
                  <>
                    <PersonOffIcon sx={{ color: '#9ca3af', fontSize: '1rem' }} />
                    <Typography variant="body2" sx={{ color: '#6b7280' }}>
                      Posted anonymously
                    </Typography>
                  </>
                ) : (
                  <>
                    <PersonIcon sx={{ color: '#00c4cc', fontSize: '1rem' }} />
                    <Typography variant="body2" sx={{ color: '#6b7280' }}>
                      {post.authorId || 'Community member'}
                    </Typography>
                  </>
                )}
              </Stack>
            </Stack>

            <Divider sx={{ mb: 3 }} />

            {/* Post Content/Body */}
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#374151', 
                lineHeight: 1.8,
                fontSize: '1.05rem',
                whiteSpace: 'pre-wrap'
              }}
            >
              {post.content || post.body}
            </Typography>

            <Divider sx={{ my: 4 }} />

            {/* Votes Section */}
            <Stack 
              direction="row" 
              spacing={3} 
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" spacing={2}>
                {/* Upvote */}
                <Stack 
                  direction="row" 
                  spacing={1} 
                  alignItems="center"
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: '12px',
                    bgcolor: 'rgba(16, 185, 129, 0.1)',
                  }}
                >
                  <ThumbUpIcon sx={{ color: '#10b981', fontSize: '1.3rem' }} />
                  <Typography variant="body1" sx={{ color: '#10b981', fontWeight: 700 }}>
                    {post.upvotes || 0}
                  </Typography>
                </Stack>

                {/* Downvote */}
                <Stack 
                  direction="row" 
                  spacing={1} 
                  alignItems="center"
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: '12px',
                    bgcolor: 'rgba(239, 68, 68, 0.1)',
                  }}
                >
                  <ThumbDownIcon sx={{ color: '#ef4444', fontSize: '1.3rem' }} />
                  <Typography variant="body1" sx={{ color: '#ef4444', fontWeight: 700 }}>
                    {post.downvotes || 0}
                  </Typography>
                </Stack>
              </Stack>

              {/* Updated At */}
              {post.updatedAt && post.updatedAt !== post.createdAt && (
                <Typography variant="caption" sx={{ color: '#9ca3af' }}>
                  Updated: {formatDate(post.updatedAt)}
                </Typography>
              )}
            </Stack>
          </Box>
        </Paper>
      </Container>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={handleDeleteCancel}
        PaperProps={{
          sx: {
            borderRadius: '16px',
            p: 1
          }
        }}
      >
        <DialogTitle sx={{ fontWeight: 700, color: '#1f2937' }}>
          Delete Post?
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: '#4b5563' }}>
            Are you sure you want to delete this post? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button 
            onClick={handleDeleteCancel}
            disabled={deleting}
            sx={{ 
              color: '#6b7280',
              fontWeight: 600,
              textTransform: 'none'
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleDeleteConfirm}
            disabled={deleting}
            variant="contained"
            sx={{ 
              bgcolor: '#ef4444',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: '10px',
              '&:hover': {
                bgcolor: '#dc2626'
              }
            }}
          >
            {deleting ? 'Deleting...' : 'Delete'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
