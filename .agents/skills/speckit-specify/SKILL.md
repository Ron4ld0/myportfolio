---
name: "speckit-specify"
description: "Cria ou atualiza a especificação de funcionalidade a partir de uma descrição em linguagem natural."
compatibility: "Requer a estrutura de projeto spec-kit com o diretório .specify/"
metadata:
  author: "github-spec-kit"
  source: "templates/commands/specify.md"
---


## Entrada do Usuário

```text
$ARGUMENTS
```

Você **DEVE** considerar a entrada do usuário antes de prosseguir (se não estiver vazia).

## Verificações Pré-Execução

**Verificar ganchos de extensão (antes da especificação)**:
- Verifique se `.specify/extensions.yml` existe na raiz do projeto.
- Se existir, leia-o e procure por entradas sob a chave `hooks.before_specify`
- Se o YAML não puder ser analisado ou for inválido, ignore a verificação de ganchos silenciosamente e continue normalmente
- Filtre ganchos onde `enabled` for explicitamente `false`. Trate ganchos sem o campo `enabled` como habilitados por padrão.
- Para cada gancho restante, **não** tente interpretar ou avaliar expressões de `condition`:
  - Se o gancho não tiver campo `condition`, ou for nulo/vazio, trate o gancho como executável
  - Se o gancho definir uma `condition` não vazia, pule o gancho e deixe a avaliação da condição para a implementação do HookExecutor
- Ao construir comandos slash a partir de nomes de comandos de gancho, substitua pontos (`.`) por hífens (`-`). Por exemplo, `speckit.git.commit` → `/speckit-git-commit`.
- Para cada gancho executável, exiba o seguinte com base em sua flag `optional`:
  - **Gancho Opcional** (`optional: true`):
    ```
    ## Extension Hooks

    **Optional Pre-Hook**: {extension}
    Command: `/{command}`
    Description: {description}

    Prompt: {prompt}
    To execute: `/{command}`
    ```
  - **Gancho Obrigatório** (`optional: false`):
    ```
    ## Extension Hooks

    **Automatic Pre-Hook**: {extension}
    Executing: `/{command}`
    EXECUTE_COMMAND: {command}

    Aguarde o resultado do comando do gancho antes de prosseguir para o Esboço.
    ```
    Após emitir o bloco acima você DEVE realmente invocar o gancho e aguardar sua conclusão antes de continuar.
- Se nenhum gancho estiver registrado ou `.specify/extensions.yml` não existir, pule silenciosamente.

## Esboço

O texto digitado pelo usuário após `/speckit-specify` na mensagem que disparou o comando **é** a descrição da funcionalidade. Assuma que você sempre a tem disponível nesta conversa mesmo se `$ARGUMENTS` aparecer literalmente. Não peça ao usuário para repeti-la, a menos que ele tenha fornecido um comando vazio.

Dada essa descrição de funcionalidade, faça o seguinte:

1. **Gere um nome curto e conciso** (2-4 palavras) para a funcionalidade:
   - Analise a descrição e extraia as palavras-chave mais significativas
   - Crie um nome curto de 2-4 palavras no formato ação-substantivo quando possível (ex: "add-user-auth", "fix-payment-bug")
   - Preserve termos técnicos e acrônimos (OAuth2, API, JWT, etc.)
   - Mantenha conciso, porém descritivo

2. **Criação de branch** (opcional, via gancho)

3. **Crie o diretório de especificação da funcionalidade**:
   - Diretório padrão sob `specs/` (ex: `specs/001-nome-curto`)
   - Copie o arquivo `spec-template` resolvido para `SPECIFY_FEATURE_DIRECTORY/spec.md`
   - Persista o caminho resolvido em `.specify/feature.json`:
     ```json
     {
       "feature_directory": "<diretório resolvido>"
     }
     ```

4. Carregue o arquivo `spec-template` ativo resolvido para entender as seções obrigatórias.

5. **SE EXISTIR**: Carregue `.specify/memory/constitution.md` para princípios do projeto e restrições de governança.

6. Siga este fluxo de execução:
    1. Analise a descrição do usuário a partir dos argumentos
       Se vazia: ERRO "Nenhuma descrição de funcionalidade fornecida"
    2. Extraia conceitos-chave da descrição (atores, ações, dados, restrições)
    3. Para aspectos não claros:
       - Faça suposições informadas com base no contexto e padrões da indústria
       - Marque com [PRECISA DE ESCLARECIMENTO: pergunta específica] apenas se necessário (máximo 3 marcadores)
    4. Preencha a seção Cenários de Usuário & Testes
    5. Gere Requisitos Funcionais (cada requisito deve ser testável)
    6. Defina Critérios de Sucesso mensuráveis e agnósticos de tecnologia
    7. Identifique Entidades Chave (se houver dados envolvidos)

7. Escreva a especificação em `SPEC_FILE` em Português do Brasil (pt-br) utilizando a estrutura do modelo.

8. **Validação de Qualidade da Especificação**: Crie o checklist em `SPECIFY_FEATURE_DIRECTORY/checklists/requirements.md` e valide os itens.

## Relatório de Conclusão

Reporte a conclusão ao usuário informando o caminho do diretório da funcionalidade, o arquivo da spec e o resumo dos resultados da validação em Português do Brasil.
