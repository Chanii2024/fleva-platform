import { Link } from "react-router-dom";

export default function SkillExchange() {
  const skills = [
    {
      id: 1,
      title: "React.js for Beginners",
      type: "Teach",
      learners: 12,
      level: "Beginner",
      desc: "I can help you understand components, props, hooks and basic UI building.",
      posted: "Today",
      category: "Programming",
    },
    {
      id: 2,
      title: "UI/UX Fundamentals",
      type: "Learn",
      learners: 6,
      level: "Any",
      desc: "Looking for someone who can guide me on wireframes, layouts and minimal design.",
      posted: "2 days ago",
      category: "Design",
    },
    {
      id: 3,
      title: "Cybersecurity Basics",
      type: "Teach",
      learners: 4,
      level: "Beginner",
      desc: "Topics include network security, encryption basics, and threat awareness.",
      posted: "1 week ago",
      category: "IT / Security",
    },
  ];

  const typeColors = {
    Teach: "text-emerald-600 bg-emerald-300/20 border-emerald-500/40",
    Learn: "text-canva-blue bg-canva-blue/10 border-canva-blue/40",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-canva-bg1 to-canva-bg2 text-canva-text1 px-6 py-12">

      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold">Skill Exchange</h1>
        <p className="text-canva-text3 mt-3 max-w-3xl leading-relaxed">
          A structured way to share knowledge within your community.  
          Offer your skills or request help — build a supportive learning network.
        </p>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto mt-10 bg-white/70 border border-white/50 p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold">Share or request a skill</h2>
        <p className="text-canva-text3 text-sm mt-2">
          Help others learn something new or find mentors to grow your own skills.
        </p>

        <div className="mt-4 flex gap-3">
          <Link
            to="/skills/new-teach"
            className="px-5 py-3 bg-canva-blue hover:bg-canva-cyan text-white font-medium rounded-lg transition shadow-md text-sm"
          >
            + Offer to Teach
          </Link>

          <Link
            to="/skills/new-learn"
            className="px-5 py-3 border border-canva-blue/40 hover:border-canva-blue text-canva-text2 hover:text-canva-blue rounded-lg transition text-sm"
          >
            + Request to Learn
          </Link>
        </div>
      </div>

      {/* Skill List */}
      <div className="max-w-6xl mx-auto mt-12 space-y-6">
        {skills.map((s) => (
          <div
            key={s.id}
            className="bg-white/70 border border-white/50 p-6 rounded-xl shadow-sm hover:border-canva-blue/50 transition cursor-pointer"
          >
            {/* Top Row */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
              <h2 className="text-xl font-semibold text-canva-text1">
                {s.title}
              </h2>

              <span
                className={`text-xs px-3 py-1 rounded-full border ${typeColors[s.type]}`}
              >
                {s.type}
              </span>
            </div>

            {/* Description */}
            <p className="text-canva-text3 mt-2">{s.desc}</p>

            {/* Metadata Row */}
            <div className="flex flex-wrap justify-between items-center mt-4 text-xs text-canva-text3 gap-2">
              <p>Category: {s.category}</p>
              <p>Level: {s.level}</p>
              <p>Interest: {s.learners} learners</p>
              <p>Posted: {s.posted}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Info Panels */}
      <div className="max-w-6xl mx-auto mt-14 grid md:grid-cols-2 gap-8">

        {/* Benefits */}
        <div className="bg-white/70 p-6 rounded-xl border border-white/50 shadow-sm">
          <h3 className="text-lg font-semibold text-canva-text1">
            Why Skill Exchange?
          </h3>

          <ul className="list-disc list-inside mt-3 text-canva-text3 text-sm space-y-1">
            <li>Encourages collaborative learning</li>
            <li>Builds confidence and communication</li>
            <li>Helps discover hidden talents</li>
            <li>Strengthens student community</li>
            <li>Creates long-term learning habits</li>
          </ul>
        </div>

        {/* How It Works */}
        <div className="bg-white/70 p-6 rounded-xl border border-white/50 shadow-sm">
          <h3 className="text-lg font-semibold text-canva-text1">
            How It Works
          </h3>

          <p className="text-canva-text3 text-sm mt-3 leading-relaxed">
            Anyone can offer to teach something they know or request guidance on a 
            topic they want to learn. Other students can join as learners or mentors, 
            forming supportive micro-communities around each skill.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-canva-text3 text-sm border-t border-white/50 pt-6">
        © 2025 FLEVA Platform — Skill Exchange Module
      </footer>

    </div>
  );
}
