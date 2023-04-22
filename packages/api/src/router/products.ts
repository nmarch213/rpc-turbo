import { createTRPCRouter, publicProcedure } from "../trpc";

export const productsRouter = createTRPCRouter({
  byId: publicProcedure.query(({ctx }) => {

    ctx.grpcClient.readProduct({productId: "123"})

  })

})
