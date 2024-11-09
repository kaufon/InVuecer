import { HTTP_STATUS_CODE } from "@core/constants";
import type { IHttp } from "@core/interfaces";
import type { FastifyReply, FastifyRequest } from "fastify";
export class FastifyHttp implements IHttp {
  constructor(
    private readonly request: FastifyRequest,
    private readonly response: FastifyReply,
  ) { }
  send(data: unknown, statusCode = HTTP_STATUS_CODE.ok): unknown {
    return this.response.status(statusCode).send(data);
  }
  getBody<Body>(): Body {
    return this.request.body as Body;
  }
  getQueryParams<QueryParams>(): QueryParams {
    return this.request.query as QueryParams;
  }
  getRouteParams<RouteParams>(): RouteParams {
    return this.request.params as RouteParams
  }
}
