// API configuration for the frontend services
// Uses `REACT_APP_API_BASE` if provided, otherwise falls back to a sensible default.
const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:8080';

export const POSTS_ENDPOINT = `${API_BASE.replace(/\/$/, '')}/posts`;
export default API_BASE;
