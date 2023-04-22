import { productsRouter } from "./router/products";
import { createTRPCRouter } from "./trpc";


export const router = createTRPCRouter({
  products: productsRouter

})

export type AppRouter = typeof router;
