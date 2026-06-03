export type ApplianceCategory =
  | "Cozinha"
  | "Banho"
  | "Climatização"
  | "Lavanderia"
  | "Iluminação"
  | "Escritório"
  | "Entretenimento"
  | "Rede"
  | "Outros";

export type AppliancePreset = {
  id: string;
  name: string;
  category: ApplianceCategory;
  averageWatts: number;
  defaultHoursPerDay: number;
  defaultDaysPerMonth: number;
  icon: string;
  friendlyDescription: string;
};

export type UserAppliance = {
  id: string;
  presetId?: string;
  name: string;
  watts: number;
  quantity: number;
  hoursPerDay: number;
  daysPerMonth: number;
  category?: ApplianceCategory;
  icon?: string;
};
