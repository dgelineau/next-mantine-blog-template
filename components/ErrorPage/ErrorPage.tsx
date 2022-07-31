import Link from "next/link";

import { Button, Container, Group, Text, Title } from "@mantine/core";

import useStyles from "@/components/ErrorPage/styles";
import { ErrorPageProps } from "@/components/ErrorPage/types";

import Routes from "@/config/routes";

export default function ErrorPage({
  errorCode,
  title,
  description,
}: ErrorPageProps) {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>{errorCode}</div>
      <Title className={classes.title}>{title}</Title>
      <Text
        color="dimmed"
        size="lg"
        align="center"
        className={classes.description}
      >
        {description}
      </Text>
      <Group position="center">
        <Link href={Routes.home.href} passHref>
          <Button
            variant="subtle"
            size="md"
            component="a"
            aria-label="return to home page"
          >
            Take me back to home page
          </Button>
        </Link>
      </Group>
    </Container>
  );
}
