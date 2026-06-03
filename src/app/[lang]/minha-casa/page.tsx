"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useAppliances } from "@/hooks/useAppliances";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ApplianceList } from "@/components/appliance/ApplianceList";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Modal } from "@/components/ui/Modal";
import { formatCurrency } from "@/lib/format-currency";
import { calculateTotalCost } from "@/lib/energy-calculator";
import { DEFAULT_TARIFF_PER_KWH } from "@/types/energy";
import type { EnergySettings } from "@/types/energy";
import { ArrowLeft, ArrowRight, Plus, AlertTriangle, Calculator } from "lucide-react";
import Link from "next/link";
import { useDictionary } from "@/contexts/DictionaryContext";

export default function MinhaCasaPage() {
  const router = useRouter();
  const dict = useDictionary();
  const params = useParams();
  const lang = params.lang as string;

  const { appliances, updateAppliance, removeAppliance, clearAll } =
    useAppliances();
  const [settings] = useLocalStorage<EnergySettings>("luzcerta-settings", {
    tariffPerKwh: DEFAULT_TARIFF_PER_KWH,
    lastUpdated: new Date().toISOString(),
  });

  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const totalCost = calculateTotalCost(appliances, settings.tariffPerKwh);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href={`/${lang}/aparelhos`}
          className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 transition-colors mb-4"
        >
          <ArrowLeft size={16} />
          {dict.myHouse.backLabel}
        </Link>
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 mb-2">
              {dict.myHouse.title}
            </h1>
            <p className="text-slate-500 text-sm">
              {appliances.length}{" "}
              {appliances.length === 1 ? dict.myHouse.applianceCount_one : dict.myHouse.applianceCount_other}
            </p>
          </div>
          {appliances.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowClearConfirm(true)}
              className="text-red-500 hover:text-red-600 hover:bg-red-50"
            >
              {dict.common.clearAll}
            </Button>
          )}
        </div>
      </div>

      {appliances.length === 0 ? (
        <EmptyState
          onAction={() => router.push(`/${lang}/aparelhos`)}
        />
      ) : (
        <>
          {/* Summary Card */}
          <Card className="p-6 mb-8 bg-gradient-to-br from-emerald-500 to-teal-600 border-none !text-white">
            <div className="flex items-center gap-3 mb-2">
              <Calculator size={20} className="text-emerald-100" />
              <h2 className="text-emerald-100 font-medium">
                {dict.myHouse.estimate}
              </h2>
            </div>
            <div className="flex items-end justify-between">
              <p className="text-4xl font-extrabold tracking-tight">
                {formatCurrency(totalCost, lang)}
                <span className="text-lg font-medium text-emerald-200 ml-1">
                  {dict.common.perMonth}
                </span>
              </p>
            </div>
          </Card>

          {/* List */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-slate-800 mb-4">
              {dict.myHouse.consumption}
            </h3>
            <ApplianceList
              appliances={appliances}
              tariffPerKwh={settings.tariffPerKwh}
              onUpdate={updateAppliance}
              onRemove={removeAppliance}
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => router.push(`/${lang}/aparelhos`)}
              className="flex-1"
            >
              <Plus size={20} />
              {dict.myHouse.addMore}
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={() => router.push(`/${lang}/resultado`)}
              className="flex-1"
            >
              {dict.myHouse.viewResults}
              <ArrowRight size={20} />
            </Button>
          </div>
        </>
      )}

      {/* Clear Confirmation Modal */}
      <Modal
        isOpen={showClearConfirm}
        onClose={() => setShowClearConfirm(false)}
        onConfirm={() => {
          clearAll();
          setShowClearConfirm(false);
          router.push(`/${lang}/aparelhos`);
        }}
        title={dict.myHouse.clearTitle}
        confirmLabel={dict.myHouse.clearBtn}
        variant="danger"
      >
        <div className="space-y-3">
          <p>{dict.myHouse.clearConfirm}</p>
          <div className="flex items-start gap-2 p-3 bg-red-50 text-red-700 rounded-lg text-xs">
            <AlertTriangle size={16} className="flex-shrink-0 mt-0.5" />
            <p>
              {dict.myHouse.clearWarning} <strong>{appliances.length}</strong>{" "}
              {dict.myHouse.clearCount}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
