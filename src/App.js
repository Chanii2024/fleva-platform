import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Layout
import MainLayout from "./layout/MainLayout";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AnonymousPosts from "./pages/AnonymousPosts";
import DiscussionRooms from "./pages/DiscussionRooms";
import ProblemHub from "./pages/ProblemHub";
import SkillExchange from "./pages/SkillExchange";
import Notes from "./pages/Notes";
import Ideas from "./pages/Ideas";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";

const theme = createTheme({
  palette: {
    primary: { main: '#00c4cc' },
    background: { default: '#f0f2f5' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {/* All routes inside MainLayout will show the Navbar and Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/posts" element={<AnonymousPosts />} />
            <Route path="/posts/create" element={<CreatePost />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/rooms" element={<DiscussionRooms />} />
            <Route path="/problems" element={<ProblemHub />} />
            <Route path="/skills" element={<SkillExchange />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/ideas" element={<Ideas />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;