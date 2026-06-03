PRD.md — Mother Friendly Energy Calculator
==========================================

1\. Visão Geral do Produto
--------------------------

### Nome do projeto

**Mother Friendly Energy Calculator**

### Descrição curta

Aplicativo web visual, simples e intuitivo para ajudar pessoas sem conhecimento técnico a estimarem o consumo de energia elétrica da casa com base nos eletrodomésticos utilizados no dia a dia.

### Contexto

O projeto nasce de um problema real: uma mãe percebe que a conta de luz está vindo mais cara do que o esperado, mas não possui uma forma simples de entender quais aparelhos podem estar impactando mais no valor final.

A maioria das ferramentas de cálculo de energia exige que o usuário entenda conceitos como watts, kWh, potência, tarifa e tempo médio de uso. Para um público não técnico, isso cria barreiras.

Este projeto propõe uma solução **mother-friendly**, ou seja, pensada para pessoas que querem uma resposta clara, visual e prática, sem precisar entender termos técnicos.

2\. Objetivo do Produto
-----------------------

Criar um aplicativo web em **Next.js + React** que permita ao usuário:

*   Adicionar eletrodomésticos da casa.
    
*   Informar de forma simples o tempo de uso.
    
*   Visualizar uma estimativa mensal de consumo.
    
*   Entender quais aparelhos mais pesam na conta de luz.
    
*   Salvar os dados localmente no navegador com **Local Storage**.
    
*   Ter uma experiência visual, bonita, clara e acessível.
    
*   Demonstrar no GitHub domínio de **AI-Driven Development** e **Spec Driven Development**.
    

3\. Objetivos de Portfólio
--------------------------

Este projeto deve demonstrar que o desenvolvedor sabe:

*   Transformar um problema cotidiano em uma solução digital.
    
*   Criar uma aplicação com foco em usuário real.
    
*   Utilizar **Next.js** e **React** de forma organizada.
    
*   Trabalhar com estado local e persistência usando **Local Storage**.
    
*   Criar uma interface acessível e amigável para usuários não técnicos.
    
*   Estruturar um projeto baseado em **Spec Driven Development**.
    
*   Usar **AI-Driven Development** para planejar, especificar, validar e evoluir funcionalidades.
    
*   Construir um produto com contexto, propósito e narrativa clara para portfólio.
    

4\. Público-Alvo
----------------

### Público principal

Pessoas adultas, especialmente mães, pais ou responsáveis pela casa, que querem entender melhor a conta de luz sem lidar com termos técnicos.

### Perfil do usuário

*   Não sabe necessariamente o que é watt, kWh ou tarifa energética.
    
*   Usa celular ou computador de forma básica.
    
*   Quer respostas práticas.
    
*   Prefere interfaces visuais e diretas.
    
*   Quer saber “quanto isso pesa na conta?” em vez de fazer cálculos manuais.
    

### Exemplo de persona

**Dona Ana, 52 anos**

Dona Ana percebeu que a conta de luz subiu nos últimos meses. Ela suspeita que o ar-condicionado, a máquina de lavar ou o chuveiro estejam consumindo mais do que deveriam, mas não sabe como calcular isso. Ela quer uma ferramenta simples onde possa escolher os aparelhos da casa, dizer mais ou menos quanto usa por dia e ver uma estimativa clara do valor mensal.

5\. Problema
------------

Atualmente, pessoas não técnicas têm dificuldade para entender o consumo de energia elétrica da casa porque:

*   A conta de luz é difícil de interpretar.
    
*   Calculadoras tradicionais usam termos técnicos.
    
*   O usuário precisa saber potência em watts.
    
*   O usuário precisa entender kWh.
    
*   Não existe uma visualização simples dos maiores vilões da conta.
    
*   É difícil comparar consumo entre aparelhos.
    
*   O usuário geralmente não sabe se a conta está coerente com o uso real da casa.
    

6\. Solução Proposta
--------------------

Criar uma aplicação web onde o usuário possa montar uma “casa virtual” com seus eletrodomésticos.

Em vez de exigir informações técnicas, o app deve oferecer:

*   Lista de eletrodomésticos comuns com valores médios já preenchidos.
    
*   Interface com cards visuais.
    
*   Linguagem simples.
    
