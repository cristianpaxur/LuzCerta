"use client";

import { useState, useEffect, useCallback, useRef } from "react";

/**
 * Hook genérico para persistência no Local Storage.
 * Previne Hydration Mismatch carregando o valor apenas após a montagem.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void, () => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [hydrated, setHydrated] = useState(false);

  // Read from local storage after mount to prevent hydration mismatch
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item) as T);
      }
    } catch (error) {
      console.warn(`Erro ao ler Local Storage key "${key}":`, error);
    }
    setHydrated(true);
  }, [key]);

  // Sincroniza com localStorage sempre que o valor mudar
  useEffect(() => {
    if (!hydrated) return;
    if (typeof window === "undefined") return;
    
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn(`Erro ao salvar no Local Storage key "${key}":`, error);
    }
  }, [key, storedValue, hydrated]);

  // Setter que aceita valor direto ou função updater
  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const newValue = value instanceof Function ? value(prev) : value;
        return newValue;
      });
    },
    []
  );

  // Limpar o valor do localStorage
  const clearValue = useCallback(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.warn(`Erro ao limpar Local Storage key "${key}":`, error);
    }
  }, [key, initialValue]);

  return [storedValue, setValue, clearValue];
}
