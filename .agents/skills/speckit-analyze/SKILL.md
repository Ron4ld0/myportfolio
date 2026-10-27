---
name: "speckit-analyze"
description: "Realiza uma análise não destrutiva de consistência e qualidade entre os artefatos spec.md, plan.md e tasks.md em Português do Brasil."
compatibility: "Requer a estrutura de projeto spec-kit com o diretório .specify/"
metadata:
  author: "github-spec-kit"
  source: "templates/commands/analyze.md"
---


## Entrada do Usuário

```text
$ARGUMENTS
```

Você **DEVE** considerar a entrada do usuário antes de prosseguir (se não estiver vazia).

## Verificações Pré-Execução

**Verificar ganchos de extensão (antes da análise)**:
- Verifique se `.specify/extensions.yml` existe na raiz do projeto.
- Se existir, leia-o e procure por entradas sob a chave `hooks.before_analyze`.
- Se nenhum gancho estiver registrado ou `.specify/extensions.yml` não existir, pule silenciosamente.

## Objetivo

Identificar inconsistências, duplicações, ambiguidades e itens subespecificados nos três artefatos principais (`spec.md`, `plan.md`, `tasks.md`) antes da implementação em Português do Brasil (pt-br).

**ESTRITAMENTE SOMENTE LEITURA (READ-ONLY)**: Não modifique nenhum arquivo. Exiba um relatório de análise estruturado.

Passos de execução:
1. Inicializar contexto e carregar artefatos.
2. Construir modelos semânticos de requisitos e tarefas.
3. Executar verificações de detecção (duplicação, ambiguidade, alinhamento com a constituição, lacunas de cobertura).
4. Atribuir severidades (CRÍTICO, ALTO, MÉDIO, BAIXO).
5. Gerar o Relatório de Análise da Especificação em Português do Brasil.

## Relatório de Conclusão

Apresente o relatório de análise em Português do Brasil.
