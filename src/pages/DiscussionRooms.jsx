import { Link } from "react-router-dom";

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

  const activityColors = {
    Active: "text-emerald-500 bg-emerald-400/10 border-emerald-400/40",
    Busy: "text-amber-500 bg-amber-400/10 border-amber-400/40",
    Quiet: "text-canva-text3 bg-white/40 border-white/60",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-canva-bg1 to-canva-bg2 text-canva-text1 px-6 py-12">

      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold">Discussion Rooms</h1>
        <p className="text-canva-text3 mt-3 max-w-2xl">
          Join focused discussion groups for batches, clubs, courses and projects.
          Rooms help keep conversations structured and easy to navigate.
        </p>
      </div>

      {/* Create Room CTA */}
      <div className="max-w-6xl mx-auto mt-10 bg-white/70 border border-white/50 p-6 rounded-xl shadow-md backdrop-blur-xl">
        <h2 className="text-xl font-semibold">Create a New Room</h2>
        <p className="text-canva-text3 text-sm mt-2">
          Start a dedicated space for your group, class, club or event.
        </p>

        <Link
          to="/rooms/new"
          className="inline-block mt-4 px-5 py-3 bg-canva-blue hover:bg-canva-cyan text-white font-medium rounded-lg transition shadow-md"
        >
          + Create Discussion Room
        </Link>
      </div>

      {/* Rooms List */}
      <div className="max-w-6xl mx-auto mt-12 space-y-6">
        {rooms.map((room) => (
          <Link to={`/rooms/${room.id}`} key={room.id}>
            <div className="bg-white/70 border border-white/50 p-6 rounded-xl shadow-sm hover:border-canva-blue/50 transition cursor-pointer">

              {/* Top Row */}
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-canva-text1">
                  {room.title}
                </h2>

                {/* Room Type */}
                <span className="text-sm px-3 py-1 rounded-full border bg-canva-blue/10 text-canva-blue border-canva-blue/40">
                  {room.type}
                </span>
              </div>

              {/* Description */}
              <p className="text-canva-text3 mt-2">{room.desc}</p>

              {/* Bottom Row */}
              <div className="flex justify-between items-center mt-4 text-sm">
                <p className="text-canva-text3">
                  {room.members} members · Last message {room.lastMessage}
                </p>

                {/* Activity */}
                <span
                  className={`px-3 py-1 rounded-full border text-xs font-medium ${activityColors[room.activity]}`}
                >
                  {room.activity}
                </span>
              </div>

            </div>
          </Link>
        ))}
      </div>

      {/* Info Panels */}
      <div className="max-w-6xl mx-auto mt-14 grid md:grid-cols-2 gap-8">

        {/* Guidelines */}
        <div className="bg-white/70 p-6 rounded-xl border border-white/50 shadow-sm">
          <h3 className="text-lg font-semibold text-canva-text1">
            Room Usage Guidelines
          </h3>

          <ul className="list-disc list-inside mt-3 text-canva-text3 text-sm space-y-1">
            <li>Keep discussions relevant to the room’s purpose.</li>
            <li>No spam, self-promotion or unrelated content.</li>
            <li>Respect others and maintain a friendly space.</li>
            <li>Report inappropriate activity through proper channels.</li>
            <li>Admins may moderate discussions if required.</li>
          </ul>
        </div>

        {/* How it Works */}
        <div className="bg-white/70 p-6 rounded-xl border border-white/50 shadow-sm">
          <h3 className="text-lg font-semibold text-canva-text1">
            How Discussion Rooms Work
          </h3>

          <p className="text-canva-text3 text-sm mt-3 leading-relaxed">
            Each room contains structured message threads for different groups.
            Rooms help reduce clutter and keep important updates visible.
            Students can collaborate, share resources, plan events and ask questions
            in dedicated spaces that stay organized over time.
          </p>
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-canva-text3 text-sm border-t border-white/50 pt-6">
        © 2025 FLEVA Platform — Discussion Rooms Module
      </footer>

    </div>
  );
}
