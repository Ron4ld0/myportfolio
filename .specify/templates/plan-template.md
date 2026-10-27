# Plano de Implementação: [FUNCIONALIDADE]

**Branch**: `[###-nome-da-funcionalidade]` | **Data**: [DATA] | **Spec**: [link]

**Entrada**: Especificação da funcionalidade de `/specs/[###-nome-da-funcionalidade]/spec.md`

**Nota**: Este modelo é preenchido pelo comando `/speckit-plan`; sua definição descreve o fluxo de execução.

## Resumo

[Extrair da spec da funcionalidade: requisito principal + abordagem técnica da pesquisa]

## Contexto Técnico

<!--
  AÇÃO NECESSÁRIA: Substitua o conteúdo desta seção pelos detalhes técnicos
  do projeto. A estrutura aqui é apresentada como caráter consultivo para guiar
  o processo de iteração.
-->

**Linguagem/Versão**: [ex: Python 3.11, Swift 5.9, Rust 1.75 ou PRECISA DE ESCLARECIMENTO]

**Dependências Principais**: [ex: FastAPI, UIKit, LLVM ou PRECISA DE ESCLARECIMENTO]

**Armazenamento**: [se aplicável, ex: PostgreSQL, CoreData, arquivos ou N/A]

**Testes**: [ex: pytest, XCTest, cargo test ou PRECISA DE ESCLARECIMENTO]

**Plataforma Alvo**: [ex: Servidor Linux, iOS 15+, WASM ou PRECISA DE ESCLARECIMENTO]

**Tipo de Projeto**: [ex: biblioteca/cli/servico-web/app-mobile/compilador/app-desktop ou PRECISA DE ESCLARECIMENTO]

**Metas de Desempenho**: [específico do domínio, ex: 1000 req/s, 10k linhas/seg, 60 fps ou PRECISA DE ESCLARECIMENTO]

**Restrições**: [específico do domínio, ex: <200ms p95, <100MB memória, suporte offline ou PRECISA DE ESCLARECIMENTO]

**Escala/Escopo**: [específico do domínio, ex: 10k usuários, 1M LOC, 50 telas ou PRECISA DE ESCLARECIMENTO]

## Verificação da Constituição

*PORTÃO: Deve passar antes da Pesquisa da Fase 0. Re-verificar após o design da Fase 1.*

[Portões determinados com base no arquivo da constituição]

## Estrutura do Projeto

### Documentação (esta funcionalidade)

```text
specs/[###-funcionalidade]/
├── plan.md              # Este arquivo (saída do comando /speckit-plan)
├── research.md          # Saída da Fase 0 (comando /speckit-plan)
├── data-model.md        # Saída da Fase 1 (comando /speckit-plan)
├── quickstart.md        # Saída da Fase 1 (comando /speckit-plan)
├── contracts/           # Saída da Fase 1 (comando /speckit-plan)
└── tasks.md             # Saída da Fase 2 (comando /speckit-tasks - NÃO criado por /speckit-plan)
```

### Código Fonte (raiz do repositório)
<!--
  AÇÃO NECESSÁRIA: Substitua a árvore de exemplo abaixo pela estrutura concreta
  para esta funcionalidade. Exclua opções não utilizadas e expanda a estrutura escolhida com
  caminhos reais (ex: apps/admin, packages/algo). O plano entregue não deve
  incluir rótulos de Opção.
-->

```text
# [REMOVER SE NÃO UTILIZADO] Opção 1: Projeto único (PADRÃO)
src/
├── models/
├── services/
├── cli/
└── lib/

tests/
├── contract/
├── integration/
└── unit/

# [REMOVER SE NÃO UTILIZADO] Opção 2: Aplicação Web (quando "frontend" + "backend" forem detectados)
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
└── tests/

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
└── tests/

# [REMOVER SE NÃO UTILIZADO] Opção 3: Mobile + API (quando "iOS/Android" forem detectados)
api/
└── [mesmo que backend acima]

ios/ ou android/
└── [estrutura específica da plataforma: módulos de funcionalidade, fluxos de UI, testes da plataforma]
```

**Decisão de Estrutura**: [Documente a estrutura selecionada e referencie os diretórios
reais capturados acima]

## Rastreamento de Complexidade

> **Preencha APENAS se a Verificação da Constituição contiver violações que devem ser justificadas**

| Violação | Por que é necessário | Alternativa mais simples rejeitada porque |
|-----------|----------------------|------------------------------------------|
| [ex: 4º projeto] | [necessidade atual] | [por que 3 projetos são insuficientes] |
| [ex: Padrão Repository] | [problema específico] | [por que acesso direto ao BD é insuficiente] |
