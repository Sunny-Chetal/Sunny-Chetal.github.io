import { useState } from 'react'
import './App.css'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#coursework', label: 'Coursework' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const csCoursework = [
  {
    code: 'COP3502C',
    title: 'Programming Fundamentals 1',
    term: 'Spring 2025',
    grade: 'A',
    blurb:
      'Object-oriented programming, control structures, data types, and software development fundamentals.',
  },
  {
    code: 'COP3503C',
    title: 'Programming Fundamentals 2',
    term: 'Fall 2025',
    grade: 'A',
    blurb:
      'Advanced programming concepts, recursion, dynamic memory, and algorithmic problem solving.',
  },
  {
    code: 'COP3530',
    title: 'Data Structures & Algorithms',
    term: 'Spring 2026',
    grade: 'A',
    blurb:
      'Algorithm design, asymptotic analysis, trees, graphs, hashing, and efficient data structures.',
  },
  {
    code: 'CDA3101',
    title: 'Intro to Computer Organization',
    term: 'Fall 2026',
    grade: 'A',
    blurb:
      'Computer architecture, assembly language, memory systems, and low-level computation.',
  },
  {
    code: 'CIS4715',
    title: 'CS Teaching & Learning',
    term: 'Fall 2025',
    grade: 'A',
    blurb:
      'Computer science pedagogy, collaborative learning, and instructional support methods.',
  },
]

const quantCoursework = [
  {
    code: 'MAC2311',
    title: 'AP Calculus AB/Calculus I',
    term: 'Spring 2023',
    grade: '5',
    blurb:
      'Limits, derivatives, integrals, and foundational single-variable calculus.',
  },
  {
    code: 'MAC2312',
    title: 'AP Calculus BC/Calculus II',
    term: 'Spring 2023',
    grade: '5',
    blurb:
      'Integration techniques, sequences and series, parametric equations, and polar coordinates.',
  },
  {
    code: 'MAC2313',
    title: 'Calculus III',
    term: 'Fall 2024',
    grade: 'A',
    blurb:
      'Vector calculus, partial derivatives, optimization, and multiple integrals.',
  },
  {
    code: 'STA2023',
    title: 'AP Statistics/Intro to Statistics I',
    term: 'Fall 2023',
    grade: '5',
    blurb:
      'Descriptive statistics, probability distributions, confidence intervals, and hypothesis testing.',
  },
  {
    code: 'STA3032',
    title: 'Engineering Statistics',
    term: 'Spring 2026',
    grade: 'B',
    blurb:
      'Statistical inference, regression, experimental analysis, and engineering-focused probability methods.',
  },
  {
    code: 'STA3100',
    title: 'Programming With Data',
    term: 'Spring 2026',
    grade: 'A',
    blurb:
      'Data manipulation, statistical programming, data analysis workflows, and computational statistics.',
  },
  {
    code: 'STA4321',
    title: 'Intro to Probability',
    term: 'Fall 2025',
    grade: 'A-',
    blurb:
      'Random variables, expectation, distributions, conditional probability, and stochastic processes.',
  },
  {
    code: 'ECON2013',
    title: 'Principles of Macroeconomics',
    term: 'Fall 2024',
    grade: 'B+',
    blurb:
      'Macroeconomic indicators, monetary policy, fiscal policy, inflation, and economic modeling.',
  },
  {
    code: 'COT3100',
    title: 'Applied Discrete Structures',
    term: 'Fall 2025',
    grade: 'A',
    blurb:
      'Logic, proofs, combinatorics, graph theory, sets, and discrete mathematical reasoning for computer science.',
  },
  {
    code: 'MHF3202',
    title: 'Sets & Logic',
    term: 'Spring 2026',
    grade: 'A',
    blurb:
      'Formal logic, set theory, mathematical proofs, relations, and foundational abstract mathematics.',
  },
]

const academics = {
  gpa: '3.72',
  scale: '4.00',
  note: 'University of Florida',
}

const projects = [
  {
    title: 'Movie Matcher',
    tagline: 'Movie recommendation and similarity engine',
    description:
      'Application that compares movies based on user preferences, helping users discover similar films through matching and recommendation logic.',
    tech: ['C++', 'Crow', 'HTML', 'CSS', 'JavaScript'],
    links: { github: 'https://github.com/Sunny-Chetal/Movie-Matcher' },
    highlight: true,
  },
  {
    title: 'Minesweeper',
    tagline: 'Classic Minesweeper built with SFML',
    description:
      'Desktop implementation of the classic Minesweeper game featuring tile based rendering, recursive reveal logic, flagging mechanics, and interactive gameplay using SFML',
    tech: ['C++', 'SMFL'],
    links: { github: 'https://github.com/Sunny-Chetal/Minesweeper' },
    highlight: true,
  },
  {
    title: 'Campus Compass',
    tagline: 'Graph-based campus navigation system',
    description:
      'Campus navigation project built with adjacency list graphs that generates theoretical scheduling and routing paths for students across campus locations.',
    tech: ['C++'],
    links: { github: 'https://github.com/Sunny-Chetal/DSA_Project3' },
  },
  {
    title: 'AVLTree Student Tracker',
    tagline: 'Self balancing student management system',
    description:
      'Student tracking application implemented with an AVL tree to support efficient insertion, deletion, searching, and filtering by student ID while maintaining balanced performance.',
    tech: ['C++'],
    links: { github: 'https://github.com/Sunny-Chetal/DSA_Project1' },
  },
  {
    title: 'Sudoku',
    tagline: 'Object oriented Python Sudoku game',
    description:
      'Interactive Sudoku game developed with object oriented programming and event driven design principles, featuring puzzle validation, user input handling, and dynamic board updates.',
    tech: ['Python', 'Pygame'],
    links: { github: 'https://github.com/Sunny-Chetal/Sudoku' },
  },
  {
    title: 'WiCSEGram',
    tagline: 'Y2K inspired React forum experience',
    description:
      'Retro-styled forum UI built with React + Vite featuring custom CSS, interactive widgets, and nostalgic early 2000s web aesthetics',
    tech: ['React', 'Vite', 'CSS', 'JavaScript'],
    links: { github: 'https://github.com/Sunny-Chetal/WiCSEGram' },
  },
]

