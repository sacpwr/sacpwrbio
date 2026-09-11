export const profile = {
  name: "Sachin Pawar",
  title: "Technical Lead & Full-Stack Engineer",
  currentRole: "Sr. Lead Engineer I",
  company: "CitiusTech Healthcare Technology",
  location: "Pune, India",
  email: "sachin.pawar.eleven@gmail.com",
  github: "https://github.com/sacpwr",
  repository: "https://github.com/sacpwr/sacpwrbio",
  linkedin: "https://www.linkedin.com/in/sachin-pawar-155a77153/",
  resume: "Sachin-Pawar-Resume.pdf",
  summary:
    "I design scalable platforms, lead full-stack teams, and turn complex requirements into production-ready software. My work connects React, Node.js, AWS, and practical AI-assisted engineering.",
};

export const navigation = [
  { id: "about", label: "About" },
  { id: "projects", label: "Selected work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Expertise" },
  { id: "architecture", label: "Architecture" },
  { id: "innovation", label: "AI & innovation" },
  { id: "leadership", label: "Leadership" },
  { id: "achievements", label: "Recognition" },
  { id: "certifications", label: "Learning" },
  { id: "contact", label: "Contact" },
];

export const metrics = [
  {
    value: "11+",
    label: "Years in software engineering",
    detail: "From hands-on development to technical leadership",
  },
  {
    value: "10+",
    label: "Full-stack developers led",
    detail: "Architecture, mentoring, and end-to-end delivery",
  },
  {
    value: "~30%",
    label: "Reduction in database query load",
    detail: "Through database performance optimization",
  },
];

export const projects = [
  {
    number: "01",
    domain: "HEALTHCARE · LEARNING PLATFORMS",
    title: "From product requirements to production.",
    name: "Enterprise self-enrolment",
    problem:
      "Deliver a self-enrolment capability inside an established enterprise learning platform.",
    approach:
      "Translated product requirements into technical designs, database changes, refined stories, and production-ready full-stack features.",
    contribution:
      "Architecture decisions, technical governance, and end-to-end delivery.",
    tags: ["React", "Node.js", "PostgreSQL / MariaDB", "AWS"],
    icon: "layers",
  },
  {
    number: "02",
    domain: "INDUSTRIAL · ENTERPRISE SYSTEMS",
    title: "Secure services. Reliable operations.",
    name: "Enterprise backend services",
    problem:
      "Support an enterprise application with scalable services, dependable integrations, and controlled access.",
    approach:
      "Built asynchronous REST APIs, role-based access, authentication workflows, and scheduled processing, backed by unit tests and monitoring.",
    contribution:
      "Backend engineering, security, architecture discussions, and operational stability.",
    tags: ["Node.js", "PostgreSQL", "MySQL", "Prometheus / Grafana"],
    icon: "server",
  },
  {
    number: "03",
    domain: "MOBILITY · WORKPLACE OPERATIONS",
    title: "Reusable foundations for connected platforms.",
    name: "Transportation & desk-booking platforms",
    problem:
      "Build transportation and workplace booking services with secure access and reusable platform components.",
    approach:
      "Led backend architecture with Node.js and Go; implemented SSO, encryption, ETA optimization, shared logging, and import/export modules.",
    contribution:
      "Team leadership, API design, platform reuse, and containerized deployments.",
    tags: ["Node.js", "Go", "SSO", "Docker / AWS"],
    icon: "route",
  },
];

export const experiences = [
  {
    company: "CitiusTech Healthcare Technology",
    short: "CitiusTech",
    role: "Sr. Lead Engineer I",
    subtitle: "Lead Full Stack Developer & Solution Architect",
    period: "Nov 2022 — Present",
    location: "Pune",
    current: true,
    points: [
      "Lead 10+ full-stack developers across architecture, story refinement, implementation, and predictable delivery.",
      "Translate product requirements into technical roadmaps, SPIKE analyses, database designs, and actionable engineering stories.",
      "Deliver AWS-based applications with Docker and Jenkins; guide security, accessibility, and code quality through technical governance.",
      "Integrate Claude and GitHub Copilot workflows into specification, coding, vulnerability remediation, and troubleshooting.",
    ],
    tags: ["React", "Node.js", "AWS", "PostgreSQL", "Redis", "Claude"],
  },
  {
    company: "Capgemini",
    short: "Capgemini",
    role: "Senior Software Engineer",
    subtitle: "Backend services & enterprise integrations",
    period: "Sep 2021 — Nov 2022",
    location: "Mumbai",
    current: false,
    points: [
      "Developed scalable Node.js services and asynchronous REST APIs integrating with React and Angular frontends.",
      "Implemented RBAC, authentication, background jobs, and unit tests; supported monitoring with Prometheus and Grafana.",
    ],
    tags: ["Node.js", "React / Angular", "MySQL", "PostgreSQL"],
  },
  {
    company: "Tridat Technologies",
    short: "Tridat",
    role: "Senior Software Developer / Team Lead",
    subtitle: "Transportation & workplace platforms",
    period: "Sep 2019 — Sep 2021",
    location: "Mumbai",
    current: false,
    points: [
      "Led backend architecture and a development team delivering transportation and desk-booking platforms with Node.js and Go.",
      "Built secure APIs, reusable logging and import/export modules, and containerized AWS deployments.",
    ],
    tags: ["Node.js", "Go", "Angular", "AWS", "Docker"],
  },
  {
    company: "Vaisansar Technologies",
    short: "Vaisansar",
    role: "Senior Backend Developer",
    subtitle: "ERP, inventory & e-commerce systems",
    period: "Jun 2017 — Sep 2019",
    location: "Mumbai",
    current: false,
    points: [
      "Built modular Java and Node.js backends for ERP, inventory, and e-commerce platforms.",
      "Developed resilient REST APIs, background jobs, error handling, and role-based controls; helped evolve monolithic modules.",
    ],
    tags: ["Java", "Node.js", "REST APIs", "RBAC"],
  },
  {
    company: "Keerti Computer Institute & Freelancing",
    short: "Keerti & Freelance",
    role: "Freelance Developer & Software Faculty",
    subtitle: "Application delivery & technical education",
    period: "Jun 2015 — May 2017",
    location: "Mumbai",
    current: false,
    points: [
      "Delivered medical-management and ticketing desktop applications with relational database integrations.",
      "Taught Java, .NET, web development, and SQL, building a foundation in mentoring and technical communication.",
    ],
    tags: ["Java Swing", "C#", "SQL Server", "Technical training"],
  },
];

