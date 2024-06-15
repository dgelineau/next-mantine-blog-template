import env from "@/config/env";
import Routes from "@/config/routes";
import { Settings } from "@/config/types";

/* Defining the settings for the site. */
const settings: Settings = {
  applicationName: "Blog Template",
  theme: {
    primaryColor: "blue",
  },
  headerSize: 60,
  enablePageProgress: true,
  headerLinks: [
    {
      link: Routes.home.href,
      label: Routes.home.name,
      activeLinks: [Routes.home.href],
    },
    {
      link: Routes.projects.href,
      label: Routes.projects.name,
      activeLinks: [Routes.projects.href],
    },
    {
      link: Routes.blog.href,
      label: Routes.blog.name,
      activeLinks: [Routes.blog.href, Routes.blogPost.href],
    },
    {
      link: Routes.contact.href,
      label: Routes.contact.name,
      activeLinks: [Routes.contact.href],
    },
  ],
  giscus: {
    repo: env.NEXT_PUBLIC_GISCUS_REPO,
    repoId: env.NEXT_PUBLIC_GISCUS_REPO_ID,
    category: env.NEXT_PUBLIC_GISCUS_CATEGORY,
    categoryId: env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
    mapping: "pathname",
    loading: "lazy",
    lang: "en",
  },
};

export default settings;
