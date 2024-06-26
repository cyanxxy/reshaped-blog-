import {
  Home,
  Feather,
  Twitter,
  Linkedin,
  Mail,
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
    title: "Mansour Blog",
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
      title: "Stack",
      href: "/stack",
    },

    {
      title: "Me",
      items: [
        {
          icon: Package,
          title: "Resume",
          href: "https://mdamanpak.me",
        },
        {
          icon: CheckSquare,
          title: "TermehTravel",
          href: "https://www.termehtravel.com",
        },
      ],
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
