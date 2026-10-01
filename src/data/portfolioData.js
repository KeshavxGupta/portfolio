// Centralized portfolio data
// Zero-emoji standard: all icons are vector SVGs or clean CSS indicators.

export const personalInfo = {
  name: "Keshav Gupta",
  role: "Full-Stack Developer & AI Systems Builder",
  status: "Available for Internships",
  location: "India",
  email: "keshav035306@gmail.com",
  education: {
    degree: "B.E. Computer Science Engineering",
    specialization: "Artificial Intelligence & Machine Learning",
    institution: "Chitkara University",
    period: "2024 - Present"
  },
  bio: "Full-stack developer focused on building scalable web systems, data-driven applications, and integrating artificial intelligence into production-grade user experiences. Passionate about performant system architecture, clean APIs, and rapid prototyping.",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/KeshavxGupta",
      handle: "KeshavxGupta"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/keshav-gupta-751925324",
      handle: "keshav-gupta"
    },
    {
      name: "X (Twitter)",
      url: "https://twitter.com/Keshav463387401",
      handle: "@Keshav463387401"
    },
    {
      name: "Medium",
      url: "https://medium.com/@keshavg60353",
      handle: "@keshavg60353"
    }
  ]
};

export const skillCategories = [
  {
    category: "Languages & Core",
    description: "Fundamental programming and query languages",
    skills: ["Python", "C++", "JavaScript (ES6+)", "HTML5", "CSS3", "SQL"]
  },
  {
    category: "Frontend Development",
    description: "Building responsive, component-driven user interfaces",
    skills: ["React.js", "Tailwind CSS", "Responsive Design", "Vite", "Framer Motion"]
  },
  {
    category: "Backend & Systems",
    description: "Architecting REST APIs, services, and databases",
    skills: ["Node.js", "Express.js", "Flask", "Django", "REST APIs", "SQLite"]
  },
  {
    category: "Cloud, AI & Workflow",
    description: "Developer tooling, cloud services, and machine learning",
    skills: ["Git & GitHub", "Google Cloud Platform", "Postman", "Linux / Bash", "Vertex AI / GenAI"]
  }
];

export const featuredProjects = [
  {
    id: "kanpurwatch",
    title: "Kanpur Watch Luxury Platform",
    tagline: "Live Commercial Luxury Watch & Horology E-Commerce",
    description: "A production commercial platform engineered for an official dealer of authentic luxury watches and Swiss chronographs. Features high-performance responsive catalog browsing, brand filtering, privacy-compliant Google Analytics consent gating, and SEO schema optimization.",
    technologies: ["React.js", "Tailwind CSS", "Production Web App", "SEO & Schema.org", "Performance"],
    image: new URL('../assets/photos/kanpurwatch.png', import.meta.url).href,
    github: "https://github.com/KeshavxGupta",
    liveDemo: "https://kanpurwatch.in",
    highlights: [
      "Deployed and active in production at kanpurwatch.in serving real retail and luxury buyers",
      "Dynamic catalog architecture with brand sorting, horology specs, and insured checkout inquiries",
      "DPDP/GDPR compliant privacy consent architecture with conditional analytics dispatch",
      "Full JSON-LD structured schema integration achieving high visibility on search engines"
    ]
  },
  {
    id: "taskmaster",
    title: "TaskMaster Management Platform",
    tagline: "Full-Stack Task, User & Inventory Management System",
    description: "A comprehensive productivity and resource management platform. Engineered with a modular Flask REST API backend integrated with a Django web application, enabling structured multi-user workflows, role management, and operational tracking.",
    technologies: ["Flask", "Django", "Python", "REST API", "Tailwind CSS", "SQLite"],
    image: new URL('../assets/photos/project1.jpg', import.meta.url).href,
    github: "https://github.com/KeshavxGupta/TaskMaster",
    liveDemo: null,
    highlights: [
      "Decoupled Flask REST backend communicating with Django presentation layers",
      "Role-based user management and granular inventory status tracking",
      "Responsive workflow interface optimized for operational efficiency"
    ]
  },
  {
    id: "hackmol-farm",
    title: "AgriTech Farming Intelligence System",
    tagline: "Predictive Crop Analytics & Field Management (Hackmol 6.0)",
    description: "An agricultural analytics platform designed to assist modern farm management. Combines predictive crop assessment, environmental monitoring metrics, and farm planning utilities into a unified dashboard, developed during the Hackmol hackathon.",
    technologies: ["Python", "Machine Learning", "Web Development", "Data Analytics"],
    image: new URL('../assets/photos/project2.png', import.meta.url).href,
    github: "https://github.com/Naitik355/Hackmol",
    liveDemo: null,
    highlights: [
      "Built collaboratively in a fast-paced 36-hour hackathon environment",
      "Crop yield evaluation model taking soil and climate data inputs",
      "Interactive data visualizations and farm workflow tracker"
    ]
  },
  {
    id: "image-gallery",
    title: "High-Performance Image Gallery",
    tagline: "Zero-Dependency Responsive Media Interface",
    description: "A lightweight, framework-free media showcase application built with pure vanilla HTML, modern CSS Grid/Flexbox, and asynchronous JavaScript. Prioritizes near-instant paint times, smooth transitions, and clean mobile responsiveness.",
    technologies: ["JavaScript", "HTML5", "CSS3", "CSS Grid", "Performance"],
    image: new URL('../assets/photos/project3.png', import.meta.url).href,
    github: "https://github.com/KeshavxGupta/IMAGE-GALLERY",
    liveDemo: null,
    highlights: [
      "Zero external runtime dependencies for minimal bundle weight",
      "Adaptive grid layout transitioning fluidly from mobile to ultra-wide",
      "Optimized DOM event handling and CSS transitions"
    ]
  }
];

