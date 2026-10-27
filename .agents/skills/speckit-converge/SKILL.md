---
name: "speckit-converge"
description: "Avalia a base de código atual em relação à spec, plano e tarefas da funcionalidade, adicionando qualquer trabalho restante como novas tarefas em tasks.md em Português do Brasil."
compatibility: "Requer a estrutura de projeto spec-kit com o diretório .specify/"
metadata:
  author: "github-spec-kit"
  source: "templates/commands/converge.md"
---


## Entrada do Usuário

```text
$ARGUMENTS
```

Você **DEVE** considerar a entrada do usuário antes de prosseguir (se não estiver vazia).

## Verificações Pré-Execução

**Verificar ganchos de extensão (antes da convergência)**:
- Verifique se `.specify/extensions.yml` existe na raiz do projeto.
- Se existir, leia-o e procure por entradas sob a chave `hooks.before_converge`.
- Se nenhum gancho estiver registrado ou `.specify/extensions.yml` não existir, pule silenciosamente.

## Objetivo

Reduzir a lacuna entre o que a especificação da funcionalidade (`spec.md`), o plano (`plan.md`) e as tarefas (`tasks.md`) exigem e o que a base de código implementa atualmente.

**APENAS ADICIONAR (APPEND-ONLY), NUNCA REESCREVER**: O único trabalho de escrita do comando é adicionar uma nova seção `## Fase N: Convergência` ao final do arquivo `tasks.md` em Português do Brasil (pt-br).

Passos de execução:
1. Inicializar contexto e carregar artefatos.
2. Construir inventário de intenções e avaliar a base de código.
3. Classificar lacunas (`missing`, `partial`, `contradicts`, `unrequested`) e atribuir severidades.
4. Apresentar o resumo das descobertas em Português do Brasil.
5. Se houver lacunas, adicionar novas tarefas ao final de `tasks.md`. Se a implementação já satisfazer tudo, manter `tasks.md` inalterado e reportar sucesso.

## Relatório de Conclusão

Reporte o resultado da convergência ao usuário em Português do Brasil.
