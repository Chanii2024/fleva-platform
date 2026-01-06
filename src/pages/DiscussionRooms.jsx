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

export default function DiscussionRooms() {
  const rooms = [
    {
      id: 1,
      title: "HND SE - Batch 23/24",
      desc: "General discussion room for the full batch.",
      members: 58,
      activity: "Active",
      lastMessage: "5 min ago",
      type: "Batch",
    },
    {
      id: 2,
      title: "Web Development Project Group",
      desc: "Coordinate project tasks, issues and updates.",
      members: 12,
      activity: "Busy",
      lastMessage: "12 min ago",
      type: "Project",
    },
    {
      id: 3,
      title: "Cyber Security Club",
      desc: "Share resources, updates and events.",
      members: 37,
      activity: "Quiet",
      lastMessage: "1 hour ago",
      type: "Club",
    },
  ];

  const getActivityStyles = (activity) => {
    switch (activity) {
      case "Active":
        return {
          color: '#10b981',
          bgcolor: 'rgba(16, 185, 129, 0.1)',
          borderColor: 'rgba(16, 185, 129, 0.2)'
        };
      case "Busy":
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
            Discussion Rooms
          </Typography>
          <Typography variant="body1" sx={{ color: '#4b5563', maxWidth: 700, lineHeight: 1.6 }}>
            Join focused discussion groups for batches, clubs, courses and projects.
            Rooms help keep conversations structured and easy to navigate.
          </Typography>
        </Box>

        {/* Create Room CTA */}
        <Paper elevation={0} sx={{
          p: { xs: 3, md: 4 },
          borderRadius: '24px',
          mb: 6,
          bgcolor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)'
        }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: '#1f2937' }}>Create a New Room</Typography>
          <Typography variant="body2" sx={{ color: '#6b7280', mb: 3 }}>
            Start a dedicated space for your group, class, club or event.
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/rooms/new"
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
            + Create Discussion Room
          </Button>
        </Paper>

        {/* Rooms List */}
        <Stack spacing={3} sx={{ mb: 8 }}>
          {rooms.map((room) => (
            <Link
              key={room.id}
              component={RouterLink}
              to={`/rooms/${room.id}`}
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#1f2937', fontSize: '1.1rem' }}>{room.title}</Typography>
                  <Chip
                    label={room.type}
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

                <Typography variant="body2" sx={{ color: '#4b5563', mb: 3, lineHeight: 1.6 }}>{room.desc}</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="caption" sx={{ color: '#9ca3af', fontWeight: 500 }}>
                    {room.members} members · Last message {room.lastMessage}
                  </Typography>
                  <Chip
                    label={room.activity}
                    variant="outlined"
                    size="small"
                    sx={{
                      ...getActivityStyles(room.activity),
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      borderRadius: '8px',
                      borderWidth: '1px'
                    }}
                  />
                </Box>
              </Paper>
            </Link>
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
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1f2937' }}>Room Usage Guidelines</Typography>
              <Box component="ul" sx={{
                color: '#4b5563',
                fontSize: '0.9rem',
                pl: 2.5,
                '& li': { mb: 1 }
              }}>
                <li>Keep discussions relevant to the room’s purpose.</li>
                <li>No spam, self-promotion or unrelated content.</li>
                <li>Respect others and maintain a friendly space.</li>
                <li>Report inappropriate activity through proper channels.</li>
                <li>Admins may moderate discussions if required.</li>
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
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1f2937' }}>How Discussion Rooms Work</Typography>
              <Typography variant="body2" sx={{ color: '#4b5563', lineHeight: 1.7 }}>
                Each room contains structured message threads for different groups.
                Rooms help reduce clutter and keep important updates visible.
                Students can collaborate, share resources, plan events and ask questions
                in dedicated spaces that stay organized over time.
              </Typography>
            </Paper>
          </Grid>
        </Grid>


      </Container>
    </Box>
  );
}