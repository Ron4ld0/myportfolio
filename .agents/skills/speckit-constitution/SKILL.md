---
name: "speckit-constitution"
description: "Cria ou atualiza a constituição do projeto a partir de entradas interativas ou fornecidas de princípios em Português do Brasil."
compatibility: "Requer a estrutura de projeto spec-kit com o diretório .specify/"
metadata:
  author: "github-spec-kit"
  source: "templates/commands/constitution.md"
---


## Entrada do Usuário

```text
$ARGUMENTS
```

Você **DEVE** considerar a entrada do usuário antes de prosseguir (se não estiver vazia).

## Proteção de Escopo

O trabalho deste comando limita-se a atualizar a própria constituição do projeto em `.specify/memory/constitution.md`.

## Esboço

Você está atualizando a constituição do projeto em `.specify/memory/constitution.md` usando o idioma Português do Brasil (pt-br).

Passos de execução:
1. Carregue a constituição existente em `.specify/memory/constitution.md`.
2. Colete/derive valores para os marcadores de posição.
3. Elabore o conteúdo atualizado da constituição em Português do Brasil.
4. Produza um Relatório de Impacto de Sincronização.
5. Escreva a constituição concluída de volta em `.specify/memory/constitution.md`.
6. Exiba um resumo final ao usuário em Português do Brasil.
