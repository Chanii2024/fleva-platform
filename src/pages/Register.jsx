import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function updateField(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-canva-bg1 to-canva-bg2 flex items-center justify-center px-6 text-canva-text1">

      {/* Canva Glow Accents */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-140px] right-[-80px] w-[420px] h-[420px] rounded-full bg-[#C1E7FF]/60 blur-[160px]" />
        <div className="absolute bottom-[-140px] left-[-80px] w-[420px] h-[420px] rounded-full bg-[#E9D7FF]/60 blur-[160px]" />
      </div>

      {/* Card */}
      <div className="w-full max-w-md bg-white/70 border border-white/50 p-8 rounded-2xl shadow-xl backdrop-blur-xl">

        <h1 className="text-3xl font-bold text-center mb-2 text-canva-text1">
          Create your account
        </h1>

        <p className="text-center text-canva-text3 mb-8 text-sm">
          Join the platform and start collaborating.
        </p>

        {/* Inputs */}
        <div className="flex flex-col gap-5">

          {/* Name */}
          <div>
            <label className="text-sm text-canva-text2">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={updateField}
              className="w-full mt-1 bg-white/60 border border-white/50 px-4 py-3 rounded-lg text-sm outline-none focus:border-canva-blue transition shadow-sm text-canva-text1"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-canva-text2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={form.email}
              onChange={updateField}
              className="w-full mt-1 bg-white/60 border border-white/50 px-4 py-3 rounded-lg text-sm outline-none focus:border-canva-blue transition shadow-sm text-canva-text1"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-canva-text2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={updateField}
              className="w-full mt-1 bg-white/60 border border-white/50 px-4 py-3 rounded-lg text-sm outline-none focus:border-canva-blue transition shadow-sm text-canva-text1"
            />
          </div>
        </div>

        {/* BUTTON */}
        <button className="w-full mt-8 bg-canva-blue hover:bg-canva-cyan text-white font-semibold py-3 rounded-lg transition shadow-md">
          Create Account
        </button>

        {/* Divider */}
        <div className="my-6 h-px bg-white/50"></div>

        {/* LOGIN LINK */}
        <p className="text-center text-sm text-canva-text3">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-canva-blue hover:text-canva-cyan underline-offset-2 hover:underline font-medium"
          >
            Login here
          </Link>
        </p>

      </div>
    </div>
  );
}
