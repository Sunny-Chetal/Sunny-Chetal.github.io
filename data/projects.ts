export type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
  };
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    title: "Portfolio Optimizer",
    tagline: "Modern portfolio theory in the browser",
    description:
      "Interactive tool that pulls market data and computes the efficient frontier, Sharpe-optimal weights, and value-at-risk for a custom basket of assets.",
    tech: ["Python", "NumPy", "FastAPI", "React", "D3"],
    links: { github: "https://github.com/yourname/portfolio-optimizer" },
    highlight: true,
  },
  {
    title: "Options Pricing Engine",
    tagline: "Black–Scholes + Monte Carlo with Greeks",
    description:
      "Pricing engine that benchmarks closed-form Black–Scholes against Monte Carlo simulation for European and exotic options, surfacing the full Greeks profile.",
    tech: ["C++", "Python", "Matplotlib"],
    links: { github: "https://github.com/yourname/options-engine" },
    highlight: true,
  },
  {
    title: "ML Anomaly Detector",
    tagline: "Isolation Forest on streaming data",
    description:
      "Real-time anomaly detection pipeline trained on synthetic transaction streams, with a Grafana dashboard for live alerts.",
    tech: ["Python", "scikit-learn", "Kafka", "Grafana"],
    links: { github: "https://github.com/yourname/anomaly-detector" },
  },
  {
    title: "Course Scheduler",
    tagline: "Constraint solver for class registration",
    description:
      "Solver that takes degree requirements, time conflicts, and professor ratings as constraints and outputs a Pareto-optimal class schedule.",
    tech: ["TypeScript", "Next.js", "Z3"],
    links: { github: "https://github.com/yourname/course-scheduler" },
  },
  {
    title: "Trading Bot Backtester",
    tagline: "Event-driven strategy simulation",
    description:
      "Backtesting framework with realistic slippage, commissions, and a plug-in API for momentum, mean-reversion, and pairs-trading strategies.",
    tech: ["Python", "pandas", "Plotly"],
    links: { github: "https://github.com/yourname/backtester" },
  },
  {
    title: "Neural Style Transfer",
    tagline: "VGG-based image stylization",
    description:
      "Implementation of Gatys et al. style transfer with content/style loss tradeoffs, running on CUDA-accelerated PyTorch.",
    tech: ["PyTorch", "CUDA", "Streamlit"],
    links: { github: "https://github.com/yourname/style-transfer" },
  },
];