*   Campos fáceis como:
    
    *   “Quantas horas por dia você usa?”
        
    *   “Quantos dias por mês?”
        
    *   “Tem mais de um desse aparelho?”
        
*   Estimativa do valor mensal.
    
*   Ranking dos aparelhos que mais consomem.
    
*   Dicas simples para economizar energia.
    
*   Persistência automática no navegador.
    

7\. Proposta de Valor
---------------------

O app não é apenas uma calculadora de energia. Ele é uma ferramenta de compreensão.

Ele ajuda o usuário a responder perguntas como:

*   “Minha conta de luz faz sentido?”
    
*   “Qual aparelho está gastando mais?”
    
*   “O chuveiro pesa muito na conta?”
    
*   “O ar-condicionado está aumentando muito o valor?”
    
*   “Se eu reduzir o tempo de uso, quanto posso economizar?”
    

8\. Escopo do MVP
-----------------

### Funcionalidades incluídas no MVP

#### 8.1 Tela inicial

A tela inicial deve apresentar:

*   Nome do app.
    
*   Explicação curta e humana.
    
*   Botão principal para começar.
    
*   Visual acolhedor e moderno.
    
*   Linguagem simples.
    

Exemplo de texto:

> Descubra de forma simples quais aparelhos podem estar deixando sua conta de luz mais cara.

#### 8.2 Configuração da tarifa

O usuário deve poder informar o valor aproximado do kWh.

Como isso é técnico, o app deve explicar de forma simples:

> Esse valor aparece na sua conta de luz. Se você não souber, pode deixar o valor médio sugerido.

Campos:

*   Valor do kWh.
    
*   Botão para usar valor padrão.
    
*   Texto explicativo.
    

Requisito:

*   O app deve funcionar mesmo se o usuário não alterar esse valor.
    
*   Deve existir um valor padrão configurado no sistema.
    

#### 8.3 Cadastro de eletrodomésticos

O usuário deve poder adicionar eletrodomésticos a partir de uma lista pré-definida.

Exemplos:

*   Geladeira
    
*   Chuveiro elétrico
    
*   Máquina de lavar
    
*   Televisão
    
*   Ar-condicionado
    
*   Ventilador
    
*   Micro-ondas
    
*   Ferro de passar
    
*   Computador
    
*   Notebook
    
*   Lâmpadas
    
*   Air fryer
    
*   Forno elétrico
    
*   Freezer
    
*   Roteador de internet
    

Cada eletrodoméstico deve possuir:

*   Nome amigável.
    
*   Ícone ou ilustração.
    
*   Potência média pré-definida.
    
*   Categoria.
    
*   Descrição simples.
    
*   Sugestão de uso médio.
    

Exemplo:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   {    name: "Chuveiro elétrico",    averageWatts: 5500,    category: "Banho",    friendlyDescription: "Um dos aparelhos que mais consome energia quando usado por muito tempo.",    defaultHoursPerDay: 0.5,    defaultDaysPerMonth: 30  }   `

#### 8.4 Adição manual de aparelho

Além da lista pré-definida, o usuário deve poder adicionar um aparelho manualmente.

Campos:

*   Nome do aparelho.
    
*   Potência em watts.
    
*   Horas de uso por dia.
    
*   Dias de uso por mês.
    
*   Quantidade.
    

Como o termo “watts” pode ser técnico, o campo deve ter ajuda visual:

> Normalmente esse número aparece na etiqueta do aparelho ou no manual.

#### 8.5 Configuração de uso

Ao adicionar um aparelho, o usuário deve informar:

*   Quantidade de aparelhos.
    
*   Tempo médio de uso por dia.
    
*   Quantos dias por mês usa.
    

A interface deve evitar parecer técnica.

Em vez de apenas labels técnicos, usar textos como:

*   “Quantos desse aparelho você tem?”
    
*   “Quanto tempo usa por dia?”
    
*   “Usa quantos dias no mês?”
    

#### 8.6 Cálculo de consumo

O app deve calcular:

*   Consumo mensal em kWh.
    
*   Custo mensal estimado.
    
*   Custo individual por aparelho.
    
*   Custo total estimado da casa.
    

Fórmula base:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   consumo mensal kWh = (potência em watts / 1000) × horas por dia × dias por mês × quantidade  custo mensal = consumo mensal kWh × tarifa kWh   `

#### 8.7 Dashboard visual

O dashboard deve exibir:

