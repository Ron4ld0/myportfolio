---
name: "speckit-clarify"
description: "Identifica áreas subespecificadas na especificação de funcionalidade atual fazendo até 5 perguntas direcionadas de esclarecimento e codificando as respostas de volta na spec."
compatibility: "Requer a estrutura de projeto spec-kit com o diretório .specify/"
metadata:
  author: "github-spec-kit"
  source: "templates/commands/clarify.md"
---


## Entrada do Usuário

```text
$ARGUMENTS
```

Você **DEVE** considerar a entrada do usuário antes de prosseguir (se não estiver vazia).

## Verificações Pré-Execução

**Verificar ganchos de extensão (antes do esclarecimento)**:
- Verifique se `.specify/extensions.yml` existe na raiz do projeto.
- Se existir, leia-o e procure por entradas sob a chave `hooks.before_clarify`
- Se o YAML não puder ser analisado ou for inválido, ignore a verificação de ganchos silenciosamente e continue normalmente
- Filtre ganchos onde `enabled` for explicitamente `false`.

## Esboço

Objetivo: Detectar e reduzir ambiguidades ou pontos de decisão ausentes na especificação da funcionalidade ativa e registrar os esclarecimentos diretamente no arquivo da spec em Português do Brasil (pt-br).

Passos de execução:
1. Execute `.specify/scripts/powershell/check-prerequisites.ps1 -Json -PathsOnly`.
2. SE EXISTIR: Carregue `.specify/memory/constitution.md`.
3. Faça a varredura da especificação atual para identificar ambiguidades.
4. Faça perguntas sequenciais (máximo 5) em Português do Brasil com opções de escolha ou resposta curta (<=5 palavras), fornecendo uma opção **Recomendada** / **Sugerida**.
5. Integre cada resposta aceita na seção `## Clarificações` e atualize as seções relevantes do arquivo de especificação.
6. Revalide o checklist de qualidade de requisitos se ele existir.

## Relatório de Conclusão

Reporte a conclusão em Português do Brasil incluindo o número de perguntas respondidas, seções alteradas, status do checklist e o próximo comando recomendado (`/speckit-plan`).

## Concluído Quando

- [ ] Ambiguidades da especificação identificadas e integradas no arquivo em Português do Brasil
- [ ] Conclusão reportada ao usuário
