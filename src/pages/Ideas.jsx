import { Link } from "react-router-dom";

export default function Ideas() {
  const ideas = [
    {
      id: 1,
      title: "Digital attendance system",
      desc: "Propose adding a QR-based attendance system to reduce paper-based records.",
      category: "Campus Improvement",
      votes: 42,
      status: "Under Review",
      posted: "3 days ago",
    },
    {
      id: 2,
      title: "Monthly student tech meet-up",
      desc: "Organize an informal tech-sharing evening every month for idea exchange.",
      category: "Community",
      votes: 19,
      status: "New",
      posted: "1 week ago",
    },
    {
      id: 3,
      title: "Recycling bins for each block",
      desc: "Increase campus sustainability by installing more categorized waste bins.",
      category: "Environment",
      votes: 33,
      status: "Approved",
      posted: "5 days ago",
    },
  ];

  const statusColors = {
    "New": "text-canva-blue bg-canva-blue/10 border-canva-blue/40",
    "Under Review": "text-amber-500 bg-amber-400/10 border-amber-400/40",
    "Approved": "text-emerald-600 bg-emerald-300/20 border-emerald-400/40",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-canva-bg1 to-canva-bg2 text-canva-text1 px-6 py-12">

      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold">Idea Incubator</h1>
        <p className="text-canva-text3 mt-3 max-w-3xl leading-relaxed">
          Share your innovative ideas that could improve campus life, events,
          workflows or student engagement. Students can vote, review and help
          shape real improvements.
        </p>
      </div>

      {/* Submit CTA */}
      <div className="max-w-6xl mx-auto mt-10 bg-white/70 border border-white/50 p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold">Submit a New Idea</h2>
        <p className="text-canva-text3 text-sm mt-2">
          Contribute something new or propose enhancements to existing systems.
        </p>

        <Link
          to="/ideas/new"
          className="inline-block mt-4 px-5 py-3 bg-canva-blue hover:bg-canva-cyan text-white font-medium rounded-lg transition shadow-md"
        >
          + Submit Idea
        </Link>
      </div>

      {/* Ideas List */}
      <div className="max-w-6xl mx-auto mt-12 space-y-6">
        {ideas.map((idea) => (
          <Link to={`/ideas/${idea.id}`} key={idea.id}>
            <div className="bg-white/70 border border-white/50 p-6 rounded-xl shadow-sm hover:border-canva-blue/50 transition cursor-pointer">

              {/* Top row */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <h2 className="text-xl font-semibold text-canva-text1">
                  {idea.title}
                </h2>

                <div className="flex gap-2">
                  {/* Status Tag */}
                  <span
                    className={`text-xs px-3 py-1 rounded-full border ${statusColors[idea.status]}`}
                  >
                    {idea.status}
                  </span>

                  {/* Category Tag */}
                  <span className="text-xs px-3 py-1 rounded-full border border-canva-blue/40 bg-canva-blue/10 text-canva-blue">
                    {idea.category}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-canva-text3 mt-2">{idea.desc}</p>

              {/* Meta Row */}
              <div className="flex flex-wrap justify-between items-center mt-4 text-xs text-canva-text3 gap-2">
                <p>Votes: {idea.votes}</p>
                <p>Posted: {idea.posted}</p>
              </div>

            </div>
          </Link>
        ))}
      </div>

      {/* Info Panel */}
      <div className="max-w-6xl mx-auto mt-14 grid md:grid-cols-2 gap-8">

        {/* How it works */}
        <div className="bg-white/70 p-6 rounded-xl border border-white/50 shadow-sm">
          <h3 className="text-lg font-semibold text-canva-text1">
            How Idea Incubator Works
          </h3>
          <p className="text-canva-text3 text-sm mt-3 leading-relaxed">
            Students submit ideas. Others can vote for them. Highly rated ideas
            move into review. Approved ideas can be forwarded to administration
            or included in campus development plans.
          </p>
        </div>

        {/* Guidelines */}
        <div className="bg-white/70 p-6 rounded-xl border border-white/50 shadow-sm">
          <h3 className="text-lg font-semibold text-canva-text1">
            What Makes a Good Idea?
          </h3>
          <ul className="list-disc list-inside mt-3 text-canva-text3 text-sm space-y-1">
            <li>Clear and actionable</li>
            <li>Realistic and practical</li>
            <li>Improves the campus or community</li>
            <li>Encourages collaboration</li>
            <li>Can be expanded into a project</li>
          </ul>
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-canva-text3 text-sm border-t border-white/50 pt-6">
        © 2025 FLEVA Platform — Idea Incubator Module
      </footer>
    </div>
  );
}
