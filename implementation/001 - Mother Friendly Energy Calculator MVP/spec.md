# Mother Friendly Energy Calculator — MVP

> **ID:** 001
> **Status:** 🟢 Concluída
> **Prioridade:** 🟠 Alta
> **Criada em:** 2026-06-02
> **Última atualização:** 2026-06-02
> **Autor:** Agente AI

---

## 1. Resumo Executivo

Implementar o MVP do **Mother Friendly Energy Calculator** (LuzCerta), uma aplicação web em Next.js + React + TypeScript que permite a pessoas sem conhecimento técnico estimarem o consumo de energia elétrica da casa. O app oferece uma lista de eletrodomésticos comuns com dados pré-preenchidos, cálculos automáticos de consumo e custo mensal, ranking visual dos maiores vilões da conta e dicas de economia — tudo com linguagem simples, interface acolhedora e persistência via Local Storage.

## 2. Contexto e Motivação

### 2.1 Problema Atual

Pessoas não técnicas (especialmente mães, pais e responsáveis pela casa) percebem que a conta de luz está alta, mas não têm uma forma simples de identificar quais aparelhos consomem mais. As calculadoras de energia existentes exigem conhecimento de termos como watts, kWh e tarifa energética, criando barreiras de uso para o público-alvo.

### 2.2 Impacto do Problema

- **Quem é afetado:** Famílias que querem entender e reduzir a conta de luz.
- **Magnitude:** A falta de visibilidade sobre o consumo leva a gastos desnecessários e frustração.
- **Se não for resolvido:** O público continua sem uma ferramenta acessível para entender o consumo doméstico.

### 2.3 Soluções Consideradas

| Solução | Prós | Contras | Decisão |
|---------|------|---------|---------|
| App Web Next.js com Local Storage | Sem backend, rápido, portfólio demonstrável, mobile-first | Dados não sincronizam entre dispositivos | ✅ Escolhida |
| App com backend e banco de dados | Sincronização, login | Complexidade desnecessária para MVP, fora do escopo | ❌ Descartada |
| Planilha Google Sheets | Simples de criar | Não é visual, não é amigável, não demonstra habilidades técnicas | ❌ Descartada |

## 3. Especificação Técnica

### 3.1 Visão Geral da Arquitetura

Aplicação client-side renderizada com Next.js (App Router), usando React para componentes, TypeScript para tipagem, Tailwind CSS para estilização e Local Storage para persistência. Não há backend — toda a lógica reside no front-end.

```
┌─────────────────────────────────────────┐
│           Next.js App (Client)          │
│                                         │
│  ┌──────────┐  ┌──────────┐  ┌───────┐ │
│  │  Pages    │  │Components│  │ Hooks │ │
│  │  (App     │  │(UI +     │  │(State │ │
│  │  Router)  │──│ Domain)  │──│+ Logic│ │
│  └──────────┘  └──────────┘  └───┬───┘ │
│                                  │     │
│  ┌──────────┐  ┌──────────┐     │     │
│  │  Data    │  │   Lib    │─────┘     │
│  │ (Presets)│  │(Calculat)│           │
│  └──────────┘  └──────────┘           │
│                     │                  │
│              ┌──────┴──────┐           │
│              │Local Storage│           │
│              └─────────────┘           │
└─────────────────────────────────────────┘
```

### 3.2 Componentes Afetados

