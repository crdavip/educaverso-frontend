import config from '@/config';

class ServerFetch {
  static async get<T>(path: string, requestInit?: RequestInit): Promise<{ payload: T }> {
    const url = `${config.apiBaseUrl}${path}`;
    const response = await fetch(url, {
      ...requestInit,
      headers: {
        authorization: `Bearer ${config.apiToken}`,
      },
    });

    const responsePayload = await response.json();
    return responsePayload;
  }
}

export default ServerFetch;
