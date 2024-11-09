import { IapiClient } from "@core/index";
import { CacheConfig } from "../types";
import { addUrlParams } from "../utils/add-url-params";
import { ApiResponse } from "@core/responses/api-response";

export const NextApiClient = (cacheConfig?: CacheConfig): IapiClient => {
  let baseUrl: string;
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  let params: Record<string, string> = {};

  return {
    async get<ResponseBody>(url: string, body?: unknown) {
      const response = await fetch(`${baseUrl}${addUrlParams(url, params)}`, {
        method: "GET",
        headers,
        body: JSON.stringify(body),
        cache: cacheConfig?.isCacheEnabled ? "force-cache" : "no-store",
      });
      params = {};
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Não é permitido duas tarefas com mesmo nome");
      }
      return new ApiResponse<ResponseBody>({
        body: data,
        statusCode: response.status,
      });
    },
    async post<ReponseBody>(url: string, body?: unknown) {
      const reponse = await fetch(`${baseUrl}${addUrlParams(url, params)}`, {
        method: "POST",
        headers,
        body: JSON.stringify(body) ?? {},
      });
      params = {};
      const data = await reponse.json();
      if (!reponse.ok) {
        throw new Error("Essa tarefa ja existe!");
      }
      return new ApiResponse<ReponseBody>({
        body: data,
        statusCode: reponse.status,
      });
    },
    async delete<ReponseBody>(url: string, body: unknown) {
      const response = await fetch(`${baseUrl}${addUrlParams(url, params)}`, {
        method: "DELETE",
        headers,
        body: JSON.stringify(body),
      });
      const data = await response.json();
      params = {};
      if (!response.ok) {
        throw new Error("erro delete ruim");
      }
      return new ApiResponse<ReponseBody>({
        body: data,
        statusCode: response.status,
      });
    },
    async put<ResponseBody>(url: string, body: unknown) {
      const reponse = await fetch(`${baseUrl}${addUrlParams(url, params)}`, {
        method: "PUT",
        headers,
        body: JSON.stringify(body),
      });
      const data = await reponse.json();
      params = {};
      if (!reponse.ok) {
        throw new Error("put ruim");
      }
      return new ApiResponse<ResponseBody>({
        body: data,
        statusCode: reponse.status,
      });
    },
    setBaseUrl(url: string) {
      baseUrl = url;
    },
  };
};
