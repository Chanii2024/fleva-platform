import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Paper,
  Link,
  TextField,
  Stack
} from '@mui/material';

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  function updateField(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Custom styling to match the clean, filled-input look in your image
  const customInputStyle = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#f8f9fa', // Very light gray background
      borderRadius: '8px', // Rounded corners
      '& fieldset': {
        border: '1px solid #f0f0f0', // Extremely faint border (almost invisible)
      },
      '&:hover fieldset': {
        borderColor: '#e0e0e0',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#00c4cc', // Teal focus ring
      },
      '& input': {
        padding: '14px 16px', // Comfortable padding
        fontSize: '0.95rem',
        color: '#333'
      }
    }
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      // Exact soft gradient background from the image
      background: 'linear-gradient(135deg, #a3bdcfff 0%, #e8fcffff 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      px: 2,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    }}>

      {/* LOGIN CARD */}
      <Paper elevation={0} sx={{
        width: '100%',
        maxWidth: 420,
        p: { xs: 4, md: 5 },
        borderRadius: '24px', // Matches the image card radius
        bgcolor: '#ffffff',
        boxShadow: '0 20px 50px rgba(0,0,0,0.05)' // Soft, diffused shadow
      }}>

        {/* HEADER */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{
            fontWeight: 800,
            color: '#1a1a1a',
            mb: 1,
            fontSize: '1.75rem'
          }}>
            Welcome back
          </Typography>
          <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.9rem' }}>
            Sign in to continue to your account.
          </Typography>
        </Box>

        {/* FORM */}
        <Stack spacing={2.5}>

          {/* Email Field */}
          <Box>
            <Typography variant="caption" sx={{
              color: '#374151',
              fontWeight: 500,
              mb: 0.8,
              display: 'block',
              fontSize: '0.9rem'
            }}>
              Email
            </Typography>
            <TextField
              fullWidth
              name="email"
              placeholder="example@gmail.com"
              value={form.email}
              onChange={updateField}
              variant="outlined"
              sx={customInputStyle}
            />
          </Box>

          {/* Password Field */}
          <Box>
            <Typography variant="caption" sx={{
              color: '#374151',
              fontWeight: 500,
              mb: 0.8,
              display: 'block',
              fontSize: '0.9rem'
            }}>
              Password
            </Typography>
            <TextField
              fullWidth
              type="password"
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={updateField}
              variant="outlined"
              sx={customInputStyle}
            />
          </Box>

          {/* LOGIN BUTTON */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              py: 1.5,
              borderRadius: '8px',
              bgcolor: '#00c4cc', // Exact Teal color
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '1rem',
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': {
                bgcolor: '#00b2b9',
                boxShadow: '0 4px 12px rgba(0, 196, 204, 0.2)'
              }
            }}
          >
            Login
          </Button>

        </Stack>

        {/* FOOTER */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.9rem' }}>
            Don't have an account?{" "}
            <Link
              component={RouterLink}
              to="/register"
              sx={{
                color: '#00c4cc',
                textDecoration: 'none',
                fontWeight: 600,
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              Create one
            </Link>
          </Typography>
        </Box>

      </Paper>
    </Box>
  );
}