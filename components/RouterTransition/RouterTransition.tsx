// components/RouterTransition.tsx
import { useEffect } from "react";

import { useRouter } from "next/router";

import {
  NavigationProgress,
  resetNavigationProgress,
  startNavigationProgress,
} from "@mantine/nprogress";

export default function RouterTransition() {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && startNavigationProgress();

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", resetNavigationProgress);
    router.events.on("routeChangeError", resetNavigationProgress);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", resetNavigationProgress);
      router.events.off("routeChangeError", resetNavigationProgress);
    };
  }, [router.asPath, router.events]);

  return <NavigationProgress />;
}
