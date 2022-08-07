/* eslint-disable react/jsx-props-no-spreading */
import { useMantineColorScheme } from "@mantine/core";

import Giscus from "@giscus/react";

import settings from "@/config/settings";

export default function GiscusComments() {
  const { colorScheme } = useMantineColorScheme();

  if (!settings.giscus) {
    return null;
  }

  return (
    <Giscus
      theme={colorScheme === "dark" ? "dark_dimmed" : "light"}
      {...settings.giscus}
    />
  );
}
