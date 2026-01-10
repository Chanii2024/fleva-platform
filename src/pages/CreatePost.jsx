import { useState, useEffect, useRef } from "react";
import { createPost, validatePost } from '../models/Post';
import { submitPost, updatePost, deletePost, uploadPostImage, getPostImageUrl } from '../services/PostService';
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  TextField,
  Chip,
  Stack,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  Alert,
  IconButton,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageIcon from '@mui/icons-material/Image';

export default function CreatePost() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    tag: 'Academic',
    anonymous: true,
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const tags = ['Academic', 'Facilities', 'Canteen', 'IT', 'Campus Life', 'Events', 'Other'];
  const location = useLocation();
  const editingPost = location.state?.post || null;
  const isEditing = !!editingPost;

  useEffect(() => {
    if (isEditing && editingPost) {
      setFormData({
        title: editingPost.title || '',
        body: editingPost.content || editingPost.body || '',
        tag: (editingPost.tags && editingPost.tags[0]) || editingPost.tag || 'Academic',
        anonymous: editingPost.anonymous !== undefined ? editingPost.anonymous : true,
      });
      
      // Set image preview if post has an image
      if (editingPost.imageUrl) {
        setImagePreview(getPostImageUrl(editingPost.id));
      }
    }
  }, [isEditing, editingPost]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = validatePost(formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({ ...prev, image: 'Please select an image file' }));
        return;
      }
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, image: 'Image must be less than 5MB' }));
        return;
      }
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setErrors(prev => ({ ...prev, image: '' }));
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (isEditing && editingPost) {
      // Update existing post
      const updated = {
        title: formData.title,
        content: formData.body,
        community: editingPost.community || 'General',
        tags: [formData.tag],
        anonymous: formData.anonymous
      };
      
      try {
        const userId = localStorage.getItem('userId') || 'anonymous-user';
        await updatePost(editingPost.id, updated, userId);
        
        // Upload new image if one was selected
        if (imageFile) {
          await uploadPostImage(editingPost.id, userId, imageFile);
        }
      } catch (err) {
        console.warn('updatePost failed', err);
      }
      setShowSuccess(true);
      setTimeout(() => navigate('/posts'), 600);
      return;
    }

    const post = createPost(formData);
    try {
      // Get userId from localStorage or your auth system
      const userId = localStorage.getItem('userId') || 'anonymous-user';
      await submitPost(post, userId, imageFile);
    } catch (err) {
      console.warn('submitPost failed', err);
    }
    console.log('Submitting post:', post);
    setShowSuccess(true);
    setTimeout(() => {
      navigate('/posts');
    }, 800);
  };

  const handleCancel = () => {
    navigate('/posts');
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f4f8 0%, #e6f7ff 100%)',
      py: 8,
      fontFamily: '"Inter", "Roboto", sans-serif'
    }}>
      <Container maxWidth="md">

        {/* Header */}
        <Box sx={{ mt: 10, mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: '#1f2937' }}>
            Create a Post
          </Typography>
          <Typography variant="body1" sx={{ color: '#4b5563', maxWidth: 700, lineHeight: 1.6 }}>
            Share your thoughts, concerns, or questions with the community. Posts are anonymous by default.
          </Typography>
        </Box>

        {/* Success Alert */}
        {showSuccess && (
          <Alert 
            severity="success" 
            sx={{ 
              mb: 4, 
              borderRadius: '16px',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              bgcolor: 'rgba(16, 185, 129, 0.05)'
            }}
          >
            <strong>Post created successfully!</strong> Redirecting to community feed...
          </Alert>
        )}

        {/* Main Form Card */}
        <Paper 
          component="form" 
          onSubmit={handleSubmit}
          elevation={0} 
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: '24px',
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.9)',
            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.08)'
          }}
        >

          {/* Title Input */}
          <Box sx={{ mb: 4 }}>
            <Typography 
              variant="subtitle1" 
              sx={{ fontWeight: 700, color: '#1f2937', mb: 1.5 }}
            >
              Post Title *
            </Typography>
            <TextField
              fullWidth
              placeholder="e.g., WiFi down in Block B again?"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              error={!!errors.title}
              helperText={errors.title || `${formData.title.length}/100 characters`}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  bgcolor: '#fff',
                  '& fieldset': { borderColor: '#e5e7eb' },
                  '&:hover fieldset': { borderColor: '#00c4cc' },
                  '&.Mui-focused fieldset': { borderColor: '#00c4cc', borderWidth: '2px' }
                }
              }}
            />
          </Box>

          {/* Body Input */}
          <Box sx={{ mb: 4 }}>
            <Typography 
              variant="subtitle1" 
              sx={{ fontWeight: 700, color: '#1f2937', mb: 1.5 }}
            >
              Post Content *
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={6}
              placeholder="Share your thoughts, concerns, or questions in detail..."
              value={formData.body}
              onChange={(e) => handleChange('body', e.target.value)}
              error={!!errors.body}
              helperText={errors.body || 'Be respectful and constructive'}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  bgcolor: '#fff',
                  '& fieldset': { borderColor: '#e5e7eb' },
                  '&:hover fieldset': { borderColor: '#00c4cc' },
                  '&.Mui-focused fieldset': { borderColor: '#00c4cc', borderWidth: '2px' }
                }
              }}
            />
          </Box>

          {/* Image Upload */}
          <Box sx={{ mb: 4 }}>
            <Typography 
              variant="subtitle1" 
              sx={{ fontWeight: 700, color: '#1f2937', mb: 1.5 }}
            >
              Attach Image (Optional)
            </Typography>
            
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              style={{ display: 'none' }}
              id="image-upload"
            />
            
            {!imagePreview ? (
              <Box
                component="label"
                htmlFor="image-upload"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 4,
                  border: '2px dashed #e5e7eb',
                  borderRadius: '12px',
                  bgcolor: '#fafafa',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  '&:hover': {
                    borderColor: '#00c4cc',
                    bgcolor: 'rgba(0, 196, 204, 0.05)'
                  }
                }}
              >
                <CloudUploadIcon sx={{ fontSize: 48, color: '#9ca3af', mb: 1 }} />
                <Typography variant="body1" sx={{ fontWeight: 600, color: '#4b5563' }}>
                  Click to upload an image
                </Typography>
                <Typography variant="body2" sx={{ color: '#9ca3af', mt: 0.5 }}>
                  PNG, JPG, GIF up to 5MB
                </Typography>
              </Box>
            ) : (
              <Box sx={{ position: 'relative', display: 'inline-block' }}>
                <Box
                  component="img"
                  src={imagePreview}
                  alt="Preview"
                  sx={{
                    maxWidth: '100%',
                    maxHeight: 300,
                    borderRadius: '12px',
                    border: '1px solid #e5e7eb'
                  }}
                />
                <IconButton
                  onClick={handleRemoveImage}
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    bgcolor: 'rgba(239, 68, 68, 0.9)',
                    color: '#fff',
                    '&:hover': {
                      bgcolor: '#ef4444'
                    }
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            )}
            
            {errors.image && (
              <Typography variant="body2" sx={{ color: '#ef4444', mt: 1 }}>
                {errors.image}
              </Typography>
            )}
          </Box>

          {/* Tag Selection */}
          <Box sx={{ mb: 4 }}>
            <Typography 
              variant="subtitle1" 
              sx={{ fontWeight: 700, color: '#1f2937', mb: 1.5 }}
            >
              Category Tag
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1.5 }}>
              {tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  onClick={() => handleChange('tag', tag)}
                  sx={{
                    borderRadius: '10px',
                    fontWeight: 600,
                    px: 1,
                    cursor: 'pointer',
                    bgcolor: formData.tag === tag ? '#00c4cc' : 'rgba(255, 255, 255, 0.8)',
                    color: formData.tag === tag ? '#fff' : '#4b5563',
                    border: formData.tag === tag ? '2px solid #00c4cc' : '1px solid #e5e7eb',
                    '&:hover': {
                      bgcolor: formData.tag === tag ? '#00b3bb' : '#f9fafb',
                      borderColor: '#00c4cc'
                    }
                  }}
                />
              ))}
            </Stack>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Anonymity Setting */}
          <Box sx={{ mb: 4 }}>
            <FormControl component="fieldset">
              <FormLabel 
                component="legend" 
                sx={{ 
                  fontWeight: 700, 
                  color: '#1f2937', 
                  mb: 1.5,
                  '&.Mui-focused': { color: '#1f2937' }
                }}
              >
                Post Visibility
              </FormLabel>
              <RadioGroup
                value={formData.anonymous ? 'anonymous' : 'public'}
                onChange={(e) => handleChange('anonymous', e.target.value === 'anonymous')}
              >
                <FormControlLabel
                  value="anonymous"
                  control={
                    <Radio 
                      sx={{ 
                        color: '#00c4cc',
                        '&.Mui-checked': { color: '#00c4cc' }
                      }} 
                    />
                  }
                  label={
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600, color: '#1f2937' }}>
                        Anonymous (Recommended)
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#6b7280' }}>
                        Your identity will not be visible to others
                      </Typography>
                    </Box>
                  }
                  sx={{ 
                    mb: 2,
                    p: 2,
                    borderRadius: '12px',
                    border: '1px solid',
                    borderColor: formData.anonymous ? '#00c4cc' : '#e5e7eb',
                    bgcolor: formData.anonymous ? 'rgba(0, 196, 204, 0.05)' : 'transparent',
                    ml: 0,
                    mr: 0,
                    width: '100%'
                  }}
                />
                <FormControlLabel
                  value="public"
                  control={
                    <Radio 
                      sx={{ 
                        color: '#00c4cc',
                        '&.Mui-checked': { color: '#00c4cc' }
                      }} 
                    />
                  }
                  label={
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600, color: '#1f2937' }}>
                        Public
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#6b7280' }}>
                        Your name will be shown with the post
                      </Typography>
                    </Box>
                  }
                  sx={{ 
                    p: 2,
                    borderRadius: '12px',
                    border: '1px solid',
                    borderColor: !formData.anonymous ? '#00c4cc' : '#e5e7eb',
                    bgcolor: !formData.anonymous ? 'rgba(0, 196, 204, 0.05)' : 'transparent',
                    ml: 0,
                    mr: 0,
                    width: '100%'
                  }}
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Action Buttons */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              type="submit"
              variant="contained"
              startIcon={<CheckCircleIcon />}
              sx={{
                bgcolor: '#00c4cc',
                color: '#fff',
                borderRadius: '12px',
                textTransform: 'none',
                fontWeight: 700,
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                boxShadow: '0 4px 20px rgba(0, 196, 204, 0.3)',
                '&:hover': {
                  bgcolor: '#00b3bb',
                  boxShadow: '0 6px 25px rgba(0, 196, 204, 0.4)',
                  transform: 'translateY(-1px)'
                },
                transition: 'all 0.2s'
              }}
            >
              Publish Post
            </Button>
            {isEditing ? (
              <Button
                type="button"
                variant="outlined"
                color="error"
                startIcon={<CancelIcon />}
                onClick={async () => {
                  if (!window.confirm('Delete this post? This cannot be undone.')) return;
                  try {
                    await deletePost(editingPost.id);
                  } catch (err) {
                    console.warn('deletePost failed', err);
                  }
                  navigate('/posts');
                }}
                sx={{
                  borderColor: '#ef4444',
                  color: '#ef4444',
                  borderRadius: '12px',
                  textTransform: 'none',
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                }}
              >
                Delete Post
              </Button>
            ) : (
              <Button
                type="button"
                variant="outlined"
                startIcon={<CancelIcon />}
                onClick={handleCancel}
                sx={{
                  borderColor: '#e5e7eb',
                  color: '#6b7280',
                  borderRadius: '12px',
                  textTransform: 'none',
                  fontWeight: 700,
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  '&:hover': {
                    borderColor: '#ef4444',
                    color: '#ef4444',
                    bgcolor: 'rgba(239, 68, 68, 0.05)'
                  }
                }}
              >
                Cancel
              </Button>
            )}
          </Stack>

          {/* Guidelines Footer */}
          <Box sx={{ 
            mt: 5, 
            p: 3, 
            borderRadius: '12px', 
            bgcolor: 'rgba(59, 130, 246, 0.05)',
            border: '1px solid rgba(59, 130, 246, 0.1)'
          }}>
            <Typography variant="body2" sx={{ color: '#4b5563', fontWeight: 600, mb: 1 }}>
              📋 Community Guidelines
            </Typography>
            <Typography variant="body2" sx={{ color: '#6b7280', lineHeight: 1.7 }}>
              • Be respectful and constructive<br />
              • No hate speech or harassment<br />
              • Posts violating guidelines may be forwarded to moderators<br />
              • Serious issues will be escalated to the Problem Hub
            </Typography>
          </Box>

        </Paper>

      </Container>
    </Box>
  );
}
