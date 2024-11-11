import type { FastifyInstance } from "fastify";
import { FastifyHttp } from "../fastify-http";
import { ListProductsController, RegisterProductController } from "apps/server/src/api/controllers/products";

export const ProductsRoutes = async(app: FastifyInstance) => {
  const listProductsController = new ListProductsController()
  const registerProductController = new RegisterProductController()
  app.get('/',async (request,response) => {
    const http = new FastifyHttp(request,response)
    return listProductsController.handle(http)
  })
  app.post('/',async (request,response) => {
    const http = new FastifyHttp(request,response)
    return registerProductController.handle(http)
  })
}
