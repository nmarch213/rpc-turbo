import { httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { ipcLink } from "electron-trpc/renderer";

import { AppRouter } from "api"
import superjson from "superjson";

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url

  // define where the hits on live 

  return `http://localhost:3000`; // dev SSR should use localhost
};


export const api = createTRPCNext<AppRouter>({
  config() {
    return {
      transformer: superjson,
      links: [
        ipcLink(),
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        // httpBatchLink({
        //   url: `${getBaseUrl()}/api/trpc`,
        // }),
      ],
    }
  },
  ssr: false
})

export { type RouterInputs, type RouterOutputs } from "api"
