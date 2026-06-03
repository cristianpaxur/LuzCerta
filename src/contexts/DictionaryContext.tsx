"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Dictionary } from "@/dictionaries";

const DictionaryContext = createContext<Dictionary | null>(null);

interface DictionaryProviderProps {
  dictionary: Dictionary;
  children: ReactNode;
}

export function DictionaryProvider({
  dictionary,
  children,
}: DictionaryProviderProps) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
}

export function useDictionary(): Dictionary {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error(
      "useDictionary must be used within a DictionaryProvider"
    );
  }
  return context;
}
