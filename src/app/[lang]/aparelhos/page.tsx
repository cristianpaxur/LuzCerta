"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { ApplianceCard } from "@/components/appliance/ApplianceCard";
import { ApplianceForm } from "@/components/appliance/ApplianceForm";
import { Button } from "@/components/ui/Button";
import { useAppliances } from "@/hooks/useAppliances";
import { appliancePresets, categories } from "@/data/appliance-presets";
import type { AppliancePreset } from "@/types/appliance";
import { ArrowLeft, ArrowRight, Plus, Search, LayoutList } from "lucide-react";
import Link from "next/link";
import { useDictionary } from "@/contexts/DictionaryContext";

export default function AparelhosPage() {
  const router = useRouter();
  const dict = useDictionary();
  const params = useParams();
  const lang = params.lang as string;

  const { appliances, addFromPreset, addManual } = useAppliances();
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [showManualForm, setShowManualForm] = useState(false);
  const [search, setSearch] = useState("");

  const filteredPresets = appliancePresets.filter((preset) => {
    // Translate category and name for search
    const translatedCategory = dict.categories[preset.category as keyof typeof dict.categories] || preset.category;
    const presetData = dict.presets[preset.id as keyof typeof dict.presets];
    const translatedName = presetData ? presetData.name : preset.name;

    const matchesCategory =
      selectedCategory === "Todos" || preset.category === selectedCategory;
      
    const matchesSearch =
      !search ||
      translatedName.toLowerCase().includes(search.toLowerCase()) ||
      translatedCategory.toLowerCase().includes(search.toLowerCase());
      
    return matchesCategory && matchesSearch;
  });

  const handleAddPreset = (
    preset: AppliancePreset,
    config: { quantity: number; hoursPerDay: number; daysPerMonth: number }
  ) => {
    addFromPreset(preset, config);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href={`/${lang}/configuracao`}
          className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 transition-colors mb-4"
        >
          <ArrowLeft size={16} />
          {dict.appliances.backLabel}
        </Link>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 mb-2">
              {dict.appliances.title}
            </h1>
            <p className="text-slate-500 text-sm">
              {dict.appliances.description}
            </p>
          </div>
          {appliances.length > 0 && (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => router.push(`/${lang}/minha-casa`)}
            >
              <LayoutList size={16} />
              {dict.appliances.myHouseBtn} ({appliances.length})
            </Button>
          )}
        </div>
      </div>

      {/* Search & Filters */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder={dict.appliances.search}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 transition-all"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setSelectedCategory("Todos")}
            className={`
              px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all
              ${
                selectedCategory === "Todos"
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }
            `}
          >
            {dict.appliances.all}
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`
                px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all
                ${
                  selectedCategory === cat
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }
              `}
            >
              {dict.categories[cat as keyof typeof dict.categories] || cat}
            </button>
          ))}
        </div>
      </div>

      {/* Manual Form */}
      {showManualForm ? (
        <div className="mb-8">
          <ApplianceForm
            onSubmit={(data) => {
              addManual(data);
              setShowManualForm(false);
            }}
            onCancel={() => setShowManualForm(false)}
          />
        </div>
      ) : (
        <div className="mb-6">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setShowManualForm(true)}
          >
            <Plus size={16} />
            {dict.appliances.addCustom}
          </Button>
        </div>
      )}

      {/* Appliance Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {filteredPresets.map((preset) => (
          <ApplianceCard
            key={preset.id}
            preset={preset}
            onAdd={handleAddPreset}
          />
        ))}
      </div>

      {filteredPresets.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          <p>{dict.appliances.noResults}</p>
        </div>
      )}

      {/* Navigation */}
      {appliances.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-100 p-4 z-30 md:static md:bg-transparent md:backdrop-blur-none md:border-0 md:p-0 md:mt-8">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <p className="text-sm text-slate-500">
              <strong>{appliances.length}</strong>{" "}
              {appliances.length === 1 ? dict.appliances.applianceCount_one : dict.appliances.applianceCount_other}
            </p>
            <Button onClick={() => router.push(`/${lang}/minha-casa`)}>
              {dict.appliances.viewMyHouse}
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
