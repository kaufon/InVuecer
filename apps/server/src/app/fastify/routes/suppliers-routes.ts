import {
  DeleteSupplierController,
  ListSuppliersController,
  RegisterSupplierController,
  UpdateSupplierController,
} from "apps/server/src/api/controllers/suppliers";
import type { FastifyInstance } from "fastify";
import { FastifyHttp } from "../fastify-http";

export const SuppliersRoutes = async (app: FastifyInstance) => {
  const listSupplierController = new ListSuppliersController();
  const registerSupplierController = new RegisterSupplierController();
  const deleteSupplierController = new DeleteSupplierController();
  const updateSupplierController = new UpdateSupplierController();
  app.get("/", async (request, response) => {
    const http = new FastifyHttp(request, response);
    return listSupplierController.handle(http);
  });
  app.post("/", async (request, response) => {
    const http = new FastifyHttp(request, response);
    return registerSupplierController.handle(http);
  });
  app.delete("/", async (request, response) => {
    const http = new FastifyHttp(request, response);
    return deleteSupplierController.handle(http);
  });
  app.put("/:supplierId", async (request, response) => {
    const http = new FastifyHttp(request, response);
    return updateSupplierController.handle(http);
  });
};
