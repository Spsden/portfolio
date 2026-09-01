import { Project } from "@/types/project.t";
import { TraitsPage } from "@/types/traints.t";

export const BETA = true;

export const USER_DATA = {
  name: "Suraj Pratap Singh",

  prefix: "Hi, I'm Suraj",

  jobTitle: "Full Stack & AI Engineer",

  org: "Synapse",

  location: "Sydney, NSW, Australia",

  email: "pratapsinghsuraj420@gmail.com",

  phone: "+61 491 951 448",

  github: "https://github.com/Spsden",

  linkedin: "https://www.linkedin.com/in/spsden",

  twitter: "",

  instagram: "",

  facebook: "",

  resume: "https://drive.google.com/file/d/1TXvso-C9HmArgyRiZso5-tb4F3oVvEce/view?usp=sharing",
};

export const TAG_LINES = {
  // check for hero.tsx for impl
  heroSection: {
    sentence:
      "Full Stack & AI Engineer building secure, multimodal AI systems, agentic workflows, and cross-platform products.",

    highlight: [
      "AI",
      "secure",
      "multimodal",
      "agentic",
      "cross-platform",
      "products.",
    ],
  },

  subText: {
    pre: `Currently building ${USER_DATA.org}, a cross-platform personal AI and automation app, while pursuing an MSc in Information Technology (AI) at UNSW Sydney.`,

    post: "Based in Sydney, Australia",
  },
};

export const IMAGES_PATH = {
  small_profile: "/profile/dp.jpeg",
};

