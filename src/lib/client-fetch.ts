/* eslint-disable no-param-reassign */ // Disabled here because axios interceptors rely on param reassign to work.

import axios, { AxiosRequestConfig } from 'axios';
import config from '@/config.ts';

interface Response<Payload> {
  data: Payload
}

const customAxiosInstance = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    Authorization: `Bearer ${config.apiToken}`,
  },
});

type UseSWRFetcherObject = {
  endpoint: string
  query: Record<string, string | number>
}

class ClientFetch {
  static async useSWRFetcher<Payload>(fetcherData: string | UseSWRFetcherObject): Promise<Response<Payload>> {
    let endpoint;
    let query;
    if (typeof fetcherData === 'string') {
      endpoint = fetcherData;
    } else {
      endpoint = fetcherData.endpoint;
      query = fetcherData.query;
    }
    const { data: response } = await customAxiosInstance.get(endpoint, { params: query });
    return response;
  }

  static async get<Payload>(endpoint: string, options: AxiosRequestConfig = {}): Promise<Response<Payload>> {
    const { data: response } = await customAxiosInstance.get(endpoint, options);
    return response;
  }

  static async post<Payload>(endpoint: string, body = {}, options: AxiosRequestConfig = {}): Promise<Response<Payload>> {
    const { data: response } = await customAxiosInstance.post(endpoint, body, options);
    return response;
  }

  static async patch<Payload>(endpoint: string, body = {}, options: AxiosRequestConfig = {}): Promise<Response<Payload>> {
    const { data: response } = await customAxiosInstance.patch(endpoint, body, options);
    return response;
  }

  static async delete<Payload>(endpoint: string, body = {}, options: AxiosRequestConfig = {}): Promise<Response<Payload>> {
    const { data: response } = await customAxiosInstance.delete(endpoint, { data: body, ...options });
    return response;
  }
}

export default ClientFetch;