*   Valor mensal estimado.
    
*   Consumo total em kWh.
    
*   Quantidade de aparelhos cadastrados.
    
*   Ranking dos aparelhos que mais consomem.
    
*   Comparação visual entre os aparelhos.
    
*   Destaque para o maior consumidor.
    

Exemplo de mensagens:

*   “O chuveiro é o aparelho que mais pesa na sua conta.”
    
*   “A geladeira consome todo mês porque fica ligada o tempo inteiro.”
    
*   “O ar-condicionado pode aumentar bastante o valor se usado muitas horas por dia.”
    

#### 8.8 Ranking de consumo

O app deve ordenar os aparelhos por custo mensal estimado.

Cada item do ranking deve mostrar:

*   Nome do aparelho.
    
*   Valor estimado mensal.
    
*   Porcentagem em relação ao total.
    
*   Indicação visual de impacto:
    
    *   Baixo
        
    *   Médio
        
    *   Alto
        

#### 8.9 Dicas de economia

O app deve exibir dicas simples baseadas nos aparelhos cadastrados.

Exemplos:

Se houver chuveiro elétrico:

> Banhos mais curtos podem fazer bastante diferença na conta.

Se houver ar-condicionado:

> Usar o ar-condicionado por menos horas ou em temperatura moderada pode reduzir bastante o consumo.

Se houver muitas lâmpadas:

> Trocar lâmpadas antigas por LED pode ajudar a economizar.

#### 8.10 Persistência com Local Storage

O app deve salvar automaticamente no navegador:

*   Lista de aparelhos cadastrados.
    
*   Tarifa configurada.
    
*   Preferências do usuário.
    
*   Data da última atualização.
    

Requisitos:

*   Ao recarregar a página, os dados devem continuar disponíveis.
    
*   Deve existir opção para limpar todos os dados.
    
*   Deve existir confirmação antes de apagar tudo.
    

#### 8.11 Responsividade

O app deve funcionar bem em:

*   Celulares.
    
*   Tablets.
    
*   Computadores.
    

A experiência mobile deve ser priorizada, pois o público principal provavelmente acessará pelo celular.

9\. Fora do Escopo do MVP
-------------------------

O MVP não deve incluir inicialmente:

*   Login de usuário.
    
*   Banco de dados externo.
    
*   Integração com concessionárias de energia.
    
*   Leitura automática da conta de luz.
    
*   Inteligência artificial em produção.
    
*   Backend.
    
*   Autenticação.
    
*   Exportação em PDF.
    
*   Comparação automática com contas reais.
    
*   OCR de fatura.
    

Essas funcionalidades podem ser consideradas para versões futuras.

10\. Funcionalidades Futuras
----------------------------

### 10.1 Leitura de conta de luz

Permitir que o usuário envie uma foto ou PDF da conta de luz para extrair automaticamente:

*   Valor da tarifa.
    
*   Consumo mensal real.
    
*   Valor total pago.
    

### 10.2 Comparação estimado vs real

Comparar o consumo estimado pelo app com a conta real do usuário.

### 10.3 Perfis de residência

Permitir criar perfis como:

*   Casa da mãe.
    
*   Apartamento.
    
*   Escritório.
    
*   Casa de praia.
    

### 10.4 Simulador de economia

Permitir simular cenários como:

*   “E se eu tomar banho 5 minutos a menos?”
    
*   “E se eu usar o ar-condicionado 2 horas a menos por dia?”
    
*   “E se eu trocar lâmpadas por LED?”
    

### 10.5 Modo IA Assistente

Criar um assistente que explique os resultados em linguagem natural.

Exemplo:

> Pela sua simulação, o chuveiro e o ar-condicionado são os maiores responsáveis pelo consumo. Se você reduzir o banho em alguns minutos e usar o ar-condicionado por menos tempo, já pode notar diferença.

11\. Requisitos Funcionais
--------------------------

### RF001 — Visualizar tela inicial

O usuário deve visualizar uma tela inicial clara, com explicação simples do objetivo do app.

### RF002 — Configurar tarifa de energia

O usuário deve poder informar ou manter um valor padrão de tarifa por kWh.

### RF003 — Listar eletrodomésticos sugeridos

O sistema deve exibir uma lista de eletrodomésticos comuns com dados médios de consumo.

### RF004 — Adicionar eletrodoméstico sugerido

