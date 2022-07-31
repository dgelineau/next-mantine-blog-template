import { ReactNode, useEffect, useState } from "react";

import { useRouter } from "next/router";

import { AppShell, Container, Paper, Transition } from "@mantine/core";

import Header from "layouts/AppBase/Header/Header";
import useStyles from "layouts/AppBase/styles";

import getHeaderLinks from "@/helpers/header";

export default function AppBase({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);

  const { classes } = useStyles();

  const router = useRouter();

  /* A useEffect hook that is listening for a route change. When a route change is detected, it sets the
open state to false. */
  useEffect(() => {
    const handleStart = () => {
      setOpen(false);
    };

    router.events.on("routeChangeStart", handleStart);

    return () => {
      router.events.off("routeChangeStart", handleStart);
    };
  }, [router.asPath, router.events]);

  return (
    <AppShell
      fixed
      padding="md"
      header={<Header open={open} setOpen={setOpen} />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark" ? undefined : theme.colors.gray[2],
        },
      })}
    >
      <Container className={classes.children}>{children}</Container>

      <Transition transition="pop-top-right" duration={200} mounted={open}>
        {(styles) => (
          <Paper className={classes.dropdown} withBorder style={styles}>
            {getHeaderLinks()}
          </Paper>
        )}
      </Transition>
    </AppShell>
  );
}
