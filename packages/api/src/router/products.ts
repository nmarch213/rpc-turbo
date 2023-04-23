import { createTRPCRouter, publicProcedure } from "../trpc";

export const productsRouter = createTRPCRouter({
  byId: publicProcedure.query(({ctx }) => {

    console.log("hit router")

    return {id: "123", name: "test"}
  
    // return ctx.grpcClient.readProduct({productId: "123"})

  })

})
