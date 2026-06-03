# Contexto README e Roteamento Home EN

> **ID:** 003
> **Status:** 🟢 Concluída
> **Prioridade:** 🟠 Alta
> **Criada em:** 2026-06-03
> **Última atualização:** 2026-06-03
> **Autor:** Agente AI (Antigravity)

---

## 1. Resumo Executivo

Esta implementação aborda três pontos solicitados pelo usuário:
1. Adicionar no `README.md` e `README.en.md` o contexto familiar que motivou a criação do projeto (reclamação da mãe sobre a conta de luz e o desejo de ver de forma simples qual equipamento consome mais).
2. Configurar o redirecionamento da página inicial `/` para `/en` por padrão, em vez de retornar 404 ("página não encontrada").
3. Adicionar um espaço para o link da Vercel no formato de botão/badge e incluir um screenshot real da página inicial no README.

## 2. Contexto e Motivação

### 2.1 Problema Atual
1. **Falta de Contexto Histórico:** O README atual não menciona a história e a motivação familiar (a mãe do desenvolvedor), o que enfraquece a narrativa de portfólio.
2. **Erro 404 na Raiz:** A raiz `/` retorna 404 porque a lógica de internacionalização foi colocada em um arquivo `src/app/proxy.ts` que não é executado de forma nativa pelo Next.js como middleware.
3. **Ausência de Elementos Visuais e Link no README:** O README não possui um screenshot da aplicação rodando e nem um local explícito para linkar a demonstração na Vercel.

### 2.2 Impacto do Problema
* Recrutadores ou visitantes do repositório se deparam com um site quebrado ao acessar o link principal (devido ao erro 404 na raiz).
* O portfólio perde apelo emocional e de produto sem o contexto da persona real (a mãe).

### 2.3 Soluções Consideradas

| Solução | Prós | Contras | Decisão |
|---------|------|---------|---------|
| Criar `src/app/page.tsx` para redirect e manter `proxy.ts` | Simples, não usa middleware global. | O middleware de i18n ainda estaria inativo para outros caminhos não localizados. | ❌ Descartada |
| Mover e adaptar `src/app/proxy.ts` para `src/middleware.ts` e ajustar locale padrão para `en` | Corrige o roteamento global do Next.js nativamente. Garante que `/` e outras rotas sem locale sejam tratadas corretamente. | Exige configurar o middleware com o matcher correto. | ✅ Escolhida |

## 3. Especificação Técnica

### 3.1 Visão Geral da Arquitetura
Será criado o arquivo `src/middleware.ts` que assumirá a lógica de detecção de idioma e redirecionamento de locale. O locale padrão será alterado para `"en"`. O arquivo `src/app/proxy.ts` será deletado.

### 3.2 Componentes Afetados

| Componente | Tipo | Ação | Descrição |
|-----------|------|------|-----------|
| `src/middleware.ts` | Arquivo | Criar | Novo middleware nativo do Next.js para controle de rotas i18n. |
| `src/app/proxy.ts` | Arquivo | Deletar | Removido pois a lógica de i18n será migrada para o middleware raiz. |
| `src/dictionaries/index.ts` | Arquivo | Modificar | Atualizar `defaultLocale` para `"en"`. |
| `README.md` | Arquivo | Modificar | Adicionar contexto da mãe, link da Vercel e screenshot. |
| `README.en.md` | Arquivo | Modificar | Adicionar contexto em inglês, link da Vercel e screenshot. |
| `public/screenshot-home.png` | Arquivo | Criar | Captura de tela da página inicial para demonstração no README. |

### 3.3 Interfaces e Contratos

* **Middleware:**
  * **Entrada:** `NextRequest` para qualquer rota sem extensão / estáticos.
  * **Saída:** `NextResponse.redirect` para `/[lang]/...` correspondente se o locale não estiver na rota.
  * **Locale Padrão:** `"en"`.

## 4. Requisitos

### 4.1 Requisitos Funcionais
* **RF-001:** O README em português e inglês deve conter a história da mãe como motivação do projeto.
* **RF-002:** O README deve conter um link estilizado como botão para a Vercel.
* **RF-003:** O README deve exibir um screenshot da página inicial da aplicação.
* **RF-004:** A rota `/` deve redirecionar o usuário para `/en` (ou `/pt` se o cabeçalho do navegador preferir expressamente pt).

### 4.2 Requisitos Não-Funcionais
* **RNF-001:** O redirecionamento deve ocorrer no lado do servidor (Edge Middleware) para performance ideal.
* **RNF-002:** O screenshot deve ter resolução nítida e boa qualidade estética.

## 5. Critérios de Aceitação
* [x] **CA-001:** Acessar `http://localhost:3000/` redireciona automaticamente para `/en` (em navegadores sem `pt` como prioridade).
* [x] **CA-002:** `README.md` atualizado com o contexto familiar, botão da Vercel e imagem do screenshot.
* [x] **CA-003:** `README.en.md` atualizado correspondente.
* [x] **CA-004:** O arquivo `public/screenshot-home.png` foi gerado e está visível no README.
* [x] **CA-005:** `npm run build` completa sem erros de tipo ou rotas.

## 6. Plano de Testes

### 6.1 Testes de Integração e Roteamento
* Validar que acessar `/` redireciona corretamente para `/en` (ou `/pt` conforme cabeçalho).
* Validar que caminhos como `/aparelhos` redirecionam para `/[lang]/aparelhos`.

### 6.2 Testes Visuais e de Conteúdo
* Verificar a renderização do README no GitHub/Preview para assegurar que as imagens e links funcionam.

---

> **⚠️ NOTA:** Este documento serve como especificação viva. Qualquer alteração deve ser validada.
