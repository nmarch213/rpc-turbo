import { greeterRouter } from "./router/greeter";
import { productsRouter } from "./router/products";
import { createTRPCRouter } from "./trpc";


export const router = createTRPCRouter({
  products: productsRouter,
  greeter: greeterRouter

})

export type AppRouter = typeof router;