O usuário deve poder adicionar um eletrodoméstico da lista à sua casa.

### RF005 — Adicionar eletrodoméstico manual

O usuário deve poder cadastrar um aparelho personalizado.

### RF006 — Editar aparelho cadastrado

O usuário deve poder alterar quantidade, tempo de uso, dias de uso e potência.

### RF007 — Remover aparelho

O usuário deve poder remover um aparelho da lista.

### RF008 — Calcular consumo mensal

O sistema deve calcular o consumo mensal estimado em kWh.

### RF009 — Calcular custo mensal

O sistema deve calcular o custo mensal estimado com base na tarifa configurada.

### RF010 — Exibir total estimado

O sistema deve exibir o valor total estimado da conta de luz.

### RF011 — Exibir ranking de consumo

O sistema deve exibir os aparelhos ordenados do maior para o menor consumo.

### RF012 — Exibir dicas de economia

O sistema deve exibir dicas de economia baseadas nos aparelhos cadastrados.

### RF013 — Salvar dados localmente

O sistema deve salvar os dados no Local Storage.

### RF014 — Restaurar dados salvos

O sistema deve carregar os dados salvos ao abrir novamente o app.

### RF015 — Limpar dados

O usuário deve poder apagar todos os dados salvos após confirmação.

12\. Requisitos Não Funcionais
------------------------------

### RNF001 — Usabilidade

A interface deve ser simples o suficiente para ser usada por pessoas sem conhecimento técnico.

### RNF002 — Performance

O app deve carregar rapidamente e funcionar sem backend.

### RNF003 — Acessibilidade

O app deve seguir boas práticas de contraste, tamanho de fonte e navegação por teclado.

### RNF004 — Responsividade

O app deve ter boa experiência em dispositivos móveis.

### RNF005 — Clareza visual

Os dados devem ser apresentados com cards, ícones, cores suaves e hierarquia visual clara.

### RNF006 — Manutenibilidade

O código deve ser organizado em componentes reutilizáveis.

### RNF007 — Persistência local

Os dados devem ser salvos apenas no navegador usando Local Storage.

### RNF008 — Segurança

Nenhum dado sensível deve ser coletado.

13\. Regras de Negócio
----------------------

### RN001 — Valor padrão de tarifa

Caso o usuário não informe a tarifa, o sistema deve usar um valor padrão configurado no projeto.

### RN002 — Cálculo por aparelho

Cada aparelho deve ter seu consumo calculado individualmente.

### RN003 — Cálculo total

O total mensal deve ser a soma dos custos de todos os aparelhos cadastrados.

### RN004 — Impacto visual

O sistema deve classificar o impacto de cada aparelho como baixo, médio ou alto.

Sugestão:

*   Baixo: até 10% do total.
    
*   Médio: de 10% a 25% do total.
    
*   Alto: acima de 25% do total.
    

### RN005 — Persistência automática

Qualquer alteração relevante deve atualizar o Local Storage automaticamente.

### RN006 — Sem cadastro obrigatório

O usuário não deve precisar criar conta para usar o app.

14\. Experiência do Usuário
---------------------------

### Princípios de UX

O app deve ser:

*   Visual.
    
*   Calmo.
    
*   Claro.
    
*   Não técnico.
    
*   Acolhedor.
    
*   Direto.
    
*   Mobile-first.
    

### Tom de voz

A linguagem deve ser simples, como se estivesse explicando para alguém da família.

Evitar termos como:

*   Potência nominal.
    
*   Quilowatt-hora sem explicação.
    
*   Tarifa energética complexa.
    
*   Consumo unitário.
    

Preferir frases como:

*   “Quanto esse aparelho pode pesar na conta?”
    
*   “Use uma média se não souber o valor exato.”
    
*   “Esse aparelho costuma gastar bastante.”
    
*   “Esses valores são estimativas.”
    

15\. Fluxo Principal do Usuário
-------------------------------

1.  Usuário abre o app.
    
2.  Visualiza explicação simples.
    
3.  Informa ou mantém a tarifa padrão.
    
4.  Escolhe eletrodomésticos da lista.
    
5.  Ajusta tempo de uso.
    
6.  Visualiza o valor mensal estimado.
    
7.  Consulta ranking dos maiores consumidores.
    
8.  Recebe dicas de economia.
    
