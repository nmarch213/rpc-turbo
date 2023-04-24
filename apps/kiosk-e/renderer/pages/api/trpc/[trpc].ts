import { createNextApiHandler } from "@trpc/server/adapters/next";
import { createTRPCContext, router } from "api";


export default createNextApiHandler({
  router,
  createContext: createTRPCContext
});
