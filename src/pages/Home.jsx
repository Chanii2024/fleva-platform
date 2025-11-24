import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-canva-bg1 to-canva-bg2 text-canva-text1">

      {/* Canva Soft Glow Accents */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-120px] right-[-50px] w-[420px] h-[420px] rounded-full bg-[#C1E7FF]/60 blur-[160px]" />
        <div className="absolute bottom-[-120px] left-[-60px] w-[420px] h-[420px] rounded-full bg-[#E9D7FF]/60 blur-[160px]" />
      </div>

      {/* NAVBAR */}
      <header className="w-full py-5 px-8 flex justify-between items-center bg-canva-lavender/60 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50">
        <h1 className="text-xl font-semibold tracking-wide">
          <span className="text-canva-blue">FLEVA </span>
          Platform
        </h1>

        <div className="flex items-center gap-4 text-sm font-medium">
          <Link
            to="/login"
            className="px-4 py-2 text-canva-text2 hover:text-canva-blue transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 rounded-lg bg-canva-blue hover:bg-canva-cyan text-white font-semibold transition shadow-md"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-8 pt-24 pb-32">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              A better way to{" "}
              <span className="bg-gradient-to-r from-canva-blue to-canva-cyan text-transparent bg-clip-text">
                connect, collaborate & create
              </span>{" "}
              on campus.
            </h2>

            <p className="text-canva-text3 mt-6 text-lg leading-relaxed">
              FLEVA is a clean, structured student platform that organizes your
              campus life — anonymous posts, problem solving, notes, skill
              exchange, discussions, ideas and more. Made for real academic &
              community needs.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                to="/register"
                className="px-6 py-3 rounded-lg bg-canva-blue hover:bg-canva-cyan text-white font-semibold text-sm transition shadow-md"
              >
                Create an Account
              </Link>

              <Link
                to="/login"
                className="px-6 py-3 rounded-lg border border-canva-blue/40 hover:border-canva-blue text-canva-text2 hover:text-canva-blue text-sm transition"
              >
                Already a member?
              </Link>
            </div>
          </div>

          {/* RIGHT PREVIEW CARD */}
          <div className="bg-white/70 border border-white/40 rounded-2xl p-6 backdrop-blur-xl shadow-lg">
            <p className="text-sm text-canva-text3 uppercase tracking-widest mb-4">
              Platform Snapshot
            </p>

            <div className="space-y-4">

              <div className="bg-white/60 rounded-xl p-4 border border-white/50 shadow-sm">
                <p className="text-canva-text2 text-sm">Anonymous Post</p>
                <p className="text-canva-text1 font-medium mt-1">
                  “Why is wifi down in Block B again?”
                </p>
                <p className="text-canva-text3 text-xs mt-2">
                  18 replies · added to Problem Hub
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-white/60 rounded-xl p-4 border border-white/50 shadow-sm">
                  <p className="text-[10px] text-canva-text3 uppercase">
                    Problem Hub
                  </p>
                  <p className="text-canva-text1 font-semibold text-sm mt-1">
                    Library AC not working
                  </p>
                  <p className="text-canva-text3 text-xs mt-1">Status: Pending</p>
                </div>

                <div className="bg-white/60 rounded-xl p-4 border border-white/50 shadow-sm">
                  <p className="text-[10px] text-canva-text3 uppercase">
                    Skill Exchange
                  </p>
                  <p className="text-canva-text1 font-semibold text-sm mt-1">
                    “Teach me Java → I help with UX”
                  </p>
                  <p className="text-canva-text3 text-xs mt-1">4 matches</p>
                </div>

              </div>

              <div className="bg-gradient-to-r from-canva-blue/20 to-canva-cyan/20 rounded-xl p-4 border border-canva-blue/20">
                <p className="text-canva-text2 text-sm">
                  Today in FLEVA: <span className="font-semibold">22</span> new
                  posts, <span className="font-semibold">9</span> problems logged,
                  <span className="font-semibold">3</span> ideas promoted.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-8 pb-24">
        <h3 className="text-3xl font-semibold mb-6 text-canva-text1">
          Everything you need in one place.
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {[ 
            ["Anonymous Posts", "Speak freely. Stay safe.", "/posts"],
            ["Discussion Rooms", "Real-time student conversations.", "/rooms"],
            ["Problem Hub", "Turn issues into solutions.", "/problems"],
            ["Skill Exchange", "Learn from each other.", "/skills"],
            ["Notes & Resources", "Organized knowledge base.", "/notes"],
            ["Idea Incubator", "Grow ideas into projects.", "/ideas"],
          ].map(([title, desc, link]) => (
            <Link to={link} key={title}>
              <div className="bg-white/70 rounded-xl border border-white/40 p-6 hover:border-canva-blue/50 cursor-pointer transition shadow-sm">
                <h4 className="text-lg font-semibold text-canva-text1">{title}</h4>
                <p className="text-canva-text3 mt-2 text-sm">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 mt-10 border-t border-white/30 text-center text-canva-text3 text-sm">
        © 2025 FLEVA Platform — Built for Agile Coursework
      </footer>

    </div>
  );
}
