---
name: "speckit-tasks"
description: "Gera um arquivo tasks.md acionável e ordenado por dependências para a funcionalidade com base nos artefatos de design disponíveis."
compatibility: "Requer a estrutura de projeto spec-kit com o diretório .specify/"
metadata:
  author: "github-spec-kit"
  source: "templates/commands/tasks.md"
---


## Entrada do Usuário

```text
$ARGUMENTS
```

Você **DEVE** considerar a entrada do usuário antes de prosseguir (se não estiver vazia).

## Verificações Pré-Execução

**Verificar ganchos de extensão (antes da geração de tarefas)**:
- Verifique se `.specify/extensions.yml` existe na raiz do projeto.
- Se existir, leia-o e procure por entradas sob a chave `hooks.before_tasks`
- Se o YAML não puder ser analisado ou for inválido, ignore a verificação de ganchos silenciosamente e continue normalmente
- Filtre ganchos onde `enabled` for explicitamente `false`.
- Se nenhum gancho estiver registrado ou `.specify/extensions.yml` não existir, pule silenciosamente.

## Esboço

1. **Configuração**: Execute `.specify/scripts/powershell/setup-tasks.ps1 -Json` na raiz do repositório e analise FEATURE_DIR, TASKS_TEMPLATE e a lista AVAILABLE_DOCS.

2. **Carregar documentos de design**: Leia de FEATURE_DIR:
   - **Obrigatórios**: plan.md, spec.md
   - **Opcionais**: data-model.md, contracts/, research.md, quickstart.md
   - **SE EXISTIR**: Carregue `.specify/memory/constitution.md`

3. **Executar fluxo de geração de tarefas**:
   - Gere tarefas em Português do Brasil (pt-br) organizadas por história de usuário
   - Gere gráfico de dependências
   - Crie exemplos de execução em paralelo por história de usuário

4. **Gerar tasks.md**: Use o modelo e preencha com tarefas detalhadas em Português do Brasil seguindo estritamente o formato de checklist: `- [ ] [ID] [P?] [História] Descrição com caminho do arquivo`.

## Relatório de Conclusão

Exiba o caminho para o arquivo tasks.md gerado e o resumo em Português do Brasil.

## Concluído Quando

- [ ] tasks.md gerado com todas as fases, IDs de tarefas e caminhos de arquivo em Português do Brasil
- [ ] Conclusão reportada ao usuário
