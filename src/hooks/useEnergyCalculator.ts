"use client";

import { useMemo } from "react";
import type { UserAppliance } from "@/types/appliance";
import type { CalculationResult } from "@/types/energy";
import {
  calculateMonthlyKwh,
  calculateMonthlyCost,
  calculatePercentageOfTotal,
  classifyImpact,
} from "@/lib/energy-calculator";

/**
 * Hook que calcula consumo e custo de energia para todos os aparelhos.
 * Recalcula automaticamente quando appliances ou tarifa mudam.
 */
export function useEnergyCalculator(
  appliances: UserAppliance[],
  tariffPerKwh: number
) {
  const results = useMemo(() => {
    if (appliances.length === 0) {
      return {
        items: [] as CalculationResult[],
        totalKwh: 0,
        totalCost: 0,
        totalAppliances: 0,
      };
    }

    // Calcula kWh e custo individual
    const itemsWithCost = appliances.map((appliance) => {
      const monthlyKwh = calculateMonthlyKwh(
        appliance.watts,
        appliance.hoursPerDay,
        appliance.daysPerMonth,
        appliance.quantity
      );
      const monthlyCost = calculateMonthlyCost(monthlyKwh, tariffPerKwh);
      return {
        applianceId: appliance.id,
        applianceName: appliance.name,
        applianceIcon: appliance.icon,
        monthlyKwh,
        monthlyCost,
      };
    });

    // Calcula totais
    const totalKwh = itemsWithCost.reduce(
      (sum, item) => sum + item.monthlyKwh,
      0
    );
    const totalCost = itemsWithCost.reduce(
      (sum, item) => sum + item.monthlyCost,
      0
    );

    // Calcula porcentagem e impacto, ordena por custo decrescente
    const items: CalculationResult[] = itemsWithCost
      .map((item) => {
        const percentageOfTotal = calculatePercentageOfTotal(
          item.monthlyCost,
          totalCost
        );
        return {
          ...item,
          percentageOfTotal,
          impactLevel: classifyImpact(percentageOfTotal),
        };
      })
      .sort((a, b) => b.monthlyCost - a.monthlyCost);

    return {
      items,
      totalKwh,
      totalCost,
      totalAppliances: appliances.length,
    };
  }, [appliances, tariffPerKwh]);

  return results;
}