| Componente | Tipo | Ação | Descrição |
|-----------|------|------|-----------|
| `src/app/page.tsx` | Página | Criar | Tela inicial (Home) |
| `src/app/layout.tsx` | Layout | Criar | Layout principal com header/footer |
| `src/app/configuracao/page.tsx` | Página | Criar | Configuração de tarifa |
| `src/app/aparelhos/page.tsx` | Página | Criar | Seleção de eletrodomésticos |
| `src/app/minha-casa/page.tsx` | Página | Criar | Lista de aparelhos adicionados |
| `src/app/resultado/page.tsx` | Página | Criar | Dashboard com resultados |
| `src/components/ui/Button.tsx` | Componente | Criar | Botão reutilizável |
| `src/components/ui/Card.tsx` | Componente | Criar | Card reutilizável |
| `src/components/ui/Input.tsx` | Componente | Criar | Input com label e ajuda |
| `src/components/ui/Modal.tsx` | Componente | Criar | Modal/dialog de confirmação |
| `src/components/ui/EmptyState.tsx` | Componente | Criar | Estado vazio |
| `src/components/ui/Header.tsx` | Componente | Criar | Header do app |
| `src/components/ui/Footer.tsx` | Componente | Criar | Footer do app |
| `src/components/appliance/ApplianceCard.tsx` | Componente | Criar | Card de eletrodoméstico na grade |
| `src/components/appliance/ApplianceForm.tsx` | Componente | Criar | Form para aparelho manual |
| `src/components/appliance/ApplianceList.tsx` | Componente | Criar | Lista de aparelhos do usuário |
| `src/components/dashboard/EnergySummary.tsx` | Componente | Criar | Resumo de consumo/custo |
| `src/components/dashboard/ConsumptionRanking.tsx` | Componente | Criar | Ranking de consumo |
| `src/components/dashboard/SavingTips.tsx` | Componente | Criar | Dicas de economia |
| `src/components/dashboard/TariffInput.tsx` | Componente | Criar | Input de tarifa com explicação |
| `src/hooks/useLocalStorage.ts` | Hook | Criar | Persistência genérica no Local Storage |
| `src/hooks/useEnergyCalculator.ts` | Hook | Criar | Cálculos de energia |
| `src/hooks/useAppliances.ts` | Hook | Criar | Gerenciamento de aparelhos |
| `src/data/appliance-presets.ts` | Dados | Criar | Lista de eletrodomésticos pré-definidos |
| `src/lib/energy-calculator.ts` | Utilitário | Criar | Funções de cálculo de energia |
| `src/lib/format-currency.ts` | Utilitário | Criar | Formatação de moeda BRL |
| `src/types/appliance.ts` | Tipo | Criar | Tipos TypeScript de aparelhos |
| `src/types/energy.ts` | Tipo | Criar | Tipos TypeScript de energia |

### 3.3 Interfaces e Contratos

#### Entradas

- **Tarifa por kWh:** número decimal (valor padrão: R$ 0,65)
- **Aparelhos:** selecionados de uma lista pré-definida ou cadastrados manualmente
- **Configuração de uso por aparelho:** quantidade, horas/dia, dias/mês

#### Saídas

- Consumo mensal em kWh por aparelho e total
- Custo mensal estimado por aparelho e total (em R$)
- Ranking ordenado por custo
- Nível de impacto (baixo/médio/alto) por aparelho
- Dicas contextuais de economia

#### Contratos de API (se aplicável)

N/A — Aplicação totalmente client-side, sem API externa.

### 3.4 Modelos de Dados

```typescript
type AppliancePreset = {
  id: string;
  name: string;
  category: string;
  averageWatts: number;
  defaultHoursPerDay: number;
  defaultDaysPerMonth: number;
  icon: string;
  friendlyDescription: string;
};

type UserAppliance = {
  id: string;
  presetId?: string;
  name: string;
  watts: number;
  quantity: number;
  hoursPerDay: number;
  daysPerMonth: number;
  category?: string;
  icon?: string;
};

type EnergySettings = {
  tariffPerKwh: number;
  lastUpdated: string;
};

type CalculationResult = {
  applianceId: string;
  applianceName: string;
  monthlyKwh: number;
  monthlyCost: number;
  percentageOfTotal: number;
  impactLevel: "low" | "medium" | "high";
};

type AppState = {
  appliances: UserAppliance[];
  settings: EnergySettings;
  lastUpdated: string;
};
```

### 3.5 Fluxo de Execução

1. Usuário abre o app → Exibe tela Home com explicação e botão "Começar agora"
2. Clica em "Começar agora" → Navega para tela de Configuração de Tarifa
3. Informa ou mantém tarifa padrão → Navega para tela de Aparelhos
4. Seleciona eletrodomésticos do grid OU adiciona manualmente → Cada aparelho é adicionado à lista
5. Configura quantidade, horas/dia e dias/mês de cada aparelho
6. Navega para "Minha Casa" → Visualiza lista com resumo e opções de editar/remover
7. Navega para "Resultado" → Dashboard com:
   - Valor mensal estimado total
   - Consumo total em kWh
   - Ranking dos maiores consumidores
   - Barras visuais de comparação
   - Dicas de economia contextuais
