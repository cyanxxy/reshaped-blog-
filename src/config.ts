 import {
  Home,
  Feather,
  Twitter,
  GitHub,
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
    title: "Reshaped",
    description: "Personal website about product, AI and Web Performance",
    twitter: {
      username: "blvdmitry",
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
          icon: linkedin,
          title: "linkedin",
          href: "https://twitter.com/blvdmitry",
        },
        {
          icon: GitHub,
          title: "GitHub",
          href: "https://github.com/formaat-design",
        },
        {
          icon: Figma,
          title: "Figma",
          href: "https://www.figma.com/@reshaped",
        },
      ],
    },
  ],
};

export default config;
