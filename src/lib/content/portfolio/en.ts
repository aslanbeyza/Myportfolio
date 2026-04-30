import type { PortfolioContent } from "@/types/portfolio";

export const portfolioContentEn: PortfolioContent = {
  locale: "en",
  metadata: {
    title: "Beyza Aslan | Full Stack Developer",
    description:
      "Full stack developer building modern web applications—responsive interfaces with HTML, CSS, JavaScript, TypeScript, and React; APIs and services with Node.js, Express, NestJS, and REST.",
  },
  nav: {
    homeLabel: "BA",
    items: [
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    languageLabel: "Language",
    letsTalkLabel: "Let's talk",
    closeMenuLabel: "Close navigation",
    openMenuLabel: "Open navigation",
  },
  hero: {
    eyebrow: "FULL STACK DEVELOPER",
    availability: "AVAILABLE · REMOTE & HYBRID",
    headline:
      "I build responsive, user-focused interfaces and modern web applications.",
    supportingText:
      "Product-side work with TypeScript, React, and REST APIs; end-to-end contributions with Node.js, Express, and NestJS when needed.",
    primaryCta: "View selected work",
    secondaryCta: "Get in touch",
    techTags: [
      "TypeScript",
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Node.js",
      "Express",
      "NestJS",
      "MongoDB",
      "Docker",
      "Git",
      "REST API",
    ],
  },
  about: {
    sectionNumber: "02",
    sectionTitle: "ABOUT",
    lead: "A full stack developer who cares about usability, clean code, and continuous improvement.",
    paragraphs: [
      "I work on design-led modern web applications. With HTML, CSS, JavaScript, TypeScript, and React I ship responsive, clear user interfaces; with Node.js, Express, and REST APIs I contribute to features that bridge cleanly to the backend.",
      "I was accepted into an intensive Frontend Web Development program and graduated in 2024, shipping high-performance responsive projects with React, TypeScript, Express, and JavaScript. I completed my BS in Software Engineering at Kırklareli University in 2025. With GDG Kırklareli I served on the Design Team, producing visuals and brand assets for community events.",
      "I bring strong problem-solving and a collaborative mindset. Native Turkish; fluent English.",
    ],
    statusPill: "Istanbul · Open to remote roles",
  },
  experience: {
    sectionNumber: "03",
    sectionTitle: "EXPERIENCE",
    intro:
      "Production and client work across APIs, admin surfaces, and AI-assisted product experiences.",
    items: [
      {
        number: "01",
        company: "Egeline Bilgi Güvenliği",
        role: "Software Developer",
        period: "September 2025 – April 2026",
        location: "Istanbul, Turkey",
        description:
          "Built and maintained a PHP-based admin panel for a Germany-based client—clean architecture, data-entry flows, maintainability, and backend integrations. Contributed across frontend and server-side on an end-to-end product centered on a RAG-powered, AI-assisted assistant / astrology experience.",
        tags: [
          "PHP",
          "REST API",
          "React",
          "TypeScript",
          "RAG / AI",
          "Full stack",
        ],
      },
      {
        number: "02",
        company: "Medya Takip Merkezi (MTM)",
        role: "Backend-focused Developer",
        period: "July 2024 – September 2024",
        location: "Istanbul, Turkey",
        description:
          "Express.js and Docker for scalable backend services—optimized API performance within complex architecture boundaries, solid database management, and service integrations.",
        tags: ["Express.js", "Node.js", "Docker", "REST", "MongoDB"],
      },
    ],
  },
  projects: {
    sectionNumber: "04",
    sectionTitle: "SELECTED WORK",
    intro:
      "Highlights from bootcamp, university, and professional projects shipped as real product work.",
    expandLabel: "View technical brief",
    collapseLabel: "Close technical brief",
    inspectionEyebrow: "Technical dossier",
    inspectionHint: "Role, stack, and delivery context.",
    inspectionActiveLabel: "Inspection active",
    previewLabels: {
      context: "Context",
      focus: "Focus",
      stack: "Stack",
    },
    summaryTitle: "Why it mattered",
    responsibilitiesTitle: "My role",
    footprintTitle: "Technical scope",
    items: [
      {
        number: "01",
        name: "Enterprise admin panel (PHP)",
        company: "Egeline Bilgi Güvenliği",
        contextLabel: "Germany client · data and process management",
        description:
          "Maintainable PHP admin UI tailored to enterprise needs—data entry, approvals, and reporting flows with clean architecture and backend alignment.",
        themes: [
          "Admin architecture",
          "Operational data flows",
          "Integration",
        ],
        tags: ["PHP", "REST", "Admin", "Maintenance & delivery"],
        details: {
          summary:
            "On a Germany-market project I worked on a readable, maintainable admin panel supporting the customer’s operational needs. The focus was clear boundaries, data consistency, and structures that could adapt quickly to team feedback.",
          responsibilities: [
            "Built and maintained PHP screens and business rules in an extensible structure.",
            "Delivered consistent UX across forms, lists, and data-entry scenarios.",
            "Integrated cleanly with backend services and clarified error boundaries.",
            "Owned code, participated in peer review, and adapted to changing requirements.",
          ],
          footprint: [
            "PHP server tier and admin UI layer",
            "REST contracts with internal and external services",
            "Enterprise data and workflow–focused screens",
          ],
        },
      },
      {
        number: "02",
        name: "RAG-powered AI assistant / astrology platform",
        company: "Egeline Bilgi Güvenliği",
        contextLabel: "End-to-end product · AI + UI",
        description:
          "Hands-on across frontend and backend on an end-to-end experience combining LLMs and RAG (retrieval-augmented generation)—real iteration, testing, and production-minded delivery.",
        themes: [
          "RAG & AI integration",
          "Frontend + backend collaboration",
          "Product discipline",
        ],
        tags: [
          "TypeScript",
          "React",
          "Node.js",
          "RAG / LLM",
          "Full stack",
        ],
        details: {
          summary:
            "On an AI-assisted assistant product that blends domain knowledge, I was active on both user-facing surfaces and service boundaries. The goal was an iterative, measurable delivery path from idea to ship.",
          responsibilities: [
            "Feature work and debugging across UI and API boundaries.",
            "Supporting alignment of RAG / AI flows with product requirements.",
            "Team sync, code quality, and UX considered together.",
          ],
          footprint: [
            "Modern JS/TS and React user interface",
            "Backend integration and RAG/AI service contracts",
            "End-to-end product practice (planning, testing, iteration)",
          ],
        },
      },
      {
        number: "03",
        name: "Scalable API and backend services",
        company: "Medya Takip Merkezi (MTM)",
        contextLabel: "Express · Docker · operational APIs",
        description:
          "Backend services with Express.js and Docker suited for deployment—performance, observability, and data consistency under operational load.",
        themes: [
          "API performance",
          "Containerization",
          "Data & service boundaries",
        ],
        tags: [
          "Express.js",
          "Docker",
          "Node.js",
          "MongoDB",
          "REST",
        ],
        details: {
          summary:
            "In a corporate media/monitoring environment with clear service boundaries and repeatable deployments, I focused on Express-based backends and Docker.",
          responsibilities: [
            "Implemented service endpoints and integration patterns with Express.js.",
            "Used Docker for environment consistency and deployment readiness.",
            "Design choices sensitive to data access and query performance.",
          ],
          footprint: [
            "Node.js + Express service topology",
            "Docker images and runtime boundaries",
            "MongoDB and REST data/API surface",
          ],
        },
      },
    ],
  },
  capabilities: {
    sectionNumber: "05",
    sectionTitle: "CAPABILITIES",
    groups: [
      {
        category: "Languages & core",
        items: ["JavaScript", "TypeScript", "HTML", "CSS"],
      },
      {
        category: "Frontend & frameworks",
        items: [
          "React",
          "Responsive design",
          "REST API consumption",
          "Forms & state management",
        ],
      },
      {
        category: "Backend & infrastructure",
        items: [
          "Node.js",
          "Express",
          "NestJS",
          "MongoDB",
          "PHP",
          "Docker",
          "Git",
        ],
      },
      {
        category: "Communication",
        items: ["Turkish (native)", "English (fluent)"],
      },
    ],
    callout:
      "My edge: readable interfaces, clear code, and full-stack contributions aligned with product goals—breaking complex requirements into shippable slices.",
    statLabel: "ONLYJS · KIRKLARELI UNI · 2+ ROLES",
  },
  contact: {
    sectionNumber: "06",
    sectionTitle: "CONTACT",
    headline: "Let's build meaningful products together.",
    intro:
      "Open to freelance, full-time, or project-based conversations.",
    body: "Reach me at aslanbeyza3413@gmail.com or via the form below. Happy to discuss modern web, React/TypeScript, API integration, and teamwork-heavy projects.",
    form: {
      nameLabel: "Name",
      emailLabel: "Email",
      subjectLabel: "Subject",
      messageLabel: "Message",
      submitLabel: "Send message",
      submittingLabel: "Sending...",
      placeholders: {
        name: "Your full name",
        email: "you@example.com",
        subject: "Which role or project?",
        message: "Briefly describe the project, timeline, or expectations.",
      },
      validation: {
        nameRequired: "Please enter your name.",
        emailInvalid: "Please enter a valid email address.",
        subjectRequired: "Please enter a subject.",
        messageRequired: "Please enter a message.",
        messageMinLength: "Message must be at least 10 characters.",
      },
      success: "Message received. I'll get back to you as soon as possible.",
      securityLoading: "Securing form...",
      secured: "Form secured",
      blocked: "Temporarily blocked",
    },
  },
  footer: {
    strapline: "Beyza Aslan · Full Stack Developer · Istanbul",
    copyright: "All rights reserved.",
  },
  notFound: {
    eyebrow: "ERROR 404",
    title: "Page not found.",
    description:
      "The page you're looking for doesn't exist or may have moved. You can return to the portfolio home.",
    primaryCta: "Back to portfolio",
    secondaryCta: "Go back",
  },
};
