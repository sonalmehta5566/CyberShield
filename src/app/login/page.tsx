
"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(result.message || "Login failed. Please try again.");
        return;
      }

      setMessage("Login successful! Redirecting...");

      // Redirect according to the user's role.
      const dashboardRoutes: Record<string, string> = {
        CLIENT: "/client/dashboard",
        ANALYST: "/analyst/dashboard",
        ADMIN: "/admin/dashboard",
      };

      const destination = dashboardRoutes[result.user.role];

      if (!destination) {
        setMessage("Your account has an unrecognized role.");
        return;
      }

      router.push(destination);
    } catch {
      setMessage("Unable to connect to the server. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

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
              <linearGradient id="circuitLine" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0879ff" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#13baff" />
                <stop offset="100%" stopColor="#0879ff" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            <path d="M0 60 Q120 150 210 110 T400 100 T600 60" stroke="url(#circuitLine)" strokeWidth="2" fill="none" />
            <path d="M0 90 Q120 170 210 130 T400 120 T600 90" stroke="url(#circuitLine)" strokeWidth="1.5" fill="none" />
            <path d="M0 125 L90 160 L150 145 L220 190 L300 130 L380 180 L460 135 L530 160 L600 120" stroke="#078cff" strokeWidth="1.5" fill="none" />
            <path d="M0 160 L70 180 L140 165 L220 205 L300 165 L380 205 L460 165 L530 190 L600 155" stroke="#0879ff" strokeWidth="1" fill="none" />

            {[70, 150, 220, 300, 380, 460, 530].map((x, i) => (
              <circle key={i} cx={x} cy={[160, 145, 190, 130, 180, 135, 160][i]} r="3" fill="#38c8ff" />
            ))}
          </svg>

          {/* Large security shield */}
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

        {/* RIGHT LOGIN FORM */}
        <section className="flex items-center justify-center bg-white px-7 py-12 sm:px-12">

          <div className="w-full max-w-sm">

            <div className="mb-9">
              <h2 className="text-3xl font-bold tracking-tight text-[#071c46]">
                Welcome Back
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                Sign in to your account
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">

              {/* Email */}
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
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  autoComplete="email"
                  className="h-12 w-full rounded-lg border border-blue-100 bg-white pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <svg
                  viewBox="0 0 24 24"
                  className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="4" y="10" width="16" height="11" rx="2" />
                  <path d="M8 10 V7 A4 4 0 0 1 16 7 V10" />
                  <circle cx="12" cy="15" r="1" />
                </svg>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  autoComplete="current-password"
                  className="h-12 w-full rounded-lg border border-blue-100 bg-white pl-11 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <span className="text-xs font-medium">Hide</span>
                  ) : (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 12 S6 5 12 5 S22 12 22 12 S18 19 12 19 S2 12 2 12Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Forgot password */}
              <div className="flex justify-end">
                <Link
                  href="/forgot-password"
                  className="text-sm font-semibold text-blue-700 hover:text-blue-900"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Error and success message */}
              {message && (
                <p
                  role="alert"
                  className={`rounded-lg px-3 py-2 text-sm ${
                    message.startsWith("Login successful")
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {message}
                </p>
              )}

              {/* Sign in */}
              <button
                type="submit"
                disabled={isLoading}
                className="h-12 w-full rounded-lg bg-[#064de5] text-sm font-bold text-white shadow-md transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </button>

              {/* OR divider */}
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-200" />
                <span className="text-sm font-semibold text-slate-500">or</span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* Register */}
              <Link
                href="/register"
                className="flex h-12 w-full items-center justify-center rounded-lg border border-blue-100 bg-[#f1f5ff] text-sm font-bold text-blue-700 transition hover:bg-blue-100"
              >
                Create an Account
              </Link>

            </form>

          </div>
        </section>

      </div>
    </main>
  );
}
