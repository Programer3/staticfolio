export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: "web" | "systems" | "devtools" | "ai" | "mobile";
  github: string;
  demo?: string;
  image: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Project Alpha",
    description:
      "A cross-platform mobile application built with Flutter that streamlines inventory management for small businesses. Features real-time sync, offline support, and barcode scanning.",
    tech: ["Flutter", "Dart", "Supabase", "Bloc", "Hive"],
    category: "mobile",
    github: "https://github.com/chaman/project-alpha",
    demo: "https://alpha-demo.vercel.app",
    image: "/icons/project-placeholder.svg",
    highlights: [
      "Offline-first architecture with Hive caching",
      "Real-time multi-user sync via Supabase",
      "Barcode scanning with ML Kit",
      "Achieved 98% crash-free rate on production",
    ],
  },
  {
    id: "project-2",
    title: "Project Beta",
    description:
      "A developer tool that automatically generates type-safe API clients from OpenAPI specs. Supports Dart, TypeScript, and Python code generation.",
    tech: ["Python", "Dart", "GitHub Actions", "JSON Serialization"],
    category: "devtools",
    github: "https://github.com/chaman/project-beta",
    demo: "",
    image: "/icons/project-placeholder.svg",
    highlights: [
      "Parses OpenAPI 3.0/3.1 specs",
      "Generates null-safe Dart code",
      "Published as pip package + Dart pub package",
    ],
  },
  {
    id: "project-3",
    title: "Project Gamma",
    description:
      "A real-time collaborative whiteboard app using Flutter and WebSocket for team brainstorming sessions. Supports freehand drawing, sticky notes, and image annotations.",
    tech: ["Flutter", "Dart", "Firebase", "Provider"],
    category: "web",
    github: "https://github.com/chaman/project-gamma",
    demo: "https://gamma-demo.netlify.app",
    image: "/icons/project-placeholder.svg",
    highlights: [
      "WebSocket-based real-time collaboration",
      "Custom paint engine for smooth freehand drawing",
      "Undo/redo with command pattern",
      "Supports 10+ concurrent users",
    ],
  },
  {
    id: "project-4",
    title: "Project Delta",
    description:
      "A system monitoring dashboard that aggregates logs, metrics, and alerts from distributed services into a single pane of glass.",
    tech: ["Python", "SQLite", "REST APIs", "Drift"],
    category: "systems",
    github: "https://github.com/chaman/project-delta",
    demo: "",
    image: "/icons/project-placeholder.svg",
    highlights: [
      "Aggregates logs from 5+ microservices",
      "Custom alert routing with severity levels",
      "SQLite-backed time-series storage",
      "Slack/Email notification integration",
    ],
  },
  {
    id: "project-5",
    title: "Project Epsilon",
    description:
      "An AI-powered code review assistant that integrates with GitHub PRs. Automatically suggests improvements, detects anti-patterns, and enforces code style.",
    tech: ["Python", "GitHub Actions", "Git", "CI/CD"],
    category: "ai",
    github: "https://github.com/chaman/project-epsilon",
    demo: "",
    image: "/icons/project-placeholder.svg",
    highlights: [
      "Automated PR review comments via GitHub API",
      "Custom rule engine for project-specific patterns",
      "Runs as GitHub Action — no external infra needed",
    ],
  },
  {
    id: "project-6",
    title: "Project Zeta",
    description:
      "A Flutter package for declarative, type-safe routing with built-in deep linking, nested navigation, and transition animations.",
    tech: ["Dart", "Flutter", "GoRouter", "Riverpod"],
    category: "devtools",
    github: "https://github.com/chaman/project-zeta",
    demo: "https://pub.dev/packages/fake_zeta",
    image: "/icons/project-placeholder.svg",
    highlights: [
      "Type-safe route parameters",
      "Nested navigation with redirect guards",
      "Custom transition animations per route",
      "500+ weekly downloads on pub.dev",
    ],
  },
];

export const categories = ["all", "mobile", "devtools", "web", "systems", "ai"] as const;
export type Category = (typeof categories)[number];