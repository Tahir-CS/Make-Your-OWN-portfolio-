# 🚀 Quick Setup Guide

## For Users Who Want to Use This Template

### Option 1: Use GitHub Template (Recommended)
1. **Click "Use this template"** button on the GitHub repository
2. **Create your own repository** with a new name
3. **Clone your new repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
   ```

### Option 2: Fork and Clone
1. **Fork this repository** to your GitHub account
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Make-Your-OWN-portfolio-.git
   cd Make-Your-OWN-portfolio-
   ```

## 📝 Customization Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Customize Your Portfolio (Easy!)
Edit **ONE FILE ONLY**: `src/config/portfolio.config.js`

```javascript
export const portfolioConfig = {
  personal: {
    name: "YOUR NAME HERE",           // ⭐ Change this
    title: "Your Job Title",          // ⭐ Change this
    tagline: "Your awesome tagline",  // ⭐ Change this
    email: "your.email@gmail.com",    // ⭐ Change this
    phone: "+1 234 567 8900",        // ⭐ Change this
    location: "Your City, Country",   // ⭐ Change this
    social: {
      github: "https://github.com/yourusername",    // ⭐ Change this
      linkedin: "https://linkedin.com/in/yourusername" // ⭐ Change this
    }
  },
  // ... more customization options
};
```

### Step 3: Add Your Photos
- Replace `src/assets/me.jpg` with your profile photo
- Replace `src/assets/me2.jpg` with another photo (optional)
- Add your project screenshots to `src/assets/`

### Step 4: Test Your Changes
```bash
npm run dev
```
Visit `http://localhost:5173` to see your portfolio!

### Step 5: Deploy Your Portfolio

#### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Deploy to Netlify
1. Build: `npm run build`
2. Upload the `dist` folder to Netlify


## 🎨 Full Customization Options

All available options in `portfolio.config.js`:

### Personal Information
```javascript
personal: {
  name: "Your Name",
  title: "Your Job Title",
  tagline: "Your description",
  email: "your.email@example.com",
  phone: "+1 234 567 8900",
  location: "Your City, Country",
  social: {
    github: "github-url",
    linkedin: "linkedin-url",
    twitter: "twitter-url",    // Optional
    instagram: "instagram-url" // Optional
  }
}
```

### About Section
```javascript
about: {
  description: "Your bio...",
  education: {
    degree: "Your Degree",
    institution: "Your University",
    graduationDate: "Graduation Date",
    coursework: "Relevant courses"
  },
  stats: [
    { number: "50+", label: "Projects" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" }
  ]
}
```

### Skills
```javascript
skills: {
  "Programming Languages": ["JavaScript", "Python", "Java"],
  "Frontend": ["React.js", "Vue.js", "HTML5", "CSS3"],
  "Backend": ["Node.js", "Express.js", "Django"],
  "Tools": ["Git", "Docker", "AWS", "Vercel"]
}
```

### Projects
```javascript
projects: [
  {
    title: "Project Name",
    description: "Project description...",
    techStack: ["React.js", "Node.js", "MongoDB"],
    githubUrl: "github-repo-url",
    liveUrl: "live-demo-url",
    thumbnail: "../assets/project-image.png"
  }
]
```

### Work Experience
```javascript
experience: [
  {
    title: "Job Title",
    company: "Company Name",
    duration: "Start - End Date",
    description: "What you did...",
    skills: ["React.js", "Node.js", "MongoDB"]
  }
]
```

### Theme Colors
```javascript
theme: {
  primaryColor: "#ff6900",
  secondaryColor: "#111111",
  accentColor: "#667eea",
  gradients: {
    primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    orange: "linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)"
  }
}
```

## 🔧 Development Commands

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
```

## 📞 Need Help?

- 🐛 **Issues**: [Report here](https://github.com/Tahir-CS/Make-Your-OWN-portfolio-/issues)
- 💬 **Questions**: Create a discussion on GitHub
- 📧 **Contact**: tahirhussain.cs@gmail.com

## 🤝 Contributing

Found a bug or want to add a feature? Contributions are welcome!

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

⭐ **Star this repository if it helped you!**