9.  Fecha o app.
    
10.  Ao retornar, os dados continuam salvos.
    

16\. Estrutura de Telas
-----------------------

### 16.1 Home

Conteúdo:

*   Título.
    
*   Subtítulo.
    
*   Explicação breve.
    
*   Botão “Começar agora”.
    
*   Ilustração ou ícone.
    

### 16.2 Configuração

Conteúdo:

*   Campo de tarifa.
    
*   Explicação simples.
    
*   Valor padrão.
    
*   Botão para continuar.
    

### 16.3 Adicionar aparelhos

Conteúdo:

*   Grid de eletrodomésticos.
    
*   Busca ou filtro por categoria.
    
*   Botão para adicionar aparelho personalizado.
    

### 16.4 Minha casa

Conteúdo:

*   Lista de aparelhos adicionados.
    
*   Opção de editar.
    
*   Opção de remover.
    
*   Resumo parcial.
    

### 16.5 Resultado

Conteúdo:

*   Valor estimado mensal.
    
*   Consumo total.
    
*   Ranking.
    
*   Gráfico ou barra visual.
    
*   Dicas.
    

17\. Componentes Sugeridos
--------------------------

### Componentes de interface

*   Header
    
*   Footer
    
*   Button
    
*   Card
    
*   Input
    
*   Modal
    
*   EmptyState
    
*   ApplianceCard
    
*   ApplianceForm
    
*   EnergySummaryCard
    
*   ConsumptionRanking
    
*   SavingTips
    
*   TariffInput
    
*   ConfirmDialog
    

### Componentes de lógica

*   useLocalStorage
    
*   useEnergyCalculator
    
*   useAppliances
    

18\. Modelo de Dados
--------------------

### AppliancePreset

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   type AppliancePreset = {    id: string;    name: string;    category: string;    averageWatts: number;    defaultHoursPerDay: number;    defaultDaysPerMonth: number;    icon: string;    friendlyDescription: string;  };   `

### UserAppliance

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   type UserAppliance = {    id: string;    name: string;    watts: number;    quantity: number;    hoursPerDay: number;    daysPerMonth: number;    category?: string;    icon?: string;  };   `

### EnergySettings

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   type EnergySettings = {    tariffPerKwh: number;  };   `

### CalculationResult

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   type CalculationResult = {    applianceId: string;    monthlyKwh: number;    monthlyCost: number;    percentageOfTotal: number;    impactLevel: "low" | "medium" | "high";  };   `

19\. Fórmulas de Cálculo
------------------------

### Consumo mensal

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   monthlyKwh = (watts / 1000) * hoursPerDay * daysPerMonth * quantity;   `

### Custo mensal

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   monthlyCost = monthlyKwh * tariffPerKwh;   `

