# Tarefas: Contexto README e Roteamento Home EN

> **Implementação:** 003 - Contexto README e Roteamento Home EN
> **Spec:** [spec.md](./spec.md)
> **Progresso:** 5/5 tarefas concluídas (100%)
> **Última atualização:** 2026-06-03

---

## Legenda

- `[ ]` — Pendente
- `[x]` — Concluída
- `[!]` — Bloqueada (ver observação)
- `[-]` — Cancelada

---

## Tarefas

### Fase 1: Preparação e Setup

- [x] **T-001:** Setup da implementação
  - **Descrição:** Revisar a estrutura e garantir que o projeto builda localmente.
  - **Arquivos envolvidos:** Nenhum
  - **Critério de conclusão:** Projeto rodando sem erros.
  - **Dependências:** Nenhuma
  - **Estimativa:** Pequena

### Fase 2: Implementação de Roteamento e Middleware

- [x] **T-002:** Criar Middleware nativo do Next.js e atualizar local padrão
  - **Descrição:** Mover a lógica de `src/app/proxy.ts` para `src/middleware.ts` e alterar `defaultLocale` para `"en"`. Atualizar `src/dictionaries/index.ts` também.
  - **Arquivos envolvidos:** `src/middleware.ts` [NEW], `src/app/proxy.ts` [DELETE], `src/dictionaries/index.ts` [MODIFY]
  - **Critério de conclusão:** Ao acessar `/`, redireciona nativamente para `/en` (ou `/pt` se preferência expressa).
  - **Dependências:** T-001
  - **Estimativa:** Média

### Fase 3: Captura de Tela e README

- [x] **T-003:** Capturar screenshot da página inicial
  - **Descrição:** Rodar o app localmente, acessar a home `/en` usando o subagente de browser e salvar a captura como `public/screenshot-home.png`.
  - **Arquivos envolvidos:** `public/screenshot-home.png` [NEW]
  - **Critério de conclusão:** O arquivo de imagem existe na pasta public.
  - **Dependências:** T-002
  - **Estimativa:** Pequena

- [x] **T-004:** Atualizar README.md e README.en.md
  - **Descrição:** Adicionar o contexto familiar da mãe do desenvolvedor, a imagem capturada e o botão de deploy/link para a Vercel.
  - **Arquivos envolvidos:** `README.md` [MODIFY], `README.en.md` [MODIFY]
  - **Critério de conclusão:** Ambos os arquivos atualizados contendo os novos dados estruturados e revisados.
  - **Dependências:** T-003
  - **Estimativa:** Média

### Fase 4: Testes e Validação

- [x] **T-005:** Validar build e redirecionamento
  - **Descrição:** Executar o comando de build do Next.js e testar se tudo compila e funciona corretamente.
  - **Arquivos envolvidos:** Todo o projeto.
  - **Critério de conclusão:** Build concluído com sucesso e sem warnings relevantes.
  - **Dependências:** T-004
  - **Estimativa:** Pequena

---

## Registro de Progresso

| Tarefa | Status | Data de Conclusão | Observações |
|--------|--------|-------------------|-------------|
| T-001  | ✅ Concluída | 2026-06-03 | Build limpo verificado |
| T-002  | ✅ Concluída | 2026-06-03 | Criado src/proxy.ts e defaultLocale=en |
| T-003  | ✅ Concluída | 2026-06-03 | Screenshot salvo em public/screenshot-home.png |
| T-004  | ✅ Concluída | 2026-06-03 | READMEs atualizados com contexto, Vercel link e screenshot |
| T-005  | ✅ Concluída | 2026-06-03 | Build de produção validado com sucesso |

---

> **📌 NOTA:** Atualize este documento conforme as tarefas forem concluídas.
