import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_CONVEX_URL: z.string(),
    NEXT_PUBLIC_CONVEX_SITE: z.string(),
    NEXT_PUBLIC_AUTH0_DOMAIN: z.string(),
    NEXT_PUBLIC_AUTH0_CLIENT_ID: z.string(),
    NEXT_PUBLIC_AUTH0_CLIENT_SECRET: z.string()
  },
  runtimeEnv: {
    NEXT_PUBLIC_AUTH0_CLIENT_ID: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
    NEXT_PUBLIC_AUTH0_DOMAIN: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
    NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,
    NEXT_PUBLIC_CONVEX_SITE: process.env.NEXT_PUBLIC_CONVEX_SITE,
    NEXT_PUBLIC_AUTH0_CLIENT_SECRET: process.env.NEXT_PUBLIC_AUTH0_CLIENT_SECRET
  }
})
