// Portfolio Configuration - Editorial & Systems Architecture Portfolio

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Muhammad Tahir",
    fullName: "Muhammad Tahir",
    title: "Systems & Backend Architect",
    roleSubtitle: "Distributed Services • Asynchronous Queues • Vector Search",
    status: "Available for Worldwide Roles",
    location: "Lahore, Pakistan (UTC+5)",
    tagline: "Engineering sub-50ms distributed pipelines, event-driven queues, and vector search engines.",
    bio: "Computer Science scholar at UET Lahore building resilient backend microservices. Obsessed with distributed queues, database indexing, pgvector similarity search, and containerized systems that perform effortlessly under load.",
    email: "mtahirbutt1005@gmail.com",
    phone: "+92 329 9712924",
    
    // Social Links
    social: {
      github: "https://github.com/Tahir-CS",
      linkedin: "https://linkedin.com/in/tahir-butt-8345a5329",
      twitter: "",
    }
  },

  // About Section & Engineering Highlights
  about: {
    statement: "Most software fails when traffic spikes. I engineer the distributed backends that ensure it doesn't.",
    overview: `Specializing in asynchronous worker pipelines (BullMQ + Redis), high-dimensional vector search (PostgreSQL + pgvector), and streaming data storage (TimescaleDB). I treat systems architecture with an emphasis on determinism, zero data loss, and sub-millisecond efficiency.`,
    
    education: {
      degree: "B.S. in Computer Science",
      institution: "University of Engineering and Technology (UET), Lahore",
      cgpa: "CGPA 3.3 / 4.0",
      graduationDate: "Expected 2028",
      coursework: [
        "Distributed Computing",
        "Data Structures & Algorithms",
        "Advanced Database Systems",
        "Systems Programming (C++)",
        "Operating Systems"
      ]
    },

    // Awwwards-style architectural metrics
    milestones: [
      {
        index: "01",
        metric: "<50ms",
        label: "Job Queue Latency",
        detail: "Asynchronous background processing via BullMQ & Redis"
      },
      {
        index: "02",
        metric: "pgvector",
        label: "Semantic Matching",
        detail: "Cosine distance vector embeddings powered by Gemini"
      },
      {
        index: "03",
        metric: "Timescale",
        label: "Time-Series Ingestion",
        detail: "Hypertables partitioned for high-throughput temporal data"
      },
      {
        index: "04",
        metric: "Dockerized",
        label: "Zero-Drift Infra",
        detail: "Containerized microservice boundaries & orchestration"
      }
    ]
  },

  // Skills Matrix
  skills: {
    "Distributed & Queues": [
      "BullMQ",
      "Redis",
      "Event-Driven Architecture",
      "Token-Bucket Rate Limiting",
      "Job Worker Pools"
    ],
    "Backend Core": [
      "Node.js",
      "TypeScript",
      "Express.js",
      "C++",
      "RESTful API Design",
      "Microservices"
    ],
    "Databases & Vectors": [
      "PostgreSQL",
      "pgvector",
      "TimescaleDB",
      "MongoDB",
      "Supabase (RLS)",
      "SQL Optimization"
    ],
    "Infrastructure": [
      "Docker",
      "Docker Compose",
      "AWS EC2",
      "CI/CD Workflows",
      "Linux / Bash",
      "Git Architecture"
    ],
    "Client & Extensions": [
      "React.js",
      "Chrome MV3 APIs",
      "Modern CSS / Tailwind",
      "Vite",
      "Framer Motion"
    ]
  },

  // Featured Engineering Projects
  projects: [
    {
      index: "01",
      title: "Career OS",
      badge: "Distributed Microservice",
      category: "Event-Driven System",
      description: "Distributed job intelligence engine returning responses in <50ms. Combines BullMQ worker threads with pgvector semantic cosine similarity search using Gemini embeddings.",
      architecture: [
        "Sub-50ms asynchronous queue pipelines running on Redis + BullMQ workers",
        "High-dimensional vector indexing in PostgreSQL using pgvector",
        "Multi-container Docker Compose setup separating gateway, worker cluster, and database"
      ],
      techStack: ["Node.js", "Redis", "BullMQ", "PostgreSQL", "pgvector", "Docker", "Gemini API"],
      githubUrl: "https://github.com/Tahir-CS/CAREER-OS-",
      liveUrl: null,
      featured: true
    },
    {
      index: "02",
      title: "YT Analysis Engine",
      badge: "Data Ingestion Pipeline",
      category: "Time-Series Analytics",
      description: "High-throughput data ingestion pipeline capturing YouTube & Reddit streaming metrics. Uses a distributed Redis token-bucket rate limiter to enforce strict quotas, stored in TimescaleDB hypertables.",
      architecture: [
        "Distributed Redis rate limiter preventing external API quota exhaustion under bursts",
        "TimescaleDB hypertable chunk partitioning for high-speed time-series queries",
        "AI-assisted sentiment clustering via Gemini and pgvector vector search"
      ],
      techStack: ["Node.js", "TimescaleDB", "PostgreSQL", "Redis", "pgvector", "Docker", "Gemini API"],
      githubUrl: "https://github.com/Tahir-CS/Yt-Analysis-Engine",
      liveUrl: null,
      featured: true
    },
    {
      index: "03",
      title: "Subscription Guardian",
      badge: "Chrome MV3 Extension",
      category: "Privacy & Client Engineering",
      description: "Zero-telemetry browser extension that inspects checkout DOMs in real-time to detect dark patterns, hidden recurring subscriptions, and deceptive cancellation links.",
      architecture: [
        "DOM mutation observers and pattern matching algorithms detecting dark checkout flows",
        "100% client-side privacy architecture with zero remote data telemetry",
        "Manifest V3 service worker lifecycle with Chrome Alarms for background renewal alerts"
      ],
      techStack: ["TypeScript", "Chrome MV3 API", "React.js", "Chrome Alarms", "Webpack", "Local Storage"],
      githubUrl: "https://github.com/Tahir-CS/Subscription-manager",
      liveUrl: "https://tahir-cs.github.io/Subscription-manager/",
      featured: true
    },
    {
      index: "04",
      title: "Full-Stack E-Commerce Platform",
      badge: "Production Platform",
      category: "Web Application",
      description: "Full-stack transactional web platform with Supabase Row-Level Security, real-time cart state synchronization, and Stripe payment webhook verification.",
      architecture: [
        "Supabase Row-Level Security (RLS) enforcing strict authorization at database level",
        "Stripe checkout sessions with cryptographically signed webhook confirmation",
        "Optimistic UI state transitions for instantaneous user interactions"
      ],
      techStack: ["React.js", "Supabase", "Stripe API", "Modern CSS", "Vite"],
      githubUrl: "https://github.com/Tahir-CS/E-commerse-store",
      liveUrl: "https://e-commerse-store-eta.vercel.app/",
      featured: false
    }
  ],

  // Experience Section
  experience: [
    {
      index: "01",
      title: "Backend Development Intern",
      company: "Neutrawise",
      location: "Remote",
      duration: "June 2025 — July 2025",
      type: "Engineering Internship",
      description: "Contributed to platform backend architecture with an emphasis on type-safe API contracts, service containerization, and data transformation.",
      highlights: [
        "Engineered backend modules with Node.js and TypeScript, eliminating runtime boundary type errors.",
        "Integrated third-party environmental APIs, transforming raw consumption streams into normalized metrics.",
        "Containerized platform services using Docker Compose, creating reproducible developer environments.",
        "Refactored database access layers to reduce query latencies and improve throughput."
      ],
      skills: ["Node.js", "TypeScript", "Docker", "REST APIs", "React.js", "Git"]
    }
  ],

  // Certifications
  certifications: [
    {
      title: "IBM Backend Development Specialization",
      issuer: "IBM",
      date: "2024",
      image: "/certificates/ibm-backend.png",
      verifyUrl: "#"
    },
    {
      title: "Advanced React & Frontend Architecture",
      issuer: "Meta",
      date: "2024",
      image: "/certificates/meta-react.png",
      verifyUrl: "#"
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services",
      date: "2024",
      image: "/certificates/aws.png",
      verifyUrl: "#"
    },
    {
      title: "IBM Applied DevOps Engineering",
      issuer: "IBM",
      date: "2024",
      image: "/certificates/ibm-devops.png",
      verifyUrl: "#"
    },
    {
      title: "Full Stack MERN Developer Certificate",
      issuer: "Certificate",
      date: "2024",
      image: "/certificates/mern.png",
      verifyUrl: "#"
    }
  ]
};

export default portfolioConfig;
