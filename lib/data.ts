// Single source of truth for portfolio content.
// Sourced from Ahmad_Taufiq_CV_Web2.pdf–edit here, markup stays untouched.

export type Status = "live" | "active" | "past" | "learning";

export interface Social {
  label: string;
  handle: string;
  href: string;
  icon: "github" | "linkedin" | "instagram" | "mail";
}

export interface Metric {
  label: string;
  value: string;
  hint?: string;
}

export interface Experience {
  role: string;
  org: string;
  kind: string;
  period: string;
  status: Status;
  points: string[];
  href?: string;
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  status: Status;
  href?: string;
  year: string;
}

export interface SkillGroup {
  id: string;
  label: string;
  items: { name: string; level: number }[]; // level 0..100
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  gpa: string;
  coursework: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export const profile = {
  name: "Ahmad Taufiq Nashrulloh",
  callsign: "ATN",
  roles: ["Engineer", "Developer", "Analyst"],
  title: "Electrical Engineer × Front-End Developer",
  location: "Ngawi, Indonesia",
  status: "Available for work",
  email: "Taufnashrul@gmail.com",
  phone: "+62 812-1752-4118",
  cv: "/Ahmad_Taufiq_CV.pdf",
  photo: "/foto.png",
  tagline:
    "Electrical Engineering graduate bridging embedded systems and the modern web. I build responsive interfaces, ship real products, and keep expanding into AI and data.",
  summary:
    "Electrical Engineering graduate from Muhammadiyah University of Surakarta with a solid foundation in microcontrollers, embedded systems, and IoT. Complemented by hands-on web development experience, building modern, responsive applications and contributing to real collaborative software products. Continuously expanding across web, AI, and data, with a strong interest in emerging technologies.",
};

export const socials: Social[] = [
  { label: "GitHub", handle: "taufnashrul04", href: "https://github.com/taufnashrul04", icon: "github" },
  { label: "LinkedIn", handle: "ahmadtn", href: "https://linkedin.com/in/ahmadtn", icon: "linkedin" },
  { label: "Instagram", handle: "ahmadtn.__", href: "https://instagram.com/ahmadtn.__", icon: "instagram" },
  { label: "Email", handle: "Taufnashrul@gmail.com", href: "mailto:Taufnashrul@gmail.com", icon: "mail" },
];

export const metrics: Metric[] = [
  { label: "GPA", value: "3.30", hint: "/ 4.00" },
  { label: "TOEFL", value: "653", hint: "English" },
  { label: "Projects", value: "3+", hint: "shipped" },
  { label: "Since", value: "2021", hint: "building" },
];

export const focusAreas: string[] = [
  "Front-End Web Dev",
  "AI Engineering",
  "Data Analytics",
  "IoT & Embedded",
  "Digital Marketing",
  "Smart Contracts",
];

export const experiences: Experience[] = [
  {
    role: "Marketing Affiliate",
    org: "Variational",
    kind: "Partnership / Growth",
    period: "2025–Present",
    status: "active",
    href: "https://omni.variational.io/?ref=OMNISKYPOTS",
    points: [
      "Promote a derivatives trading platform through digital marketing, referral campaigns, and audience engagement.",
      "Drive user acquisition across social media channels.",
    ],
  },
  {
    role: "Co-Builder (Front-End)",
    org: "Obscura Finance",
    kind: "Collaborative Software Project",
    period: "2026–Present",
    status: "active",
    href: "https://obscurafinance.xyz",
    points: [
      "Co-develop a decentralized finance application within a distributed team.",
      "Contribute to product design and front-end development.",
    ],
  },
  {
    role: "Community Manager & Moderator",
    org: "BanTol DAO",
    kind: "Community",
    period: "2026–Present",
    status: "active",
    href: "https://x.com/bantoldao",
    points: [
      "Manage and moderate an active online community across communication channels.",
      "Drive engagement while maintaining a positive, well-organized environment.",
    ],
  },
  {
    role: "Intern, Electrical Engineering",
    org: "PT. Sekar Bengawan",
    kind: "Internship",
    period: "Sep 2024–Oct 2024",
    status: "past",
    points: [
      "Performed maintenance on factory machinery.",
      "Installed temperature and humidity sensors and integrated them with IoT systems.",
    ],
  },
  {
    role: "Member",
    org: "Aerobo UMS",
    kind: "Organization",
    period: "Dec 2023–Nov 2024",
    status: "past",
    points: [
      "Coordinated internal organizational events.",
      "Built and tested aircraft and drones ahead of the KRTI competition.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "skypots",
    tagline: "Web3 portfolio · personal",
    year: "2026",
    status: "live",
    href: "https://skypots.vercel.app",
    description:
      "A fully responsive personal portfolio with a deep ocean narrative, built and deployed on Vercel.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Obscura Finance",
    tagline: "DeFi app · co-builder",
    year: "2026–Present",
    status: "active",
    href: "https://obscurafinance.xyz",
    description:
      "A decentralized finance application built with a distributed team, contributing to product design and front-end development.",
    stack: ["Front-End", "Product Design", "DeFi"],
  },
  {
    name: "QR Code Safe Opening Auth",
    tagline: "Final assignment · Raspberry Pi",
    year: "Mar 2025–Jul 2025",
    status: "past",
    description:
      "An embedded system using Raspberry Pi to control an actuator based on QR code validation from a camera and website. A non-traditional two step authentication that hardens access against unauthorized entry.",
    stack: ["Raspberry Pi", "Embedded", "Computer Vision", "IoT"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Front-End Web",
    items: [
      { name: "Next.js", level: 88 },
      { name: "React", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "TypeScript", level: 78 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    id: "ai-data",
    label: "AI & Data",
    items: [
      { name: "AI Agent Development", level: 74 },
      { name: "AI Engineering", level: 70 },
      { name: "Data Analytics", level: 76 },
    ],
  },
  {
    id: "embedded",
    label: "IoT & Embedded",
    items: [
      { name: "Microcontrollers", level: 82 },
      { name: "Raspberry Pi", level: 80 },
      { name: "IoT Systems", level: 78 },
      { name: "Embedded Systems", level: 76 },
    ],
  },
  {
    id: "contracts",
    label: "Smart Contracts",
    items: [
      { name: "Solidity", level: 55 },
      { name: "Move", level: 50 },
    ],
  },
  {
    id: "growth",
    label: "Digital Marketing",
    items: [
      { name: "Digital Marketing", level: 80 },
      { name: "Community Management", level: 85 },
      { name: "Content & Growth", level: 78 },
    ],
  },
  {
    id: "soft",
    label: "Soft Skills",
    items: [
      { name: "Project Management", level: 82 },
      { name: "Critical Thinking", level: 85 },
      { name: "Problem Solving", level: 85 },
      { name: "Communication", level: 84 },
    ],
  },
];

export const education: Education = {
  school: "Muhammadiyah University of Surakarta",
  degree: "Bachelor of Engineering, Electrical Engineering",
  period: "Aug 2021–Aug 2025",
  gpa: "3.30 / 4.00",
  coursework: [
    "Web & Database Programming",
    "Robotics",
    "Image Processing",
    "Interface Engineering",
    "Embedded Systems",
    "Telecommunication Technology",
    "Data Communication & Computer Networks",
    "Microprocessor Basics",
    "Programming Basics",
  ],
};

export const certifications: Certification[] = [
  { name: "Data Analytics", issuer: "RevoU" },
  { name: "Digital Marketing", issuer: "Dibimbing" },
  { name: "UI/UX Design", issuer: "Dibimbing" },
  { name: "C++ Programming", issuer: "Saylor.org" },
  { name: "Docker & Kubernetes", issuer: "Udemy" },
  { name: "Java Masterclass", issuer: "Udemy" },
  { name: "Linux Network Basics", issuer: "Udemy" },
];

export const languages = [
  { name: "Indonesian", note: "Native" },
  { name: "English", note: "TOEFL 653" },
];

export const nav = [
  { id: "about", label: "About", index: "01" },
  { id: "education", label: "Education", index: "02" },
  { id: "experience", label: "Experience", index: "03" },
  { id: "projects", label: "Work", index: "04" },
  { id: "skills", label: "Skills", index: "05" },
  { id: "contact", label: "Contact", index: "06" },
];
