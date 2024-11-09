import { ApiResponse } from "../responses/api-response";
export interface IapiClient {
  get<ResponseBody>(
    url: string,
    body?: unknown,
  ): Promise<ApiResponse<ResponseBody>>;
  post<ResponseBody>(
    url: string,
    body?: unknown,
  ): Promise<ApiResponse<ResponseBody>>;
  put<ResponseBody>(
    url: string,
    body?: unknown,
  ): Promise<ApiResponse<ResponseBody>>;
  delete<ResponseBody>(
    url: string,
    body?: unknown,
  ): Promise<ApiResponse<ResponseBody>>;
  setBaseUrl(url:string): void
}
