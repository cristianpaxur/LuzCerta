# Internacionalização, README Premium e UX de Horas

> **ID:** 002
> **Status:** 🟢 Concluída
> **Prioridade:** 🟠 Alta
> **Criada em:** 2026-06-02
> **Última atualização:** 2026-06-02
> **Autor:** Agente AI

---

## 1. Resumo Executivo

Esta implementação adiciona três melhorias significativas ao LuzCerta: (A) suporte bilíngue PT-BR/EN usando o padrão de i18n nativo do Next.js com dicionários JSON e rota `[lang]`, (B) um README.md no padrão que recrutadores valorizam, e (C) substituição do input numérico de horas por um slider visual que exibe o tempo em formato amigável ("2 horas e 30 minutos").

## 2. Contexto e Motivação

### 2.1 Problema Atual

1. **Sem versão em inglês:** O app só funciona em português, limitando alcance internacional e demonstração de habilidade com i18n.
2. **README genérico:** O README atual é o padrão do `create-next-app`, não comunica o projeto como portfólio.
3. **Input de horas confuso:** O input numérico de `hoursPerDay` usa decimais (0.5, 1.5) que são pouco intuitivos para o público-alvo (ex: "0.5 horas" em vez de "30 minutos").

### 2.2 Impacto do Problema

- Perda de oportunidade de portfólio internacional.
- Recrutadores não entendem o valor do projeto pelo README.
- Usuários não técnicos ficam confusos ao inserir tempo de uso em decimais.

### 2.3 Soluções Consideradas

| Solução | Prós | Contras | Decisão |
|---------|------|---------|---------|
| i18n nativo Next.js (dicionários JSON + `[lang]`) | Leve, sem dependências extras, padrão oficial | Mais manual, sem pluralização automática | ✅ Escolhida |
| next-intl | Rico em features, pluralização, formatação | Dependência extra, mais complexo | ❌ Descartada (overkill para 2 idiomas) |
| Slider HTML range + display textual | Visual, intuitivo, mobile-friendly | Menos precisão em valores exatos | ✅ Escolhida |
| Time picker HTML | Familiar | Muito complexo, não intuitivo para duração | ❌ Descartada |

## 3. Especificação Técnica

### 3.1 Visão Geral da Arquitetura

**i18n:** Toda a estrutura de `app/` será movida para `app/[lang]/`, com um proxy (middleware) detectando o idioma do navegador e redirecionando. Dicionários JSON em `src/dictionaries/pt.json` e `src/dictionaries/en.json`. Componentes client recebem o dicionário via context.

**Slider:** Novo componente `TimeSlider` substituindo o `Input type=number` para horas. Usa `input[type=range]` com steps de 15 minutos e exibe o valor como "X hora(s) e Y minutos".

```
app/
├── [lang]/
│   ├── layout.tsx         ← recebe lang param, carrega dicionário
│   ├── page.tsx           ← Home
│   ├── configuracao/
│   ├── aparelhos/
│   ├── minha-casa/
│   └── resultado/
├── proxy.ts               ← detecta idioma, redireciona
src/
├── dictionaries/
│   ├── pt.json
│   ├── en.json
│   └── index.ts           ← getDictionary, hasLocale
├── contexts/
│   └── DictionaryContext.tsx  ← context para client components
├── components/ui/
│   └── TimeSlider.tsx      ← NOVO slider de tempo
```

### 3.2 Componentes Afetados

