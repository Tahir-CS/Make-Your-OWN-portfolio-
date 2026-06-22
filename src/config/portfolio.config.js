// Portfolio Configuration File
// Edit this file to customize the portfolio with your own details

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Muhammad Tahir",
    fullName: "Muhammad Tahir",
    title: "Full Stack Engineer",
    tagline: "👋 Passionate about building fast, scalable web applications and solving complex problems.",
    email: "mtahirbutt1005@gmail.com",
    phone: "+923299712924",
    location: "Lahore, Pakistan",
    
    // Social Links
    social: {
      github: "https://github.com/Tahir-CS",
      linkedin: "https://linkedin.com/in/tahir-butt-8345a5329",
      twitter: "", // Optional
      instagram: "", // Optional
    }
  },

  // About Section
  about: {
    description: `I'm a Backend Developer specializing in Node.js and Express.js to build scalable microservices and production-grade APIs. I have hands-on experience with PostgreSQL, Redis, and Docker to develop event-driven systems and secure, high-performance infrastructure.`,
    
    // Education
    education: {
      degree: "B.S. Computer Science (CGPA: 3.3)",
      institution: "University of Engineering and Technology, Lahore",
      graduationDate: "Expected June 2028",
      coursework: "Data Structures, Algorithms, Web Development, Database Systems, Software Engineering"
    },

    // Stats
    stats: [
      { number: "10+", label: "Projects Completed" },
      { number: "1+", label: "Years Experience" },
      { number: "100%", label: "Client Satisfaction" }
    ]
  },

  // Certifications Section
  certifications: [
    {
      title: "MERN Stack Developer Certificate",
      issuer: "Certificate",
      image: "/certificates/mern.png",
      verifyUrl: "#"
    },
    {
      title: "IBM Backend Development",
      issuer: "IBM",
      image: "/certificates/ibm-backend.png",
      verifyUrl: "#"
    },
    {
      title: "Advanced React",
      issuer: "META",
      image: "/certificates/meta-react.png",
      verifyUrl: "#"
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "AWS",
      image: "/certificates/aws.png",
      verifyUrl: "#"
    },
    {
      title: "IBM Applied DevOps Engineering",
      issuer: "IBM",
      image: "/certificates/ibm-devops.png",
      verifyUrl: "#"
    }
  ],

  // Skills Section
  skills: {
    "Languages": ["C++", "JavaScript", "TypeScript", "SQL"],
    "Frontend": ["React.js", "Framer Motion", "Modern CSS"],
    "Backend": ["Node.js", "Express.js", "RESTful APIs", "BullMQ"],
    "Databases": ["PostgreSQL", "MongoDB", "Redis", "TimescaleDB"],
    "Devops & Tools": ["Git", "Postman", "Docker", "CI/CD", "AWS EC2"]
  },

  // Projects Section
  projects: [
    {
      title: "Career OS",
      description: "Event-driven microservice system returning job responses in under 50ms using BullMQ & Redis. Engineered semantic job matching with Gemini Embeddings and pgvector. Containerized infrastructure with Docker Compose.",
      techStack: ["React.js", "Node.js", "Redis", "Docker", "Supabase", "Gemini API", "PostgreSQL", "pgvector", "BullMQ"],
      githubUrl: "https://github.com/Tahir-CS/CAREER-OS-",
      liveUrl: null
    },
    {
      title: "YT Analysis Engine",
      description: "Multi-platform data ingestion layer for YouTube and Reddit. Distributed Redis rate limiter enforcing API quotas. Time-series metrics store using TimescaleDB and AI-driven comment clustering via Gemini API.",
      techStack: ["React.js", "Node.js", "PostgreSQL", "Redis", "Docker", "TimescaleDB", "Gemini API", "pgvector"],
      githubUrl: "https://github.com/Tahir-CS/Yt-Analysis-Engine",
      liveUrl: null
    },
    {
      title: "Subscription Guardian",
      description: "AI-powered browser extension that detects and manages subscriptions in real-time. Evaluates dark patterns, identifies hidden cancellation links, and provides smart renewal reminders locally for complete privacy.",
      techStack: ["TypeScript", "React.js", "Webpack", "Chrome MV3 API", "Chrome Alarms API", "Local Storage"],
      githubUrl: "https://github.com/Tahir-CS/Subscription-manager",
      liveUrl: "https://tahir-cs.github.io/Subscription-manager/"
    },
    {
      title: "E-Commerce Store",
      description: "A modern e-commerce platform with user authentication, shopping cart, and payment integration. Features responsive design and real-time inventory management.",
      techStack: ["React.js", "Supabase", "CSS3", "Stripe API"],
      githubUrl: "https://github.com/Tahir-CS/E-commerse-store",
      liveUrl: "https://e-commerse-store-eta.vercel.app/",
      thumbnail: "../assets/ecommerse store thumbnail .png"
    }
  ],

  // Experience Section
  experience: [
    {
      title: "Backend Development Intern",
      company: "Neutrawise",
      duration: "June 2025 - July 2025 (Remote)",
      description: "Built full-stack modules using Node.js and React, leveraging TypeScript to ensure end-to-end type safety and code reliability. Optimized application logic by integrating third-party APIs, streamlining data flow and expanding core platform functionality. Containerized application services using Docker, streamlining local development workflows and ensuring environment consistency across the team. Integrated environmental APIs to transform user consumption data into real-time impact metrics.",
      skills: ["Node.js", "React.js", "TypeScript", "Docker", "APIs"]
    }
  ],

  // Theme Configuration
  theme: {
    primaryColor: "#ff6900", // Orange
    secondaryColor: "#111111", // Black
    accentColor: "#667eea", // Blue
    gradients: {
      primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      orange: "linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)",
      blue: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    }
  }
};

export default portfolioConfig;
