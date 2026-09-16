// Portfolio Configuration - High-Signal Software Engineering Portfolio

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Muhammad Tahir",
    fullName: "Muhammad Tahir",
    title: "Backend & Systems Engineer",
    status: "Available for Backend / Full-Stack Roles",
    location: "Lahore, Pakistan (UTC+5)",
    tagline: "Building resilient distributed microservices, event-driven queues, and intelligent web applications.",
    bio: "Computer Science undergraduate at UET Lahore specializing in Node.js, TypeScript, PostgreSQL, Redis, and BullMQ. Experienced in architecting event-driven systems, pgvector similarity search, and containerized Docker infrastructure.",
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
    overview: `I focus on the engineering backbone of modern software: asynchronous job queues, resilient APIs, and data infrastructure that doesn't fall over under load. My hands-on work centers around building event-driven microservices with Node.js and BullMQ, caching and rate limiting with Redis, and vector search using PostgreSQL and pgvector.`,
    
    education: {
      degree: "B.S. in Computer Science",
      institution: "University of Engineering and Technology (UET), Lahore",
      cgpa: "CGPA: 3.3 / 4.0",
      graduationDate: "Expected June 2028",
      coursework: [
        "Data Structures & Algorithms",
        "Database Systems",
        "Object-Oriented Programming (C++)",
        "Operating Systems",
        "Software Engineering"
      ]
    },

    // Concrete Technical Impact (Replaces generic vanity stats)
    milestones: [
      {
        metric: "<50ms",
        label: "Response Latency",
        detail: "Event-driven async queue via BullMQ & Redis in Career OS"
      },
      {
        metric: "Vector DB",
        label: "Semantic Matching",
        detail: "PostgreSQL + pgvector with Gemini text embeddings"
      },
      {
        metric: "Time-Series",
        label: "Metrics Storage",
        detail: "TimescaleDB hypertable ingestion for high-throughput streaming"
      },
      {
        metric: "Dockerized",
        label: "Reproducible Infra",
        detail: "Multi-container orchestration for microservices & databases"
      }
    ]
  },

  // Skills Matrix
  skills: {
    "Backend & Systems": [
      "Node.js",
      "Express.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "C++",
      "RESTful APIs",
      "Microservices"
    ],
    "Distributed & Caching": [
      "Redis",
      "BullMQ (Queues)",
      "Distributed Rate Limiting",
      "Event-Driven Architecture"
    ],
    "Databases & Storage": [
      "PostgreSQL",
      "pgvector",
      "TimescaleDB",
      "MongoDB",
      "Supabase",
      "Prisma / SQL"
    ],
    "Infrastructure & Tools": [
      "Docker",
      "Docker Compose",
      "AWS EC2",
      "CI/CD Pipelines",
      "Git & GitHub",
      "Postman",
      "Linux / Bash"
    ],
    "Frontend & Extensions": [
      "React.js",
      "Chrome MV3 Extensions",
      "Tailwind CSS",
      "Framer Motion",
      "Webpack / Vite"
    ]
  },

  // Featured Engineering Projects
  projects: [
    {
      title: "Career OS",
      badge: "Distributed Microservice",
      description: "Event-driven career intelligence microservice architecture returning job pipeline responses in under 50ms using BullMQ & Redis queues. Engineered high-dimensional semantic resume-to-job matching via Gemini Embeddings and pgvector in PostgreSQL.",
      architecture: [
        "Sub-50ms asynchronous job execution using BullMQ worker threads",
        "High-dimensional vector similarity search with pgvector (cosine distance)",
        "Docker Compose orchestration separating API gateway, worker pool, and database services"
      ],
      techStack: ["Node.js", "Redis", "BullMQ", "PostgreSQL", "pgvector", "Docker", "Gemini API", "React.js"],
      githubUrl: "https://github.com/Tahir-CS/CAREER-OS-",
      liveUrl: null,
      featured: true
    },
    {
      title: "YT Analysis Engine",
      badge: "Data Ingestion Pipeline",
      description: "High-throughput data ingestion pipeline capturing and analyzing video analytics from YouTube and Reddit. Features a distributed Redis token-bucket rate limiter to strictly enforce external API quotas, paired with TimescaleDB hypertables for time-series aggregation.",
      architecture: [
        "Distributed Redis rate limiter preventing API quota exhaustion under burst traffic",
        "TimescaleDB hypertable partitioning for optimized temporal queries",
        "AI-driven comment clustering and sentiment scoring using Gemini & pgvector"
      ],
      techStack: ["Node.js", "TimescaleDB", "PostgreSQL", "Redis", "pgvector", "Docker", "Gemini API", "React.js"],
      githubUrl: "https://github.com/Tahir-CS/Yt-Analysis-Engine",
      liveUrl: null,
      featured: true
    },
    {
      title: "Subscription Guardian",
      badge: "Chrome MV3 Extension",
      description: "Privacy-first Chrome Extension (Manifest V3) that actively analyzes web pages to detect dark cancellation patterns and recurring subscription traps. Operates entirely locally using Chrome Alarms and Local Storage to safeguard user privacy without external telemetry.",
      architecture: [
        "DOM mutation observers and pattern matching algorithms detecting dark checkout flows",
        "100% client-side privacy architecture with zero remote data collection",
        "Chrome MV3 service worker lifecycle with Chrome Alarms for background renewal alerts"
      ],
      techStack: ["TypeScript", "Chrome MV3 API", "React.js", "Chrome Alarms", "Webpack", "Local Storage"],
      githubUrl: "https://github.com/Tahir-CS/Subscription-manager",
      liveUrl: "https://tahir-cs.github.io/Subscription-manager/",
      featured: true
    },
    {
      title: "Full-Stack E-Commerce Platform",
      badge: "Production Web App",
      description: "Modern, responsive e-commerce web application featuring secure Supabase authentication, real-time inventory management, cart synchronization, and Stripe payment gateway checkout.",
      architecture: [
        "Supabase Row-Level Security (RLS) policies protecting user transaction records",
        "Stripe checkout sessions with webhook verification for payment confirmation",
        "Optimistic UI updates for responsive shopping cart state management"
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
      title: "Backend Development Intern",
      company: "Neutrawise",
      location: "Remote",
      duration: "June 2025 - July 2025",
      type: "Internship",
      description: "Contributed to core platform backend architecture, focusing on type-safe API integrations, service containerization, and data processing pipelines.",
      highlights: [
        "Architected full-stack modules using Node.js and TypeScript, enforcing strict end-to-end type safety across client-server boundaries.",
        "Integrated third-party environmental APIs to ingest and transform raw consumption data into normalized real-time impact metrics.",
        "Dockerized platform microservices with Docker Compose, standardizing local developer environments and accelerating CI validation.",
        "Optimized asynchronous database queries and API response handlers, reducing endpoint turnaround times."
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