export const TRAITS_PAGE: TraitsPage[] = [
  {
    date: "January 2024 – July 2025",
    heading: "Experience at Sapiens Technologies",
    intro:
      "As an Associate Software Developer at Sapiens Technologies, I built and enhanced insurance accounting features for the IDITSUITE platform in a cross-functional engineering team. My work focused on modernizing legacy systems, improving backend performance, and documenting complex business workflows.",
    subIntro: "Here are the key areas where I contributed:",
    image: "/backgrounds/exp.jpg",
    items: [
      {
        title: "Legacy platform modernization",
        body: "Refactored legacy Java modules built with EJB and Struts into Spring Boot and React, improving scalability, maintainability, and user experience.",
      },
      {
        title: "Backend and SQL optimization",
        body: "Optimized SQL queries and backend logic, achieving 5× faster queries and an 80% performance improvement.",
      },
      {
        title: "Cross-functional delivery",
        body: "Collaborated with QA using JIRA, Bitbucket, and Confluence to streamline testing and release cycles, while designing and documenting complex multi-layer business logic.",
      },
    ],
  },
  {
    date: "May 2023 – July 2023",
    heading: "Experience at Smart Bridge",
    intro:
      "At Smart Bridge, I worked on an AI/ML computer-vision project focused on real-time safety monitoring and drowning detection.",
    subIntro: "Here are the key areas where I contributed:",
    image: "/backgrounds/card2.jpg",
    items: [
      {
        title: "Virtual Eye-Lifeguard system",
        body: "Engineered a Virtual Eye-Lifeguard system using YOLOv5 for real-time drowning detection.",
      },
      {
        title: "Computer vision model development",
        body: "Reached 70% incident-detection accuracy through data annotation, model training, evaluation, and performance analysis.",
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "synapse",
    title: "Synapse",
    subtitle: "Cross-Platform Personal AI & Automation App",
    description:
      "A cross-platform AI productivity app for desktop and mobile that combines conversational agents, multimodal content capture, persistent memory, plugins, and workflow automation.",
    bullets: [
      "Built a native Share to Synapse interface to capture links, text, images, screenshots, audio, and documents directly from other applications.",
      "Engineered multimodal processing with ASR, OCR, and LLM analysis to transcribe audio, extract visual text, summarize content, and generate actionable insights.",
      "Implemented an event-driven agent runtime with OpenRouter, multi-turn tool calling, human approval gates, cancellation, correlated results, and live execution traces.",
      "Designed a secure plugin architecture for SDK-based JavaScript actions, MCP integrations, OAuth-enabled services, and platform-native capabilities.",
      "Created a provider-agnostic sandbox layer with local and cloud backends, including ephemeral Alpine Linux microVMs built with Rust and Microsandbox.",
      "Added bounded execution, network isolation, schema-validated inputs, explicit permissions, output redaction, fail-closed routing, and 180+ automated tests.",
    ],
    image: "/backgrounds/cardbg1.jpg",
    imageAlt: "Synapse AI and automation application",
    techs: [
      "Flutter",
      "Dart",
      "Rust",
      "TypeScript",
      "SQLite",
      "OpenRouter",
      "MCP",
      "Microsandbox",
      "Alpine Linux",
      "ASR",
      "OCR",
    ],
  },
  {
    id: "worktrace-ai",
    title: "WorkTrace AI",
    subtitle: "Workforce Intelligence & SOP Automation",
    description:
      "A desktop workforce-intelligence application that records employee workflows and turns captured interactions, screenshots, and narration into structured, reviewable standard operating procedures.",
    bullets: [
      "Built a native Electron recorder with global mouse and keyboard hooks, optional microphone capture, floating controls, high-DPI normalization, and change-triggered screenshots.",
      "Developed a resilient evidence-ingestion pipeline with append-only local session files, SHA-256 checksums, atomic storage, idempotent uploads, tenant isolation, and resumable processing.",
      "Created an asynchronous multimodal AI pipeline using faster-whisper, RapidOCR, image annotation, privacy filtering, and OpenAI-compatible LLMs to generate schema-validated SOPs.",
      "Implemented revision history, immutable approvals, global search, PDF export, manual evidence editing, and an always-on-top interactive onboarding walkthrough.",
      "Built a workflow-variance engine for up to 50 recordings using 1,536-dimensional embeddings, sequence alignment, K-means clustering, friction scoring, heatmaps, and fastest-versus-average analysis.",
      "Validated authentication, tenant isolation, ingestion, AI processing, SOP generation, privacy controls, and workforce analytics with 155 passing backend tests.",
    ],
    image: "/backgrounds/card2.jpg",
    imageAlt: "WorkTrace AI workforce intelligence application",
    techs: [
      "Electron",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Celery",
      "Docker",
      "Whisper",
    ],
  },
  {
    id: "drip",
    title: "Drip YouTube Music Client",
    subtitle: "Cross-Platform Music Client",
    description:
      "A cross-platform YouTube Music client built with Flutter and Dart, featuring a modern Fluent UI desktop experience, playback, and recommendations.",
    bullets: [
      "Reverse-engineered the YouTube Music API in Python and Dart to enable playback and recommendation features.",
      "Integrated LibMpv through Dart FFI, achieving 40% faster playback compared with native solutions.",
      "Published the project on GitHub, where it earned 150+ stars and community recognition.",
    ],
    image: "/backgrounds/cardbg1.jpg",
    imageAlt: "Drip YouTube Music Client",
    techs: ["Dart", "Flutter", "Dart FFI", "C++", "Python", "FluentUI", "Flask", "Hive"],
  },
  {
    id: "nimbus",
    title: "Nimbus",
    subtitle: "AI RSS Summarization Platform",
    description:
      "An end-to-end application that scrapes RSS articles and produces concise 100-word AI-generated summaries.",
    bullets: [
      "Built a Python scraper and a queue-driven, parallelized backend with Node.js and Redis.",
      "Fine-tuned a Llama 3.2B model for summarization and deployed it in production with Docker.",
      "Designed and developed the frontend for seamless article browsing.",
    ],
    image: "/backgrounds/card2.jpg",
    imageAlt: "Nimbus AI RSS summarization platform",
    techs: [
      "Python",
      "Node.js",
      "PostgreSQL",
      "Llama 3.2B",
      "Redis",
      "Docker",
      "llama.cpp",
      "LangChain",
    ],
  },
  {
    id: "atharva",
    title: "Atharva",
    subtitle: "OS-Inspired Portfolio Website",
    description:
      "An OS-inspired portfolio website that recreates desktop-style interactions, process management, file browsing, and a toy terminal experience.",
    bullets: [
      "Created the portfolio with React, Next.js, TypeScript, Tailwind CSS, and Redux.",
      "Implemented window and process-manager components, including a start menu, quick-access menu, and task manager.",
      "Built a file-management system and a toy terminal emulator that supports basic Bash commands.",
    ],
    image: "/backgrounds/cardbg1.jpg",
    imageAlt: "Atharva OS-inspired portfolio",
    techs: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Redux"],
  },
];

export const FOOTER_DATA = {
  title: "Oh, hello.",

  description:
    "Feel free to reach out for collaborations, AI product work, or just a friendly hello.",

  email: USER_DATA.email,
  socials: [
    ...(USER_DATA.github
      ? [{ name: "GitHub", url: USER_DATA.github }]
      : []),
    ...(USER_DATA.linkedin
      ? [{ name: "LinkedIn", url: USER_DATA.linkedin }]
      : []),
    ...(USER_DATA.resume
      ? [{ name: "Resume", url: USER_DATA.resume }]
      : []),
  ],
  image: "/backgrounds/footer.jpg",
};
