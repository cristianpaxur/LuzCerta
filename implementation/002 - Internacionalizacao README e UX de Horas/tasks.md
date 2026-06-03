# Tarefas: Internacionalização, README Premium e UX de Horas

> **Implementação:** 002 - Internacionalização, README Premium e UX de Horas
> **Spec:** [spec.md](./spec.md)
> **Progresso:** 15/15 tarefas concluídas (100%)
> **Última atualização:** 2026-06-02

---

## Legenda

- `[ ]` — Pendente
- `[x]` — Concluída
- `[!]` — Bloqueada (ver observação)
- `[-]` — Cancelada

---

## Tarefas

### Fase 1: Componente TimeSlider (UX de Horas)

- [x] **T-001:** Criar componente TimeSlider
- [x] **T-002:** Integrar TimeSlider nos formulários

### Fase 2: Infraestrutura de i18n

- [x] **T-003:** Instalar dependências de i18n
- [x] **T-004:** Criar dicionários de tradução (PT e EN)
- [x] **T-005:** Criar módulo getDictionary
- [x] **T-006:** Criar DictionaryContext para client components
- [x] **T-007:** Criar proxy.ts (middleware de idioma)

### Fase 3: Reestruturação de Rotas

- [x] **T-008:** Mover páginas para `[lang]/` e adaptar layout

### Fase 4: Traduzir Componentes

- [x] **T-009:** Traduzir componentes de UI (Header, Footer, EmptyState, Modal)
- [x] **T-010:** Traduzir componentes de aparelhos
- [x] **T-011:** Traduzir componentes do dashboard
- [x] **T-012:** Traduzir páginas
- [x] **T-013:** Adaptar formatação de moeda por locale

### Fase 5: README e Verificação

- [x] **T-014:** Criar README premium para recrutadores
- [x] **T-015:** Build final e teste end-to-end

---

## Registro de Progresso

| Tarefa | Status | Data de Conclusão | Observações |
|--------|--------|-------------------|-------------|
| T-001  | ✅ Concluída | 2026-06-02 | Slider com gradient |
| T-002  | ✅ Concluída | 2026-06-02 | Em ApplianceCard, Form e List |
| T-003  | ✅ Concluída | 2026-06-02 | negotiator, intl-localematcher |
| T-004  | ✅ Concluída | 2026-06-02 | pt.json e en.json |
| T-005  | ✅ Concluída | 2026-06-02 | getDictionary server-only |
| T-006  | ✅ Concluída | 2026-06-02 | DictionaryProvider |
| T-007  | ✅ Concluída | 2026-06-02 | proxy.ts middleware |
| T-008  | ✅ Concluída | 2026-06-02 | [lang]/layout.tsx |
| T-009  | ✅ Concluída | 2026-06-02 | Header com Lang Switcher |
| T-010  | ✅ Concluída | 2026-06-02 | Cards com nomes traduzidos |
| T-011  | ✅ Concluída | 2026-06-02 | Ranking, Summary, Tips |
| T-012  | ✅ Concluída | 2026-06-02 | Home, Config, Minha Casa, etc. |
| T-013  | ✅ Concluída | 2026-06-02 | formatCurrency(BRL, lang) |
| T-014  | ✅ Concluída | 2026-06-02 | README profissional atualizado |
| T-015  | ✅ Concluída | 2026-06-02 | Build OK |
