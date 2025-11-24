import { Link } from "react-router-dom";

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

  const statusColors = {
    New: "text-canva-blue bg-canva-blue/10 border-canva-blue/40",
    "In Review": "text-amber-500 bg-amber-400/10 border-amber-400/40",
    Resolved: "text-emerald-500 bg-emerald-400/10 border-emerald-400/40",
  };

  const priorityColors = {
    High: "text-red-500 bg-red-400/10 border-red-400/40",
    Medium: "text-amber-500 bg-amber-400/10 border-amber-400/40",
    Low: "text-canva-text3 bg-white/40 border-white/60",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-canva-bg1 to-canva-bg2 text-canva-text1 px-6 py-12">

      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold">Problem Hub</h1>
        <p className="text-canva-text3 mt-3 max-w-3xl leading-relaxed">
          A centralized place to track issues raised by students and staff. 
          Problems can originate from anonymous posts, direct reports or staff 
          submissions and move through clear statuses until resolved.
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto mt-8 grid md:grid-cols-4 gap-4">
        {[
          { label: "Total Issues", value: "24", hint: "Across all categories" },
          { label: "In Review", value: "7", color: "text-amber-500", hint: "Awaiting action" },
          { label: "Resolved", value: "11", color: "text-emerald-500", hint: "Closed successfully" },
          { label: "High Priority", value: "4", color: "text-red-500", hint: "Needs quick attention" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/70 border border-white/50 rounded-xl p-4 shadow-sm"
          >
            <p className="text-xs text-canva-text3 uppercase tracking-[0.18em]">
              {item.label}
            </p>
            <p className={`text-2xl font-semibold mt-2 ${item.color || ""}`}>
              {item.value}
            </p>
            <p className="text-xs text-canva-text3 mt-1">{item.hint}</p>
          </div>
        ))}
      </div>

      {/* New Problem CTA */}
      <div className="max-w-6xl mx-auto mt-10 bg-white/70 border border-white/50 p-6 rounded-xl flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-sm">
        <div>
          <h2 className="text-xl font-semibold">Log a new problem</h2>
          <p className="text-canva-text3 text-sm mt-2">
            Submit structured, trackable issues instead of random chat messages.
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            to="/problems/new"
            className="px-5 py-3 bg-canva-blue hover:bg-canva-cyan text-white font-medium rounded-lg transition text-sm shadow-md"
          >
            + Create Problem
          </Link>
          <Link
            to="/posts"
            className="px-5 py-3 border border-canva-blue/40 hover:border-canva-blue text-canva-text2 hover:text-canva-blue rounded-lg transition text-sm"
          >
            View Anonymous Posts
          </Link>
        </div>
      </div>

      {/* Problems List */}
      <div className="max-w-6xl mx-auto mt-12 space-y-6">
        {problems.map((p) => (
          <Link to={`/problems/${p.id}`} key={p.id}>
            <div className="bg-white/70 border border-white/50 p-6 rounded-xl shadow-sm hover:border-canva-blue/50 transition cursor-pointer">

              {/* Top Row */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                <h2 className="text-xl font-semibold text-canva-text1">{p.title}</h2>

                <div className="flex flex-wrap gap-2">
                  <span
                    className={`text-xs px-3 py-1 rounded-full border ${statusColors[p.status]}`}
                  >
                    {p.status}
                  </span>
                  <span
                    className={`text-xs px-3 py-1 rounded-full border ${priorityColors[p.priority]}`}
                  >
                    Priority: {p.priority}
                  </span>
                </div>
              </div>

              {/* Body */}
              <p className="text-canva-text3 mt-2">{p.desc}</p>

              {/* Meta Row */}
              <div className="flex flex-wrap justify-between items-center mt-4 text-xs text-canva-text3 gap-2">
                <p>Category: {p.category}</p>
                <p>Source: {p.reportedFrom}</p>
                <p>Logged: {p.age}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Info Panels */}
      <div className="max-w-6xl mx-auto mt-14 grid md:grid-cols-2 gap-8">

        {/* Lifecycle */}
        <div className="bg-white/70 p-6 rounded-xl border border-white/50 shadow-sm">
          <h3 className="text-lg font-semibold text-canva-text1">
            Problem Lifecycle
          </h3>
          <ol className="list-decimal list-inside mt-3 text-canva-text3 text-sm space-y-1">
            <li><span className="text-canva-text1">New:</span> Issue is logged and visible.</li>
            <li><span className="text-canva-text1">In Review:</span> Staff analyze and take action.</li>
            <li><span className="text-canva-text1">Resolved:</span> Issue is fixed and closed.</li>
          </ol>
          <p className="text-canva-text3 text-xs mt-3">
            Perfect for Agile sprint workflows — each problem becomes a backlog item.
          </p>
        </div>

        {/* Guidelines */}
        <div className="bg-white/70 p-6 rounded-xl border border-white/50 shadow-sm">
          <h3 className="text-lg font-semibold text-canva-text1">
            What belongs in Problem Hub?
          </h3>
          <p className="text-canva-text3 text-sm mt-3 leading-relaxed">
            Use Problem Hub for issues needing structured follow-up: facilities,
            scheduling, academic tools, lab equipment or major recurring issues 
            impacting multiple students. Smaller opinion-based topics belong in
            discussion rooms or anonymous posts.
          </p>
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-canva-text3 text-sm border-t border-white/50 pt-6">
        © 2025 FLEVA Platform — Problem Hub Module
      </footer>
    </div>
  );
}
