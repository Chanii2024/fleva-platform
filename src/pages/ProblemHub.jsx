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

export default function ProblemHub() {
  const problems = [
    {
      id: 1,
      title: "WiFi unstable in Block B",
      desc: "Frequent disconnects during online assessments and lectures.",
      category: "Facilities / IT",
      status: "In Review",
      priority: "High",
      reportedFrom: "Anonymous Posts",
      age: "2 days ago",
    },
    {
      id: 2,
      title: "Canteen seating overcrowded at lunch",
      desc: "Not enough tables during peak time, many students stand and eat.",
      category: "Canteen / Student Life",
      status: "New",
      priority: "Medium",
      reportedFrom: "Direct Report",
      age: "5 hours ago",
    },
    {
      id: 3,
      title: "Projector not working in Lab 03",
      desc: "Display keeps flickering; impacts presentations.",
      category: "Classroom",
      status: "Resolved",
      priority: "High",
      reportedFrom: "Staff",
      age: "1 week ago",
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
      case "In Review":
        return {
          color: '#f59e0b',
          bgcolor: 'rgba(245, 158, 11, 0.1)',
          borderColor: 'rgba(245, 158, 11, 0.2)'
        };
      case "Resolved":
        return {
          color: '#10b981',
          bgcolor: 'rgba(16, 185, 129, 0.1)',
          borderColor: 'rgba(16, 185, 129, 0.2)'
        };
      default: return {};
    }
  };

  const getPriorityStyles = (priority) => {
    switch (priority) {
      case "High":
        return {
          color: '#ef4444',
          bgcolor: 'rgba(239, 68, 68, 0.1)',
          borderColor: 'rgba(239, 68, 68, 0.2)'
        };
      case "Medium":
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
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: '#1f2937' }}>Problem Hub</Typography>
          <Typography variant="body1" sx={{ color: '#4b5563', maxWidth: 800, lineHeight: 1.6 }}>
            A centralized place to track issues raised by students and staff.
            Problems can originate from anonymous posts, direct reports or staff
            submissions and move through clear statuses until resolved.
          </Typography>
        </Box>

        {/* Stats Section */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {[
            { label: "Total Issues", value: "24", hint: "Across all categories" },
            { label: "In Review", value: "7", color: '#f59e0b', hint: "Awaiting action" },
            { label: "Resolved", value: "11", color: '#10b981', hint: "Closed successfully" },
            { label: "High Priority", value: "4", color: '#ef4444', hint: "Needs quick attention" },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper elevation={0} sx={{
                p: 3,
                borderRadius: '20px',
                border: '1px solid #f3f4f6',
                bgcolor: '#ffffff',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
              }}>
                <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9ca3af', fontWeight: 700, fontSize: '0.7rem' }}>
                  {item.label}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 800, mt: 1, color: item.color || '#1f2937' }}>
                  {item.value}
                </Typography>
                <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mt: 0.5, fontWeight: 500 }}>
                  {item.hint}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* New Problem CTA */}
        <Paper elevation={0} sx={{
          p: { xs: 3, md: 4 },
          borderRadius: '24px',
          mb: 6,
          bgcolor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)'
        }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { md: 'center' }, gap: 3 }}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#1f2937' }}>Log a new problem</Typography>
              <Typography variant="body2" sx={{ color: '#6b7280', mt: 0.5 }}>
                Submit structured, trackable issues instead of random chat messages.
              </Typography>
            </Box>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                component={RouterLink}
                to="/problems/new"
                sx={{
                  bgcolor: '#00c4cc',
                  fontWeight: 700,
                  borderRadius: '12px',
                  textTransform: 'none',
                  px: 3,
                  boxShadow: '0 4px 14px 0 rgba(0, 196, 204, 0.3)',
                  '&:hover': { bgcolor: '#00b0b8' }
                }}
              >
                + Create Problem
              </Button>
              <Button
                variant="outlined"
                component={RouterLink}
                to="/posts"
                sx={{
                  borderColor: '#e5e7eb',
                  color: '#4b5563',
                  borderRadius: '12px',
                  textTransform: 'none',
                  fontWeight: 600,
                  px: 3,
                  '&:hover': {
                    borderColor: '#00c4cc',
                    color: '#00c4cc',
                    bgcolor: '#fff'
                  }
                }}
              >
                View Anonymous Posts
              </Button>
            </Stack>
          </Box>
        </Paper>

        {/* Problems List */}
        <Stack spacing={3} sx={{ mb: 8 }}>
          {problems.map((p) => (
            <Link key={p.id} component={RouterLink} to={`/problems/${p.id}`} sx={{ textDecoration: 'none', color: 'inherit' }}>
              <Paper elevation={0} sx={{
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
              }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 2, mb: 1.5 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#1f2937' }}>{p.title}</Typography>
                  <Stack direction="row" spacing={1}>
                    <Chip
                      label={p.status}
                      variant="outlined"
                      size="small"
                      sx={{
                        ...getStatusStyles(p.status),
                        fontWeight: 600,
                        borderRadius: '8px',
                        borderWidth: '1px'
                      }}
                    />
                    <Chip
                      label={`Priority: ${p.priority}`}
                      variant="outlined"
                      size="small"
                      sx={{
                        ...getPriorityStyles(p.priority),
                        fontWeight: 600,
                        borderRadius: '8px',
                        borderWidth: '1px'
                      }}
                    />
                  </Stack>
                </Box>
                <Typography variant="body2" sx={{ color: '#4b5563', mb: 3 }}>{p.desc}</Typography>
                <Stack direction="row" spacing={3} sx={{ color: '#9ca3af', fontSize: '0.85rem' }}>
                  <Typography variant="inherit">Category: <Box component="span" sx={{ fontWeight: 500, color: '#6b7280' }}>{p.category}</Box></Typography>
                  <Typography variant="inherit">Source: <Box component="span" sx={{ fontWeight: 500, color: '#6b7280' }}>{p.reportedFrom}</Box></Typography>
                  <Typography variant="inherit">Logged: <Box component="span" sx={{ fontWeight: 500, color: '#6b7280' }}>{p.age}</Box></Typography>
                </Stack>
              </Paper>
            </Link>
          ))}
        </Stack>

        {/* Info Panels */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 4, height: '100%', borderRadius: '24px', border: '1px solid #f3f4f6', bgcolor: '#ffffff' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1f2937' }}>Problem Lifecycle</Typography>
              <Box component="ol" sx={{ color: '#4b5563', fontSize: '0.9rem', pl: 2.5, '& li': { mb: 1.5 } }}>
                <li><strong>New:</strong> Issue is logged and visible.</li>
                <li><strong>In Review:</strong> Staff analyze and take action.</li>
                <li><strong>Resolved:</strong> Issue is fixed and closed.</li>
              </Box>
              <Typography variant="caption" sx={{ color: '#9ca3af', fontStyle: 'italic', mt: 2, display: 'block' }}>
                Perfect for Agile sprint workflows — each problem becomes a backlog item.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 4, height: '100%', borderRadius: '24px', border: '1px solid #f3f4f6', bgcolor: '#ffffff' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1f2937' }}>What belongs in Problem Hub?</Typography>
              <Typography variant="body2" sx={{ color: '#4b5563', lineHeight: 1.7 }}>
                Use Problem Hub for issues needing structured follow-up: facilities, scheduling, academic tools, lab equipment or major recurring issues impacting multiple students. Smaller opinion-based topics belong in discussion rooms or anonymous posts.
              </Typography>
            </Paper>
          </Grid>
        </Grid>


      </Container>
    </Box>
  );
}