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
    id: 'healthnote',
    name: 'HealthNote',
    category: 'SOFTWARE ENGINEERING',
    period: 'Sep — Nov 2025',
    description: 'A keyboard-first patient and appointment manager for independent doctors. Built in Java and ranked in the top 10% of the cohort.',
    github: 'https://github.com/camlin-tan/tp',
    tags: ['Java', 'JUnit', 'GitHub Actions', 'OOP'],
    status: 'Top 10% in cohort',
    highlights: [
      'Delivered a modular Java system with a five-person Agile team, following object-oriented design principles.',
      'Designed a GitHub Actions pipeline to automate builds and tests.',
      'Wrote JUnit regression tests, reviewed pull requests, and coordinated test ownership.',
      'Maintained documentation and code standards to support future development.',
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
  {
    id: 'quant',
    name: 'Real-Time Quant Data Engine',
    category: 'DATA / BACKEND',
    period: 'Jul 2026 — Present',
    description: 'Exploring the infrastructure behind market data: from live event ingestion to queryable time series and archival storage.',
    tags: ['Python', 'FastAPI', 'TimescaleDB', 'Redpanda'],
    status: 'In progress',
    highlights: [
      'An active build, with the architecture and implementation still evolving.',
      'Planned pipeline: ingest WebSocket market data into Redpanda, aggregate 60-second OHLCV bars, and store time series in TimescaleDB.',
      'Planned serving and archival layers: an asynchronous FastAPI service, plus Airflow and PySpark workflows to archive Parquet files to MinIO.',
      'Target tooling includes Docker Compose, pytest, and GitHub Actions for repeatable development and validation.',
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
    summary: 'Built the infrastructure behind an agentic software development harness, from orchestration to isolated execution.',
    highlights: [
      'Engineered a checkpointed, human-in-the-loop workflow across a 9-node LangGraph state graph.',
      'Used DFS-based topological sorting and cycle validation to make code generation dependency-aware.',
      'Built Docker sandboxes with asynchronous logs and thread-safe cancellation, plus SSE streams and a WebSocket proxy.',
      'Added atomic file replacement, node-level rollback, and asynchronous integration tests for patch safety and context isolation.',
    ],
    tags: ['Python', 'FastAPI', 'LangGraph', 'Docker', 'SQLite'],
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
  {
    company: 'A-Level Tutoring',
    fullName: 'Mathematics & Sciences',
    role: 'Part-time Tutor',
    specialism: '',
    period: 'Dec 2023 — Jul 2024',
    year: '2023–24',
    summary: 'Delivered personalised coaching in mathematics and sciences, with an average improvement of 2–3 grades.',
    highlights: [],
    tags: ['Problem solving', 'Teaching'],
  },
];

export const skillGroups = [
  { name: 'Languages', skills: ['Python', 'Java', 'C', 'SQL', 'TypeScript', 'JavaScript', 'HTML / CSS'] },
  { name: 'Backend & systems', skills: ['FastAPI', 'Node.js', 'REST APIs', 'WebSockets', 'Server-Sent Events'] },
  { name: 'Data & AI', skills: ['SQLite', 'Chroma', 'Supabase', 'LangGraph', 'LlamaIndex', 'RAG pipelines'] },
  { name: 'Frontend & delivery', skills: ['React', 'Tailwind CSS', 'Docker', 'Git', 'GitHub Actions', 'JUnit', 'Vercel'] },
];
