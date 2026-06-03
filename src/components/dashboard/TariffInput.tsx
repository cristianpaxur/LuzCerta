"use client";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { RotateCcw } from "lucide-react";
import { DEFAULT_TARIFF_PER_KWH } from "@/types/energy";
import { useDictionary } from "@/contexts/DictionaryContext";
import { useParams } from "next/navigation";

interface TariffInputProps {
  value: number;
  onChange: (value: number) => void;
}

export function TariffInput({ value, onChange }: TariffInputProps) {
  const dict = useDictionary();
  const params = useParams();
  const lang = params.lang as string;

  // Format default tariff according to locale
  const defaultFormatted = new Intl.NumberFormat(lang === "en" ? "en-US" : "pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(DEFAULT_TARIFF_PER_KWH);

  return (
    <Card className="p-6">
      <h3 className="text-lg font-bold text-slate-800 mb-2">
        {dict.config.tariffTitle}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-6">
        {dict.config.tariffDescription}{" "}
        <strong>{defaultFormatted}</strong>{" "}
        {dict.config.tariffPerKwh}
      </p>

      <div className="flex items-end gap-3">
        <div className="flex-1">
          <Input
            label={dict.config.tariffLabel}
            type="number"
            min={0.01}
            step={0.01}
            value={value}
            onChange={(e) => {
              const v = Number(e.target.value);
              if (v > 0) onChange(v);
            }}
            suffix={dict.config.tariffSuffix}
            helpText={dict.config.tariffHelp}
          />
        </div>
        {value !== DEFAULT_TARIFF_PER_KWH && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onChange(DEFAULT_TARIFF_PER_KWH)}
            className="mb-5"
            title="Reset"
          >
            <RotateCcw size={16} />
          </Button>
        )}
      </div>
    </Card>
  );
}
