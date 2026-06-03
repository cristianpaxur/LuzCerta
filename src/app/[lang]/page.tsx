"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Zap, ArrowRight, ShieldCheck, Smartphone, Lightbulb } from "lucide-react";
import { useDictionary } from "@/contexts/DictionaryContext";
import { useParams } from "next/navigation";

export default function HomePage() {
  const dict = useDictionary();
  const params = useParams();
  const lang = params.lang as string;

  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center px-4 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-lg mx-auto">
        {/* Animated Icon */}
        <div className="relative mb-8 inline-block">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-2xl shadow-emerald-500/30 animate-bounce-slow">
            <Zap size={48} className="text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center animate-pulse">
            <span className="text-xs">💡</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            {dict.home.title}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-slate-600 font-medium mb-3">
          {dict.home.subtitle}
        </p>

        {/* Description */}
        <p className="text-slate-500 leading-relaxed mb-8 text-base">
          {dict.home.description}
        </p>

        {/* CTA Button */}
        <Link href={`/${lang}/configuracao`}>
          <Button size="lg" className="text-base">
            {dict.home.cta}
            <ArrowRight size={20} />
          </Button>
        </Link>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto w-full">
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
            <Smartphone size={20} className="text-emerald-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-700">
              {dict.home.feature1Title}
            </p>
            <p className="text-xs text-slate-500">
              {dict.home.feature1Desc}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
            <ShieldCheck size={20} className="text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-700">
              {dict.home.feature2Title}
            </p>
            <p className="text-xs text-slate-500">
              {dict.home.feature2Desc}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
            <Lightbulb size={20} className="text-amber-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-700">
              {dict.home.feature3Title}
            </p>
            <p className="text-xs text-slate-500">
              {dict.home.feature3Desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
