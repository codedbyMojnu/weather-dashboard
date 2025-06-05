import { useEffect, useState } from "react";

export default function useLocalStorage(storageKey, defaultValue) {
  const getStoredValue = () => {
    try {
      const stored = localStorage.getItem(storageKey);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch (e) {
      console.warn("Failed to parse localStorage value:", e);
      return defaultValue;
    }
  };

  const [value, setValue] = useState(getStoredValue);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(value));
    } catch (e) {
      console.warn("Failed to save to localStorage:", e);
    }
  }, [value, storageKey]);

  return [value, setValue];
}
