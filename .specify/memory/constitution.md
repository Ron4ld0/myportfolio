<!--
### Sync Impact Report
- Version change: 0.0.0 → 1.0.0 (Ratificação inicial da Constituição do Projeto)
- Modified principles: Ratificados 5 princípios fundamentais para o Portfólio Web SDD
- Added sections: Restrições de Stack & Qualidade, Fluxo de Desenvolvimento SDD & Governança
- Removed sections: Nenhuma
- Deferred TODOs: Nenhum
-->

# Constituição do Projeto: Portfólio Ronaldo.dev

## Princípios Fundamentais

### I. Vanilla First & Alta Performance
Toda funcionalidade visual e lógica da interface DEVE ser implementada utilizando HTML5 semântico, Vanilla CSS modular e JavaScript ES6+ puro. A inclusão de bibliotecas ou frameworks pesados é proibida a menos que explicitamente aprovada. O site deve manter tempo de carregamento inferior a 1 segundo e pontuação de performance no Lighthouse próxima de 100.

### II. Arquitetura Modular & Design System Coeso
O código fonte DEVE ser mantido com forte separação de responsabilidades (`index.html`, `css/style.css`, `js/main.js`). O design deve seguir estritamente o Design System do projeto (paleta escura com neon green `#22c55e`, efeitos glassmorphism e orbes de brilho ambiente). Estilos inline ad-hoc são descorajados e variáveis CSS globais devem ser reutilizadas.

### III. Responsividade, SEO & Acessibilidade Nativa (WCAG)
Toda nova seção ou componente DEVE ser desenhado Mobile-First e funcionar perfeitamente em dispositivos móveis, tablets e desktops. Elementos interativos DEVEM conter atributos ARIA apropriados, navegação via teclado acessível e tags meta SEO descritivas para garantir indexação perfeita e usabilidade universal.

### IV. Desenvolvimento Orientado a Especificações (SDD Strict)
Nenhuma alteração estrutural ou nova funcionalidade de grande porte pode ser implementada diretamente no código sem antes passar pelo fluxo Spec-Kit: Especificação (`/speckit-specify`), Planejamento (`/speckit-plan`) e Quebra de Tarefas (`/speckit-tasks`). O código deve sempre refletir fielmente os requisitos aprovados na especificação.

### V. Transparência & Dados Reais de Impacto
Os cases de projetos, métricas de eficiência, tecnologias e formação exibidos no portfólio DEVEM refletir experiências técnicas autênticas em engenharia de dados, automação Python, IA preditiva e integração de sistemas (BPM/ERP), mantendo informações claras para recrutadores e clientes.

## Restrições de Stack & Qualidade

- **Tecnologias Core**: HTML5 Semântico, CSS3 (Variáveis, Flexbox, Grid), JavaScript (ES6+ Vanilla).
- **Recursos Externos Permitidos**: FontAwesome 6+ (ícones) e Google Fonts via CDN.
- **Padrão de Código**: Código limpo, identação consistente (2 espaços), comentários explicativos em seções complexas e ausência de código morto ou arquivos órfãos.
- **Compatibilidade**: Suporte aos navegadores modernos (Chrome, Firefox, Edge, Safari).

## Fluxo de Desenvolvimento SDD

1. **Especificação**: Definição clara dos cenários de usuário e requisitos funcionais em `specs/<feature>/spec.md`.
2. **Design & Planejamento**: Verificação do cumprimento desta constituição em `plan.md` antes de qualquer escrita de código.
3. **Execução Incremental**: Respeito estrito ao plano de tarefas em `tasks.md`, realizando commits lógicos e testáveis.

## Governança

- **Autoridade da Constituição**: Esta constituição sobrepõe-se a qualquer decisão informal de implementação.
- **Emendas**: Alterações nesta constituição exigem atualização do número de versão semântica (MAJOR para mudanças de princípios, MINOR para adições de seções, PATCH para esclarecimentos) e registro no *Sync Impact Report*.

**Versão**: 1.0.0 | **Ratificada**: 2026-08-07 | **Última Alteração**: 2026-08-07
