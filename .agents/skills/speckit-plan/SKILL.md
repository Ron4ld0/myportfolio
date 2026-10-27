---
name: "speckit-plan"
description: "Executa o fluxo de trabalho de planejamento de implementação usando o modelo de plano para gerar artefatos de design."
compatibility: "Requer a estrutura de projeto spec-kit com o diretório .specify/"
metadata:
  author: "github-spec-kit"
  source: "templates/commands/plan.md"
---


## Entrada do Usuário

```text
$ARGUMENTS
```

Você **DEVE** considerar a entrada do usuário antes de prosseguir (se não estiver vazia).

## Verificações Pré-Execução

**Verificar ganchos de extensão (antes do planejamento)**:
- Verifique se `.specify/extensions.yml` existe na raiz do projeto.
- Se existir, leia-o e procure por entradas sob a chave `hooks.before_plan`
- Se o YAML não puder ser analisado ou for inválido, ignore a verificação de ganchos silenciosamente e continue normalmente
- Filtre ganchos onde `enabled` for explicitamente `false`. Trate ganchos sem o campo `enabled` como habilitados por padrão.
- Para cada gancho restante, **não** tente interpretar ou avaliar expressões de `condition`
- Ao construir comandos slash a partir de nomes de comandos de gancho, substitua pontos (`.`) por hífens (`-`). Por exemplo, `speckit.git.commit` → `/speckit-git-commit`.
- Se nenhum gancho estiver registrado ou `.specify/extensions.yml` não existir, pule silenciosamente.

## Esboço

1. **Configuração**: Execute `.specify/scripts/powershell/setup-plan.ps1 -Json` na raiz do repositório e analise o JSON para obter FEATURE_SPEC, IMPL_PLAN, SPECS_DIR, BRANCH.

2. **Carregar contexto**: Leia FEATURE_SPEC e `.specify/memory/constitution.md`. Carregue o modelo IMPL_PLAN (já copiado).

3. **Executar fluxo de trabalho do plano**: Siga a estrutura no modelo IMPL_PLAN para:
   - Preencher o Contexto Técnico (marque incógnitas como "PRECISA DE ESCLARECIMENTO")
   - Preencher a seção de Verificação da Constituição a partir da constituição
   - Avaliar portões (ERRO se as violações não forem justificadas)
   - Fase 0: Gerar research.md (resolver todos os marcadores PRECISA DE ESCLARECIMENTO)
   - Fase 1: Gerar data-model.md, contracts/, quickstart.md em Português do Brasil (pt-br)
   - Reavaliar a Verificação da Constituição após o design

## Ganchos Pós-Execução Obrigatórios

Você DEVE concluir esta seção antes de reportar a conclusão ao usuário.

## Relatório de Conclusão

O comando termina após o design da Fase 1. Reporte a branch, o caminho de IMPL_PLAN e os artefatos gerados em Português do Brasil.

## Fases

### Fase 0: Esboço & Pesquisa
### Fase 1: Design & Contratos

## Regras principais

- Use caminhos absolutos para operações no sistema de arquivos; use caminhos relativos ao projeto para referências na documentação
- ERRO em falhas de portão ou esclarecimentos não resolvidos

## Concluído Quando

- [ ] Fluxo do plano executado e artefatos de design gerados
- [ ] Conclusão reportada ao usuário em Português do Brasil
