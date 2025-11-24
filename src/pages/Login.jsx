import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  function updateField(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-canva-bg1 to-canva-bg2 flex items-center justify-center px-6 text-canva-text1">

      {/* Soft Canva Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-140px] left-[-80px] w-[420px] h-[420px] rounded-full bg-[#C1E7FF]/60 blur-[160px]" />
        <div className="absolute bottom-[-140px] right-[-80px] w-[420px] h-[420px] rounded-full bg-[#E9D7FF]/60 blur-[160px]" />
      </div>

      {/* CARD */}
      <div className="w-full max-w-md bg-white/70 border border-white/50 p-8 rounded-2xl shadow-xl backdrop-blur-xl">

        <h1 className="text-3xl font-bold text-center mb-2 text-canva-text1">
          Welcome back
        </h1>

        <p className="text-center text-canva-text3 mb-8 text-sm">
          Sign in to continue to your account.
        </p>

        {/* INPUT FIELDS */}
        <div className="flex flex-col gap-5">
          {/* Email */}
          <div>
            <label className="text-sm text-canva-text2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={form.email}
              onChange={updateField}
              className="w-full mt-1 bg-white/60 border border-white/50 px-4 py-3 rounded-lg text-sm text-canva-text1 outline-none focus:border-canva-blue transition shadow-sm"
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
              className="w-full mt-1 bg-white/60 border border-white/50 px-4 py-3 rounded-lg text-sm text-canva-text1 outline-none focus:border-canva-blue transition shadow-sm"
            />
          </div>
        </div>

        {/* LOGIN BUTTON */}
        <button className="w-full mt-8 bg-canva-blue hover:bg-canva-cyan text-white font-semibold py-3 rounded-lg transition shadow-md">
          Login
        </button>

        {/* Divider */}
        <div className="my-6 h-px bg-white/50 w-full"></div>

        {/* REGISTER LINK */}
        <p className="text-center text-sm text-canva-text3">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-canva-blue hover:text-canva-cyan underline-offset-2 hover:underline font-medium"
          >
            Create one
          </Link>
        </p>

      </div>
    </div>
  );
}
