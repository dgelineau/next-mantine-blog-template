import { Repo } from "@giscus/react";
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const env = createEnv({
  client: {
    NEXT_PUBLIC_GISCUS_REPO: z.custom<Repo>(
      (value) => typeof value === "string" && /^[^/]+\/[^/]+$/.test(value),
      {
        // eslint-disable-next-line no-template-curly-in-string
        message: "${string}/${string}",
      }
    ),
    NEXT_PUBLIC_GISCUS_REPO_ID: z.string().min(1),
    NEXT_PUBLIC_GISCUS_CATEGORY: z.string().min(1),
    NEXT_PUBLIC_GISCUS_CATEGORY_ID: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_GISCUS_REPO: process.env.NEXT_PUBLIC_GISCUS_REPO,
    NEXT_PUBLIC_GISCUS_REPO_ID: process.env.NEXT_PUBLIC_GISCUS_REPO_ID,
    NEXT_PUBLIC_GISCUS_CATEGORY: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
    NEXT_PUBLIC_GISCUS_CATEGORY_ID: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
  },
  // what the fuck
});

export default env;
