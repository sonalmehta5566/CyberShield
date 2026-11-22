
"use client";

import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#eaf2ff] px-4 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-2xl md:min-h-[570px] md:grid-cols-[1.15fr_0.85fr]">

        {/* LEFT BRANDING PANEL */}
        <section className="relative flex min-h-[430px] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#061a40] via-[#05275c] to-[#03132f] px-8 py-12 text-center text-white md:min-h-[570px]">

          <div className="absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

          {/* Shield logo */}
          <div className="relative z-10 mb-3">
            <svg viewBox="0 0 64 76" className="h-16 w-16" fill="none">
              <path
                d="M32 3 L57 14 V35 C57 52 46 65 32 73 C18 65 7 52 7 35 V14 Z"
                fill="#0879d8"
                stroke="#63c7ff"
                strokeWidth="3"
              />
              <path
                d="M32 10 L50 18 V35 C50 48 42 58 32 64 C22 58 14 48 14 35 V18 Z"
                fill="#08295d"
              />
              <path
                d="M38 22 L26 39 H34 L29 53 L43 34 H34 Z"
                fill="#8be0ff"
              />
            </svg>
          </div>

          <h1 className="relative z-10 text-4xl font-extrabold tracking-tight">
            Cyber<span className="text-[#20a8ff]">Shield</span>
          </h1>

          <p className="relative z-10 mt-5 text-base font-medium leading-6 text-white">
            Authorized Website
            <br />
            Security Assessment Platform
          </p>

          <p className="relative z-10 mt-4 text-xs tracking-wide text-sky-300">
            Assess&nbsp; • &nbsp;Monitor&nbsp; • &nbsp;Stay Secure
          </p>

          {/* Decorative circuit waves */}
          <svg
            viewBox="0 0 600 220"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 h-[43%] w-full opacity-90"
          >
            <defs>
              <linearGradient id="forgotCircuitLine" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0879ff" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#13baff" />
                <stop offset="100%" stopColor="#0879ff" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            <path d="M0 60 Q120 150 210 110 T400 100 T600 60" stroke="url(#forgotCircuitLine)" strokeWidth="2" fill="none" />
            <path d="M0 90 Q120 170 210 130 T400 120 T600 90" stroke="url(#forgotCircuitLine)" strokeWidth="1.5" fill="none" />
            <path d="M0 125 L90 160 L150 145 L220 190 L300 130 L380 180 L460 135 L530 160 L600 120" stroke="#078cff" strokeWidth="1.5" fill="none" />
            <path d="M0 160 L70 180 L140 165 L220 205 L300 165 L380 205 L460 165 L530 190 L600 155" stroke="#0879ff" strokeWidth="1" fill="none" />

            {[70, 150, 220, 300, 380, 460, 530].map((x, i) => (
              <circle key={i} cx={x} cy={[160, 145, 190, 130, 180, 135, 160][i]} r="3" fill="#38c8ff" />
            ))}
          </svg>

          {/* Bottom security shield */}
          <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2">
            <svg viewBox="0 0 100 115" className="h-28 w-28 drop-shadow-[0_0_15px_rgba(0,153,255,0.7)]" fill="none">
              <path
                d="M50 3 L91 20 V53 C91 79 72 99 50 111 C28 99 9 79 9 53 V20 Z"
                fill="#073b80"
                stroke="#16a9ff"
                strokeWidth="4"
              />
              <path
                d="M50 13 L80 26 V53 C80 72 67 88 50 98 C33 88 20 72 20 53 V26 Z"
                fill="#08295b"
                stroke="#62caff"
                strokeWidth="2"
              />
              <rect x="37" y="49" width="26" height="23" rx="4" fill="#d8f4ff" />
              <path d="M42 49 V41 A8 8 0 0 1 58 41 V49" stroke="#d8f4ff" strokeWidth="5" />
              <circle cx="50" cy="59" r="3" fill="#0879d8" />
            </svg>
          </div>
        </section>

        {/* RIGHT FORGOT PASSWORD PANEL */}
        <section className="flex items-center justify-center bg-white px-7 py-12 sm:px-12">
          <div className="w-full max-w-sm">

            {/* Heading */}
            <div className="mb-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                  <path d="M16 3v4M14 5h4" />
                </svg>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-[#071c46]">
                Forgot Password?
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Don't worry! Enter the email address associated with your
                account. We'll help you reset your password.
              </p>
            </div>

            {/* Email form */}
            <form
              onSubmit={(event) => event.preventDefault()}
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>

                <div className="relative">
                  <svg
                    viewBox="0 0 24 24"
                    className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21 C4 16 8 14 12 14 C16 14 20 16 20 21" />
                  </svg>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    autoComplete="email"
                    required
                    className="h-12 w-full rounded-lg border border-blue-100 bg-white pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="h-12 w-full rounded-lg bg-[#064de5] text-sm font-bold text-white shadow-md transition hover:bg-blue-800"
              >
                Send Reset Instructions
              </button>
            </form>

            {/* Back to login */}
            <Link
              href="/login"
              className="mt-7 flex items-center justify-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
            >
              <span>←</span>
              Back to Sign In
            </Link>

          </div>
        </section>
      </div>
    </main>
  );
}
