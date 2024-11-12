import { ListReceiptsController } from "apps/server/src/api/controllers/receipts/list-receipts-controller";
import type { FastifyInstance } from "fastify";
import { FastifyHttp } from "../fastify-http";
import { DeleteReceiptController } from "apps/server/src/api/controllers/receipts/delete-receipt-controller";
import { RegisterReceiptController } from "apps/server/src/api/controllers/receipts/register-receipt-controller";

export const ReceiptsRoutes = (app: FastifyInstance) => {
  const listReceiptsController = new ListReceiptsController();
  const deleteReceiptController = new DeleteReceiptController();
  const registerReceiptController = new RegisterReceiptController()
  app.get("/", async (request, response) => {
    const http = new FastifyHttp(request, response);
    return listReceiptsController.handle(http);
  });
  app.delete("/", async (request, response) => {
    const http = new FastifyHttp(request, response);
    return deleteReceiptController.handle(http);
  });
  app.post("/",async (request,response) => {
    const http = new FastifyHttp(request,response)
    return registerReceiptController.handle(http)
  })
};
