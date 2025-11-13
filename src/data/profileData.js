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
  MessageCircle
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
      "React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3",
      "Tailwind CSS", "Material UI", "Kendo UI", "Redux", "Context API"
    ]
  },
  {
    category: "Backend & DevOps",
    icon: Settings,
    items: [
      "Node.js", "Express.js", "REST APIs", "Azure", "Docker",
      "CI/CD Pipelines", "Git", "JWT", "OAuth 2.0", "Linux"
    ]
  },
  {
    category: "Data Visualization",
    icon: BarChart3,
    items: [
      "AG Grid", "Highcharts", "Nivo", "Chart.js", "D3.js"
    ]
  },
  {
    category: "Testing & Tools",
    icon: TestTube,
    items: [
      "Jest", "React Testing Library", "Cypress", "Postman",
      "Webpack", "Vite", "ESLint", "Prettier"
    ]
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    items: [
      "React Native", "PWA", "Responsive Design"
    ]
  },
  {
    category: "Cloud & Infrastructure",
    icon: Cloud,
    items: [
      "Azure", "AWS", "Docker", "Serverless", "CI/CD Automation"
    ]
  }
];

export const projects = [
  {
    id: 'enterprise-dashboard',
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
    githubUrl: 'https://github.com/abiddasurkar/enterprise-dashboard',
    liveUrl: null
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
    githubUrl: 'https://github.com/abiddasurkar/document-processor',
    liveUrl: null
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
    liveUrl: null
  }
];
