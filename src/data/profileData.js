import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code, 
  Settings, 
  BarChart3, 
  TestTube,
  Smartphone,
  Cloud,
  BookOpen,
  DollarSign,
  Database,
  Monitor,
  MessageCircle,
  User
} from 'lucide-react';


export const experience = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Synechron Technologies',
    location: 'Pune, India',
    duration: 'Nov 2022 – Present',
    employmentType: 'Full-time',
    roles: ['React Developer', 'Next.js Specialist', 'UI Engineer'],
    achievements: [
      'Modernized 16+ legacy apps to React and Next.js with Kendo React components, reducing load time by 40%',
      'Improved app performance by 25% using React.memo, useMemo, and dynamic imports',
      'Built responsive dashboards using AG Grid, Highcharts, and Nivo for real-time analytics',
      'Integrated OAuth 2.0, JWT, and LDAP authentication with RBAC (Role-Based Access Control)',
      'Automated CI/CD pipelines on Azure DevOps and GitHub Actions, cutting deployment time by 60%',
      'Configured Nginx reverse proxy, Docker Compose, and SSL for production-grade deployments',
      'Mentored 3 junior developers on modern React patterns and best practices'
    ],
    technologies: [
      'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
      'Tailwind CSS', 'Kendo UI', 'AG Grid', 'Highcharts', 'Nivo',
      'Azure', 'Docker', 'CI/CD', 'OAuth 2.0', 'JWT', 'REST APIs'
    ],
    icon: Briefcase,
    companyUrl: 'https://www.synechron.com',
    highlight: true
  },
  {
    id: 2,
    title: 'Full Stack Developer Apprentice',
    company: 'QSpiders Training Center',
    location: 'Pune, India',
    duration: 'Nov 2022 – Dec 2023',
    employmentType: 'Apprenticeship',
    roles: ['Full Stack Developer Trainee', 'React & Java Developer'],
    achievements: [
      'Built full-stack applications with React, Node.js, and MongoDB',
      'Implemented authentication using JWT and role-based permissions',
      'Gained proficiency in React, Redux, Java, Spring Boot, and REST APIs',
      'Completed capstone project using Agile methodology',
      'Collaborated with peers in team-based coding sprints'
    ],
    technologies: [
      'React', 'Redux', 'Java', 'Spring Boot', 'MongoDB', 'Node.js', 'REST APIs', 'Git'
    ],
    icon: Briefcase,
    highlight: false
  }
];

export const education = [
  {
    id: 1,
    degree: 'B.E. in Information Technology',
    institution: 'University of Mumbai',
    location: 'Mumbai, India',
    duration: '2019 – 2022',
    score: 'CGPA: 8.7/10',
    courses: [
      'Advanced Web Technologies',
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Software Engineering',
      'Cloud Computing'
    ],
    achievements: [
      'Published research paper: “Face Mask Detection System” (IJIRSET, Oct 2021)',
      'Developed Face Mask Detection System using TensorFlow, OpenCV, and Flask (95% accuracy)',
      'Active member of Coding Club and Tech Society'
    ],
    icon: GraduationCap,
    institutionUrl: 'https://mu.ac.in'
  },
  {
    id: 2,
    degree: 'Diploma in Information Technology',
    institution: 'MSBTE (Maharashtra State Board of Technical Education)',
    location: 'Mumbai, India',
    duration: '2017 – 2019',
    score: '77%',
    courses: [
      'Web Development Fundamentals',
      'Programming in C & C++',
      'Computer Networks',
      'Object-Oriented Programming'
    ],
    achievements: [
      'Top 5% of graduating class',
      'Completed industrial training at a local software firm'
    ],
    icon: GraduationCap,
    institutionUrl: 'https://msbte.org.in'
  }
];

export const certifications = [
  {
    id: 1,
    name: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta via Coursera',
    date: 'Jan 2025',
    credentialUrl: 'https://coursera.org/verify/professional-cert/meta-frontend-developer',
    category: 'Frontend Development',
    icon: Award
  },
  {
    id: 2,
    name: 'Meta Front-End Developer Certificate',
    issuer: 'Coursera',
    date: 'Feb 2025',
    credentialUrl: 'https://coursera.org/verify/meta-frontend-cert',
    category: 'Frontend Development',
    icon: Award
  },
  {
    id: 3,
    name: 'React – The Complete Guide 2024 (incl. Next.js, Redux)',
    issuer: 'Udemy',
    date: 'Nov 2024',
    credentialId: 'UC-f95122b3-d22b-4a73-8845-ec8dd8ed1db0',
    category: 'Frontend Development',
    icon: Award
  },
  {
    id: 4,
    name: 'Programming with JavaScript',
    issuer: 'Meta',
    date: 'Nov 2024',
    credentialId: '1SHMXZQK7XU2',
    category: 'JavaScript',
    icon: Award
  },
  {
    id: 5,
    name: 'Create Your First Python Program',
    issuer: 'Coursera Project Network',
    date: 'Nov 2024',
    credentialId: '1VQ3G85SHMLB',
    category: 'Python',
    icon: Award
  },
  {
    id: 6,
    name: 'Introduction to Node.js (LFW111)',
    issuer: 'The Linux Foundation',
    date: 'Oct 2024',
    credentialId: 'LF-afmewpuuqy',
    category: 'Backend Development',
    icon: Award
  },
  {
    id: 7,
    name: 'Developing Secure Software (LFD121)',
    issuer: 'The Linux Foundation',
    date: '2024',
    credentialId: 'LF-hn5yf0n6tp',
    category: 'Software Security',
    icon: Award
  },
  {
    id: 8,
    name: 'IT Security: Defense Against the Digital Dark Arts',
    issuer: 'Google',
    date: '2020',
    credentialId: 'ZX3VPWSSTH4S',
    category: 'Cybersecurity',
    icon: Award
  },
  {
    id: 9,
    name: 'Introduction to Cloud Identity',
    issuer: 'Google Cloud',
    date: '2020',
    credentialId: 'U5QSJ5NKGADD',
    category: 'Cloud Computing',
    icon: Award
  }
];

