// EXAMPLE: How to customize this portfolio for yourself
// Copy this file to src/config/portfolio.config.js and edit with your details

export const portfolioConfig = {
  // 👤 PERSONAL INFORMATION - Edit with your details
  personal: {
    name: "JOHN DOE",                    // ⭐ Change this to your name
    fullName: "John Michael Doe",        
    title: "Frontend Developer",         // ⭐ Your job title
    tagline: "Creating beautiful web experiences with React and modern technologies.", // ⭐ Your tagline
    email: "john.doe@email.com",        // ⭐ Your email
    phone: "+1 (555) 123-4567",        // ⭐ Your phone
    location: "San Francisco, CA",      // ⭐ Your location
    
    // 🔗 SOCIAL LINKS - Add your social media
    social: {
      github: "https://github.com/johndoe",           // ⭐ Your GitHub
      linkedin: "https://linkedin.com/in/johndoe",    // ⭐ Your LinkedIn
      twitter: "https://twitter.com/johndoe",         // Optional
      instagram: "https://instagram.com/johndoe",     // Optional
    }
  },

  // 📝 ABOUT SECTION - Tell your story
  about: {
    description: `I'm a passionate Frontend Developer with 3+ years of experience creating 
    user-friendly web applications. I love turning complex problems into simple, beautiful 
    designs. When I'm not coding, you can find me exploring new technologies, contributing 
    to open source projects, or hiking in the mountains.`, // ⭐ Write your bio
    
    // 🎓 EDUCATION
    education: {
      degree: "Bachelor of Computer Science",                    // ⭐ Your degree
      institution: "University of California, Berkeley",        // ⭐ Your school
      graduationDate: "May 2021",                              // ⭐ Graduation date
      coursework: "Web Development, Data Structures, Software Engineering, Database Systems" // ⭐ Relevant courses
    },

    // 📊 STATS - Your achievements
    stats: [
      { number: "50+", label: "Projects Completed" },    // ⭐ Your stats
      { number: "3+", label: "Years Experience" },
      { number: "98%", label: "Client Satisfaction" }
    ]
  },

  // 💻 SKILLS - Add your technologies
  skills: {
    "Programming Languages": ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"], // ⭐ Your languages
    "Frontend Frameworks": ["React.js", "Vue.js", "Next.js", "Tailwind CSS"],        // ⭐ Frontend skills  
    "Backend & Database": ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],        // ⭐ Backend skills
    "Tools & Platforms": ["Git", "Docker", "AWS", "Vercel", "Figma"]                 // ⭐ Tools you use
  },

  // 🚀 PROJECTS - Showcase your work
  projects: [
    {
      title: "E-Commerce Platform",                                    // ⭐ Project name
      description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.", // ⭐ Description
      techStack: ["React.js", "Node.js", "MongoDB", "Stripe API"],   // ⭐ Technologies used
      githubUrl: "https://github.com/johndoe/ecommerce-platform",    // ⭐ GitHub link
      liveUrl: "https://my-ecommerce.vercel.app",                    // ⭐ Live demo link
      thumbnail: "../assets/ecommerce-project.png"                    // ⭐ Screenshot file
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts and interactive maps.",
      techStack: ["React.js", "API Integration", "Chart.js", "CSS3"],
      githubUrl: "https://github.com/johndoe/weather-dashboard",
      liveUrl: "https://weather-app-demo.vercel.app",
      thumbnail: "../assets/weather-project.png"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team collaboration features.",
      techStack: ["Vue.js", "Firebase", "Vuetify", "Real-time DB"],
      githubUrl: "https://github.com/johndoe/task-manager",
      liveUrl: "https://task-manager-demo.vercel.app",
      thumbnail: "../assets/task-manager-project.png"
    },
    // Add more projects...
  ],

  // 💼 WORK EXPERIENCE - Your professional journey
  experience: [
    {
      title: "Frontend Developer",                           // ⭐ Job title
      company: "TechCorp Solutions",                        // ⭐ Company name
      duration: "2022 - Present",                          // ⭐ Duration
      description: "Developed responsive web applications using React.js and modern frontend technologies. Collaborated with design teams to implement user-friendly interfaces and improved website performance by 40%.", // ⭐ What you did
      skills: ["React.js", "JavaScript", "CSS3", "Git", "Agile"] // ⭐ Skills used
    },
    {
      title: "Junior Web Developer",
      company: "StartupXYZ",
      duration: "2021 - 2022",
      description: "Built and maintained company websites using HTML, CSS, and JavaScript. Worked closely with senior developers to learn best practices and implement new features.",
      skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"]
    }
    // Add more experiences...
  ],

  // 🎨 THEME CUSTOMIZATION - Colors and styling
  theme: {
    primaryColor: "#3b82f6",     // ⭐ Change main color (blue)
    secondaryColor: "#111111",   // Dark background
    accentColor: "#8b5cf6",      // ⭐ Change accent color (purple)
    gradients: {
      primary: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",   // ⭐ Custom gradient
      orange: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
      blue: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
    }
  }
};

export default portfolioConfig;
