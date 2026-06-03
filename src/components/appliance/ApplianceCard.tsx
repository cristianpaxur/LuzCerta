"use client";

import { useState } from "react";
import type { AppliancePreset } from "@/types/appliance";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { TimeSlider } from "@/components/ui/TimeSlider";
import { Plus, Check } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { useDictionary } from "@/contexts/DictionaryContext";

interface ApplianceCardProps {
  preset: AppliancePreset;
  onAdd: (
    preset: AppliancePreset,
    config: { quantity: number; hoursPerDay: number; daysPerMonth: number }
  ) => void;
}

function getIcon(iconName: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<any>>;
  const Icon = icons[iconName];
  return Icon || LucideIcons.Plug;
}

export function ApplianceCard({ preset, onAdd }: ApplianceCardProps) {
  const dict = useDictionary();
  const [isConfiguring, setIsConfiguring] = useState(false);
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [hoursPerDay, setHoursPerDay] = useState(preset.defaultHoursPerDay);
  const [daysPerMonth, setDaysPerMonth] = useState(preset.defaultDaysPerMonth);

  const Icon = getIcon(preset.icon);

  const presetData = dict.presets[preset.id as keyof typeof dict.presets];
  const name = presetData ? presetData.name : preset.name;
  const desc = presetData ? presetData.description : preset.friendlyDescription;
  const category = dict.categories[preset.category as keyof typeof dict.categories] || preset.category;

  const handleAdd = () => {
    onAdd({ ...preset, name }, { quantity, hoursPerDay, daysPerMonth });
    setAdded(true);
    setIsConfiguring(false);
    setTimeout(() => setAdded(false), 2000);
  };

  if (isConfiguring) {
    return (
      <Card className="p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
            <Icon size={20} className="text-emerald-600" />
          </div>
          <h3 className="font-semibold text-slate-800 text-sm">
            {name}
          </h3>
        </div>

        <div className="space-y-3">
          <Input
            label={dict.appliances.howMany}
            type="number"
            min={1}
            max={20}
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
          />
          <TimeSlider
            label={dict.appliances.howLong}
            value={hoursPerDay}
            onChange={setHoursPerDay}
            helpText={dict.appliances.avgHint}
          />
          <Input
            label={dict.appliances.howManyDays}
            type="number"
            min={1}
            max={31}
            value={daysPerMonth}
            onChange={(e) =>
              setDaysPerMonth(Math.max(1, Number(e.target.value)))
            }
            suffix={dict.appliances.days}
          />
        </div>

        <div className="flex gap-2 mt-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsConfiguring(false)}
            className="flex-1"
          >
            {dict.common.cancel}
          </Button>
          <Button size="sm" onClick={handleAdd} className="flex-1">
            <Plus size={16} />
            {dict.common.add}
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card hover className="p-5 flex flex-col h-full">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center flex-shrink-0">
          <Icon size={24} className="text-emerald-600" />
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-slate-800 text-sm leading-tight">
            {name}
          </h3>
          <span className="text-xs text-slate-400 mt-0.5 inline-block">
            {category}
          </span>
        </div>
      </div>

      <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">
        {desc}
      </p>

      <Button
        variant={added ? "secondary" : "primary"}
        size="sm"
        onClick={() => setIsConfiguring(true)}
        disabled={added}
        className="w-full"
      >
        {added ? (
          <>
            <Check size={16} />
            {dict.common.added}
          </>
        ) : (
          <>
            <Plus size={16} />
            {dict.common.add}
          </>
        )}
      </Button>
    </Card>
  );
}
