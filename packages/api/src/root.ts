import { greeterRouter } from "./router/greeter";
import { productsRouter } from "./router/products";
import { storesRouter } from "./router/stores";
import { createTRPCRouter } from "./trpc";


export const router = createTRPCRouter({
  products: productsRouter,
  greeter: greeterRouter,
  stores: storesRouter

})

export type AppRouter = typeof router;
