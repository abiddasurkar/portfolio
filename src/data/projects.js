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
      'Migrated 16+ legacy jQuery pages to React + Next.js SPA with Kendo React components, reducing load time by 40%',
      'Improved React/Next.js app performance by 25% using React.memo, useMemo, and dynamic imports',
      'Deployed containerized apps on Azure VMs with Docker and CI/CD pipelines, reducing deployment time by 60%',
      'Built responsive dashboards using AG Grid, Highcharts, and Nivo for data visualization with real-time updates',
      'Integrated OAuth 2.0, JWT, and LDAP authentication with Role-Based Access Control (RBAC)',
      'Achieved 100% accuracy in automated document extraction systems using AI-powered OCR solutions',
      'Mentored 3 junior developers in React best practices and modern JavaScript patterns'
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
    title: 'Frontend Developer Intern',
    company: 'Tech Solutions Inc',
    location: 'Mumbai, India',
    duration: 'Jun 2022 – Oct 2022',
    employmentType: 'Internship',
    roles: ['React Intern', 'UI Development'],
    achievements: [
      'Developed responsive user interfaces for client projects using React and Material-UI',
      'Collaborated with senior developers to implement new features and fix bugs',
      'Participated in code reviews and agile development processes',
      'Built reusable component library that improved development efficiency by 30%'
    ],
    technologies: [
      'React', 'JavaScript', 'Material-UI', 'CSS3', 'Git'
    ],
    icon: Briefcase,
    highlight: false
  }
];

export const education = [
  {
    id: 1,
    degree: 'B.E. Information Technology',
    institution: 'University of Mumbai',
    location: 'Mumbai, India',
    duration: '2019-2022',
    score: 'CGPA: 8.7/10',
    courses: [
      'Advanced Web Technologies',
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Software Engineering',
      'Cloud Computing'
    ],
    achievements: [
      'Dean\'s List for Academic Excellence (2020, 2021)',
      'First Place in University Web Development Competition',
      'Active member of Coding Club and Tech Society'
    ],
    icon: GraduationCap,
    institutionUrl: 'https://www.mu.ac.in'
  },
  {
    id: 2,
    degree: 'Diploma in Information Technology',
    institution: 'MSBTE (Maharashtra State Board of Technical Education)',
    location: 'Mumbai, India',
    duration: '2017-2019',
    score: '77%',
    courses: [
      'Web Development Fundamentals',
      'Programming in C & C++',
      'Computer Networks',
      'Object-Oriented Programming'
    ],
    achievements: [
      'Top 5% of graduating class',
      'Completed industrial training at local software company'
    ],
    icon: GraduationCap,
    institutionUrl: 'https://msbte.org.in'
  }
];

export const certifications = [
  {
    id: 1,
    name: 'Modern JavaScript: ES6 Basics',
    issuer: 'Coursera',
    date: '2024',
    url: 'https://www.coursera.org/account/accomplishments/verify/HC44A8VLTD7E',
    category: 'Programming',
    icon: Award
  },
  {
    id: 2,
    name: 'The Ultimate SAP S/4HANA Course 2024',
    issuer: 'Udemy',
    date: 'November 2024',
    credentialId: 'UC-7807bdce-327a-4293-abc6-31e734e1cb02',
    category: 'Enterprise Software',
    icon: Award
  },
  {
    id: 3,
    name: 'IT Security: Defense against the digital dark arts',
    issuer: 'Google',
    date: '2024',
    url: 'https://coursera.org/share/dfa8fa9323e4e0a9efa1797a96aca1d9',
    category: 'Cybersecurity',
    icon: Award
  },
  {
    id: 4,
    name: 'Advanced CSS and Sass',
    issuer: 'Udemy',
    date: 'February 2024',
    credentialId: 'UC-2d48cbd2-6ed7-4ca0-827a-a8d825f9e15c',
    category: 'Web Development',
    icon: Award
  },
  {
    id: 5,
    name: 'Developing Secure Software',
    issuer: 'Linux Foundation',
    date: '2024',
    credentialId: '42f1565b-5f9b-402a-a103-959728ed683f',
    category: 'Software Security',
    icon: Award
  },
  {
    id: 6,
    name: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta via Coursera',
    date: '2023',
    credentialUrl: 'https://coursera.org/verify/professional-cert/your-credential-id',
    category: 'Frontend Development',
    icon: Award
  },
  {
    id: 7,
    name: 'React – Complete Guide 2024',
    issuer: 'Udemy',
    date: '2024',
    credentialUrl: 'https://udemy.com/certificate/your-certificate-id',
    category: 'Frontend Development',
    icon: Award
  },
  {
    id: 8,
    name: 'Angular Training Certification',
    issuer: 'Synechron',
    date: '2023',
    category: 'Frontend Development',
    icon: Award
  },
  {
    id: 9,
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialUrl: 'https://aws.amazon.com/verification',
    category: 'Cloud Computing',
    icon: Award
  }
];