8. Todos os dados são persistidos automaticamente no Local Storage
9. Ao retornar, dados continuam disponíveis

### 3.6 Tratamento de Erros

| Cenário | Tratamento | Mensagem |
|---------|-----------|----------|
| Valor de watts inválido (≤ 0) | Impedir submissão, destacar campo | "Confira esse valor. Ele precisa ser maior que zero." |
| Horas > 24 | Limitar a 24 | "O máximo é 24 horas por dia." |
| Dias > 31 | Limitar a 31 | "O máximo é 31 dias por mês." |
| Quantidade ≤ 0 | Impedir submissão | "Precisa ter pelo menos 1 aparelho." |
| Tarifa inválida (≤ 0) | Usar valor padrão | "Usamos o valor médio como sugestão." |
| Local Storage indisponível | Funcionar sem persistência, avisar | "Não foi possível salvar os dados no seu navegador." |
| Nenhum aparelho cadastrado | Exibir estado vazio | "Sua casa ainda está vazia. Adicione alguns aparelhos para começar a estimar sua conta." |

## 4. Requisitos

### 4.1 Requisitos Funcionais

- **RF-001:** O sistema deve exibir uma tela inicial com nome do app, explicação e botão para começar.
- **RF-002:** O sistema deve permitir configurar a tarifa de energia por kWh com valor padrão.
- **RF-003:** O sistema deve exibir uma lista de eletrodomésticos comuns com dados pré-preenchidos.
- **RF-004:** O sistema deve permitir adicionar eletrodomésticos da lista à casa do usuário.
- **RF-005:** O sistema deve permitir cadastrar aparelhos personalizados manualmente.
- **RF-006:** O sistema deve permitir editar quantidade, horas/dia, dias/mês e potência de aparelhos.
- **RF-007:** O sistema deve permitir remover aparelhos da lista.
- **RF-008:** O sistema deve calcular o consumo mensal em kWh por aparelho e total.
- **RF-009:** O sistema deve calcular o custo mensal estimado por aparelho e total.
- **RF-010:** O sistema deve exibir o valor total estimado da conta.
- **RF-011:** O sistema deve exibir ranking de aparelhos ordenados por custo (maior → menor).
- **RF-012:** O sistema deve exibir dicas de economia baseadas nos aparelhos cadastrados.
- **RF-013:** O sistema deve salvar dados automaticamente no Local Storage.
- **RF-014:** O sistema deve restaurar dados salvos ao reabrir o app.
- **RF-015:** O sistema deve permitir limpar todos os dados com confirmação prévia.

### 4.2 Requisitos Não-Funcionais

- **RNF-001:** A interface deve ser compreensível por pessoas sem conhecimento técnico.
- **RNF-002:** O app deve carregar em menos de 3 segundos e funcionar sem backend.
- **RNF-003:** O app deve seguir boas práticas de contraste, tamanho de fonte e navegação por teclado.
- **RNF-004:** O app deve ter boa experiência em mobile, tablet e desktop (mobile-first).
- **RNF-005:** Os dados devem ser apresentados com cards, ícones, cores suaves e hierarquia visual clara.
- **RNF-006:** O código deve ser organizado em componentes reutilizáveis com TypeScript strict.
- **RNF-007:** Dados persistidos apenas no navegador via Local Storage — nenhum dado sensível coletado.
- **RNF-008:** O projeto deve usar Next.js, React, TypeScript e Tailwind CSS.

### 4.3 Restrições e Limitações

- Sem login, autenticação ou backend.
- Sem integração com concessionárias ou OCR de faturas.
- Dados ficam apenas no navegador do usuário (não sincronizam entre dispositivos).
- Os valores são estimativas — impostos, bandeiras tarifárias e taxas podem alterar o valor real.
- O MVP não inclui exportação PDF, IA em produção ou comparação com contas reais.

## 5. Critérios de Aceitação

