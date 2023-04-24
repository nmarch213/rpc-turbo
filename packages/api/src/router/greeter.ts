import { createTRPCRouter, publicProcedure } from "../trpc";


export const greeterRouter = createTRPCRouter({
  hello: publicProcedure.query(({ ctx }) => {

    // return ctx.grpcClient.sayHello({ name: "Don" })

    return { message: "Hello, Don" }

  })

})
