import { csCoursework, quantCoursework, type Course } from "@/data/coursework";

function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-white/10 hover:bg-white/[0.04] transition-colors">
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-mono text-xs text-emerald-300/80">
          {course.code}
        </span>
        {course.term && (
          <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
            {course.term}
          </span>
        )}
      </div>
      <h3 className="mt-2 font-medium text-white">{course.title}</h3>
      {course.blurb && (
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          {course.blurb}
        </p>
      )}
    </article>
  );
}

function Column({
  label,
  accent,
  courses,
}: {
  label: string;
  accent: string;
  courses: Course[];
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className="h-2 w-2 rounded-full"
          style={{ background: accent }}
        />
        <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-300">
          {label}
        </h3>
      </div>
      <div className="mt-5 grid gap-3">
        {courses.map((c) => (
          <CourseCard key={c.code} course={c} />
        ))}
      </div>
    </div>
  );
}

export default function Coursework() {
  return (
    <section
      id="coursework"
      className="border-b border-white/5 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-300/80">
            02 — Coursework
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Relevant Coursework
          </h2>
          <p className="mt-4 text-zinc-400">
            Selected classes that shape how I think about systems and data —
            split between core computer science and the quantitative methods
            that underpin modeling and analysis.
          </p>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <Column
            label="Computer Science"
            accent="rgb(110 231 183)"
            courses={csCoursework}
          />
          <Column
            label="Quantitative"
            accent="rgb(147 197 253)"
            courses={quantCoursework}
          />
        </div>
      </div>
    </section>
  );
}
