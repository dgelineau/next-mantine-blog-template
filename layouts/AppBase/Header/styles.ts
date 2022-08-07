import { createStyles } from "@mantine/core";

import settings from "@/config/settings";

export default createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: settings.headerSize,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logoHref: {
    display: "flex",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
}));