export const skills = [
  {
    category: "Frontend Development",
    icon: Code,
    items: [
      "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
      "Tailwind CSS", "Material-UI", "Kendo UI", "Redux", "Context API"
    ]
  },
  {
    category: "Backend & DevOps",
    icon: Settings,
    items: [
      "Node.js", "Express", "REST APIs", "GraphQL", "Azure",
      "Docker", "CI/CD", "Git", "JWT", "OAuth 2.0"
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
      "React Native", "Ionic", "PWA", "Responsive Design"
    ]
  },
  {
    category: "Cloud & Infrastructure",
    icon: Cloud,
    items: [
      "Azure", "AWS", "Docker", "CI/CD Pipelines", "Serverless"
    ]
  }
];

export const projects = [
  {
    id: 'enterprise-dashboard',
    title: 'Enterprise Banking Dashboard',
    description: 'Modernized legacy banking system with React + Next.js and Azure deployment',
    icon: DollarSign,
    tech: 'React, Next.js, Kendo React, Azure, Docker',
    highlights: ['Migrated 16+ legacy pages', 'Improved performance by 25%', 'OAuth 2.0 integration'],
    category: 'Web Application',
    date: '2023-11-15',
    status: 'Completed',
    githubUrl: 'https://github.com/yourusername/enterprise-dashboard',
    liveUrl: null
  },
  {
    id: 'ai-powered-analytics',
    title: 'AI-Powered Analytics Dashboard',
    description: 'ML-driven insights with predictive analytics and real-time AI recommendations',
    icon: BarChart3,
    tech: 'React, TensorFlow.js, WebGL, WebAssembly, Python API',
    highlights: ['ML model integration', 'Edge AI computing', 'Predictive insights'],
    category: 'AI/ML Application',
    date: '2024-01-20',
    status: 'In Progress',
    githubUrl: 'https://github.com/yourusername/ai-analytics',
    liveUrl: null
  },
  {
    id: 'blockchain-fintech',
    title: 'Blockchain FinTech Platform',
    description: 'Decentralized finance platform with crypto wallets and smart contracts',
    icon: Database,
    tech: 'React, Web3.js, Ethereum, Solidity, MetaMask',
    highlights: ['Smart contract integration', 'Crypto wallet support', 'DeFi protocols'],
    category: 'Blockchain',
    date: '2023-08-10',
    status: 'Completed',
    githubUrl: 'https://github.com/yourusername/blockchain-fintech',
    liveUrl: null
  },
  {
    id: 'ar-vr-experience',
    title: 'AR/VR Data Visualization',
    description: '3D immersive data experiences using WebXR and Three.js',
    icon: Monitor,
    tech: 'React, Three.js, WebXR, A-Frame, WebGL',
    highlights: ['Immersive 3D interfaces', 'VR data exploration', 'Spatial computing'],
    category: 'AR/VR',
    date: '2023-06-05',
    status: 'Completed',
    githubUrl: 'https://github.com/yourusername/ar-vr-dashboard',
    liveUrl: null
  },
  {
    id: 'iot-dashboard',
    title: 'IoT Smart City Dashboard',
    description: 'Real-time monitoring of smart city infrastructure with edge computing',
    icon: Cloud,
    tech: 'React, MQTT, Edge Computing, 5G APIs, Digital Twins',
    highlights: ['Real-time IoT data', '5G integration', 'Edge processing'],
    category: 'IoT',
    date: '2024-02-14',
    status: 'In Progress',
    githubUrl: 'https://github.com/yourusername/iot-dashboard',
    liveUrl: null
  },
  {
    id: 'voice-ai-interface',
    title: 'Voice-Controlled AI Interface',
    description: 'Conversational UI with voice commands and natural language processing',
    icon: MessageCircle,
    tech: 'React, WebRTC, Speech API, LLM Integration, WebSockets',
    highlights: ['Voice recognition', 'AI conversations', 'Multimodal UX'],
    category: 'AI/ML Application',
    date: '2023-12-01',
    status: 'Completed',
    githubUrl: 'https://github.com/yourusername/voice-ai-interface',
    liveUrl: null
  },
  {
    id: 'document-processing-system',
    title: 'Document Processing System',
    description: 'AI-powered document extraction and processing system with high accuracy rate',
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
    githubUrl: 'https://github.com/yourusername/document-processor',
    liveUrl: null
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'Modern e-commerce platform with seamless checkout and inventory management',
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
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: null
  }
];