import Link from "next/link";
import { useRouter } from "next/router";

import { Anchor, Box, Group, ThemeIcon } from "@mantine/core";

import useStyles from "@/components/NavLink/styles";

import { HeaderLink } from "@/config/types";

export default function NavLink({
  icon: Icon,
  label,
  link,
  activeLinks,
}: HeaderLink) {
  const { classes, cx } = useStyles();
  const router = useRouter();

  return (
    <Link passHref href={link}>
      <Anchor
        key={label}
        href={link}
        className={cx(classes.link, {
          [classes.linkActive]: activeLinks.includes(router.pathname),
        })}
        underline={false}
      >
        <Group position="apart" spacing={0}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            {Icon && (
              <ThemeIcon variant="outline" size={30}>
                <Icon size={18} />
              </ThemeIcon>
            )}
            <Box ml={Icon ? "md" : undefined}>{label}</Box>
          </Box>
        </Group>
      </Anchor>
    </Link>
  );
}
