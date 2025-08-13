// Portfolio Configuration File
// Edit this file to customize the portfolio with your own details

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "M. me",
    fullName: "Muhammad Tahir",
    title: "Full Stack Developer",
    tagline: "Building modern web experiences with React, Node.js, and more.",
    email: "tahirhussain.cs@gmail.com",
    phone: "+92 304 1234567",
    location: "Lahore, Pakistan",
    
    // Social Links
    social: {
      github: "https://github.com/Tahir-CS",
      linkedin: "https://www.linkedin.com/in/tahir-hussain-dev/",
      twitter: "", // Optional
      instagram: "", // Optional
    }
  },

  // About Section
  about: {
    description: `I'm a passionate Full Stack Developer with expertise in modern web technologies. 
    I love creating elegant solutions to complex problems and building applications that make a difference. 
    Currently pursuing Computer Science at University of Engineering and Technology, Lahore, 
    while working on exciting projects that push the boundaries of web development.`,
    
    // Education
    education: {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Engineering and Technology, Lahore",
      graduationDate: "June 2028",
      coursework: "Data Structures, Algorithms, Web Development, Database Systems, Software Engineering"
    },

    // Stats
    stats: [
      { number: "20+", label: "Projects Completed" },
      { number: "2+", label: "Years Experience" },
      { number: "100%", label: "Client Satisfaction" }
    ]
  },

  // Skills Section
  skills: {
    "Languages": ["JavaScript", "C++", "HTML5", "CSS3", "Python"],
    "Frontend": ["React.js", "Responsive Design", "Framer Motion", "Modern CSS"],
    "Backend": ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
    "Databases": ["MongoDB", "SQLite", "SQL Server"],
    "Tools & Technologies": ["Git", "GitHub", "NPM", "AWS", "Postman"]
  },

  // Projects Section
  projects: [
    {
      title: "E-Commerce Store",
      description: "A modern e-commerce platform with user authentication, shopping cart, and payment integration. Features responsive design and real-time inventory management.",
      techStack: ["React.js", "Supabase", "CSS3", "Stripe API"],
      githubUrl: "https://github.com/Tahir-CS/E-commerse-store",
      liveUrl: "https://e-commerse-store-eta.vercel.app/",
      thumbnail: "../assets/ecommerse store thumbnail .png"
    },
    {
      title: "AI Resume Analyzer",
      description: "An intelligent resume analysis tool that provides feedback on resume content, format, and ATS compatibility using machine learning algorithms.",
      techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "AI/ML"],
      githubUrl: "https://github.com/Tahir-CS/Ai-RESUME-ANALYZER",
      liveUrl: "https://ai-resume-analyzer-chi-six.vercel.app",
      thumbnail: "../assets/ai resume analyzer.png"
    },
    {
      title: "TrendVision Dashboard",
      description: "A comprehensive analytics dashboard for tracking market trends and data visualization with interactive charts and real-time updates.",
      techStack: ["Node.js", "Chart.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/Tahir-CS/Youtube-Tracker-and-Cost-estimator",
      liveUrl: "https://youtube-tracker-cost-estimator-supa-base-version-6w3sia5rd.vercel.app/",
      thumbnail: "../assets/trendvision thumbnail.png"
    },
    {
      title: "VoteChain Voting System",
      description: "A secure digital voting system with blockchain-inspired security features and real-time result tracking.",
      techStack: ["C++", "SQLite", "Cryptography"],
      githubUrl: "https://github.com/Tahir-CS/2nd-Sem-Project-OOP",
      liveUrl: null
    },
    {
      title: "LMS & Quiz System",
      description: "A learning management system with interactive quizzes, progress tracking, and file management capabilities.",
      techStack: ["C++", "File Handling", "Data Structures"],
      githubUrl: "https://github.com/Tahir-CS/1st-Sem-Project",
      liveUrl: null
    },
    {
      title: "Cyber Security Database Management System",
      description: "A robust database system to track, manage, and report cybersecurity incidents, enabling efficient response and secure data handling for enterprise-level environments.",
      techStack: ["SQL", "Microsoft SQL Server", "Database Design"],
      githubUrl: "https://github.com/Tahir-CS/Cyber-security-management-system-database",
      liveUrl: null
    }
  ],

  // Experience Section
  experience: [
    {
      title: "Full Stack Developer",
      company: "Codealpha",
      duration: "June 2025 - July 2025",
      description: "Developing web applications using React.js, Node.js, and modern web technologies. Building responsive, user-friendly interfaces and robust backend systems.",
      skills: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript"]
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
