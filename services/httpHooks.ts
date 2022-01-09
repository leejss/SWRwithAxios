import useSWR from "swr";
import httpClient from "./client";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

// Typescripting Response

export async function fetcher<Data = unknown>(
  url: string,
  config?: AxiosRequestConfig<Data>
) {
  return httpClient.get<Data>(url, config);
}

// Return Data or Error
export function useGET<Data = unknown>(url: string, params: unknown) {
  const { data, error } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(
    url,
    fetcher
  );
}

export function usePOST<T, R>(url: string, data: R) {}

// useGET<GetTodoResponse>()
