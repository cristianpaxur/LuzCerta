"use client";

import { Zap } from "lucide-react";
import { useDictionary } from "@/contexts/DictionaryContext";

export function Footer() {
  const dict = useDictionary();

  return (
    <footer className="mt-auto border-t border-slate-100 bg-white/60 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <Zap size={16} />
            <span className="text-sm font-medium">{dict.common.appName}</span>
          </div>

          <p className="text-xs text-slate-400 text-center max-w-md leading-relaxed">
            {dict.footer.disclaimer.split(" estimativas ").map((part, i, arr) => 
              i === 0 && arr.length > 1 ? (
                <span key={i}>{part} <strong>estimativas</strong> </span>
              ) : i === 0 && dict.footer.disclaimer.includes(" estimates ") ? (
                <span key={i}>{part.replace("estimates", "")} <strong>estimates</strong> </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </p>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
