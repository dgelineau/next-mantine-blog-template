import { Route } from "@/config/types";

const routes: Record<string, Route> = {
  home: {
    name: "Home",
    href: "/",
  },
  projects: {
    name: "Projects",
    href: "/projects",
  },
  blog: {
    name: "Blog",
    href: "/blog",
  },
  blogPost: {
    name: "Post",
    href: "/posts/[slug]",
  },
  contact: {
    name: "Contact",
    href: "/contact",
  },
};

export default routes;
