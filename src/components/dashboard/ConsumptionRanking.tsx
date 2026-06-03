"use client";

import { Card } from "@/components/ui/Card";
import { formatCurrency, formatPercentage } from "@/lib/format-currency";
import type { CalculationResult } from "@/types/energy";
import * as LucideIcons from "lucide-react";
import { Trophy } from "lucide-react";
import { useDictionary } from "@/contexts/DictionaryContext";
import { useParams } from "next/navigation";

interface ConsumptionRankingProps {
  items: CalculationResult[];
}

function getIcon(iconName?: string) {
  if (!iconName) return LucideIcons.Plug;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<any>>;
  return icons[iconName] || LucideIcons.Plug;
}

export function ConsumptionRanking({ items }: ConsumptionRankingProps) {
  const dict = useDictionary();
  const params = useParams();
  const lang = params.lang as string;

  if (items.length === 0) return null;

  const maxCost = items[0]?.monthlyCost || 1;

  const impactColors = {
    low: {
      bg: "bg-emerald-100",
      bar: "bg-emerald-400",
      text: "text-emerald-700",
      label: dict.results.impactLow,
    },
    medium: {
      bg: "bg-amber-100",
      bar: "bg-amber-400",
      text: "text-amber-700",
      label: dict.results.impactMedium,
    },
    high: {
      bg: "bg-red-100",
      bar: "bg-red-400",
      text: "text-red-700",
      label: dict.results.impactHigh,
    },
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Trophy size={20} className="text-amber-500" />
        <h3 className="text-lg font-bold text-slate-800">
          {dict.results.rankingTitle}
        </h3>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => {
          const Icon = getIcon(item.applianceIcon);
          const impact = impactColors[item.impactLevel];
          const barWidth = (item.monthlyCost / maxCost) * 100;

          return (
            <div key={item.applianceId} className="group">
              <div className="flex items-center gap-3 mb-1.5">
                {/* Position */}
                <span
                  className={`
                    w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0
                    ${index === 0 ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-500"}
                  `}
                >
                  {index + 1}º
                </span>

                {/* Icon */}
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-slate-600" />
                </div>

                {/* Name & Cost */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-slate-700 truncate">
                      {item.applianceName}
                    </span>
                    <span className="text-sm font-bold text-slate-800 flex-shrink-0">
                      {formatCurrency(item.monthlyCost, lang)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress bar & info */}
              <div className="ml-10 flex items-center gap-3">
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${impact.bar} transition-all duration-500 ease-out`}
                    style={{ width: `${barWidth}%` }}
                  />
                </div>
                <span className="text-xs text-slate-500 w-12 text-right flex-shrink-0">
                  {formatPercentage(item.percentageOfTotal, lang)}
                </span>
                <span
                  className={`text-xs font-medium px-2 py-0.5 rounded-full ${impact.bg} ${impact.text} flex-shrink-0`}
                >
                  {impact.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
