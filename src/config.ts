import {
  Home,
  Feather,
  LinkedIn,
  GitHub,
  Medium,
  CheckSquare,
  Mic,
  Briefcase,
  Layers,
  Package,
} from "react-feather";

const config = {
  app: {
    title: "Reshaped",
    subtitle: "Blog starter kit",
    thumbnailUrl: "/img/logo.svg",
  },
  meta: {
    url: "https://reshaped-blog-starter.vercel.app",
    title: "Reshaped",
    description: "Blog starter built on top of Next.js and Reshaped",
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
      title: "Stack",
      href: "/stack",
    },

    {
      title: "Projects",
      items: [
        {
          icon: Package,
          title: "Reshaped",
          href: "https://reshaped.so",
        },
        {
          icon: CheckSquare,
          title: "Design System Checklist",
          href: "https://www.designsystemchecklist.com",
        },
        {
          icon: Mic,
          title: "Design System Interviews",
          href: "https://reshaped.so/blog",
        },
        {
          icon: Briefcase,
          title: "Formaat Design",
          href: "https://formaat.design",
        },
      ],
    },
    {
      title: "Online",
      items: [
        {
          icon: LinkedIn,
          title: "LinkedIn",
          href: "https://www.linkedin.com/in/mansour-damanpak/",
        },
        {
          icon: GitHub,
          title: "GitHub",
          href: "https://github.com/cyanxxy",
        },
        {
          icon: Medium,
          title: "Medium",
          href: "https://mansour-damanpak.medium.com/",
        },
      ],
    },
  ],
};

export default config;
