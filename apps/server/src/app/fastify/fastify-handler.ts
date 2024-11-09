import type { IController } from "@core/interfaces";
import type { FastifyReply, FastifyRequest } from "fastify";
import { FastifyHttp } from "./fastify-http";
export class FastifyHandler {
  readonly controller: IController;
  constructor(controller: IController) {
    this.controller = controller;
  }

  handle(request: FastifyRequest, reply: FastifyReply) {
    const http = new FastifyHttp(request, reply);
    return this.controller.handle(http);
  }
}
