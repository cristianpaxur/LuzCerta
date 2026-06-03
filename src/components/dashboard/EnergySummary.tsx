"use client";

import { Card } from "@/components/ui/Card";
import { formatCurrency, formatKwh } from "@/lib/format-currency";
import type { CalculationResult } from "@/types/energy";
import { Zap, DollarSign, LayoutList, AlertTriangle } from "lucide-react";
import { useDictionary } from "@/contexts/DictionaryContext";
import { useParams } from "next/navigation";

interface EnergySummaryProps {
  totalCost: number;
  totalKwh: number;
  totalAppliances: number;
  topConsumer?: CalculationResult;
}

export function EnergySummary({
  totalCost,
  totalKwh,
  totalAppliances,
  topConsumer,
}: EnergySummaryProps) {
  const dict = useDictionary();
  const params = useParams();
  const lang = params.lang as string;

  return (
    <div className="space-y-4">
      {/* Main cost card */}
      <Card className="p-6 bg-gradient-to-br from-emerald-500 to-teal-600 border-none !text-white">
        <div className="flex items-center gap-2 mb-1">
          <DollarSign size={18} className="text-emerald-100" />
          <span className="text-sm font-medium text-emerald-100">
            {dict.results.estimate}
          </span>
        </div>
        <p className="text-4xl font-extrabold tracking-tight">
          {formatCurrency(totalCost, lang)}
        </p>
        <p className="text-sm text-emerald-100 mt-1">
          {dict.results.estimateDescription}
        </p>
      </Card>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-1">
            <Zap size={16} className="text-amber-500" />
            <span className="text-xs font-medium text-slate-500">
              {dict.results.totalConsumption}
            </span>
          </div>
          <p className="text-xl font-bold text-slate-800">
            {formatKwh(totalKwh, lang)}
          </p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2 mb-1">
            <LayoutList size={16} className="text-blue-500" />
            <span className="text-xs font-medium text-slate-500">
              {dict.results.appliances}
            </span>
          </div>
          <p className="text-xl font-bold text-slate-800">
            {totalAppliances}
          </p>
        </Card>
      </div>

      {/* Top consumer alert */}
      {topConsumer && topConsumer.impactLevel === "high" && (
        <Card className="p-4 bg-amber-50 border-amber-200">
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} className="text-amber-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-amber-800">
                {topConsumer.applianceName} {dict.results.topConsumerAlert}
              </p>
              <p className="text-xs text-amber-600 mt-1">
                {dict.results.responsibleFor}{" "}
                {topConsumer.percentageOfTotal.toFixed(0)}% {dict.results.topConsumerDesc}{" "}
                {formatCurrency(topConsumer.monthlyCost, lang)}.
              </p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
