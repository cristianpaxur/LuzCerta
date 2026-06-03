import type { ImpactLevel, CalculationResult } from "@/types/energy";
import type { UserAppliance } from "@/types/appliance";

/**
 * Calcula o consumo mensal em kWh de um aparelho.
 * Fórmula: (watts / 1000) × horasporDia × diasPorMês × quantidade
 */
export function calculateMonthlyKwh(
  watts: number,
  hoursPerDay: number,
  daysPerMonth: number,
  quantity: number
): number {
  if (watts <= 0 || hoursPerDay <= 0 || daysPerMonth <= 0 || quantity <= 0) {
    return 0;
  }
  return (watts / 1000) * hoursPerDay * daysPerMonth * quantity;
}

/**
 * Calcula o custo mensal em R$ de um aparelho.
 * Fórmula: consumoMensalKwh × tarifaPorKwh
 */
export function calculateMonthlyCost(
  monthlyKwh: number,
  tariffPerKwh: number
): number {
  if (monthlyKwh <= 0 || tariffPerKwh <= 0) {
    return 0;
  }
  return monthlyKwh * tariffPerKwh;
}

/**
 * Calcula a porcentagem do custo de um aparelho em relação ao total.
 */
export function calculatePercentageOfTotal(
  applianceCost: number,
  totalCost: number
): number {
  if (totalCost <= 0 || applianceCost <= 0) {
    return 0;
  }
  return (applianceCost / totalCost) * 100;
}

/**
 * Classifica o nível de impacto de um aparelho na conta de luz.
 * - Baixo: até 10% do total
 * - Médio: de 10% a 25% do total
 * - Alto: acima de 25% do total
 */
export function classifyImpact(percentageOfTotal: number): ImpactLevel {
  if (percentageOfTotal > 25) return "high";
  if (percentageOfTotal >= 10) return "medium";
  return "low";
}

/**
 * Calcula o total de kWh de uma lista de aparelhos.
 */
export function calculateTotalKwh(appliances: UserAppliance[]): number {
  return appliances.reduce((total, a) => {
    return total + calculateMonthlyKwh(a.watts, a.hoursPerDay, a.daysPerMonth, a.quantity);
  }, 0);
}

/**
 * Calcula o custo total de uma lista de aparelhos.
 */
export function calculateTotalCost(appliances: UserAppliance[], tariffPerKwh: number): number {
  return calculateTotalKwh(appliances) * tariffPerKwh;
}

/**
 * Gera o ranking de consumo ordenado do maior para o menor custo.
 */
export function getConsumptionRanking(appliances: UserAppliance[], tariffPerKwh: number): CalculationResult[] {
  const totalCost = calculateTotalCost(appliances, tariffPerKwh);
  
  const results = appliances.map(appliance => {
    const kwh = calculateMonthlyKwh(appliance.watts, appliance.hoursPerDay, appliance.daysPerMonth, appliance.quantity);
    const cost = calculateMonthlyCost(kwh, tariffPerKwh);
    const percent = calculatePercentageOfTotal(cost, totalCost);
    
    return {
      applianceId: appliance.id,
      applianceName: appliance.name,
      applianceIcon: appliance.icon,
      monthlyKwh: kwh,
      monthlyCost: cost,
      percentageOfTotal: percent,
      impactLevel: classifyImpact(percent),
    };
  });
  
  return results.sort((a, b) => b.monthlyCost - a.monthlyCost);
}
