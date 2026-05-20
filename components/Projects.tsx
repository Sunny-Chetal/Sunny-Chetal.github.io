import { projects, type Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`group relative flex flex-col rounded-2xl border bg-white/[0.02] p-6 transition-colors ${
        project.highlight
          ? "border-emerald-400/20 hover:border-emerald-400/40"
          : "border-white/5 hover:border-white/15"
      }`}
    >
      {project.highlight && (
        <span className="absolute right-5 top-5 rounded-full bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-300">
          Featured
        </span>
      )}
      <h3 className="text-lg font-medium text-white">{project.title}</h3>
      <p className="mt-1 font-mono text-xs text-zinc-500">{project.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>
      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-md border border-white/10 px-2 py-0.5 font-mono text-[10px] text-zinc-300"
          >
            {t}
          </li>
        ))}
      </ul>
      {project.links && (
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              GitHub →
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Live demo →
            </a>
          )}
          {project.links.paper && (
            <a
              href={project.links.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Write-up →
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-b border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-300/80">
              03 — Projects
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Things I&apos;ve Built
            </h2>
            <p className="mt-4 text-zinc-400">
              A selection of projects that span systems engineering, machine
              learning, and quantitative modeling.
            </p>
          </div>
          <a
            href="https://github.com/yourname"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-emerald-300 hover:text-emerald-200 transition-colors"
          >
            all repos on github →
          </a>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
