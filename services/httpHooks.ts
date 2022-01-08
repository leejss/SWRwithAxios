import useSWR from "swr";
import httpClient from "./client";

// Typescripting Response

function fetcher(url: string) {
  return httpClient.get(url);
}

export function useGET<T>(url: string) {
  const { data, error } = useSWR(url, fetcher);
}

export function usePOST<T, R>(url: string, data: R) {}
