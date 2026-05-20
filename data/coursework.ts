export type Course = {
  code: string;
  title: string;
  term?: string;
  blurb?: string;
};

export const csCoursework: Course[] = [
  {
    code: "CS 101",
    title: "Intro to Computer Science",
    term: "Fall 2024",
    blurb: "Foundations of programming, problem decomposition, and algorithmic thinking in Python.",
  },
  {
    code: "CS 201",
    title: "Data Structures & Algorithms",
    term: "Spring 2025",
    blurb: "Arrays, trees, graphs, hashing, sorting, and algorithmic complexity analysis.",
  },
  {
    code: "CS 210",
    title: "Object-Oriented Programming",
    term: "Spring 2025",
    blurb: "Design patterns, inheritance, polymorphism, and software engineering principles in Java.",
  },
  {
    code: "CS 310",
    title: "Systems Programming",
    term: "Fall 2025",
    blurb: "C, memory management, processes, threads, and operating system fundamentals.",
  },
  {
    code: "CS 330",
    title: "Database Systems",
    term: "Fall 2025",
    blurb: "Relational model, SQL, indexing, transactions, and query optimization.",
  },
  {
    code: "CS 360",
    title: "Machine Learning",
    term: "Spring 2026",
    blurb: "Supervised and unsupervised learning, neural networks, and model evaluation.",
  },
];

export const quantCoursework: Course[] = [
  {
    code: "MATH 211",
    title: "Multivariable Calculus",
    term: "Fall 2024",
    blurb: "Vector calculus, partial derivatives, optimization, and multiple integrals.",
  },
  {
    code: "MATH 221",
    title: "Linear Algebra",
    term: "Spring 2025",
    blurb: "Vector spaces, eigenvalues, SVD, and linear transformations with applications.",
  },
  {
    code: "STAT 240",
    title: "Probability Theory",
    term: "Spring 2025",
    blurb: "Discrete and continuous distributions, expectation, limit theorems.",
  },
  {
    code: "STAT 310",
    title: "Mathematical Statistics",
    term: "Fall 2025",
    blurb: "Estimation, hypothesis testing, regression, and statistical inference.",
  },
  {
    code: "FIN 350",
    title: "Quantitative Finance",
    term: "Fall 2025",
    blurb: "Asset pricing, derivatives, portfolio theory, and risk modeling.",
  },
  {
    code: "MATH 420",
    title: "Stochastic Processes",
    term: "Spring 2026",
    blurb: "Markov chains, Brownian motion, and stochastic differential equations.",
  },
];
