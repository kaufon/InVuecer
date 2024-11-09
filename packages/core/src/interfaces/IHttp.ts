export interface IHttp {
  send(data: unknown, statusCode: number): unknown;
  getBody<Body>(): Body;
  getRouteParams<RouteParams>(): RouteParams;
  getQueryParams<QueryParams>(): QueryParams;
}