### Porcentagem sobre o total

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   percentageOfTotal = (applianceMonthlyCost / totalMonthlyCost) * 100;   `

20\. Critérios de Aceite
------------------------

### CA001 — Adicionar aparelho

Dado que o usuário está na tela de aparelhos, quando selecionar um eletrodoméstico sugerido, então o app deve adicioná-lo à lista da casa.

### CA002 — Editar aparelho

Dado que um aparelho foi adicionado, quando o usuário editar tempo de uso ou quantidade, então o cálculo deve ser atualizado automaticamente.

### CA003 — Remover aparelho

Dado que existe um aparelho na lista, quando o usuário clicar em remover, então o aparelho deve sair da lista e o total deve ser recalculado.

### CA004 — Persistir dados

Dado que o usuário adicionou aparelhos, quando recarregar a página, então os dados devem continuar disponíveis.

### CA005 — Limpar dados

Dado que existem dados salvos, quando o usuário confirmar a limpeza, então o Local Storage deve ser apagado e o app deve voltar ao estado inicial.

### CA006 — Exibir total

Dado que existem aparelhos cadastrados, quando os dados forem válidos, então o sistema deve exibir o custo mensal estimado.

### CA007 — Ranking

Dado que existem dois ou mais aparelhos cadastrados, quando o resultado for exibido, então os aparelhos devem aparecer ordenados do maior custo para o menor.

### CA008 — Linguagem simples

Dado que o usuário acessa qualquer tela, então os textos devem evitar excesso de termos técnicos.

21\. Estados da Interface
-------------------------

### Estado vazio

Quando não houver aparelhos cadastrados:

> Sua casa ainda está vazia. Adicione alguns aparelhos para começar a estimar sua conta.

### Estado com dados

Quando houver aparelhos:

*   Mostrar resumo.
    
*   Mostrar lista.
    
*   Mostrar ranking.
    

### Estado de erro

Quando o usuário inserir dados inválidos:

> Confira esse valor. Ele precisa ser maior que zero.

### Estado de confirmação

Antes de apagar tudo:

> Tem certeza que deseja apagar os dados da sua casa? Essa ação não pode ser desfeita.

22\. Estratégia de AI-Driven Development
----------------------------------------

O desenvolvimento deve utilizar IA como apoio para:

*   Refinar o problema.
    
*   Criar especificações.
    
*   Gerar hipóteses de UX.
    
*   Sugerir componentes.
    
*   Criar dados iniciais de eletrodomésticos.
    
*   Revisar regras de negócio.
    
*   Gerar testes.
    
*   Revisar acessibilidade.
    
*   Melhorar copywriting da interface.
    
*   Validar edge cases.
    
*   Refatorar código.
    

A IA não deve substituir o raciocínio do desenvolvedor, mas funcionar como ferramenta de aceleração e revisão.

### Exemplos de uso de IA no projeto

*   Gerar lista inicial de eletrodomésticos comuns.
    
*   Criar mensagens mais simples para usuários não técnicos.
    
*   Revisar se os requisitos estão claros.
    
*   Criar testes unitários para os cálculos.
    
*   Sugerir melhorias visuais.
    
*   Criar documentação técnica.
    

23\. Estratégia de Spec Driven Development
------------------------------------------

O projeto deve ser conduzido a partir de especificações claras antes da implementação.

### Documentos recomendados

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   /specs    /001-initial-mvp      spec.md      tasks.md    /002-local-storage-persistence      spec.md      tasks.md    /003-energy-dashboard      spec.md      tasks.md    /004-saving-tips      spec.md      tasks.md   `

Cada implementação deve conter:

*   Descrição do problema.
    
*   Objetivo.
    
*   Requisitos funcionais.
    
*   Requisitos não funcionais.
    
*   Critérios de aceite.
    
*   Tasks numeradas.
    
*   Checklist de execução.
    

### Exemplo de task

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   - [ ] 1. Criar hook useLocalStorage    - Criar função para ler valor inicial do Local Storage.    - Criar função para salvar alterações.    - Tratar erro caso o navegador não permita acesso ao Local Storage.    - Garantir tipagem genérica com TypeScript.   `

24\. Stack Técnica
------------------

### Front-end

*   Next.js
    
*   React
    
*   TypeScript
    
*   Tailwind CSS
    

### Estado e persistência

*   React State
    
*   Custom Hooks
    
*   Local Storage
    

### UI

*   Tailwind CSS
    
*   Componentes reutilizáveis
    
*   Possível uso de ShadCN UI
    

### Testes

*   Vitest
    
*   React Testing Library
    

### Qualidade

*   ESLint
    
*   Prettier
    
*   TypeScript strict mode
    

25\. Estrutura Sugerida do Projeto
----------------------------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   src/    app/      page.tsx      layout.tsx    components/      appliance/        ApplianceCard.tsx        ApplianceForm.tsx        ApplianceList.tsx      dashboard/        EnergySummary.tsx        ConsumptionRanking.tsx        SavingTips.tsx      ui/        Button.tsx        Card.tsx        Input.tsx        Modal.tsx    hooks/      useLocalStorage.ts      useEnergyCalculator.ts      useAppliances.ts    data/      appliance-presets.ts    lib/      energy-calculator.ts      format-currency.ts    types/      appliance.ts      energy.ts   `

26\. Testes Esperados
---------------------

### Testes unitários

*   Calcular consumo mensal corretamente.
    
*   Calcular custo mensal corretamente.
    
*   Calcular porcentagem do total corretamente.
    
*   Classificar impacto corretamente.
    
*   Retornar zero quando não houver aparelhos.
    
*   Validar dados inválidos.
    

### Testes de componentes

*   Renderizar lista de aparelhos.
    
*   Adicionar aparelho.
    
*   Remover aparelho.
    
*   Editar aparelho.
    
*   Exibir total atualizado.
    

### Testes de persistência

