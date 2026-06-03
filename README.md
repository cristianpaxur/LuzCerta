<div align="center">
  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/zap.svg" width="80" alt="LuzCerta Logo" />
  <h1>LuzCerta</h1>
  <p><strong>Calculadora de Energia Amigável — Feita para Pessoas, não Engenheiros.</strong></p>

  <p>
    🇧🇷 Português | <a href="./README.en.md">🇬🇧 English</a>
  </p>

  <div>
    <img src="https://img.shields.io/badge/Next.js%2016-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 16" />
    <img src="https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/i18n-PT_BR%20|%20EN-orange?style=for-the-badge" alt="Internationalization" />
  </div>
</div>

<br />

## 📖 O Problema

Entender a conta de luz é difícil para a maioria das pessoas. O cálculo envolve conversões confusas de Watts para Kilowatts, multiplicação por horas diárias, dias no mês e taxas tarifárias que ninguém memoriza. 

Quando alguém quer saber: *"Será que meu chuveiro está deixando a conta cara?"*, as calculadoras online exigem que o usuário saiba o jargão técnico (kWh, potência, etc.), frustrando o usuário comum.

## 💡 A Solução: LuzCerta

O **LuzCerta** é uma calculadora de consumo de energia com um foco obsessivo em **UX "Mother-Friendly"**. Se a sua mãe não conseguir usar o app, ele falhou.

- **Dicionário Visual:** Em vez de pedir "Potência em Watts", o app oferece presets visuais (Geladeira, Chuveiro, TV) com valores médios pré-configurados.
- **Entrada de Tempo Intuitiva:** Em vez de digitar "1.5 horas" em um input numérico, o usuário usa um slider amigável ("1 hora e 30 minutos").
- **Insights Acionáveis:** O app gera um ranking de consumo ("O Chuveiro representa 40% da sua conta") e oferece dicas de economia contextuais baseadas no que o usuário adicionou.

---

## ✨ Features em Destaque

🌍 **Internacionalização (i18n) Nativa**
Suporte bilíngue (Português/Inglês) implementado puramente com Next.js 16 App Router Middleware (`[lang]`) e React Context para Client Components, sem dependências pesadas de terceiros. O idioma é detectado via `Accept-Language` no server-side.

🎨 **UI/UX Premium e Acessível**
Design system construído com Tailwind CSS utilizando micro-interações, glassmorphism, gradientes suaves e paleta de cores harmoniosa. Totalmente responsivo.

⚡ **State Management Eficiente**
Sem Redux ou Zustand. O estado da aplicação (tarifa e lista de aparelhos) é gerenciado via Custom Hooks (`useLocalStorage` + React Context), garantindo que os dados persistam sem precisar de backend ou banco de dados.

🏗️ **Arquitetura Spec-Driven**
Desenvolvido seguindo rigorosamente o padrão *Spec-Driven Development*. Cada feature tem seu PRD (Product Requirement Document), Plano de Implementação e Tasklist versionados dentro da pasta `/implementation`.

---

## 🛠️ Stack Tecnológica

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4 + Lucide React (Ícones)
- **i18n:** Negotiator + FormatJS (Content Negotiation Middleware)
- **Deploy:** Vercel (Recomendado)

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js (v18+)
- npm ou yarn

### Passo a Passo

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/luzcerta.git

# Entre na pasta
cd luzcerta

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o app. O proxy de idioma vai redirecionar automaticamente para `/pt/` ou `/en/`.

---

## 📂 Estrutura do Projeto

```
luzcerta/
├── implementation/       # Documentação Spec-Driven (PRDs, Tasks, Specs)
├── src/
│   ├── app/              # Next.js App Router (Layouts, Pages, Middleware)
│   │   ├── [lang]/       # Rotas internacionalizadas
│   │   └── proxy.ts      # Middleware detector de locale
│   ├── components/       # Componentes React modularizados
│   │   ├── appliance/    # Lógica de aparelhos e forms
│   │   ├── dashboard/    # Gráficos, rankings e resumos
│   │   └── ui/           # Design System (Buttons, Inputs, Sliders, Modals)
│   ├── contexts/         # React Contexts (Dictionary)
│   ├── data/             # Dados estáticos (Presets de eletrodomésticos)
│   ├── dictionaries/     # Arquivos JSON de tradução (PT/EN)
│   ├── hooks/            # Custom Hooks (useAppliances, useLocalStorage)
│   ├── lib/              # Funções utilitárias e regras de negócio
│   └── types/            # Tipagens TypeScript (Models)
```

---

## 🧠 Aprendizados e Tomadas de Decisão

1. **i18n no Next.js 16:** Optamos por não usar bibliotecas como `next-intl` para manter o bundle size mínimo. Construímos um middleware customizado usando `negotiator` e `server-only` utils para entregar dicionários JSON direto para os Server Components.
2. **"Mother-Friendly" UX:** Aprendemos que `input[type="number"]` com steps decimais (ex: 0.25) afasta usuários não-técnicos. Construímos um `<TimeSlider />` customizado que transforma isso num range deslizável exibindo texto natural ("X horas e Y minutos").
3. **Persistência Sem Backend:** Para garantir privacidade e evitar atrito (login/signup), optamos por um Custom Hook atrelado ao `localStorage`.

---

## 🤝 Como Contribuir

1. Faça um Fork do projeto
2. Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Faça commit de suas alterações (`git commit -m 'Add some AmazingFeature'`)
4. Faça Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

<div align="center">
  <p>Feito com ❤️ por um dev focado em UX.</p>
</div>
