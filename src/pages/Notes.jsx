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
  TextField,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Notes() {
  const notes = [
    {
      id: 1,
      title: "OOP – Polymorphism Summary",
      course: "Object Oriented Programming",
      type: "PDF",
      size: "1.2 MB",
      uploaded: "2 days ago",
    },
    {
      id: 2,
      title: "Database Normalization 1NF-3NF",
      course: "Database Management Systems",
      type: "PDF",
      size: "850 KB",
      uploaded: "4 days ago",
    },
    {
      id: 3,
      title: "Networking Basics Short Notes",
      course: "Computer Networks",
      type: "DOCX",
      size: "410 KB",
      uploaded: "1 week ago",
    },
  ];

  const getTypeStyles = (type) => {
    switch (type) {
      case "PDF":
        return {
          color: '#ef4444',
          bgcolor: 'rgba(239, 68, 68, 0.1)',
          borderColor: 'rgba(239, 68, 68, 0.2)'
        };
      case "DOCX":
        return {
          color: '#2563eb',
          bgcolor: 'rgba(37, 99, 235, 0.1)',
          borderColor: 'rgba(37, 99, 235, 0.2)'
        };
      default:
        return {
          color: '#f59e0b',
          bgcolor: 'rgba(245, 158, 11, 0.1)',
          borderColor: 'rgba(245, 158, 11, 0.2)'
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
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: '#1f2937' }}>Notes & Resources</Typography>
          <Typography variant="body1" sx={{ color: '#4b5563', maxWidth: 800, lineHeight: 1.6 }}>
            A shared space for academic notes, summaries, past papers and useful resources.
            Upload materials or explore what others have contributed.
          </Typography>
        </Box>

        {/* Upload Button Section */}
        <Paper elevation={0} sx={{
          p: { xs: 3, md: 4 },
          borderRadius: '24px',
          mb: 6,
          bgcolor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)'
        }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#1f2937' }}>Upload a Resource</Typography>
          <Typography variant="body2" sx={{ color: '#6b7280', mt: 1, mb: 3 }}>
            Share lecture notes or helpful documents with your community.
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/notes/upload"
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
            + Upload Notes
          </Button>
        </Paper>

        {/* Search Bar */}
        <Box sx={{ mb: 6 }}>
          <TextField
            fullWidth
            placeholder="Search by course, topic, or file type..."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#9ca3af' }} />
                </InputAdornment>
              ),
              style: { borderRadius: '16px', backgroundColor: '#ffffff' }
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                '& fieldset': { border: '1px solid #f3f4f6' },
                '&:hover fieldset': { borderColor: '#d1d5db' },
                '&.Mui-focused fieldset': { borderColor: '#00c4cc' }
              }
            }}
          />
        </Box>

        {/* Notes List */}
        <Stack spacing={3} sx={{ mb: 8 }}>
          {notes.map((n) => (
            <Paper
              key={n.id}
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
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { md: 'center' }, gap: 2, mb: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#1f2937', fontSize: '1.1rem' }}>{n.title}</Typography>
                <Chip
                  label={`${n.type} File`}
                  variant="outlined"
                  size="small"
                  sx={{
                    ...getTypeStyles(n.type),
                    fontWeight: 600,
                    borderRadius: '8px',
                    borderWidth: '1px'
                  }}
                />
              </Box>

              <Typography variant="body2" sx={{ color: '#4b5563', mb: 3, fontWeight: 500 }}>{n.course}</Typography>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                <Stack direction="row" spacing={3} sx={{ color: '#9ca3af', fontSize: '0.85rem' }}>
                  <Typography variant="inherit">Size: <Box component="span" sx={{ color: '#6b7280', fontWeight: 500 }}>{n.size}</Box></Typography>
                  <Typography variant="inherit">Uploaded: <Box component="span" sx={{ color: '#6b7280', fontWeight: 500 }}>{n.uploaded}</Box></Typography>
                </Stack>

                <Stack direction="row" spacing={1.5}>
                  <Button size="small" sx={{ color: '#00c4cc', textTransform: 'none', fontWeight: 700, '&:hover': { bgcolor: 'rgba(0,196,204,0.05)' } }}>Download</Button>
                  <Button size="small" sx={{ color: '#6b7280', textTransform: 'none', fontWeight: 600, '&:hover': { bgcolor: 'rgba(0,0,0,0.05)' } }}>View</Button>
                </Stack>
              </Box>
            </Paper>
          ))}
        </Stack>

        {/* Info Panels */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 4, height: '100%', borderRadius: '24px', border: '1px solid #f3f4f6', bgcolor: '#ffffff' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1f2937' }}>What You Can Upload</Typography>
              <Box component="ul" sx={{ color: '#4b5563', fontSize: '0.9rem', pl: 2.5, '& li': { mb: 1 } }}>
                <li>Lecture summaries</li>
                <li>Past papers</li>
                <li>Model answers</li>
                <li>Slides or presentations</li>
                <li>Study guides</li>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 4, height: '100%', borderRadius: '24px', border: '1px solid #f3f4f6', bgcolor: '#ffffff' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1f2937' }}>How Notes Sharing Works</Typography>
              <Typography variant="body2" sx={{ color: '#4b5563', lineHeight: 1.7 }}>
                Notes uploaded by students and staff appear here instantly. They can be searched, downloaded or viewed online. This encourages collaborative learning and makes revision more efficient.
              </Typography>
            </Paper>
          </Grid>
        </Grid>


      </Container>
    </Box>
  );
}