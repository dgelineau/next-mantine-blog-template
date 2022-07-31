import { NextSeo } from "next-seo";
import { AppProps } from "next/app";

import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";

import { AppBase } from "layouts/index";

import { RouterTransition } from "@/components/index";

import settings from "@/config/settings";

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  /**
   * It sets the color scheme to the value passed in, or if no value is passed in, it sets the color
   * scheme to the opposite of what it currently is
   * @param {ColorScheme} [value] - The value to set the color scheme to. If this is not provided, the
   * color scheme will be toggled.
   */
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
  };

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <>
      <NextSeo
        titleTemplate={`${settings.applicationName} | %s`}
        description="Home page of blog"
      />
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ ...settings.theme, colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <ModalsProvider>
            <NotificationsProvider>
              <AppBase>
                {settings.enablePageProgress && <RouterTransition />}
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...pageProps} />
              </AppBase>
            </NotificationsProvider>
          </ModalsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
