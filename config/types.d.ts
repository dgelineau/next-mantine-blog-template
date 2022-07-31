import { MantineTheme } from "@mantine/core";

import { Icon as TablerIcon } from "tabler-icons-react";

export interface HeaderLink {
  label: string;
  link: string;
  icon?: TablerIcon;
  activeLinks: string[];
}

export interface Settings {
  applicationName: string;
  theme: Partial<MantineTheme>;
  headerSize: number;
  enablePageProgress: boolean;
  headerLinks: HeaderLink[];
}

export interface Route {
  name: string;
  href: string;
}
