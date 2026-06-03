"use client";

import { Card } from "@/components/ui/Card";
import type { UserAppliance } from "@/types/appliance";
import { Lightbulb } from "lucide-react";
import { useDictionary } from "@/contexts/DictionaryContext";

interface SavingTipsProps {
  appliances: UserAppliance[];
}

export function SavingTips({ appliances }: SavingTipsProps) {
  const dict = useDictionary();

  type Tip = {
    condition: (appliances: UserAppliance[]) => boolean;
    text: string;
    icon: string;
  };

  const tips: Tip[] = [
    {
      condition: (apps) =>
        apps.some(
          (a) =>
            a.presetId === "chuveiro-eletrico" ||
            a.name.toLowerCase().includes("chuveiro") ||
            a.name.toLowerCase().includes("shower")
        ),
      text: dict.tips.chuveiro,
      icon: "🚿",
    },
    {
      condition: (apps) =>
        apps.some(
          (a) =>
            a.presetId === "ar-condicionado" ||
            a.name.toLowerCase().includes("ar-condicionado") ||
            a.name.toLowerCase().includes("ar condicionado") ||
            a.name.toLowerCase().includes("conditioner")
        ),
      text: dict.tips.arCondicionado,
      icon: "❄️",
    },
    {
      condition: (apps) =>
        apps.some(
          (a) =>
            a.presetId === "lampadas" ||
            a.name.toLowerCase().includes("lâmpada") ||
            a.name.toLowerCase().includes("lampada") ||
            a.name.toLowerCase().includes("bulb")
        ),
      text: dict.tips.lampadas,
      icon: "💡",
    },
    {
      condition: (apps) =>
        apps.some(
          (a) =>
            a.presetId === "geladeira" ||
            a.name.toLowerCase().includes("geladeira") ||
            a.name.toLowerCase().includes("fridge") ||
            a.name.toLowerCase().includes("refrigerator")
        ),
      text: dict.tips.geladeira,
      icon: "🧊",
    },
    {
      condition: (apps) =>
        apps.some(
          (a) =>
            a.presetId === "ferro-de-passar" ||
            a.name.toLowerCase().includes("ferro") ||
            a.name.toLowerCase().includes("iron")
        ),
      text: dict.tips.ferro,
      icon: "👕",
    },
    {
      condition: (apps) =>
        apps.some(
          (a) =>
            a.presetId === "televisao" ||
            a.name.toLowerCase().includes("televisão") ||
            a.name.toLowerCase().includes("tv") ||
            a.name.toLowerCase().includes("television")
        ),
      text: dict.tips.televisao,
      icon: "📺",
    },
    {
      condition: (apps) =>
        apps.some(
          (a) =>
            a.presetId === "maquina-de-lavar" ||
            a.name.toLowerCase().includes("máquina de lavar") ||
            a.name.toLowerCase().includes("washing")
        ),
      text: dict.tips.maquinaLavar,
      icon: "🧺",
    },
    {
      condition: () => true,
      text: dict.tips.geral,
      icon: "🔌",
    },
  ];

  const activeTips = tips.filter((tip) => tip.condition(appliances));

  if (activeTips.length === 0) return null;

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-5">
        <Lightbulb size={20} className="text-amber-500" />
        <h3 className="text-lg font-bold text-slate-800">
          {dict.tips.title}
        </h3>
      </div>

      <div className="space-y-3">
        {activeTips.map((tip, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 rounded-xl bg-amber-50/50 border border-amber-100"
          >
            <span className="text-lg flex-shrink-0 mt-0.5">{tip.icon}</span>
            <p className="text-sm text-slate-600 leading-relaxed">{tip.text}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
