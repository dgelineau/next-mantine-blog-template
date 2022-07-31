import React from "react";

import { ActionIcon, Group, useMantineColorScheme } from "@mantine/core";

import { MoonStars, Sun } from "tabler-icons-react";

export default function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center" my="xl">
      <ActionIcon
        variant="outline"
        onClick={() => toggleColorScheme()}
        size="lg"
        color={colorScheme === "dark" ? "yellow" : "blue"}
        title="Toggle color scheme"
      >
        {colorScheme === "dark" ? <Sun size={18} /> : <MoonStars size={18} />}
      </ActionIcon>
    </Group>
  );
}
