import { LocalStorageKey } from '@/general-enums';

class LocalStorage {
  static get<T>(key: LocalStorageKey): T | undefined {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const localStorageResult = window.localStorage.getItem(key);

    let parsedResult;
    if (localStorageResult) {
      parsedResult = JSON.parse(localStorageResult);
    }

    return parsedResult;
  }

  static set<T>(key: LocalStorageKey, value: T) {
    if (typeof window === 'undefined') {
      return;
    }

    const valueString = JSON.stringify(value);
    window.localStorage.setItem(key, valueString);
  }
}

export default LocalStorage;
