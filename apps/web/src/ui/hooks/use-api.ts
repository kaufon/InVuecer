import { NextApiClient } from "apps/web/src/api/next/clients/next-api-client";
import { TaskService } from "apps/web/src/api/services";
const nextApiClient = NextApiClient()
nextApiClient.setBaseUrl("http://localhost:3333")

export function useApi(){
  return {
    taskService: TaskService(nextApiClient)
  }
}