export const experienceTimeline = [
  {
    period: "2024 - Present",
    role: "B.E. in Computer Science Engineering (AI & ML)",
    organization: "Chitkara University",
    type: "Education",
    details: "Focusing on data structures, algorithmic efficiency, machine learning architectures, and scalable web software systems."
  },
  {
    period: "2025",
    role: "Hackmol 6.0 Competitor",
    organization: "GDG NIT Jalandhar",
    type: "Hackathon",
    details: "Built an end-to-end AgriTech platform under 36 hours with predictive crop assessment and real-time farm dashboard analytics."
  },
  {
    period: "2025",
    role: "Build With India Participant",
    organization: "Hack With India",
    type: "Hackathon",
    details: "Participated in national open hackathon focusing on practical software solutions for everyday Indian challenges."
  },
  {
    period: "2024 - 2025",
    role: "Cloud & AI Skill Badges",
    organization: "Google Cloud Skills Boost",
    type: "Certification",
    details: "Completed 18+ verified cloud hands-on skill badges including Vertex AI Prompt Design, Cloud Run Functions, and Generative AI Application development."
  }
];

export const certificatesList = [
  {
    id: 1,
    title: 'Digital Transformation in Financial Services',
    issuer: 'Coursera',
    year: 2025,
    imageUrl: new URL('../assets/photos/certificate1.jpg', import.meta.url).href,
  },
  {
    id: 2,
    title: 'Natural Disaster and Climate Change Risk Assessment',
    issuer: 'Coursera',
    year: 2024,
    imageUrl: new URL('../assets/photos/certificate2.jpg', import.meta.url).href,
  },
  {
    id: 3,
    title: 'Finance for Everyone',
    issuer: 'Coursera',
    year: 2024,
    imageUrl: new URL('../assets/photos/certificate3.jpg', import.meta.url).href,
  },
  {
    id: 4,
    title: 'The Basics of Google Cloud Compute',
    issuer: 'Google Cloud',
    year: 2024,
    imageUrl: new URL('../assets/photos/certificate4.png', import.meta.url).href,
    badgeUrl: 'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/11892530',
  },
  {
    id: 5,
    title: 'Get Started with Cloud Storage',
    issuer: 'Google Cloud',
    year: 2024,
    imageUrl: new URL('../assets/photos/certificate5.png', import.meta.url).href,
    badgeUrl: 'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/11893706',
  },
  {
    id: 6,
    title: 'Get Started with Looker',
    issuer: 'Google Cloud',
    year: 2024,
    imageUrl: new URL('../assets/photos/certificate6.png', import.meta.url).href,
    badgeUrl: 'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/11978101'
  },
  {
    id: 7,
    title: 'Get Started with Dataplex',
    issuer: 'Google Cloud',
    year: 2024,
    imageUrl: new URL('../assets/photos/certificate7.png', import.meta.url).href,
    badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12096729'
  },
  {
    id: 8,
    title: 'Cloud Run Functions: 3 Ways',
    issuer: 'Google Cloud',
    year: 2024,
    imageUrl: new URL('../assets/photos/certificate8.png', import.meta.url).href,
    badgeUrl: 'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12101031'
  },
  {
    id: 9,
    title: 'App Engine: 3 Ways',
    issuer: 'Google Cloud',
    year: 2024,
    imageUrl: new URL('../assets/photos/certificate9.png', import.meta.url).href,
    badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12118124'
  },
  {
    id: 10,
    title: 'Get Started with API Gateway',
    issuer: 'Google Cloud',
    year: 2024,
    imageUrl: new URL('../assets/photos/certificate10.png', import.meta.url).href,
    badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12120043'
  },
  {
    id: 11,
    title: 'Cloud Speech API: 3 Ways',
    issuer: 'Google Cloud',
    year: 2024,
    imageUrl: new URL('../assets/photos/certificate11.png', import.meta.url).href,
    badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12179548'
  },
  {
    id: 12,
    title: 'Monitoring in Google Cloud',
    issuer: 'Google Cloud',
    year: 2024,
    imageUrl: new URL('../assets/photos/certificate12.png', import.meta.url).href,
    badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12182633'
  },
  {
    id: 13,
    title: 'Networking Fundamentals on Google Cloud',
    issuer: 'Google Cloud',
    year: 2024,
    imageUrl: new URL('../assets/photos/certificate13.png', import.meta.url).href,
    badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12222990'
  },
  {
    id: 14,
    title: 'Analyze Images with the Cloud Vision API',
    issuer: 'Google Cloud',
    year: 2024,
    imageUrl: new URL('../assets/photos/certificate14.png', import.meta.url).href,
    badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12223644'
  },
  {
    id: 15,
    title: 'Get Started with Pub/Sub',
    issuer: 'Google Cloud',
    year: 2024,
    imageUrl: new URL('../assets/photos/certificate15.png', import.meta.url).href,
    badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12223958'
  },
  {
    id: 16,
    title: 'Get Started with Google Workspace Tools',
    issuer: 'Google Cloud',
    year: 2024,
    imageUrl: new URL('../assets/photos/certificate16.png', import.meta.url).href,
    badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12259968'
  },
  {
    id: 17,
    title: 'Prompt Design in Vertex AI',
    issuer: 'Google Cloud',
    year: 2024,
    imageUrl: new URL('../assets/photos/certificate17.png', import.meta.url).href,
    badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12315604'
  },
  {
    id: 18,
    title: 'Develop GenAI Apps with Gemini and Streamlit',
    issuer: 'Google Cloud',
    year: 2024,
    imageUrl: new URL('../assets/photos/certificate18.png', import.meta.url).href,
    badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12321784'
  },
  {
    id: 19,
    title: 'Level 3: Google Cloud Adventures',
    issuer: 'Google Cloud',
    year: 2024,
    imageUrl: new URL('../assets/photos/certificate19.png', import.meta.url).href,
    badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12333674'
  },
  {
    id: 20,
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    year: 2024,
    imageUrl: new URL('../assets/photos/certificate20.png', import.meta.url).href,
    badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/12334028'
  },
  {
    id: 21,
    title: 'Build Real World AI Applications with Gemini and Imagen',
    issuer: 'Google Cloud',
    year: 2025,
    imageUrl: new URL('../assets/photos/certificate21.png', import.meta.url).href,
    badgeUrl:'https://www.cloudskillsboost.google/public_profiles/26a38628-c244-4cfa-a1f8-b27c08b7b1e1/badges/15293770'
  },
  {
    id: 22,
    title: 'Certificate of Participation of Workshop in Collaboration with Nextleap',
    issuer: 'Nextleap',
    year: 2025,
    imageUrl: new URL('../assets/photos/certificate22.jpg', import.meta.url).href,
  },
  {
    id: 23,
    title: 'Hackmol 6.0',
    issuer: 'GDG NIT Jalandhar',
    year: 2025,
    imageUrl: new URL('../assets/photos/certificate23.png', import.meta.url).href,
  },
  {
    id: 24,
    title: 'VR Wellness: Innovating Mental Health Through Virtual Reality',
    issuer: 'GFG CUIET Student Chapter',
    year: 2025,
    imageUrl: new URL('../assets/photos/certificate24.png', import.meta.url).href,
  },
  {
    id: 25,
    title: 'Google Study Jam',
    issuer: 'GDG Chitkara University',
    year: 2025,
    imageUrl: new URL('../assets/photos/certificate25.jpg', import.meta.url).href,
  },
  {
    id: 26,
    title: 'Build With India',
    issuer: 'Hack With India',
    year: 2025,
    imageUrl: new URL('../assets/photos/certificate26.png', import.meta.url).href,
  }
];
