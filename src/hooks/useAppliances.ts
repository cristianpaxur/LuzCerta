"use client";

import { useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";
import type { UserAppliance } from "@/types/appliance";
import type { AppliancePreset } from "@/types/appliance";

const STORAGE_KEY = "luzcerta-appliances";

/**
 * Hook para gerenciar a lista de eletrodomésticos do usuário.
 * CRUD completo com persistência automática no Local Storage.
 */
export function useAppliances() {
  const [appliances, setAppliances, clearAppliances] = useLocalStorage<
    UserAppliance[]
  >(STORAGE_KEY, []);

  /**
   * Adiciona um aparelho a partir de um preset (eletrodoméstico pré-definido).
   */
  const addFromPreset = useCallback(
    (
      preset: AppliancePreset,
      config?: {
        quantity?: number;
        hoursPerDay?: number;
        daysPerMonth?: number;
      }
    ) => {
      const newAppliance: UserAppliance = {
        id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15),
        presetId: preset.id,
        name: preset.name,
        watts: preset.averageWatts,
        quantity: config?.quantity ?? 1,
        hoursPerDay: config?.hoursPerDay ?? preset.defaultHoursPerDay,
        daysPerMonth: config?.daysPerMonth ?? preset.defaultDaysPerMonth,
        category: preset.category,
        icon: preset.icon,
      };
      setAppliances((prev) => [...prev, newAppliance]);
      return newAppliance;
    },
    [setAppliances]
  );

  /**
   * Adiciona um aparelho manual (personalizado).
   */
  const addManual = useCallback(
    (data: {
      name: string;
      watts: number;
      quantity: number;
      hoursPerDay: number;
      daysPerMonth: number;
    }) => {
      const newAppliance: UserAppliance = {
        id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 15),
        name: data.name,
        watts: data.watts,
        quantity: data.quantity,
        hoursPerDay: data.hoursPerDay,
        daysPerMonth: data.daysPerMonth,
        icon: "Plug",
      };
      setAppliances((prev) => [...prev, newAppliance]);
      return newAppliance;
    },
    [setAppliances]
  );

  /**
   * Edita um aparelho existente.
   */
  const updateAppliance = useCallback(
    (id: string, updates: Partial<Omit<UserAppliance, "id">>) => {
      setAppliances((prev) =>
        prev.map((a) => (a.id === id ? { ...a, ...updates } : a))
      );
    },
    [setAppliances]
  );

  /**
   * Remove um aparelho da lista.
   */
  const removeAppliance = useCallback(
    (id: string) => {
      setAppliances((prev) => prev.filter((a) => a.id !== id));
    },
    [setAppliances]
  );

  /**
   * Remove todos os aparelhos.
   */
  const clearAll = useCallback(() => {
    clearAppliances();
  }, [clearAppliances]);

  return {
    appliances,
    addFromPreset,
    addManual,
    updateAppliance,
    removeAppliance,
    clearAll,
    clearAppliances,
  };
}
