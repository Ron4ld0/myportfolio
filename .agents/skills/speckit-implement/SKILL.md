---
name: "speckit-implement"
description: "Executa o plano de implementação processando e executando todas as tarefas definidas em tasks.md"
compatibility: "Requer a estrutura de projeto spec-kit com o diretório .specify/"
metadata:
  author: "github-spec-kit"
  source: "templates/commands/implement.md"
---


## Entrada do Usuário

```text
$ARGUMENTS
```

Você **DEVE** considerar a entrada do usuário antes de prosseguir (se não estiver vazia).

## Verificações Pré-Execução

**Verificar ganchos de extensão (antes da implementação)**:
- Verifique se `.specify/extensions.yml` existe na raiz do projeto.
- Se existir, leia-o e procure por entradas sob a chave `hooks.before_implement`
- Se o YAML não puder ser analisado ou for inválido, ignore a verificação de ganchos silenciosamente e continue normalmente
- Filtre ganchos onde `enabled` for explicitamente `false`.
- Se nenhum gancho estiver registrado ou `.specify/extensions.yml` não existir, pule silenciosamente.

## Esboço

1. Execute `.specify/scripts/powershell/check-prerequisites.ps1 -Json -RequireTasks -IncludeTasks` na raiz do repositório.

2. **Verificar status de checklists** (se FEATURE_DIR/checklists/ existir):
   - Exiba o status e pare se houver checklists incompletos, solicitando confirmação em Português do Brasil.

3. Carregue e analise o contexto de implementação (tasks.md, plan.md, etc.).

4. **Verificação de Configuração do Projeto** (arquivos .gitignore, .dockerignore, etc.).

5. Analise a estrutura de tasks.md e execute cada tarefa sequencialmente ou em paralelo quando marcado com `[P]`.

6. Marque cada tarefa como `[X]` em tasks.md ao ser concluída.

## Relatório de Conclusão

Reporte o status final com um resumo das tarefas concluídas em Português do Brasil.

## Concluído Quando

- [ ] Todas as tarefas em tasks.md foram concluídas e marcadas como `[X]`
- [ ] Conclusão reportada ao usuário em Português do Brasil
