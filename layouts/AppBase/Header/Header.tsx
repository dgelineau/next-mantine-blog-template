import Link from "next/link";

import { Anchor, Burger, Group, Header } from "@mantine/core";

import useStyles from "@/layouts/AppBase/Header/styles";
import { HeaderProps } from "@/layouts/AppBase/Header/types";

import MantineLogo from "@/components/MantineLogo";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

import getHeaderLinks from "@/helpers/header";

import Routes from "@/config/routes";
import settings from "@/config/settings";

export default function HeaderSearch({ open, setOpen }: HeaderProps) {
  const { classes } = useStyles();

  return (
    <Header height={settings.headerSize} className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger
            opened={open}
            onClick={() => setOpen((o) => !o)}
            size="sm"
            className={classes.burger}
            aria-label="open application menu"
          />
          <Link passHref href={Routes.home.href}>
            <Anchor className={classes.logoHref}>
              <MantineLogo />
            </Anchor>
          </Link>
        </Group>

        <Group>
          <Group className={classes.links}>{getHeaderLinks()}</Group>
          <ThemeToggle />
        </Group>
      </div>
    </Header>
  );
}

export type { HeaderProps };
