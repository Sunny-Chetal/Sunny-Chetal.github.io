export default function Footer() {
  return (
    <footer id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-10 sm:p-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-300/80">
            04 — Contact
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let&apos;s talk.
          </h2>
          <p className="mt-4 max-w-xl text-zinc-400">
            Always happy to chat about internships, research, or interesting
            problems at the intersection of code and quantitative work.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a
              href="mailto:sanaachetal@gmail.com"
              className="rounded-full bg-white px-5 py-2.5 font-medium text-black hover:bg-zinc-200 transition-colors"
            >
              sanaachetal@gmail.com
            </a>
            <a
              href="https://github.com/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-5 py-2.5 font-medium text-white hover:bg-white/5 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-5 py-2.5 font-medium text-white hover:bg-white/5 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <p className="mt-10 text-center font-mono text-xs text-zinc-600">
          © {new Date().getFullYear()} Sanaa Chetal — built with Next.js &
          Tailwind
        </p>
      </div>
    </footer>
  );
}