function App() {
  const [activeTrack, setActiveTrack] = useState('cs')
  const trackCoursework = activeTrack === 'cs' ? csCoursework : quantCoursework

  return (
    <div className="portfolio">
      <header className="nav">
        <nav className="nav-inner">
          <a href="#top" className="brand">
            sanaa chetal
          </a>
          <ul className="nav-links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="about" className="hero">
          <p className="eyebrow">Computer Science · Statistics</p>
          <h1 className="hero-title">Hi, I&apos;m Sanaa Chetal-Agarwal.</h1>
          <p className="hero-lede">
            I am a Junior at the University of Florida studying Computer Science and Statistics, with extensive experience creating and teaching coding content.
          </p>
          <div className="hero-actions">
            <a href="#coursework" className="btn btn-primary">
              Browse coursework
            </a>
            <a href="#projects" className="btn">
              See my projects
            </a>
            <a href="#contact" className="btn">
              Get in touch
            </a>
          </div>
        </section>

        <section id="coursework" className="section">
          <div className="section-head">
            <p className="eyebrow">02 — Coursework</p>
            <h2>Relevant Coursework</h2>
          </div>

          <div className="gpa-strip">
            <div className="gpa-card">
              <span className="gpa-label">Overall GPA</span>
              <div className="gpa-value-row">
                <span className="gpa-value">{academics.gpa}</span>
                <span className="gpa-scale">/ {academics.scale}</span>
              </div>
              {academics.note && (
                <span className="gpa-note">{academics.note}</span>
              )}
            </div>
          </div>

          <div className="track-toggle" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTrack === 'cs'}
              className={activeTrack === 'cs' ? 'track-btn active' : 'track-btn'}
              onClick={() => setActiveTrack('cs')}
            >
              Computer Science
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTrack === 'quant'}
              className={
                activeTrack === 'quant' ? 'track-btn active' : 'track-btn'
              }
              onClick={() => setActiveTrack('quant')}
            >
              Quantitative
            </button>
          </div>

          <div className="course-grid">
            {trackCoursework.map((c) => (
              <article key={c.code} className="course-card">
                <div className="course-card-head">
                  <span className="course-code">{c.code}</span>
                  {c.term && <span className="course-term">{c.term}</span>}
                </div>
                <h3 className="course-title">{c.title}</h3>
                {c.blurb && <p className="course-blurb">{c.blurb}</p>}
                {c.grade && (
                  <div className="course-grade-row">
                    <span className="course-grade-label">Grade</span>
                    <span className="course-grade">{c.grade}</span>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-head section-head-row">
            <div>
              <p className="eyebrow">03 — Projects</p>
              <h2>Things I&apos;ve Built</h2>
            </div>
          </div>

          <div className="project-grid">
            {projects.map((p) => (
              <article
                key={p.title}
                className={
                  p.highlight ? 'project-card highlight' : 'project-card'
                }
              >
                {p.highlight && (
                  <span className="featured-tag">Featured</span>
                )}
                <h3 className="project-title">{p.title}</h3>
                <p className="project-tagline">{p.tagline}</p>
                <p className="project-desc">{p.description}</p>
                <ul className="tech-list">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                {p.links && (
                  <div className="project-links">
                    {p.links.github && (
                      <a
                        href={p.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub →
                      </a>
                    )}
                    {p.links.demo && (
                      <a
                        href={p.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live demo →
                      </a>
                    )}
                    {p.links.paper && (
                      <a
                        href={p.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Write-up →
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-card">
            <p className="eyebrow">04 — Contact</p>
            <h2>Let&apos;s talk.</h2>
            <div className="contact-actions">
              <a
                href="mailto:sanaachetal@gmail.com"
                className="btn btn-primary"
              >
                sanaachetal@gmail.com
              </a>
              <a
                href="https://github.com/Sunny-Chetal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sanaa-chetal-0aa84732a/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Sanaa Chetal — built with Vite & React</p>
      </footer>
    </div>
  )
}

export default App
