import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AnonymousPosts from "./pages/AnonymousPosts";
import DiscussionRooms from "./pages/DiscussionRooms";
import ProblemHub from "./pages/ProblemHub";
import SkillExchange from "./pages/SkillExchange";
import Notes from "./pages/Notes";
import Ideas from "./pages/Ideas";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/posts" element={<AnonymousPosts />} />
        <Route path="/rooms" element={<DiscussionRooms />} />
        <Route path="/problems" element={<ProblemHub />} />
        <Route path="/skills" element={<SkillExchange />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/ideas" element={<Ideas />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
