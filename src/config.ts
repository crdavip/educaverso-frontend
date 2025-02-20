const config = {
  apiBaseUrl: process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL,
  azureStorageAccount: process.env.AZURE_STORAGE_ACCOUNT || process.env.NEXT_PUBLIC_AZURE_STORAGE_ACCOUNT,
  apiToken: process.env.API_AUTH_TOKEN || process.env.NEXT_PUBLIC_API_AUTH_TOKEN,
};

export default config;
