import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/dictionaries";
import { DictionaryProvider } from "@/contexts/DictionaryContext";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

export async function generateStaticParams() {
  return [{ lang: "pt" }, { lang: "en" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dictionary = await getDictionary(lang);

  return (
    <div lang={lang} className="min-h-screen flex flex-col">
      <DictionaryProvider dictionary={dictionary}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </DictionaryProvider>
    </div>
  );
}
