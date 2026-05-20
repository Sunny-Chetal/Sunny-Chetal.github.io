export default function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-white/5"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.12),transparent_55%)]" />
      </div>
      <div className="mx-auto max-w-6xl px-6 py-32 sm:py-40">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-300/80">
          Computer Science · Quantitative Methods
        </p>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          Hi, I&apos;m Sanaa.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          I build at the intersection of software engineering and quantitative
          analysis — combining algorithms, statistics, and clean systems design
          to turn messy data into useful tools.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-zinc-200 transition-colors"
          >
            See my projects
          </a>
          <a
            href="#coursework"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/5 transition-colors"
          >
            Browse coursework
          </a>
          <a
            href="mailto:sanaachetal@gmail.com"
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/5 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
