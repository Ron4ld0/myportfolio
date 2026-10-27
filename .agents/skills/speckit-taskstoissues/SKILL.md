---
name: "speckit-taskstoissues"
description: "Converte tarefas existentes em issues acionáveis do GitHub ordenadas por dependências em Português do Brasil."
compatibility: "Requer a estrutura de projeto spec-kit com o diretório .specify/"
metadata:
  author: "github-spec-kit"
  source: "templates/commands/taskstoissues.md"
---


## Entrada do Usuário

```text
$ARGUMENTS
```

Você **DEVE** considerar a entrada do usuário antes de prosseguir (se não estiver vazia).

## Verificações Pré-Execução

**Verificar ganchos de extensão (antes da conversão de tarefas em issues)**:
- Verifique se `.specify/extensions.yml` existe na raiz do projeto.
- Se existir, leia-o e procure por entradas sob a chave `hooks.before_taskstoissues`.
- Se nenhum gancho estiver registrado ou `.specify/extensions.yml` não existir, pule silenciosamente.

## Esboço

1. Execute `.specify/scripts/powershell/check-prerequisites.ps1 -Json -RequireTasks -IncludeTasks`.
2. SE EXISTIR: Carregue `.specify/memory/constitution.md`.
3. Obtenha o remote do Git e garanta que seja um repositório GitHub.
4. Busque issues existentes no GitHub para evitar duplicação.
5. Para cada tarefa em `tasks.md`, crie uma issue no GitHub com o título `T001: <descrição>`.

## Relatório de Conclusão

Reporte as issues criadas e ignoradas ao usuário em Português do Brasil.
