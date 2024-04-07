 import {
  Home,
  Linkedin,
  Feather,
  GitHub,
  Mail,
  Figma,
  CheckSquare,
  Mic,
  Briefcase,
  Layers,
  Package,
} from "react-feather";

const config = {
  app: {
    title: "Mansour Damanpak",
    subtitle: "Personal Website",
    thumbnailUrl: "/img/logo.svg",
  },
  meta: {
    url: "https://reshaped-blog-starter.vercel.app",
    title: "Mansour Damanpak",
    description: "Personal website about product, AI and Web Performance",
    },
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

    {
      title: "Online",
      items: [
        {
          icon: Linkedin,
          title: "Linkedin",
          href: "https://www.linkedin.com/in/mansour-damanpak/",
        },
        {
          icon: GitHub,
          title: "GitHub",
          href: "https://github.com/cyanxxy",
        },
        {
          icon: Mail,
          title: "Mail",
          href: "mailto:mansoor.damanpak@gmail.com",
        },
      ],
    },
  ],
};

export default config;
