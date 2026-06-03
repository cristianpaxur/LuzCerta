"use client";

import { useRouter, useParams } from "next/navigation";
import { TariffInput } from "@/components/dashboard/TariffInput";
import { Button } from "@/components/ui/Button";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { DEFAULT_TARIFF_PER_KWH } from "@/types/energy";
import type { EnergySettings } from "@/types/energy";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useDictionary } from "@/contexts/DictionaryContext";

export default function ConfiguracaoPage() {
  const router = useRouter();
  const dict = useDictionary();
  const params = useParams();
  const lang = params.lang as string;

  const [settings, setSettings] = useLocalStorage<EnergySettings>(
    "luzcerta-settings",
    {
      tariffPerKwh: DEFAULT_TARIFF_PER_KWH,
      lastUpdated: new Date().toISOString(),
    }
  );

  const handleTariffChange = (value: number) => {
    setSettings({
      ...settings,
      tariffPerKwh: value,
      lastUpdated: new Date().toISOString(),
    });
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 transition-colors mb-4"
        >
          <ArrowLeft size={16} />
          {dict.config.backLabel}
        </Link>
        <h1 className="text-2xl font-bold text-slate-800 mb-2">
          {dict.config.title}
        </h1>
        <p className="text-slate-500 text-sm leading-relaxed">
          {dict.config.description}
        </p>
      </div>

      <TariffInput
        value={settings.tariffPerKwh}
        onChange={handleTariffChange}
      />

      <div className="mt-8 flex justify-end">
        <Button size="lg" onClick={() => router.push(`/${lang}/aparelhos`)}>
          {dict.config.continueLabel}
          <ArrowRight size={20} />
        </Button>
      </div>
    </div>
  );
}