| Componente | Tipo | Ação | Descrição |
|-----------|------|------|-----------|
| `src/app/[lang]/layout.tsx` | Layout | Criar | Layout com lang param + dicionário |
| `src/app/[lang]/page.tsx` | Página | Mover | Home adaptada para i18n |
| `src/app/[lang]/configuracao/page.tsx` | Página | Mover | Config adaptada |
| `src/app/[lang]/aparelhos/page.tsx` | Página | Mover | Aparelhos adaptada |
| `src/app/[lang]/minha-casa/page.tsx` | Página | Mover | Minha Casa adaptada |
| `src/app/[lang]/resultado/page.tsx` | Página | Mover | Resultado adaptada |
| `src/app/proxy.ts` | Middleware | Criar | Detecção de idioma + redirect |
| `src/dictionaries/pt.json` | Dados | Criar | Todas as strings em PT-BR |
| `src/dictionaries/en.json` | Dados | Criar | Todas as strings em EN |
| `src/dictionaries/index.ts` | Utilitário | Criar | getDictionary + hasLocale |
| `src/contexts/DictionaryContext.tsx` | Context | Criar | Provider para client components |
| `src/components/ui/TimeSlider.tsx` | Componente | Criar | Slider de horas/minutos |
| `src/components/ui/Header.tsx` | Componente | Modificar | Adicionar seletor de idioma |
| `src/components/appliance/ApplianceCard.tsx` | Componente | Modificar | Usar TimeSlider + i18n |
| `src/components/appliance/ApplianceForm.tsx` | Componente | Modificar | Usar TimeSlider + i18n |
| `src/components/appliance/ApplianceList.tsx` | Componente | Modificar | Usar TimeSlider + i18n |
| `src/components/dashboard/*.tsx` | Componentes | Modificar | Usar i18n |
| `src/data/appliance-presets.ts` | Dados | Modificar | Nomes/descrições bilíngues |
| `README.md` | Documentação | Reescrever | README premium para recrutadores |

### 3.3 Interfaces e Contratos

#### Dicionário (tipo)

```typescript
type Dictionary = {
  common: {
    appName: string;
    start: string;
    cancel: string;
    save: string;
    add: string;
    remove: string;
    edit: string;
    back: string;
    continue: string;
    clearAll: string;
    // ...
  };
  home: { title: string; subtitle: string; description: string; cta: string; /* ... */ };
  config: { title: string; description: string; /* ... */ };
  appliances: { title: string; search: string; /* ... */ };
  myHouse: { title: string; empty: string; /* ... */ };
  results: { title: string; estimate: string; ranking: string; tips: string; /* ... */ };
  tips: Record<string, string>;
  presets: Record<string, { name: string; description: string }>;
};
```

#### TimeSlider props

```typescript
interface TimeSliderProps {
  label: string;
  value: number;         // horas decimais (0.25 = 15min)
  onChange: (hours: number) => void;
  min?: number;          // default 0.25 (15 min)
  max?: number;          // default 24
  step?: number;         // default 0.25 (15 min)
  helpText?: string;
}
```

### 3.4 Modelos de Dados

Sem alteração nos modelos de dados existentes. O `hoursPerDay` continua armazenado como `number` (decimal) internamente. Apenas a exibição muda.

### 3.5 Fluxo de Execução — i18n

1. Usuário acessa `/` → proxy.ts detecta `Accept-Language` do navegador
2. Se PT → redireciona para `/pt/` | Se EN → redireciona para `/en/`
3. Layout `[lang]` carrega dicionário correspondente
4. Dicionário é passado aos server components diretamente e aos client components via DictionaryContext
5. Usuário pode trocar idioma no Header → navega para `/{outro-idioma}/mesma-rota`

### 3.6 Tratamento de Erros

| Cenário | Tratamento |
|---------|-----------|
| Idioma não suportado | Redireciona para `/pt/` (padrão) |
| String faltando no dicionário | Usa chave como fallback |
| Slider em mobile com touch | Suporte nativo do input range |

## 4. Requisitos

### 4.1 Requisitos Funcionais

- **RF-016:** O app deve estar disponível em português e inglês.
- **RF-017:** O idioma deve ser detectado automaticamente pelo navegador.
- **RF-018:** O usuário deve poder trocar o idioma manualmente via Header.
- **RF-019:** A troca de idioma deve preservar a página atual.
- **RF-020:** O slider de tempo deve exibir horas e minutos em formato legível.
- **RF-021:** O slider deve ter steps de 15 minutos (0.25h).
- **RF-022:** O README deve seguir padrão de portfólio profissional.

