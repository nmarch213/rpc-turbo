import { createTRPCRouter, publicProcedure } from "../trpc";

export const storesRouter = createTRPCRouter({
  byId: publicProcedure.query(async ({ ctx }) => {
    try {
      const result = await ctx.grpcClient.stores.getStores({ id: '123' });
      return result;
    } catch (error) {
      console.log("error", error)
    }
    return null;
  })

})