export const skills = [
  {
    category: "Frontend Development",
    icon: Code,
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "🔷" },
      { name: "JavaScript (ES6+)", icon: "🟨" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "Tailwind CSS", icon: "💨" },
      { name: "Material UI", icon: "🧩" },
      { name: "Kendo UI", icon: "🛠️" },
      { name: "Redux", icon: "📦" },
      { name: "Context API", icon: "🔗" }
    ]
  },
  {
    category: "Backend & DevOps",
    icon: Settings,
    items: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚂" },
      { name: "REST APIs", icon: "🔌" },
      { name: "Azure", icon: "🔵" },
      { name: "Docker", icon: "🐳" },
      { name: "CI/CD Pipelines", icon: "🔄" },
      { name: "Git", icon: "📚" },
      { name: "JWT", icon: "🔐" },
      { name: "OAuth 2.0", icon: "🔑" },
      { name: "Linux", icon: "🐧" }
    ]
  },
  {
    category: "Data Visualization",
    icon: BarChart3,
    items: [
      { name: "AG Grid", icon: "📋" },
      { name: "Highcharts", icon: "📈" },
      { name: "Nivo", icon: "🎯" },
      { name: "Chart.js", icon: "📉" },
      { name: "D3.js", icon: "✨" }
    ]
  },
  {
    category: "Testing & Tools",
    icon: TestTube,
    items: [
      { name: "Jest", icon: "🃏" },
      { name: "React Testing Library", icon: "⚛️" },
      { name: "Cypress", icon: "🌲" },
      { name: "Postman", icon: "📬" },
      { name: "Webpack", icon: "📦" },
      { name: "Vite", icon: "⚡" },
      { name: "ESLint", icon: "✅" },
      { name: "Prettier", icon: "💎" }
    ]
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    items: [
      { name: "React Native", icon: "⚛️" },
      { name: "PWA", icon: "📱" },
      { name: "Responsive Design", icon: "📐" }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    icon: Cloud,
    items: [
      { name: "Azure", icon: "🔵" },
      { name: "AWS", icon: "🟠" },
      { name: "Docker", icon: "🐳" },
      { name: "Serverless", icon: "⚡" },
      { name: "CI/CD Automation", icon: "🤖" }
    ]
  }
];

export const projects = [
  {
    id: 'banking-dashboard',
    title: 'Enterprise Banking Dashboard',
    description: 'Modernized banking systems with React, Next.js, and Azure deployments for improved scalability and security.',
    icon: DollarSign,
    tech: 'React, Next.js, Kendo React, Azure, Docker',
    highlights: [
      'Migrated 16+ legacy pages',
      'Improved performance by 25%',
      'OAuth 2.0 integration'
    ],
    category: 'Web Application',
    date: '2023-11-15',
    status: 'Completed',
    githubUrl: 'https://github.com/abiddasurkar/banking-dashboard',
    liveUrl: 'https://abiddasurkar.github.io/banking-dashboard/'
  },
  {
    id: 'document-processing-system',
    title: 'Document Processing System',
    description: 'AI-powered OCR and document extraction app for automated classification and validation workflows.',
    icon: BookOpen,
    tech: 'React, Next.js, Python, Azure AI, Docker',
    highlights: [
      'OCR document extraction',
      'Machine learning classification',
      'Automated workflow',
      'Cloud deployment'
    ],
    category: 'AI/ML Application',
    date: '2023-08-20',
    status: 'Completed',
    githubUrl: 'https://github.com/abiddasurkar/document-processing-system',
    liveUrl: 'https://abiddasurkar.github.io/document-processing-system'
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with secure payments, inventory, and admin management.',
    icon: DollarSign,
    tech: 'React, Node.js, MongoDB, Stripe API, Redux',
    highlights: [
      'Shopping cart functionality',
      'Payment processing integration',
      'Admin dashboard',
      'Product search and filtering'
    ],
    category: 'Web Application',
    date: '2024-01-10',
    status: 'In Progress',
    githubUrl: 'https://github.com/abiddasurkar/ecommerce-platform',
    liveUrl: 'https://abiddasurkar.github.io/ecommerce-platform'
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description: 'Modern responsive portfolio website showcasing projects and skills with smooth animations.',
    icon: User,
    tech: 'React, Next.js, Tailwind CSS, Framer Motion',
    highlights: [
      'Responsive design',
      'Smooth animations',
      'Project showcase',
      'Contact integration'
    ],
    category: 'Portfolio Website',
    date: '2024-02-01',
    status: 'Completed',
    githubUrl: 'https://github.com/abiddasurkar/portfolio',
    liveUrl: 'https://abiddasurkar.github.io/portfolio'
  }
];