- [ ] **CA-001:** Ao selecionar um eletrodoméstico sugerido, ele é adicionado à lista da casa.
- [ ] **CA-002:** Ao editar tempo de uso ou quantidade de um aparelho, o cálculo é atualizado automaticamente.
- [ ] **CA-003:** Ao remover um aparelho, ele sai da lista e o total é recalculado.
- [ ] **CA-004:** Ao recarregar a página, os dados continuam disponíveis (Local Storage).
- [ ] **CA-005:** Ao confirmar limpeza, o Local Storage é apagado e o app volta ao estado inicial.
- [ ] **CA-006:** O sistema exibe custo mensal estimado quando existem aparelhos cadastrados.
- [ ] **CA-007:** Com 2+ aparelhos, o ranking exibe-os ordenados do maior para o menor custo.
- [ ] **CA-008:** Todos os textos da interface evitam excesso de termos técnicos.
- [ ] **CA-009:** O app funciona adequadamente em celulares, tablets e desktops.
- [ ] **CA-010:** O app funciona mesmo sem o usuário alterar o valor de tarifa padrão.

## 6. Plano de Testes

### 6.1 Testes Unitários

- Cálculo de consumo mensal (`monthlyKwh`) com diferentes inputs.
- Cálculo de custo mensal (`monthlyCost`).
- Cálculo de percentagem sobre o total.
- Classificação de impacto (baixo/médio/alto).
- Retorno zero quando não houver aparelhos.
- Validação de dados inválidos (watts ≤ 0, horas > 24, dias > 31).
- Formatação de moeda em BRL.

### 6.2 Testes de Integração

- Hook `useLocalStorage`: salvar, ler e limpar dados.
- Hook `useAppliances`: adicionar, editar e remover aparelhos.
- Hook `useEnergyCalculator`: recalcular ao alterar tarifa ou aparelhos.

### 6.3 Testes de Aceitação

- Fluxo completo: Home → Configuração → Aparelhos → Minha Casa → Resultado.
- Persistência: adicionar aparelhos, recarregar, verificar que continuam.
- Limpeza: confirmar limpeza, verificar estado inicial.

### 6.4 Casos de Borda (Edge Cases)

- Nenhum aparelho cadastrado (estado vazio).
- Apenas 1 aparelho (ranking com item único, 100% do total).
- Tarifa zero ou negativa.
- Local Storage cheio ou indisponível.
- Horas = 24, dias = 31, quantidade muito alta.
- Aparelhos com consumo idêntico.

## 7. Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Cálculo não representar a conta real | Alta | Médio | Informar que é estimativa; explicar que impostos e bandeiras não estão incluídos |
| Usuário não saber a tarifa | Alta | Baixo | Valor padrão; explicação de onde encontrar na conta |
| Excesso de informação técnica | Média | Alto | Revisão de textos; linguagem simples; termos técnicos apenas como ajuda opcional |
| Dados perdidos ao trocar de navegador | Média | Baixo | Explicar que dados ficam no dispositivo atual |
| Tailwind CSS gerar complexidade de configuração | Baixa | Baixo | Usar configuração padrão do Next.js com Tailwind |

## 8. Dependências

### 8.1 Dependências Internas

Nenhuma — este é o primeiro módulo do projeto.

### 8.2 Dependências Externas

| Pacote | Versão | Propósito |
|--------|--------|-----------|
| Next.js | 15.x | Framework React com App Router |
| React | 19.x | Biblioteca de UI |
| TypeScript | 5.x | Tipagem estática |
| Tailwind CSS | 4.x | Estilização utilitária |
| Lucide React | latest | Ícones SVG |
| Vitest | latest | Testes unitários (fase posterior) |

## 9. Observações e Decisões de Design

1. **Navegação por páginas** em vez de wizard single-page: permite que o usuário navegue livremente entre seções, facilitando edição e revisão.
2. **Tarifa padrão R$ 0,65/kWh** baseada em média nacional brasileira (referência 2024/2025).
3. **Mobile-first:** Todo o CSS será escrito com breakpoints mobile-first usando Tailwind.
4. **Ícones com Lucide React** em vez de emojis para consistência visual e acessibilidade.
5. **Tailwind CSS** conforme especificado no PRD (seção 24 - Stack Técnica).
6. **Sem ShadCN UI no MVP** para manter a simplicidade e demonstrar habilidade de componentização própria. Pode ser adicionado em fases futuras.
7. **App Router do Next.js** (diretório `app/`) em vez do Pages Router para seguir as práticas modernas.

---

> **⚠️ NOTA:** Este documento é a fonte de verdade para esta implementação.
> Qualquer alteração no escopo deve ser refletida aqui ANTES de ser implementada.
