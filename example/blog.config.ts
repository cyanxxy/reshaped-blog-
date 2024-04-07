import { Home, Feather, Linkedin, GitHub, Medium } from "react-feather";

const config = {
  app: {
    title: "Mansour Damanpak",
    subtitle: "Personal Website",
    thumbnailUrl: "/img/logo.svg",
  },
  meta: {
    url: "https://reshaped-blog-starter.vercel.app",
    title: "Reshaped",
    description: "Personal website about product, AI and Web Performance",
    // ... (other meta properties if needed) ...
  },
  menu: [
    {
      icon: Home,
      title: "Home",
      href: "/",
    },
    {
      icon: Feather,
      title: "Writing",
      href: "/article",
    },
    {
      icon: Layers,
      title: "Consultancy Jobs",
      href: "/stack",
    },
    // ... (Projects section - no changes needed) ...
    {
      title: "Online",
      items: [
        {
          icon: Linkedin,
          title: "LinkedIn",
          href: "https://www.linkedin.com/in/your-linkedin-profile", // Update with your LinkedIn URL
        },
        {
          icon: GitHub,
          title: "GitHub",
          href: "https://github.com/your-github-profile", // Update with your GitHub URL
        },
        {
          icon: Medium,
          title: "Medium",
          href: "https://medium.com/@your-medium-profile", // Update with your Medium URL 
        },
      ],
    },
  ],
};

export default config;
