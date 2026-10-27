---
name: "speckit-checklist"
description: "Gera um checklist personalizado de qualidade dos requisitos para a funcionalidade atual em Português do Brasil."
compatibility: "Requer a estrutura de projeto spec-kit com o diretório .specify/"
metadata:
  author: "github-spec-kit"
  source: "templates/commands/checklist.md"
---


## Entrada do Usuário

```text
$ARGUMENTS
```

Você **DEVE** considerar a entrada do usuário antes de prosseguir (se não estiver vazia).

## Conceito Chave

Checklists são **TESTES UNITÁRIOS PARA OS REQUISITOS**. Eles validam a qualidade, clareza e completude dos requisitos escritos em Português do Brasil (pt-br), e NÃO o teste da implementação do código.

## Esboço

1. Execute `.specify/scripts/powershell/check-prerequisites.ps1 -Json`.
2. SE EXISTIR: Carregue `.specify/memory/constitution.md`.
3. Esclareça intenção com o usuário em Português do Brasil se necessário.
4. Carregue o contexto da funcionalidade (spec.md, plan.md, tasks.md).
5. Gere o checklist em `FEATURE_DIR/checklists/[dominio].md` no formato da constituição do projeto em Português do Brasil.

## Relatório de Conclusão

Exiba o caminho completo para o arquivo de checklist gerado, a contagem de itens e o resumo em Português do Brasil.
