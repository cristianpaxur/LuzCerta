import type { UserAppliance } from "./appliance";

export type ImpactLevel = "low" | "medium" | "high";

export type EnergySettings = {
  tariffPerKwh: number;
  lastUpdated: string;
};

export type CalculationResult = {
  applianceId: string;
  applianceName: string;
  applianceIcon?: string;
  monthlyKwh: number;
  monthlyCost: number;
  percentageOfTotal: number;
  impactLevel: ImpactLevel;
};

export type AppState = {
  appliances: UserAppliance[];
  settings: EnergySettings;
  lastUpdated: string;
};

export const DEFAULT_TARIFF_PER_KWH = 0.65;