### 4.2 Requisitos Não-Funcionais

- **RNF-009:** As traduções não devem impactar o bundle size (server-only dictionaries).
- **RNF-010:** O slider deve funcionar bem em mobile (touch-friendly).
- **RNF-011:** O README deve ser renderizado corretamente no GitHub.

### 4.3 Restrições e Limitações

- Apenas 2 idiomas: PT-BR e EN.
- Sem pluralização automática (os dicionários já incluem variações quando necessário).
- Os presets de eletrodomésticos mantêm os mesmos IDs, apenas nomes/descrições traduzidos.

## 5. Critérios de Aceitação

- [ ] **CA-011:** Ao acessar `/`, o app redireciona para `/pt/` ou `/en/` conforme idioma do navegador.
- [ ] **CA-012:** Ao clicar no seletor de idioma, a página muda para o idioma selecionado mantendo a rota.
- [ ] **CA-013:** Todas as strings da interface estão traduzidas em ambos os idiomas.
- [ ] **CA-014:** Os nomes e descrições dos presets aparecem no idioma correto.
- [ ] **CA-015:** O slider de tempo exibe "X hora(s) e Y minutos" / "X hour(s) and Y minutes".
- [ ] **CA-016:** O slider funciona em mobile com touch.
- [ ] **CA-017:** O README inclui: problema, solução, screenshots, stack, como rodar, e metodologia.

## 6. Plano de Testes

### 6.1 Testes de Aceitação

- Acesso direto a `/` → redirecionamento correto.
- Acesso direto a `/en/resultado` → página em inglês.
- Acesso direto a `/pt/aparelhos` → página em português.
- Troca de idioma no header → mantém rota, muda strings.
- Slider: arrastar de 0.25h a 24h, verificar label textual.

### 6.2 Casos de Borda

- Idioma do navegador é francês (não suportado) → fallback para PT.
- Acesso a `/xyz/aparelhos` → 404.
- Slider no valor 0.25 → "15 minutos" / "15 minutes".
- Slider no valor 1.5 → "1 hora e 30 minutos" / "1 hour and 30 minutes".
- Slider no valor 24 → "24 horas" / "24 hours".

## 7. Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Strings esquecidas na tradução | Média | Médio | Tipagem forte do dicionário, usar key como fallback |
| Quebra de layout com textos mais longos em inglês | Baixa | Baixo | Testar em ambos os idiomas |
| Slider pouco responsivo em mobile | Baixa | Médio | Usar input range nativo, aumentar área de toque |

## 8. Dependências

### 8.1 Dependências Internas

- Implementação 001 (MVP) — ✅ Concluída.

### 8.2 Dependências Externas

| Pacote | Versão | Propósito |
|--------|--------|-----------|
| @formatjs/intl-localematcher | latest | Detecção de idioma por Accept-Language |
| negotiator | latest | Parser de headers de negociação |
| @types/negotiator | latest | Tipos TS para negotiator |

## 9. Observações e Decisões de Design

1. **i18n nativo sem biblioteca:** O Next.js 16 oferece suporte robusto a i18n via `[lang]` segment. Usar dicionários JSON é mais leve que next-intl para apenas 2 idiomas.
2. **DictionaryContext para client components:** Como os componentes de formulário são client-side, o dicionário precisa ser passado via React Context do layout server → client boundary.
3. **Presets bilíngues via dicionário:** Em vez de duplicar o array de presets, as traduções ficam no dicionário JSON sob a chave `presets.{id}.name` e `presets.{id}.description`.
4. **Slider com steps de 15 min:** Balanceia precisão e usabilidade. 15 minutos é granular o suficiente para uso doméstico.
5. **README em português com seção bilíngue:** O README principal é em PT-BR (público-alvo brasileiro), com badge/link para versão EN do app.

---

> **⚠️ NOTA:** Este documento é a fonte de verdade para esta implementação.
> Qualquer alteração no escopo deve ser refletida aqui ANTES de ser implementada.
