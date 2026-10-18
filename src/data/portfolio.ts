export const profile = {
  name: 'Camlin Tan',
  email: 'camlin.tan@gmail.com',
  github: 'https://github.com/camlin-tan',
  linkedin: 'https://www.linkedin.com/in/camlin-tan/',
  location: 'Singapore',
  availability: 'Available from January 2027',
};

export interface Project {
  id: string;
  name: string;
  category: string;
  period: string;
  description: string;
  tags: string[];
  highlights: string[];
  status?: string;
  github?: string;
  demo?: string;
}

// Add verified project URLs here; links render automatically when provided.
export const projects: Project[] = [
  {
    id: 'quant',
    name: 'Real-Time Quant Data Engine',
    category: 'DATA / BACKEND',
    period: 'Jul 2026 — Present',
    description: 'Turning live market ticks into historical data. A streaming pipeline that ingests WebSocket events and stores one-minute OHLCV bars.',
    tags: ['Python', 'Pandas', 'PostgreSQL', 'Redpanda', 'Docker'],
    status: 'In progress',
    highlights: [
      'Built a Python pipeline to ingest live market data over WebSockets and publish tick events to a Redpanda message broker.',
      'Aggregated incoming ticks into one-minute open, high, low, close, and volume (OHLCV) bars with Pandas, storing the results in PostgreSQL for historical analysis.',
      'Containerised the pipeline services with Docker Compose and automated testing with pytest and GitHub Actions.',
    ],
  },
  {
    id: 'rag',
    name: 'Multimodal RAG',
    category: 'AI / FULL-STACK',
    period: 'Dec 2025 — Present',
    description: 'Making documents searchable beyond the text. A retrieval system that connects questions to context across text and images.',
    tags: ['Python', 'FastAPI', 'React', 'LlamaIndex'],
    highlights: [
      'Built a full-stack retrieval-augmented generation application with a FastAPI backend and responsive React frontend.',
      'Grounded answers in user-uploaded data with context injection and a LlamaIndex retrieval pipeline.',
      'Converted image nodes into semantic descriptions to enable hybrid retrieval across text and visual content.',
      'Collaborated in a two-person team using pair programming, pull requests, and code reviews.',
    ],
  },
  {
    id: 'capstone',
    name: 'CS2109S Capstone Project',
    category: 'COMPUTER VISION / AI',
    period: 'Jan — Apr 2026',
    description: 'From recognising game images to choosing the next move. An agent that combines a convolutional neural network with A* search.',
    tags: ['Python', 'PyTorch', 'torchvision', 'A* search'],
    highlights: [
      'Trained a convolutional neural network with PyTorch and torchvision to classify game images, using data augmentation, dropout, and learning-rate scheduling.',
      'Used A* search to plan actions around coin rewards and damage penalties, incorporating image recognition into the agent’s decisions.',
    ],
  },
  {
    id: 'healthnote',
    name: 'HealthNote',
    category: 'SOFTWARE ENGINEERING',
    period: 'Sep — Nov 2025',
    description: 'A Java address book adapted into a patient record management app. Built in a five-person Agile team and ranked in the top 10% of the cohort.',
    github: 'https://github.com/camlin-tan/tp',
    tags: ['Java', 'JUnit', 'GitHub Actions', 'OOP'],
    status: 'Top 10% in cohort',
    highlights: [
      'Adapted a Java address book application into a patient record management app in a five-person Agile team.',
      'Ranked in the top 10% of the cohort for software engineering.',
      'Reviewed pull requests and coordinated testing responsibilities across the team.',
      'Implemented a GitHub Actions CI/CD pipeline to automate builds and run JUnit tests on code changes.',
      'Wrote JUnit tests to verify application behaviour and detect regressions.',
    ],
  },
  {
    id: 'travelsync',
    name: 'TravelSync',
    category: 'REAL-TIME / FULL-STACK',
    period: 'May — Aug 2025',
    description: 'Less back-and-forth. More going places. A collaborative travel planner that keeps everyone’s itinerary in sync.',
    tags: ['React', 'Supabase', 'Google Maps API'],
    highlights: [
      'Built a real-time collaborative travel planner in a two-person team.',
      'Synchronised application state across concurrent client sessions with React and Supabase.',
      'Integrated Google Maps for dynamic routes, location markers, and itinerary visualisation.',
    ],
  },
];

export const experience = [
  {
    company: 'HTX',
    fullName: 'Home Team Science and Technology Agency',
    role: 'Software Engineering Intern',
    specialism: 'Backend & AI Infrastructure',
    period: 'May — Jul 2026',
    year: '2026',
    summary: 'Built the backend for an AI coding agent, covering checkpointed workflows, sandboxed validation, live previews, and safer code edits.',
    highlights: [
      'Coordinated requirements, planning, code generation, validation, and repair with Python, FastAPI, LangGraph, and SQLite, including saved checkpoints and human approval steps.',
      'Implemented DFS-based topological sorting and cycle detection to generate files in dependency order and reject circular dependencies.',
      'Built a Docker-based validation and repair pipeline using Vite and Vitest, routing build and rendering errors to targeted AI repairs and supporting thread-safe container cancellation.',
      'Developed SSE streams for live progress and build logs, plus an HTTP/WebSocket reverse proxy for application previews and Vite hot module replacement.',
      'Protected generated edits with path validation, exact-match patch checks, atomic file replacement, and rollback when an editing step failed or was cancelled.',
      'Wrote pytest tests for edit-block validation and patch application, verifying that invalid edits were rejected and valid patches produced the expected file contents.',
    ],
    tags: ['Python', 'FastAPI', 'LangGraph', 'Docker', 'SQLite', 'Vite', 'Vitest', 'pytest'],
  },
  {
    company: 'National University of Singapore',
    fullName: 'CS1231S · Discrete Structures',
    role: 'Teaching Assistant',
    specialism: '',
    period: 'Aug — Nov 2025',
    year: '2025',
    summary: 'Helped 20 undergraduates turn abstract ideas in logic and graph theory into practical understanding.',
    highlights: [],
    tags: ['Discrete mathematics', 'Communication', 'Mentorship'],
  },
];

export const skillGroups = [
  { name: 'Languages', skills: ['Python', 'Java', 'C', 'SQL', 'TypeScript', 'JavaScript', 'HTML / CSS'] },
  { name: 'Backend & systems', skills: ['FastAPI', 'Node.js', 'REST APIs', 'WebSockets', 'Server-Sent Events'] },
  { name: 'Data & AI', skills: ['PostgreSQL', 'SQLite', 'Pandas', 'Chroma', 'Supabase', 'LangGraph', 'LlamaIndex', 'RAG pipelines', 'PyTorch', 'torchvision'] },
  { name: 'Frontend & delivery', skills: ['React', 'Tailwind CSS', 'pytest', 'Docker', 'Git / GitHub', 'GitHub Actions', 'JUnit', 'Vercel'] },
];
