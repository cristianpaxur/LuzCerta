"use client";

import { useState } from "react";
import type { UserAppliance } from "@/types/appliance";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { TimeSlider } from "@/components/ui/TimeSlider";
import { Modal } from "@/components/ui/Modal";
import { formatCurrency } from "@/lib/format-currency";
import { calculateMonthlyKwh, calculateMonthlyCost } from "@/lib/energy-calculator";
import { Pencil, Trash2, Check, X } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { useDictionary } from "@/contexts/DictionaryContext";
import { useParams } from "next/navigation";

interface ApplianceListProps {
  appliances: UserAppliance[];
  tariffPerKwh: number;
  onUpdate: (id: string, updates: Partial<Omit<UserAppliance, "id">>) => void;
  onRemove: (id: string) => void;
}

function getIcon(iconName?: string) {
  if (!iconName) return LucideIcons.Plug;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<any>>;
  return icons[iconName] || LucideIcons.Plug;
}

export function ApplianceList({
  appliances,
  tariffPerKwh,
  onUpdate,
  onRemove,
}: ApplianceListProps) {
  const dict = useDictionary();
  const params = useParams();
  const lang = params.lang as string;
  const [editingId, setEditingId] = useState<string | null>(null);
  const [removeConfirm, setRemoveConfirm] = useState<string | null>(null);
  const [editValues, setEditValues] = useState({
    quantity: 1,
    hoursPerDay: 1,
    daysPerMonth: 30,
    watts: 100,
  });

  const startEdit = (appliance: UserAppliance) => {
    setEditingId(appliance.id);
    setEditValues({
      quantity: appliance.quantity,
      hoursPerDay: appliance.hoursPerDay,
      daysPerMonth: appliance.daysPerMonth,
      watts: appliance.watts,
    });
  };

  const saveEdit = (id: string) => {
    onUpdate(id, editValues);
    setEditingId(null);
  };

  const applianceToRemove = appliances.find((a) => a.id === removeConfirm);

  return (
    <>
      <div className="space-y-3">
        {appliances.map((appliance) => {
          const Icon = getIcon(appliance.icon);
          const monthlyKwh = calculateMonthlyKwh(
            appliance.watts,
            appliance.hoursPerDay,
            appliance.daysPerMonth,
            appliance.quantity
          );
          const monthlyCost = calculateMonthlyCost(monthlyKwh, tariffPerKwh);
          const isEditing = editingId === appliance.id;

          return (
            <Card key={appliance.id} className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={20} className="text-emerald-600" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-semibold text-slate-800 text-sm truncate">
                      {appliance.name}
                    </h4>
                    <span className="text-sm font-bold text-emerald-600 flex-shrink-0">
                      {formatCurrency(monthlyCost, lang)}{dict.common.perMonth}
                    </span>
                  </div>

                  {!isEditing ? (
                    <>
                      <p className="text-xs text-slate-500 mt-1">
                        {appliance.quantity > 1
                          ? `${appliance.quantity} ${dict.common.units} · `
                          : ""}
                        {appliance.hoursPerDay}h/dia ·{" "}
                        {appliance.daysPerMonth} {dict.common.daysMonth} ·{" "}
                        {appliance.watts}W
                      </p>

                      <div className="flex gap-1 mt-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => startEdit(appliance)}
                          className="!px-2 !py-1"
                        >
                          <Pencil size={14} />
                          <span className="text-xs">{dict.common.edit}</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setRemoveConfirm(appliance.id)}
                          className="!px-2 !py-1 !text-red-500 hover:!bg-red-50"
                        >
                          <Trash2 size={14} />
                          <span className="text-xs">{dict.common.remove}</span>
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="mt-3 space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <Input
                          label={dict.myHouse.quantity}
                          type="number"
                          min={1}
                          value={editValues.quantity}
                          onChange={(e) =>
                            setEditValues((v) => ({
                              ...v,
                              quantity: Math.max(1, Number(e.target.value)),
                            }))
                          }
                        />
                        <Input
                          label={dict.myHouse.wattsLabel}
                          type="number"
                          min={1}
                          value={editValues.watts}
                          onChange={(e) =>
                            setEditValues((v) => ({
                              ...v,
                              watts: Math.max(1, Number(e.target.value)),
                            }))
                          }
                          suffix="W"
                        />
                      </div>
                      <div className="space-y-3">
                        <TimeSlider
                          label={dict.myHouse.hoursPerDay}
                          value={editValues.hoursPerDay}
                          onChange={(v) =>
                            setEditValues((prev) => ({
                              ...prev,
                              hoursPerDay: v,
                            }))
                          }
                        />
                        <Input
                          label={dict.myHouse.daysLabel}
                          type="number"
                          min={1}
                          max={31}
                          value={editValues.daysPerMonth}
                          onChange={(e) =>
                            setEditValues((v) => ({
                              ...v,
                              daysPerMonth: Math.max(
                                1,
                                Number(e.target.value)
                              ),
                            }))
                          }
                          suffix={dict.appliances.days}
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setEditingId(null)}
                          className="flex-1"
                        >
                          <X size={14} />
                          {dict.common.cancel}
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => saveEdit(appliance.id)}
                          className="flex-1"
                        >
                          <Check size={14} />
                          {dict.common.save}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Modal
        isOpen={removeConfirm !== null}
        onClose={() => setRemoveConfirm(null)}
        onConfirm={() => {
          if (removeConfirm) {
            onRemove(removeConfirm);
            setRemoveConfirm(null);
          }
        }}
        title={dict.myHouse.removeTitle}
        confirmLabel={dict.common.remove}
        variant="danger"
      >
        {dict.myHouse.removeConfirm}{" "}
        <strong>{applianceToRemove?.name}</strong> {dict.myHouse.removeFromList}
      </Modal>
    </>
  );
}
