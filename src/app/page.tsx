// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert h-5 w-[100px]"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the{" "}
//             <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
//               page.tsx
//             </code>{" "}
//             file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert h-[14px] w-4"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={14}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }



import Link from "next/link";

const features = [
  {
    number: "01",
    icon: "🔒",
    title: "HTTPS & TLS Security",
    description:
      "Check secure connections and review SSL/TLS certificate information.",
  },
  {
    number: "02",
    icon: "🛡️",
    title: "Security Headers",
    description:
      "Examine important HTTP security headers and identify missing configurations.",
  },
  {
    number: "03",
    icon: "📊",
    title: "Risk Assessment",
    description:
      "Understand website security results through risk levels and assessment scores.",
  },
  {
    number: "04",
    icon: "📋",
    title: "Detailed Reports",
    description:
      "Review security findings and receive recommendations for improvement.",
  },
];

const steps = [
  { number: "01", title: "Create Account", description: "Register on CyberShield." },
  { number: "02", title: "Add Website", description: "Register an authorized website." },
  { number: "03", title: "Run Assessment", description: "Check essential security configurations." },
  { number: "04", title: "View Results", description: "Review findings and recommendations." },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071326] text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#071326]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-xl text-blue-400 ring-1 ring-blue-400/30">
              ◈
            </div>
            <span className="text-2xl font-bold tracking-tight">
              Cyber<span className="text-blue-400">Shield</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <Link href="/" className="transition hover:text-blue-400">Home</Link>
            <Link href="#about" className="transition hover:text-blue-400">About</Link>
            <Link href="#features" className="transition hover:text-blue-400">Features</Link>
            <Link href="#how-it-works" className="transition hover:text-blue-400">How It Works</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:text-blue-400 sm:block"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
            >
              Get Started <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold tracking-wider text-blue-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
              WEBSITE SECURITY ASSESSMENT PLATFORM
            </div>

            <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              Your Website.
              <br />
              Your Security.
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Our Priority.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              Discover security misconfigurations, understand potential risks,
              and strengthen your website with CyberShield&apos;s essential
              security assessment tools.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/register"
                className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-xl shadow-blue-600/25 transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Start Your Assessment <span className="ml-2">→</span>
              </Link>

              <Link
                href="#features"
                className="rounded-xl border border-white/15 px-7 py-4 font-semibold text-slate-200 transition hover:border-blue-400/50 hover:bg-white/5"
              >
                Explore Features
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
              <span>✓ Authorization-based checks</span>
              <span>✓ Clear security findings</span>
              <span>✓ Practical recommendations</span>
            </div>
          </div>

          {/* Cybersecurity Visual */}
          <div className="relative mx-auto flex w-full max-w-lg items-center justify-center py-8">
            <div className="absolute h-80 w-80 rounded-full border border-blue-400/10 sm:h-96 sm:w-96" />
            <div className="absolute h-64 w-64 rounded-full border border-blue-400/15 sm:h-80 sm:w-80" />
            <div className="absolute h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-cyan-400/5 shadow-[0_0_100px_rgba(37,99,235,0.15)] sm:h-96 sm:w-96">
              <div className="flex h-48 w-48 items-center justify-center rounded-[3rem] border border-blue-300/30 bg-gradient-to-br from-blue-500/30 to-cyan-500/10 shadow-[0_0_70px_rgba(59,130,246,0.25)] sm:h-60 sm:w-60">
                <svg
                  viewBox="0 0 200 200"
                  fill="none"
                  className="h-36 w-36 drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] sm:h-48 sm:w-48"
                >
                  <path
                    d="M100 15 L165 40 V91 C165 135 138 167 100 187 C62 167 35 135 35 91 V40 Z"
                    fill="#1677E8"
                    fillOpacity=".22"
                    stroke="#60A5FA"
                    strokeWidth="5"
                  />
                  <path
                    d="M100 35 L146 53 V91 C146 122 128 146 100 163 C72 146 54 122 54 91 V53 Z"
                    fill="#0D4FA5"
                    fillOpacity=".35"
                    stroke="#93C5FD"
                    strokeWidth="2"
                  />
                  <path
                    d="M76 98 L93 115 L127 79"
                    stroke="#A5F3FC"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="absolute -right-5 top-12 rounded-xl border border-blue-400/20 bg-[#102442] px-4 py-3 shadow-2xl sm:-right-12">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">●</span>
                  <span className="text-sm font-semibold">HTTPS Check</span>
                </div>
                <p className="mt-1 text-xs text-slate-400">Connection review</p>
              </div>

              <div className="absolute -bottom-5 -left-5 rounded-xl border border-blue-400/20 bg-[#102442] px-4 py-3 shadow-2xl sm:-left-12">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">✦</span>
                  <span className="text-sm font-semibold">Security Analysis</span>
                </div>
                <p className="mt-1 text-xs text-slate-400">Configuration checks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-y border-white/10 bg-[#0B1B32] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-blue-400">ABOUT CYBERSHIELD</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Security insights.
              <span className="text-blue-400"> Made simple.</span>
            </h2>
          </div>

          <div>
            <p className="leading-8 text-slate-400">
              CyberShield is a website security assessment platform designed
              to help website owners review essential security configurations.
              It checks HTTPS, TLS certificate information, and selected
              security headers, then presents findings and recommendations
              in one organized dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-blue-400">WHAT WE OFFER</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            Essential Security Checks
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-slate-400">
            Understand important website security configurations through one platform.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="group rounded-2xl border border-white/10 bg-[#0D1D34] p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-[#102442]"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{feature.icon}</span>
                <span className="text-sm font-bold text-blue-400/60">{feature.number}</span>
              </div>
              <h3 className="mt-8 text-lg font-bold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {feature.description}
              </p>
              <div className="mt-6 h-1 w-10 rounded-full bg-blue-500 transition-all group-hover:w-20" />
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-y border-white/10 bg-[#0B1B32] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold tracking-[0.2em] text-blue-400">SIMPLE PROCESS</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">How CyberShield Works</h2>
            <p className="mt-5 text-slate-400">Four simple steps towards better website security awareness.</p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/10 text-xl font-bold text-blue-400">
                  {step.number}
                </div>
                {index !== steps.length - 1 && (
                  <div className="absolute left-[calc(50%+45px)] top-8 hidden h-px w-[calc(100%-70px)] bg-gradient-to-r from-blue-400/60 to-transparent lg:block" />
                )}
                <h3 className="mt-6 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="px-6 py-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-900/70 via-[#102B50] to-[#0B1B32] px-7 py-16 text-center shadow-2xl shadow-blue-950/30 sm:px-16">
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[90px]" />
          <div className="relative">
            <div className="text-4xl">🛡️</div>
            <h2 className="mt-6 text-3xl font-extrabold sm:text-5xl">
              Take a Closer Look at Your Website Security.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-slate-300">
              Get started with CyberShield and understand your website&apos;s
              essential security configurations.
            </p>
            <Link
              href="/register"
              className="mt-9 inline-flex rounded-xl bg-blue-500 px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-400"
            >
              Create Your Account <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      
<footer className="bg-[#0B1730] text-white px-6 py-10">
  <div className="max-w-7xl mx-auto">

    {/* Brand */}
    <div className="mb-8">
      <h2 className="text-2xl font-bold">
        Cyber<span className="text-blue-500">Shield</span>
      </h2>
      <p className="text-slate-400 text-sm mt-2">
        Website Security Assessment Platform
      </p>
    </div>

    {/* Footer Links */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

      {/* Quick Links */}
      <div>
        <h3 className="font-semibold mb-3">Quick Links</h3>
        <div className="flex flex-col gap-2 text-sm text-slate-400">
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/#about" className="hover:text-blue-400">About</a>
          <a href="/#features" className="hover:text-blue-400">Features</a>
          <a href="/#how-it-works" className="hover:text-blue-400">How It Works</a>
        </div>
      </div>

      {/* Account */}
      <div>
        <h3 className="font-semibold mb-3">Account</h3>
        <div className="flex flex-col gap-2 text-sm text-slate-400">
          <a href="/login" className="hover:text-blue-400">Login</a>
          <a href="/register" className="hover:text-blue-400">Register</a>
        </div>
      </div>

      {/* Contact */}
      <div>
        <h3 className="font-semibold mb-3">Contact</h3>
        <a
          href="mailto:sonal5566mehta@gmail.com"
          className="text-sm text-slate-400 hover:text-blue-400 break-all"
        >
          sonal5566mehta@gmail.com
        </a>
      </div>

    </div>

    {/* Copyright */}
    <div className="border-t border-slate-700 mt-8 pt-5 text-center">
      <p className="text-sm text-slate-500">
        © 2026 CyberShield. All rights reserved.
      </p>
    </div>

  </div>
</footer>
    </main>
  );
}


