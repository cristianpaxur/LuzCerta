"use client";

import { ReactNode } from "react";
import { Button } from "./Button";
import { Home, Plus } from "lucide-react";
import { useDictionary } from "@/contexts/DictionaryContext";

interface EmptyStateProps {
  icon?: ReactNode;
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  const dict = useDictionary();

  const displayTitle = title || dict.empty.title;
  const displayDesc = description || dict.empty.description;
  const displayAction = actionLabel || dict.empty.cta;

  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center mb-6">
        {icon || <Home size={36} className="text-emerald-500" />}
      </div>

      <h3 className="text-xl font-bold text-slate-700 mb-2">{displayTitle}</h3>

      <p className="text-slate-500 text-sm max-w-xs leading-relaxed mb-8">
        {displayDesc}
      </p>

      {onAction && (
        <Button variant="primary" onClick={onAction}>
          <Plus size={18} />
          {displayAction}
        </Button>
      )}
    </div>
  );
}
