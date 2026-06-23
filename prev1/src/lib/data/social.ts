export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/chaman",
    icon: "github",
    label: "View source code and projects",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/chaman",
    icon: "linkedin",
    label: "Professional profile and experience",
  },
  {
    name: "X / Twitter",
    url: "https://x.com/chaman",
    icon: "twitter",
    label: "Thoughts and updates",
  },
  {
    name: "Email",
    url: "mailto:hello@chaman.dev",
    icon: "mail",
    label: "Send a direct message",
  },
];