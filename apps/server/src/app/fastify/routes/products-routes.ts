import type { FastifyInstance } from "fastify";
import { FastifyHttp } from "../fastify-http";

export const ProductsRoutes = async(app: FastifyInstance) => {
  app.get('/',async (request,response) => {
    const http = new FastifyHttp(request,response)
    return 
  })
}
