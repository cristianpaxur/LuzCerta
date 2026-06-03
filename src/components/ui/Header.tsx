"use client";

import Link from "next/link";
import { usePathname, useParams, useRouter } from "next/navigation";
import { Zap, Home, Settings, PlusCircle, LayoutList, BarChart3, Menu, X, Languages } from "lucide-react";
import { useState } from "react";
import { useDictionary } from "@/contexts/DictionaryContext";

export function Header() {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const dict = useDictionary();
  const lang = params.lang as string;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: dict.nav.home, icon: Home },
    { href: "/configuracao", label: dict.nav.tariff, icon: Settings },
    { href: "/aparelhos", label: dict.nav.appliances, icon: PlusCircle },
    { href: "/minha-casa", label: dict.nav.myHouse, icon: LayoutList },
    { href: "/resultado", label: dict.nav.results, icon: BarChart3 },
  ];

  const switchLanguage = () => {
    const newLang = lang === "pt" ? "en" : "pt";
    // Current pathname could be /pt/aparelhos. Replace /pt with /en.
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow">
            <Zap size={20} className="text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            {dict.common.appName}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => {
              const fullPath = `/${lang}${link.href === "/" ? "" : link.href}`;
              const isActive = pathname === fullPath;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={fullPath}
                  className={`
                    flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-emerald-50 text-emerald-700"
                        : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                    }
                  `}
                >
                  <Icon size={16} />
                  {link.label}
                </Link>
              );
            })}
          </nav>
          
          <button
            onClick={switchLanguage}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full hover:bg-slate-200 transition-colors"
            title={lang === "pt" ? "Switch to English" : "Mudar para Português"}
          >
            <Languages size={14} />
            {lang === "pt" ? "EN" : "PT"}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={switchLanguage}
            className="p-2 rounded-lg text-slate-500 bg-slate-50 hover:bg-slate-100 transition-colors"
          >
            <span className="text-xs font-bold">{lang === "pt" ? "EN" : "PT"}</span>
          </button>
          
          <button
            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? dict.common.close : "Menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-lg border-b border-slate-100 px-4 pb-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const fullPath = `/${lang}${link.href === "/" ? "" : link.href}`;
            const isActive = pathname === fullPath;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={fullPath}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                  }
                `}
              >
                <Icon size={18} />
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
