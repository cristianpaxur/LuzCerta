# Tarefas: Mother Friendly Energy Calculator MVP

> **Implementação:** 001 - Mother Friendly Energy Calculator MVP
> **Spec:** [spec.md](./spec.md)
> **Progresso:** 28/28 tarefas concluídas (100%)
> **Última atualização:** 2026-06-02

---

## Legenda

- `[ ]` — Pendente
- `[x]` — Concluída
- `[!]` — Bloqueada (ver observação)
- `[-]` — Cancelada

---

## Tarefas

### Fase 1: Setup e Infraestrutura

- [x] **T-001:** Inicializar projeto Next.js com TypeScript e Tailwind CSS
- [x] **T-002:** Criar estrutura de diretórios do projeto
- [x] **T-003:** Definir tipos TypeScript
- [x] **T-004:** Criar dados de eletrodomésticos pré-definidos

### Fase 2: Lógica de Negócio

- [x] **T-005:** Criar funções de cálculo de energia
- [x] **T-006:** Criar utilitário de formatação de moeda
- [x] **T-007:** Criar hook useLocalStorage
- [x] **T-008:** Criar hook useAppliances
- [x] **T-009:** Criar hook useEnergyCalculator

### Fase 3: Componentes de UI Base

- [x] **T-010:** Criar componente Button
- [x] **T-011:** Criar componente Card
- [x] **T-012:** Criar componente Input
- [x] **T-013:** Criar componente Modal (ConfirmDialog)
- [x] **T-014:** Criar componente EmptyState
- [x] **T-015:** Criar componentes Header e Footer

### Fase 4: Componentes de Domínio

- [x] **T-016:** Criar componente ApplianceCard
- [x] **T-017:** Criar componente ApplianceForm
- [x] **T-018:** Criar componente ApplianceList
- [x] **T-019:** Criar componente TariffInput
- [x] **T-020:** Criar componente EnergySummary
- [x] **T-021:** Criar componente ConsumptionRanking
- [x] **T-022:** Criar componente SavingTips

### Fase 5: Montagem das Páginas

- [x] **T-023:** Criar página Home (`/`)
- [x] **T-024:** Criar página Configuração (`/configuracao`)
- [x] **T-025:** Criar página Aparelhos (`/aparelhos`)
- [x] **T-026:** Criar página Minha Casa (`/minha-casa`)
- [x] **T-027:** Criar página Resultado (`/resultado`)

### Fase 6: Layout Global e Polimento

- [x] **T-028:** Configurar layout global e design system

---

## Registro de Progresso

| Tarefa | Status | Data de Conclusão | Observações |
|--------|--------|-------------------|-------------|
| T-001  | ✅ Concluída | 2026-06-02 | Next.js 16.2.7 + TS strict + Tailwind 4 |
| T-002  | ✅ Concluída | 2026-06-02 | Criada junto com os arquivos |
| T-003  | ✅ Concluída | 2026-06-02 | appliance.ts + energy.ts |
| T-004  | ✅ Concluída | 2026-06-02 | 15 eletrodomésticos com dados reais |
| T-005  | ✅ Concluída | 2026-06-02 | Funções puras testáveis |
| T-006  | ✅ Concluída | 2026-06-02 | BRL + kWh + % formatting |
| T-007  | ✅ Concluída | 2026-06-02 | SSR-safe com error handling |
| T-008  | ✅ Concluída | 2026-06-02 | CRUD completo com persistência |
| T-009  | ✅ Concluída | 2026-06-02 | Cálculos reativos com useMemo |
| T-010  | ✅ Concluída | 2026-06-02 | 4 variantes + 3 tamanhos + loading |
| T-011  | ✅ Concluída | 2026-06-02 | Glassmorphism + hover + composable |
| T-012  | ✅ Concluída | 2026-06-02 | Label + help + error + suffix |
| T-013  | ✅ Concluída | 2026-06-02 | HTML dialog nativo + focus trap |
| T-014  | ✅ Concluída | 2026-06-02 | Ícone + título + CTA |
| T-015  | ✅ Concluída | 2026-06-02 | Sticky header + mobile menu + footer |
| T-016  | ✅ Concluída | 2026-06-02 | Preview + config states |
| T-017  | ✅ Concluída | 2026-06-02 | Validação + textos amigáveis |
| T-018  | ✅ Concluída | 2026-06-02 | Inline edit + remove confirm |
| T-019  | ✅ Concluída | 2026-06-02 | Explicação + valor padrão |
| T-020  | ✅ Concluída | 2026-06-02 | Gradient card + stats + alert |
| T-021  | ✅ Concluída | 2026-06-02 | Barras + badges + porcentagens |
| T-022  | ✅ Concluída | 2026-06-02 | 8 dicas contextuais |
| T-023  | ✅ Concluída | 2026-06-02 | Hero + features + gradient |
| T-024  | ✅ Concluída | 2026-06-02 | TariffInput + navegação |
| T-025  | ✅ Concluída | 2026-06-02 | Grid + busca + filtros + sticky bar |
| T-026  | ✅ Concluída | 2026-06-02 | Lista + resumo + limpar tudo |
| T-027  | ✅ Concluída | 2026-06-02 | Dashboard completo + disclaimer |
| T-028  | ✅ Concluída | 2026-06-02 | Inter font + SEO + animações + CSS |

---

> **📌 NOTA:** Todas as tarefas foram concluídas. Build passou sem erros.
> Teste end-to-end validou o fluxo completo com sucesso.
