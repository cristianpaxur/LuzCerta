"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { TimeSlider } from "@/components/ui/TimeSlider";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Plus, X } from "lucide-react";
import { useDictionary } from "@/contexts/DictionaryContext";

interface ApplianceFormProps {
  onSubmit: (data: {
    name: string;
    watts: number;
    quantity: number;
    hoursPerDay: number;
    daysPerMonth: number;
  }) => void;
  onCancel: () => void;
}

export function ApplianceForm({ onSubmit, onCancel }: ApplianceFormProps) {
  const dict = useDictionary();
  const [name, setName] = useState("");
  const [watts, setWatts] = useState<number | "">("");
  const [quantity, setQuantity] = useState(1);
  const [hoursPerDay, setHoursPerDay] = useState(1);
  const [daysPerMonth, setDaysPerMonth] = useState(30);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = dict.validation.nameRequired;
    }
    if (!watts || watts <= 0) {
      newErrors.watts = dict.validation.wattsRequired;
    }
    if (quantity <= 0) {
      newErrors.quantity = dict.validation.quantityRequired;
    }
    if (hoursPerDay <= 0 || hoursPerDay > 24) {
      newErrors.hoursPerDay = dict.validation.hoursInvalid;
    }
    if (daysPerMonth <= 0 || daysPerMonth > 31) {
      newErrors.daysPerMonth = dict.validation.daysInvalid;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    onSubmit({
      name: name.trim(),
      watts: Number(watts),
      quantity,
      hoursPerDay: Number(hoursPerDay),
      daysPerMonth,
    });
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-slate-800">
          {dict.appliances.addCustomTitle}
        </h3>
        <button
          onClick={onCancel}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label={dict.common.close}
        >
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label={dict.appliances.applianceName}
          placeholder={dict.appliances.applianceNamePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />

        <Input
          label={dict.appliances.watts}
          type="number"
          placeholder={dict.appliances.wattsPlaceholder}
          min={1}
          value={watts}
          onChange={(e) => setWatts(e.target.value ? Number(e.target.value) : "")}
          suffix="W"
          helpText={dict.appliances.wattsHelp}
          error={errors.watts}
        />

        <Input
          label={dict.appliances.howMany}
          type="number"
          min={1}
          max={20}
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
          error={errors.quantity}
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
          onChange={(e) => setDaysPerMonth(Math.max(1, Number(e.target.value)))}
          suffix={dict.appliances.days}
          error={errors.daysPerMonth}
        />

        <div className="flex gap-3 pt-2">
          <Button
            variant="ghost"
            size="md"
            type="button"
            onClick={onCancel}
            className="flex-1"
          >
            {dict.common.cancel}
          </Button>
          <Button variant="primary" size="md" type="submit" className="flex-1">
            <Plus size={18} />
            {dict.common.add}
          </Button>
        </div>
      </form>
    </Card>
  );
}
