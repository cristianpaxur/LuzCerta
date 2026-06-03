"use client";

import { useRouter, useParams } from "next/navigation";
import { useAppliances } from "@/hooks/useAppliances";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { EnergySummary } from "@/components/dashboard/EnergySummary";
import { ConsumptionRanking } from "@/components/dashboard/ConsumptionRanking";
import { SavingTips } from "@/components/dashboard/SavingTips";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import {
  calculateTotalKwh,
  calculateTotalCost,
  getConsumptionRanking,
} from "@/lib/energy-calculator";
import { DEFAULT_TARIFF_PER_KWH } from "@/types/energy";
import type { EnergySettings } from "@/types/energy";
import { ArrowLeft, Pencil, Plus } from "lucide-react";
import Link from "next/link";
import { useDictionary } from "@/contexts/DictionaryContext";

export default function ResultadoPage() {
  const router = useRouter();
  const dict = useDictionary();
  const params = useParams();
  const lang = params.lang as string;

  const { appliances } = useAppliances();
  const [settings] = useLocalStorage<EnergySettings>("luzcerta-settings", {
    tariffPerKwh: DEFAULT_TARIFF_PER_KWH,
    lastUpdated: new Date().toISOString(),
  });

  if (appliances.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <EmptyState
          title={dict.results.emptyTitle}
          description={dict.results.emptyDescription}
          actionLabel={dict.results.addAppliances}
          onAction={() => router.push(`/${lang}/aparelhos`)}
        />
      </div>
    );
  }

  const totalKwh = calculateTotalKwh(appliances);
  const totalCost = calculateTotalCost(appliances, settings.tariffPerKwh);
  const ranking = getConsumptionRanking(appliances, settings.tariffPerKwh);
  const topConsumer = ranking.length > 0 ? ranking[0] : undefined;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <Link
            href={`/${lang}/minha-casa`}
            className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 transition-colors mb-4"
          >
            <ArrowLeft size={16} />
            {dict.results.backLabel}
          </Link>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">
            {dict.results.title}
          </h1>
          <p className="text-slate-500 text-sm">
            {dict.results.description}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => router.push(`/${lang}/minha-casa`)}
          >
            <Pencil size={16} />
            {dict.results.editAppliances}
          </Button>
          <Button size="sm" onClick={() => router.push(`/${lang}/aparelhos`)}>
            <Plus size={16} />
            {dict.results.addMore}
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Main Summary */}
        <EnergySummary
          totalCost={totalCost}
          totalKwh={totalKwh}
          totalAppliances={appliances.length}
          topConsumer={topConsumer}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <ConsumptionRanking items={ranking} />
          </div>

          <div className="md:col-span-2">
            <SavingTips appliances={appliances} />
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-slate-400 mt-12 max-w-lg mx-auto leading-relaxed">
        {dict.results.disclaimer}
      </p>
    </div>
  );
}
