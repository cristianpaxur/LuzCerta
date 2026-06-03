import "server-only";

import type pt from "./pt.json";

export type Dictionary = typeof pt;

const dictionaries = {
  pt: () => import("./pt.json").then((module) => module.default),
  en: () => import("./en.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const locales: Locale[] = ["pt", "en"];
export const defaultLocale: Locale = "pt";

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();
