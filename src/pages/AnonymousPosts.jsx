import { Link } from "react-router-dom";

export default function AnonymousPosts() {
  const posts = [
    {
      id: 1,
      title: "WiFi down in Block B again?",
      body: "It's been slow for 2 days. Anyone else having issues?",
      tag: "Facilities",
      replies: 14,
      status: "Being Discussed",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Exam timetable release delay",
      body: "Semester 2 exam dates still not updated by admin.",
      tag: "Academic",
      replies: 9,
      status: "Forwarded to Problem Hub",
      time: "5 hours ago",
    },
    {
      id: 3,
      title: "Canteen food prices increasing?",
      body: "Rice plate from 120 → 160. Any official update?",
      tag: "Canteen",
      replies: 6,
      status: "New",
      time: "1 day ago",
    },
  ];

  const statusColors = {
    "Forwarded to Problem Hub":
      "text-canva-cyan bg-canva-cyan/10 border-canva-cyan/40",
    "Being Discussed":
      "text-amber-500 bg-amber-400/10 border-amber-400/40",
    New:
      "text-canva-text2 bg-white/40 border-white/60",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-canva-bg1 to-canva-bg2 text-canva-text1 px-6 py-12">

      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold">Anonymous Community Space</h1>
        <p className="text-canva-text3 mt-3 max-w-2xl">
          Share experiences, concerns, thoughts and ideas — anonymously.  
          Posts needing attention are automatically forwarded to the{" "}
          <span className="text-canva-blue font-medium">Problem Hub</span>.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-6xl mx-auto mt-10 flex flex-wrap gap-4">
        {["Trending", "Newest", "Most Replies", "Recently Resolved"].map(
          (filter) => (
            <button
              key={filter}
              className="px-4 py-2 rounded-lg border border-white/50 bg-white/70 text-canva-text2 hover:border-canva-blue/40 hover:text-canva-blue transition text-sm shadow-sm"
            >
              {filter}
            </button>
          )
        )}
      </div>

      {/* Create Post CTA */}
      <div className="max-w-6xl mx-auto mt-10 bg-white/70 border border-white/50 p-6 rounded-xl shadow-md backdrop-blur-xl">
        <h2 className="text-xl font-semibold">Start a new anonymous post</h2>
        <p className="text-canva-text3 text-sm mt-2">
          Share your thoughts safely. No identity stored or displayed.
        </p>

        <Link
          to="/posts/new"
          className="inline-block mt-4 px-5 py-3 bg-canva-blue hover:bg-canva-cyan text-white font-medium rounded-lg transition shadow-md"
        >
          + Create Anonymous Post
        </Link>
      </div>

      {/* Posts List */}
      <div className="max-w-6xl mx-auto mt-12 space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white/70 border border-white/50 p-6 rounded-xl shadow-sm hover:border-canva-blue/50 transition"
          >
            {/* Top row */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-canva-text1">
                {post.title}
              </h2>

              <span className="text-sm px-3 py-1 rounded-full border bg-canva-blue/10 text-canva-blue border-canva-blue/40">
                {post.tag}
              </span>
            </div>

            {/* Body */}
            <p className="text-canva-text3 mt-2">{post.body}</p>

            {/* Footer row */}
            <div className="flex justify-between items-center mt-4 text-sm">
              <p className="text-canva-text3">
                {post.replies} replies · <span>{post.time}</span>
              </p>

              <p
                className={`font-medium px-3 py-1 rounded-full border text-xs ${statusColors[post.status]}`}
              >
                {post.status}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Info Panels */}
      <div className="max-w-6xl mx-auto mt-14 grid md:grid-cols-2 gap-8">
        <div className="bg-white/70 p-6 rounded-xl border border-white/50 shadow-sm">
          <h3 className="text-lg font-semibold text-canva-text1">
            Posting Guidelines
          </h3>
          <ul className="list-disc list-inside mt-3 text-canva-text3 text-sm space-y-1">
            <li>No personal attacks</li>
            <li>No identifying information about others</li>
            <li>No threats or abusive content</li>
            <li>Use respectful language</li>
            <li>For urgent issues, use the Problem Hub</li>
          </ul>
        </div>

        <div className="bg-white/70 p-6 rounded-xl border border-white/50 shadow-sm">
          <h3 className="text-lg font-semibold text-canva-text1">
            How It Works
          </h3>
          <p className="text-canva-text3 text-sm mt-3 leading-relaxed">
            Anonymous posts allow students to raise concerns without fear.
            Moderators may forward posts needing attention into the Problem Hub.
            Students can reply and help collaboratively solve issues.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-canva-text3 text-sm border-t border-white/50 pt-6">
        © 2025 FLEVA Platform — Anonymous Space Module
      </footer>
    </div>
  );
}