export const expertise = [
  {
    title: "Frontend engineering",
    icon: "code",
    description: "Interfaces built for real product workflows.",
    skills: ["React.js", "TypeScript", "JavaScript", "Angular", "Electron.js"],
  },
  {
    title: "Backend & integrations",
    icon: "server",
    description: "Services with clear contracts and resilient behavior.",
    skills: [
      "Node.js",
      "Express.js",
      "Java",
      "Go",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    title: "Data & performance",
    icon: "database",
    description: "Efficient access patterns and practical caching.",
    skills: ["PostgreSQL", "MariaDB", "MySQL", "MongoDB", "Redis", "Sequelize"],
  },
  {
    title: "Cloud & delivery",
    icon: "cloud",
    description: "From cloud services to repeatable releases.",
    skills: [
      "AWS Lambda",
      "S3",
      "SQS",
      "SES",
      "DynamoDB",
      "Docker",
      "Jenkins",
      "CI/CD",
    ],
  },
  {
    title: "Architecture & security",
    icon: "shield",
    description: "System boundaries, access control, and scale.",
    skills: [
      "System design",
      "Event-driven architecture",
      "OAuth2",
      "JWT",
      "RBAC",
      "SSO",
      "OWASP",
    ],
  },
  {
    title: "Quality & observability",
    icon: "activity",
    description: "Testable code and useful production signals.",
    skills: [
      "Jest",
      "Mocha",
      "Chai",
      "CloudWatch",
      "Prometheus",
      "Grafana",
      "Logs / metrics / tracing",
    ],
  },
];

export const architecture = [
  {
    number: "01",
    title: "Evolve the architecture",
    text: "Microservices, modular boundaries, and monolith migration informed by requirements, SPIKE analyses, and database design.",
  },
  {
    number: "02",
    title: "Make performance measurable",
    text: "Database optimization, Redis and CDN caching strategies, horizontal scaling, and load balancing. Query-load optimization delivered a reduction of approximately 30%.",
  },
  {
    number: "03",
    title: "Design security into delivery",
    text: "Authentication and authorization with OAuth2, JWT, SSO, and RBAC, reinforced through OWASP-focused reviews and accessibility standards.",
  },
  {
    number: "04",
    title: "Own the operational story",
    text: "AWS services, containerized delivery, CI/CD, tests, and observability connect design decisions to dependable production behavior.",
  },
];

export const agents = [
  {
    stage: "DEFINE",
    title: "Spec Generator",
    text: "Turns product inputs and rough requirements into structured intent specifications, identifying gaps before implementation.",
    gate: "Human-reviewed specifications",
  },
  {
    stage: "PLAN",
    title: "Spec-to-Stories",
    text: "Converts specifications into build-ready Jira stories with acceptance criteria, API contracts, and database requirements.",
    gate: "Clear implementation contracts",
  },
  {
    stage: "BUILD",
    title: "Story Implementor",
    text: "Supports analysis, coding, testing, and pull-request creation with regression checks and duplicate-PR prevention.",
    gate: "Validated, reviewable pull requests",
  },
  {
    stage: "SECURE",
    title: "Vulnerability Remediation",
    text: "Identifies dependency vulnerabilities in pull requests, applies branch-level fixes, and runs build, lint, and test checks.",
    gate: "Checks before delivery",
  },
  {
    stage: "INVESTIGATE",
    title: "CloudWatch Log Analysis",
    text: "Retrieves and correlates Lambda and ECS logs with defects to accelerate investigation and root-cause analysis.",
    gate: "Evidence-led troubleshooting",
  },
];

export const leadership = [
  {
    title: "Lead through technical clarity",
    text: "Break down complex epics, make architectural trade-offs explicit, and align the team around practical technical roadmaps.",
  },
  {
    title: "Raise the engineering standard",
    text: "Mentor developers through design discussions and code reviews, with attention to security, accessibility, and maintainability.",
  },
  {
    title: "Own delivery, end to end",
    text: "Connect requirements, estimates, sprint refinement, and implementation while improving predictability and reducing spillover.",
  },
];

export const awards = [
  {
    year: "2025",
    name: "Impact Award",
    issuer: "CitiusTech",
    context: "Leadership & ownership",
  },
  {
    year: "2025",
    name: "EPMMY Award",
    issuer: "Client recognition",
    context: "Successful module delivery",
  },
  {
    year: "2022",
    name: "Customer Delight Award",
    issuer: "Capgemini",
    context: "ER&D excellence",
  },
  {
    year: "2020",
    name: "Extra Mile Award",
    issuer: "Client recognition",
    context: "Recognized for contribution",
  },
  {
    year: "2017",
    name: "One-Day Project Achiever",
    issuer: "Seed Infotech",
    context: "Project achievement",
  },
];

// Completed learning transcribed from the supplied LinkedIn screenshot.
// Omit issue dates and credential URLs where the low-resolution image cannot verify them.
export const certifications = [
  {
    title: "Building with the Claude API",
    issuer: "Anthropic",
    category: "AI ENGINEERING",
    featured: true,
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    category: "AI ENGINEERING",
    featured: true,
  },
  {
    title: "Software Architecture: From Developer to Architect",
    issuer: "LinkedIn Learning",
    category: "ARCHITECTURE",
    featured: true,
  },
  {
    title: "Software Architecture: Domain-Driven Design",
    issuer: "LinkedIn Learning",
    category: "ARCHITECTURE",
    featured: true,
  },
  {
    title: "Frameworks for Developing LLM Agents",
    issuer: "Pluralsight",
    category: "AI ENGINEERING",
    featured: true,
  },
  {
    title: "High-Velocity Decision-Making for Senior Leaders and Executives",
    issuer: "LinkedIn Learning",
    category: "LEADERSHIP",
    featured: true,
  },
  {
    title: "Introduction to Claude Cowork",
    issuer: "Anthropic",
    category: "AI ENGINEERING",
    featured: false,
  },
  {
    title: "Claude Fluency 101",
    issuer: "Anthropic",
    category: "AI ENGINEERING",
    featured: false,
  },
  {
    title: "Software Architecture: Patterns for Developers",
    issuer: "LinkedIn Learning",
    category: "ARCHITECTURE",
    featured: false,
  },
  {
    title: "Prompt Engineering for Improved Performance",
    issuer: "Pluralsight",
    category: "AI ENGINEERING",
    featured: false,
  },
  {
    title: "Rocking System Design",
    issuer: "Udemy",
    category: "ARCHITECTURE",
    featured: false,
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic",
    category: "AI ENGINEERING",
    featured: false,
  },
  {
    title: "Introduction to Developing AI Agents",
    issuer: "Pluralsight",
    category: "AI ENGINEERING",
    featured: false,
  },
  {
    title: "Microservices: Architectural Strategies and Techniques",
    issuer: "Pluralsight",
    category: "ARCHITECTURE",
    featured: false,
  },
  {
    title: "Getting Started on Prompt Engineering with Generative AI",
    issuer: "Pluralsight",
    category: "AI ENGINEERING",
    featured: false,
  },
  {
    title: "Dynamic Programmer",
    issuer: "Keerti Computer Institute",
    category: "SOFTWARE ENGINEERING",
    featured: false,
  },
  {
    title: "Core Concepts of Generative AI for Developers",
    issuer: "Pluralsight",
    category: "AI ENGINEERING",
    featured: false,
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    category: "AI ENGINEERING",
    featured: false,
  },
  {
    title: "The Ultimate React Course: React, Next.js, Redux & More",
    issuer: "Udemy",
    category: "FRONTEND",
    featured: false,
  },
  {
    title: "Node.js Design Patterns",
    issuer: "Udemy",
    category: "BACKEND",
    featured: false,
  },
  {
    title: "MongoDB — The Complete Developer’s Guide",
    issuer: "Udemy",
    category: "DATA",
    featured: false,
  },
  {
    title: "Problem Solving (Basic) Certificate",
    issuer: "HackerRank",
    category: "SOFTWARE ENGINEERING",
    featured: false,
  },
  {
    title: "Angular — The Complete Guide",
    issuer: "Udemy",
    category: "FRONTEND",
    featured: false,
  },
  {
    title: "Advance Java (Spring, Hibernate, Struts)",
    issuer: "SEED Infotech",
    category: "BACKEND",
    featured: false,
  },
];

export const education = [
  {
    degree: "M.Sc. in Information Technology",
    institution: "KES Shroff College · Mumbai University",
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Keerti Computer Institute of Information Technology · YCMOU",
  },
];
