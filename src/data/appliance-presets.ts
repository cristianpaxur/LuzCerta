import type { AppliancePreset } from "@/types/appliance";

export const appliancePresets: AppliancePreset[] = [
  {
    id: "geladeira",
    name: "Geladeira",
    category: "Cozinha",
    averageWatts: 150,
    defaultHoursPerDay: 24,
    defaultDaysPerMonth: 30,
    icon: "Refrigerator",
    friendlyDescription:
      "Fica ligada o tempo todo, mas consome relativamente pouco por hora.",
  },
  {
    id: "chuveiro-eletrico",
    name: "Chuveiro elétrico",
    category: "Banho",
    averageWatts: 5500,
    defaultHoursPerDay: 0.5,
    defaultDaysPerMonth: 30,
    icon: "ShowerHead",
    friendlyDescription:
      "Um dos aparelhos que mais consome energia quando usado por muito tempo.",
  },
  {
    id: "maquina-de-lavar",
    name: "Máquina de lavar",
    category: "Lavanderia",
    averageWatts: 500,
    defaultHoursPerDay: 1,
    defaultDaysPerMonth: 12,
    icon: "WashingMachine",
    friendlyDescription:
      "Costuma ser usada poucas vezes por semana, mas consome bastante por ciclo.",
  },
  {
    id: "televisao",
    name: "Televisão",
    category: "Entretenimento",
    averageWatts: 100,
    defaultHoursPerDay: 5,
    defaultDaysPerMonth: 30,
    icon: "Tv",
    friendlyDescription:
      "Consome pouco por hora, mas pode pesar se ficar ligada o dia todo.",
  },
  {
    id: "ar-condicionado",
    name: "Ar-condicionado",
    category: "Climatização",
    averageWatts: 1400,
    defaultHoursPerDay: 8,
    defaultDaysPerMonth: 30,
    icon: "AirVent",
    friendlyDescription:
      "Pode aumentar bastante o valor da conta se usado muitas horas por dia.",
  },
  {
    id: "ventilador",
    name: "Ventilador",
    category: "Climatização",
    averageWatts: 70,
    defaultHoursPerDay: 8,
    defaultDaysPerMonth: 30,
    icon: "Fan",
    friendlyDescription:
      "Consome bem menos que o ar-condicionado e é uma boa alternativa.",
  },
  {
    id: "micro-ondas",
    name: "Micro-ondas",
    category: "Cozinha",
    averageWatts: 1200,
    defaultHoursPerDay: 0.25,
    defaultDaysPerMonth: 30,
    icon: "Microwave",
    friendlyDescription:
      "Potente, mas como é usado por pouco tempo, não pesa tanto na conta.",
  },
  {
    id: "ferro-de-passar",
    name: "Ferro de passar",
    category: "Lavanderia",
    averageWatts: 1000,
    defaultHoursPerDay: 1,
    defaultDaysPerMonth: 8,
    icon: "Shirt",
    friendlyDescription:
      "Consome bastante enquanto está ligado, mas geralmente é usado poucas vezes por mês.",
  },
  {
    id: "computador",
    name: "Computador",
    category: "Escritório",
    averageWatts: 200,
    defaultHoursPerDay: 6,
    defaultDaysPerMonth: 22,
    icon: "Monitor",
    friendlyDescription:
      "Computadores de mesa consomem mais que notebooks, especialmente se tiverem placa de vídeo.",
  },
  {
    id: "notebook",
    name: "Notebook",
    category: "Escritório",
    averageWatts: 65,
    defaultHoursPerDay: 6,
    defaultDaysPerMonth: 22,
    icon: "Laptop",
    friendlyDescription:
      "Consome bem pouco comparado a um computador de mesa.",
  },
  {
    id: "lampadas",
    name: "Lâmpadas",
    category: "Iluminação",
    averageWatts: 12,
    defaultHoursPerDay: 6,
    defaultDaysPerMonth: 30,
    icon: "Lightbulb",
    friendlyDescription:
      "Lâmpadas LED consomem muito pouco. As antigas incandescentes gastam bem mais.",
  },
  {
    id: "air-fryer",
    name: "Air fryer",
    category: "Cozinha",
    averageWatts: 1500,
    defaultHoursPerDay: 0.5,
    defaultDaysPerMonth: 20,
    icon: "CookingPot",
    friendlyDescription:
      "Potente, mas como é usada por pouco tempo, o impacto tende a ser moderado.",
  },
  {
    id: "forno-eletrico",
    name: "Forno elétrico",
    category: "Cozinha",
    averageWatts: 1500,
    defaultHoursPerDay: 1,
    defaultDaysPerMonth: 15,
    icon: "Flame",
    friendlyDescription:
      "Consome bastante quando ligado. Usar com planejamento ajuda a economizar.",
  },
  {
    id: "freezer",
    name: "Freezer",
    category: "Cozinha",
    averageWatts: 130,
    defaultHoursPerDay: 24,
    defaultDaysPerMonth: 30,
    icon: "Snowflake",
    friendlyDescription:
      "Assim como a geladeira, fica ligado o tempo todo mas consome de forma moderada.",
  },
  {
    id: "roteador-internet",
    name: "Roteador de internet",
    category: "Rede",
    averageWatts: 15,
    defaultHoursPerDay: 24,
    defaultDaysPerMonth: 30,
    icon: "Wifi",
    friendlyDescription:
      "Consome muito pouco. Pode ficar ligado o tempo todo sem preocupação.",
  },
];

export const categories = [
  ...new Set(appliancePresets.map((p) => p.category)),
] as const;
