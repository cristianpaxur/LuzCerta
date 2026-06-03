export function formatCurrency(value: number, locale: string = "pt-BR"): string {
  // Always use BRL currency, but format according to the given locale
  return new Intl.NumberFormat(locale === "en" ? "en-US" : "pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function formatKwh(value: number, locale: string = "pt-BR"): string {
  const formatted = new Intl.NumberFormat(locale === "en" ? "en-US" : "pt-BR", {
    maximumFractionDigits: 1,
  }).format(value);
  return `${formatted} kWh`;
}

export function formatPercentage(value: number, locale: string = "pt-BR"): string {
  const formatted = new Intl.NumberFormat(locale === "en" ? "en-US" : "pt-BR", {
    maximumFractionDigits: 1,
  }).format(value);
  return `${formatted}%`;
}
