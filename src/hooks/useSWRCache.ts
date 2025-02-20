import { useEffect } from 'react';
import { useSWRConfig } from 'swr';
import LocalStorage from '@/lib/local-storage.ts';
import { LocalStorageKey } from '@/general-enums.ts';
import { PersistedCache } from '@/types/cache-types.ts';

function useSWRCache() {
  const { cache, mutate } = useSWRConfig();

  useEffect(() => {
    function setCacheFromLocalStorage() {
      const swrCache = LocalStorage.get<PersistedCache>(LocalStorageKey.PersistedCache) || {};

      Object.entries(swrCache).forEach(([key, value]) => {
        if (value && key) {
          cache.set(key, value.data);
        }
      });

      Object.entries(swrCache).forEach(([key, value]) => {
        if (value && key) {
          mutate(key, value.data);
        }
      });
    }

    setCacheFromLocalStorage();
  }, []);

  useEffect(() => {
    function saveCacheToLocalStorage() {
      const newCache: PersistedCache = {};

      Array.from(cache.keys()).forEach((key) => {
        newCache[key] = cache.get(key);
      });

      LocalStorage.set(LocalStorageKey.PersistedCache, newCache);
    }

    window.addEventListener('beforeunload', saveCacheToLocalStorage);

    return () => {
      window.removeEventListener('beforeunload', saveCacheToLocalStorage);
    };
  }, []);
}

export default useSWRCache;