*   Salvar dados no Local Storage.
    
*   Recuperar dados ao recarregar.
    
*   Limpar dados corretamente.
    

27\. Métricas de Sucesso
------------------------

O projeto será considerado bem-sucedido se:

*   Um usuário não técnico conseguir usar o app sem explicação externa.
    
*   O app conseguir estimar o consumo mensal de forma clara.
    
*   Os dados persistirem corretamente no navegador.
    
*   O código estiver organizado e bem documentado.
    
*   O repositório demonstrar processo de desenvolvimento baseado em specs.
    
*   O README explicar o problema, a solução e as decisões técnicas.
    
*   O projeto servir como case real de portfólio.
    

28\. README esperado para o GitHub
----------------------------------

O README do projeto deve destacar:

*   O problema real que originou o app.
    
*   A proposta mother-friendly.
    
*   As tecnologias usadas.
    
*   Como rodar o projeto.
    
*   Como o Local Storage foi utilizado.
    
*   Como o Spec Driven Development foi aplicado.
    
*   Como a IA foi usada no processo.
    
*   Prints ou GIFs do app.
    
*   Próximas melhorias.
    

29\. Riscos e Cuidados
----------------------

### Risco: cálculo não representar exatamente a conta real

Mitigação:

*   Informar que o app gera uma estimativa.
    
*   Explicar que impostos, bandeiras tarifárias e taxas podem alterar o valor final.
    

### Risco: usuário não saber a tarifa

Mitigação:

*   Fornecer valor padrão.
    
*   Explicar onde encontrar na conta.
    
*   Permitir continuar sem alterar.
    

### Risco: excesso de informação técnica

Mitigação:

*   Usar textos simples.
    
*   Colocar explicações técnicas apenas como ajuda opcional.
    
*   Priorizar visual e clareza.
    

### Risco: dados perdidos ao trocar de navegador

Mitigação:

*   Explicar que os dados ficam salvos apenas no dispositivo atual.
    
*   Em versões futuras, considerar login ou exportação.
    

30\. Roadmap
------------

### Fase 1 — MVP

*   Criar estrutura Next.js.
    
*   Criar lista de eletrodomésticos.
    
*   Criar cadastro de aparelhos.
    
*   Criar cálculo de consumo.
    
*   Criar dashboard.
    
*   Implementar Local Storage.
    
*   Criar layout responsivo.
    

### Fase 2 — UX e refinamento

*   Melhorar textos.
    
*   Adicionar ícones.
    
*   Adicionar dicas inteligentes.
    
*   Melhorar estados vazios.
    
*   Ajustar acessibilidade.
    

### Fase 3 — Qualidade

*   Criar testes unitários.
    
*   Criar testes de componentes.
    
*   Revisar estrutura.
    
*   Melhorar documentação.
    

### Fase 4 — Portfólio

*   Criar README completo.
    
*   Adicionar prints.
    
*   Explicar uso de AI-Driven Development.
    
*   Explicar uso de Spec Driven Development.
    
*   Publicar deploy.
    

31\. Definição de Pronto
------------------------

Uma funcionalidade só será considerada pronta quando:

*   Estiver implementada.
    
*   Estiver responsiva.
    
*   Não quebrar funcionalidades existentes.
    
*   Tiver tratamento básico de erro.
    
*   Tiver textos claros para usuário não técnico.
    
*   Persistir corretamente quando necessário.
    
*   Atender aos critérios de aceite.
    
*   Estiver documentada quando relevante.
    

32\. Conclusão
--------------

O **Mother Friendly Energy Calculator** é um projeto de portfólio com forte valor narrativo e técnico.

Ele mostra que o desenvolvedor não apenas domina tecnologias como **Next.js**, **React**, **TypeScript** e **Local Storage**, mas também sabe interpretar um problema real, entender o perfil do usuário e transformar esse contexto em uma solução simples, funcional e bem especificada.

O diferencial do projeto está na combinação entre:

*   Problema real.
    
*   Produto com empatia.
    
*   Interface acessível.
    
*   Cálculos úteis.
    
*   Persistência local.
    
*   Processo baseado em especificações.
    
*   Uso consciente de IA no desenvolvimento.
    

Este projeto deve ser apresentado no GitHub como um case completo de **AI-Driven Development** e **Spec Driven Development** aplicado a um produto simples, útil e bem resolvido.