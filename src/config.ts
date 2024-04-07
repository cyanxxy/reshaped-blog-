import {
  Home,
  Feather,
  Link,
  GitHub,
  Book,
  CheckSquare,
  Mic,
  Briefcase,
  Layers,
  Package,
} from "react-feather";

const config = {
  // ...
  menu: [
    // ...
    {
      title: "Online",
      items: [
        {
          icon: Link,
          title: "LinkedIn",
          href: "https://www.linkedin.com/in/yourusername",
        },
        {
          icon: GitHub,
          title: "GitHub",
          href: "https://github.com/formaat-design",
        },
        {
          icon: Book,
          title: "Medium",
          href: "https://medium.com/@yourusername",
        },
      ],
    },
  ],
};

export default config;
