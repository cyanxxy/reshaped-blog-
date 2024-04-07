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
          title: "Twitter",
          href: "https://twitter.com/blvdmitry",
        },
        {
          icon: GitHub,
          title: "GitHub",
          href: "https://github.com/formaat-design",
        },
        {
          icon: Book,
          title: "Figma",
          href: "https://www.figma.com/@reshaped",
        },
      ],
    },
  ],
};

export default config;
