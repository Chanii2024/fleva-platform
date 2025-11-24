import { Link } from "react-router-dom";

export default function Notes() {
  const notes = [
    {
      id: 1,
      title: "OOP – Polymorphism Summary",
      course: "Object Oriented Programming",
      type: "PDF",
      size: "1.2 MB",
      uploaded: "2 days ago",
    },
    {
      id: 2,
      title: "Database Normalization 1NF-3NF",
      course: "Database Management Systems",
      type: "PDF",
      size: "850 KB",
      uploaded: "4 days ago",
    },
    {
      id: 3,
      title: "Networking Basics Short Notes",
      course: "Computer Networks",
      type: "DOCX",
      size: "410 KB",
      uploaded: "1 week ago",
    },
  ];

  const typeColors = {
    PDF: "text-red-500 bg-red-400/10 border-red-400/40",
    DOCX: "text-canva-blue bg-canva-blue/10 border-canva-blue/40",
    JPG: "text-amber-500 bg-amber-400/10 border-amber-400/40",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-canva-bg1 to-canva-bg2 text-canva-text1 px-6 py-12">

      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold">Notes & Resources</h1>
        <p className="text-canva-text3 mt-3 max-w-3xl leading-relaxed">
          A shared space for academic notes, summaries, past papers and useful resources.
          Upload materials or explore what others have contributed.
        </p>
      </div>

      {/* Upload Button */}
      <div className="max-w-6xl mx-auto mt-10 bg-white/70 border border-white/50 p-6 rounded-xl shadow-sm backdrop-blur-xl">
        <h2 className="text-xl font-semibold">Upload a Resource</h2>
        <p className="text-canva-text3 text-sm mt-2">
          Share lecture notes or helpful documents with your community.
        </p>

        <Link
          to="/notes/upload"
          className="inline-block mt-4 px-5 py-3 bg-canva-blue hover:bg-canva-cyan text-white font-medium rounded-lg transition shadow-md"
        >
          + Upload Notes
        </Link>
      </div>

      {/* Search Bar */}
      <div className="max-w-6xl mx-auto mt-10">
        <input
          type="text"
          placeholder="Search by course, topic, or file type..."
          className="w-full bg-white/60 border border-white/50 px-4 py-3 rounded-lg text-sm text-canva-text1 outline-none focus:border-canva-blue transition shadow-sm"
        />
      </div>

      {/* Notes List */}
      <div className="max-w-6xl mx-auto mt-12 space-y-6">
        {notes.map((n) => (
          <div
            key={n.id}
            className="bg-white/70 border border-white/50 p-6 rounded-xl shadow-sm hover:border-canva-blue/50 transition cursor-pointer"
          >
            {/* Top Row */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
              <h2 className="text-xl font-semibold text-canva-text1">
                {n.title}
              </h2>

              <span
                className={`text-xs px-3 py-1 rounded-full border ${typeColors[n.type]}`}
              >
                {n.type} File
              </span>
            </div>

            {/* Course */}
            <p className="text-canva-text3 mt-2">{n.course}</p>

            {/* Metadata */}
            <div className="flex flex-wrap justify-between items-center mt-4 text-xs text-canva-text3 gap-2">

              <p>Size: {n.size}</p>
              <p>Uploaded: {n.uploaded}</p>

              <div className="flex gap-3">
                <button className="text-canva-blue hover:text-canva-cyan transition font-medium">
                  Download
                </button>

                <button className="text-canva-text2 hover:text-canva-blue transition font-medium">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Panels */}
      <div className="max-w-6xl mx-auto mt-14 grid md:grid-cols-2 gap-8">

        {/* Upload Guidelines */}
        <div className="bg-white/70 p-6 rounded-xl border border-white/50 shadow-sm">
          <h3 className="text-lg font-semibold text-canva-text1">What You Can Upload</h3>
          <ul className="list-disc list-inside mt-3 text-canva-text3 text-sm space-y-1">
            <li>Lecture summaries</li>
            <li>Past papers</li>
            <li>Model answers</li>
            <li>Slides or presentations</li>
            <li>Study guides</li>
          </ul>
        </div>

        {/* How It Works */}
        <div className="bg-white/70 p-6 rounded-xl border border-white/50 shadow-sm">
          <h3 className="text-lg font-semibold text-canva-text1">How Notes Sharing Works</h3>
          <p className="text-canva-text3 text-sm mt-3 leading-relaxed">
            Notes uploaded by students and staff appear here instantly.
            They can be searched, downloaded or viewed online. This encourages
            collaborative learning and makes revision more efficient.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-canva-text3 text-sm border-t border-white/50 pt-6">
        © 2025 FLEVA Platform — Notes & Resources Module
      </footer>
    </div>
  );
}
