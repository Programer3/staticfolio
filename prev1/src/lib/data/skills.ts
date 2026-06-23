export interface Skill {
  id: string;
  name: string;
  icon: string;
  context: string;
  why: string;
}

export const skills: Skill[] = [
  {
    id: "flutter",
    name: "Flutter",
    icon: "smartphone",
    context: "Cross-platform UI toolkit",
    why: "Single codebase for iOS, Android, web, and desktop — productivity multiplier.",
  },
  {
    id: "dart",
    name: "Dart",
    icon: "terminal",
    context: "Sound null safety, native compilation",
    why: "Modern language with AOT compilation and a rich standard library.",
  },
  {
    id: "python",
    name: "Python",
    icon: "code-2",
    context: "General-purpose scripting & automation",
    why: "The Swiss Army knife for scripting, automation, and rapid prototyping.",
  },
  {
    id: "firebase",
    name: "Firebase",
    icon: "database",
    context: "Backend-as-a-Service",
    why: "Authentication, Firestore, and serverless functions without ops overhead.",
  },
  {
    id: "supabase",
    name: "Supabase",
    icon: "layers",
    context: "Open source Firebase alternative",
    why: "Postgres-based with realtime subscriptions and row-level security.",
  },
  {
    id: "git",
    name: "Git",
    icon: "git-branch",
    context: "Distributed version control",
    why: "The foundation of every collaborative workflow I use.",
  },
  {
    id: "bloc",
    name: "Bloc",
    icon: "box",
    context: "State management for Flutter",
    why: "Predictable state management with unidirectional data flow.",
  },
  {
    id: "provider",
    name: "Provider",
    icon: "package",
    context: "Dependency injection + state",
    why: "Simple, testable state management for smaller Flutter apps.",
  },
  {
    id: "sqlite",
    name: "SQLite",
    icon: "hard-drive",
    context: "Embedded relational database",
    why: "Zero-config, serverless persistence for mobile and desktop apps.",
  },
  {
    id: "rest",
    name: "REST APIs",
    icon: "globe",
    context: "HTTP API design",
    why: "Stateless, cacheable, and ubiquitous — the backbone of modern apps.",
  },
  {
    id: "riverpod",
    name: "Riverpod",
    icon: "droplets",
    context: "Compile-safe state management",
    why: "Improved Provider — no BuildContext dependency, better testing.",
  },
  {
    id: "gorouter",
    name: "GoRouter",
    icon: "map",
    context: "Declarative routing for Flutter",
    why: "Type-safe, URL-based routing with deep link support.",
  },
  {
    id: "hive",
    name: "Hive",
    icon: "archive",
    context: "Lightweight key-value storage",
    why: "Blazing fast local storage for app preferences and small datasets.",
  },
  {
    id: "drift",
    name: "Drift",
    icon: "table",
    context: "Reactive persistence for Dart",
    why: "Type-safe SQL ORM with auto-migrations and reactive queries.",
  },
  {
    id: "cicd",
    name: "CI/CD",
    icon: "refresh-cw",
    context: "GitHub Actions, automated pipelines",
    why: "Automated testing, building, and deployment — ship with confidence.",
  },
  {
    id: "clean-arch",
    name: "Clean Architecture",
    icon: "building-2",
    context: "Separation of concerns",
    why: "Testable, maintainable code where layers have clear boundaries.",
  },
  {
    id: "solid",
    name: "SOLID",
    icon: "columns",
    context: "Object-oriented design principles",
    why: "Five principles that keep code extensible and easy to reason about.",
  },
  {
    id: "serialization",
    name: "JSON / Serialization",
    icon: "file-json",
    context: "Data interchange format",
    why: "Universal data format; json_serializable for type-safe Dart objects.",
  },
  {
    id: "testing",
    name: "Unit Testing",
    icon: "check-circle",
    context: "Automated test suites",
    why: "Tests are documentation with execution. I don't ship untested code.",
  },
  {
    id: "markdown",
    name: "Markdown",
    icon: "file-text",
    context: "Documentation markup",
    why: "The language of READMEs, docs, and clean note-taking.",
  },
];