/* ==========================================================================
   CONFIGURAÇÕES GERAIS DO PORTFÓLIO
   ========================================================================== */
// Domínio canônico para SEO e compartilhamento. Substitua quando registrar o domínio oficial:
const SITE_DOMAIN = "https://ronaldo.dev"; // [COLOQUE AQUI O DOMÍNIO]

// Visibilidade do botão de Baixar Currículo na seção de Contato:
// Mantenha false até adicionar seu PDF oficial em: assets/curriculo-ronaldo-melo.pdf
const SHOW_CV_BUTTON = false;

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initSkillFilters();
  initProjectFilters();
  initProjectActionButtons();
  initCvButton();
  initProjectModals();
  initCopyEmail();
  initScrollAnimations();
});

/* --- CV Button Visibility Toggle --- */
function initCvButton() {
  const cvBtn = document.getElementById('cv-download-btn');
  if (!cvBtn) return;
  cvBtn.style.display = SHOW_CV_BUTTON ? 'inline-flex' : 'none';
}

/* --- Header Scroll Effect --- */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* --- Mobile Menu Toggle --- */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = toggleBtn.querySelector('i');
    if (icon) {
      if (navMenu.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    }
  });

  // Close menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      const icon = toggleBtn.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-bars';
    });
  });
}

/* --- Skill Filter Tabs --- */
function initSkillFilters() {
  const filterBtns = document.querySelectorAll('.skills-filter .filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      skillCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --- Project Filter Tabs --- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.projects-filter .filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projectCards.forEach(card => {
        const categories = (card.dataset.category || '').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   CONFIGURAÇÃO CENTRAL DE LINKS DOS PROJETOS (GITHUB & DEMO)
   Preencha os links abaixo. Quando o link for vazio ('') ou null,
   o botão correspondente NÃO será renderizado na interface nem no modal.
   ========================================================================== */
const PROJECT_LINKS = {
  voicematch: {
    github: '', // Preencha com o link do GitHub, ex: 'https://github.com/Ron4ld0/voicematch-ai'
    demo: ''    // Preencha com o link de demonstração
  },
  economiza: {
    github: '',
    demo: ''
  },
  clinica: {
    github: '',
    demo: ''
  },
  zuq: {
    github: '',
    demo: ''
  },
  n8n: {
    github: '',
    demo: ''
  },
  sites: {
    github: '',
    demo: 'https://www.rlconsultoriaempresarial.com.br/'
  }
};

/* --- Render Project Action Buttons (Only when link exists) --- */
function initProjectActionButtons() {
  document.querySelectorAll('.project-card').forEach(card => {
    const projectId = card.dataset.project;
    if (!projectId || !PROJECT_LINKS[projectId]) return;

    const actionsContainer = card.querySelector('.project-actions');
    if (!actionsContainer) return;

    const links = PROJECT_LINKS[projectId];
    actionsContainer.innerHTML = '';

    if (links.github && links.github.trim() !== '') {
      const ghBtn = document.createElement('a');
      ghBtn.href = links.github;
      ghBtn.target = '_blank';
      ghBtn.rel = 'noopener noreferrer';
      ghBtn.className = 'project-action-btn';
      ghBtn.setAttribute('aria-label', `Código no GitHub do projeto ${projectId}`);
      ghBtn.innerHTML = '<i class="fa-brands fa-github"></i> GitHub';
      actionsContainer.appendChild(ghBtn);
    }

    if (links.demo && links.demo.trim() !== '') {
      const demoBtn = document.createElement('a');
      demoBtn.href = links.demo;
      demoBtn.target = '_blank';
      demoBtn.rel = 'noopener noreferrer';
      demoBtn.className = 'project-action-btn project-demo-btn';
      const isSites = projectId === 'sites';
      demoBtn.setAttribute('aria-label', isSites ? 'Acessar site da R&L Consultoria Empresarial' : `Demonstração ao vivo do projeto ${projectId}`);
      demoBtn.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i> ${isSites ? 'Ver Site' : 'Demo'}`;
      actionsContainer.appendChild(demoBtn);
    }
  });
}

const PROJECTS_DATA = {
  voicematch: {
    title: "VoiceMatch AI",
    subtitle: "Plataforma de recrutamento por voz com Inteligência Artificial",
    award: "1º LUGAR — HACKATHON MATCH TECH",
    newsUrl: "https://www.jornaldealagoas.com.br/ciencia/2026/07/27/1047-hackathon-em-alagoas-desenvolve-solucoes-com-ia-para-conectar-talentos-ao-mercado",
    newsTitle: "Matéria no Jornal de Alagoas",
    techs: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "Pytest", "JWT", "Groq LLMs"],
    description: `
      <div style="margin-bottom:16px;">
        <strong style="color:var(--text-white);">O Problema:</strong>
        <p>Processos seletivos demorados, triagem de currículos ineficiente e viés humano nas entrevistas técnicas e comportamentais.</p>
      </div>
      <div style="margin-bottom:16px;">
        <strong style="color:var(--text-white);">A Solução:</strong>
        <p>A Íris, uma agente de IA que conduz entrevistas por voz, analisa respostas e gera avaliações personalizadas para candidatos e um scorecard para recrutadores em tempo real.</p>
      </div>
      <div style="margin-bottom:16px;">
        <strong style="color:var(--text-white);">A Arquitetura & Stack:</strong>
        <p>Aplicação Full Stack com frontend em React/TypeScript, backend em Python/FastAPI e banco PostgreSQL. Deploy containerizado com Docker. A arquitetura é multi-tenant com isolamento de dados por empresa e autenticação JWT.</p>
      </div>
      <div style="margin-bottom:16px;">
        <strong style="color:var(--text-white);">Minha Contribuição:</strong>
        <ul style="padding-left:20px; list-style:disc;">
          <li>Construção da API RESTful;</li>
          <li>Modelagem do banco e gerência via Alembic;</li>
          <li>Containerização (Docker);</li>
          <li>Integração com modelos de IA e engenharia de prompts;</li>
          <li>Implementação das regras de negócio, arquitetura multi-tenant, autenticação e autorização;</li>
          <li>Testes automatizados.</li>
        </ul>
      </div>
      <div style="margin-bottom:16px;">
        <strong style="color:var(--text-white);">Resultado:</strong>
        <p>O projeto conquistou o 1º Lugar no Hackathon Match Tech, destacando-se pela inovação, complexidade técnica (processamento de áudio/LLM) e potencial de mercado.</p>
      </div>
    `
  },
  economiza: {
    title: "Economiza.Ai",
    subtitle: "Comparador de preços de supermercados com IA e geolocalização",
    award: "FULL STACK • MOBILE • IA",
    techs: ["React Native", "Expo", "TypeScript", "Python", "FastAPI", "PostgreSQL", "PostGIS", "Gemini API", "JWT", "Google SSO"],
    description: `
      <div style="margin-bottom:16px;">
        <strong style="color:var(--text-white);">O Problema:</strong>
        <p>Dificuldade dos consumidores em comparar preços de itens de supermercado em sua região de forma rápida e atualizada.</p>
      </div>
      <div style="margin-bottom:16px;">
        <strong style="color:var(--text-white);">A Solução:</strong>
        <p>Aplicativo mobile de pesquisa e comparação de preços que utiliza os dados públicos de notas fiscais da SEFAZ-AL, aliado à geolocalização do usuário (raio de 10 km) e a um assistente de Inteligência Artificial.</p>
      </div>
      <div style="margin-bottom:16px; padding: 16px; background: rgba(0,0,0,0.3); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); text-align: center; font-family: var(--font-mono); font-size: 0.85rem; color: var(--color-neon-bright);">
        React Native<br>↓<br>FastAPI<br>↓<br>PostgreSQL + PostGIS<br>↓<br>SEFAZ-AL &nbsp;&nbsp; ↘ Gemini AI
      </div>
      <div style="margin-bottom:16px;">
        <strong style="color:var(--text-white);">Minha Contribuição:</strong>
        <ul style="padding-left:20px; list-style:disc;">
          <li>Desenvolvimento mobile de ponta a ponta (React Native/Expo);</li>
          <li>Construção do backend em FastAPI e modelagem geoespacial (PostGIS);</li>
          <li>Integração da Gemini API com <em>Tool Calling</em>;</li>
          <li>Autenticação via Google SSO e JWT;</li>
          <li>Leitor de código de barras e sistema offline/cache.</li>
        </ul>
      </div>
    `
  },
  clinica: {
    title: "Sistema de Gestão de Clínica Médica",
    subtitle: "Backend escalável focado em engenharia de software",
    award: "ENGENHARIA DE SOFTWARE",
    techs: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "Pytest", "Bcrypt"],
    description: `
      <div style="margin-bottom:16px;">
        <strong style="color:var(--text-white);">A Solução:</strong>
        <p>Backend de um sistema de agendamento médico desenvolvido com foco absoluto em engenharia de software, segurança e regras de negócio, indo além de um simples CRUD.</p>
      </div>
      <div style="margin-bottom:16px;">
        <strong style="color:var(--text-white);">Destaques de Arquitetura:</strong>
        <ul style="padding-left:20px; list-style:disc;">
          <li>Arquitetura em camadas e uso do Repository Pattern;</li>
          <li>Dependency Injection, Strategy + Factory;</li>
          <li>Autenticação JWT, RBAC e Bcrypt;</li>
          <li><strong>Pessimistic Locking</strong> para evitar condições de corrida em agendamentos simultâneos;</li>
          <li><strong>100% de cobertura de testes automatizados</strong> com pipeline CI;</li>
        </ul>
      </div>
    `

  },
  zuq: {
    title: "Automação & Engenharia de Dados",
    subtitle: "Geocodificador de Endereços e Unificador de Planilhas",
    award: "+15 MIL GEOLOCALIZAÇÕES PROCESSADAS",
    techs: ["Python", "Pandas", "Requests", "OpenPyXL", "Tkinter", "Google Geocoding API", "Nominatim"],
    description: `
      <div style="margin-bottom:16px;">
        <strong style="color:var(--text-white);">Geocodificador de Endereços:</strong>
        <p>Aplicação desktop em Python para converter listas de endereços logísticos em coordenadas geográficas automaticamente, processando mais de 15 mil localizações por ciclo e reduzindo o tempo operacional de horas para minutos.</p>
      </div>
      <div style="margin-bottom:16px;">
        <strong style="color:var(--text-white);">Unificador de Planilhas:</strong>
        <p>Ferramenta desenvolvida para resolver um gargalo real: unificar e tratar dados logísticos de clientes que operam sem integração direta via ERP ou API, automatizando a engenharia e o tratamento de dados (ETL).</p>
      </div>
    `
  },
  n8n: {
    title: "Automações n8n",
    subtitle: "Pipelines de integração resiliente, webhooks HMAC e OAuth2",
    award: "AUTOMAÇÃO & DADOS",
    techs: ["n8n", "REST APIs", "OAuth2", "HMAC-SHA256", "PostgreSQL", "UUID v7", "OpenRouter"],
    description: `
      <div style="margin-bottom:16px;">
        <strong style="color:var(--text-white);">A Solução:</strong>
        <p>Desenvolvimento e publicação de fluxos avançados de automação no n8n para integração e orquestração de sistemas empresariais, sincronização de bancos de dados e consumo seguro de APIs de terceiros.</p>
      </div>
      <div style="margin-bottom:16px;">
        <strong style="color:var(--text-white);">Destaques de Engenharia:</strong>
        <ul style="padding-left:20px; list-style:disc;">
          <li>Webhooks autenticados com verificação de assinatura HMAC-SHA256 e handshake de challenge-response;</li>
          <li>Pipelines híbridos de sincronização (tempo real + batch) com checkpoint incremental e upsert idempotente;</li>
          <li>Rastreamento de entregas em tempo real com eventos acionados por webhook e identificadores UUID v7;</li>
          <li>Modelagem de ETL multi-entidade com normalização de dados e persistência em PostgreSQL.</li>
        </ul>
      </div>
      <div style="margin-bottom:16px;">
        <strong style="color:var(--text-white);">Resultado:</strong>
        <p>Eliminação de rotinas manuais de carga e extração de dados, garantindo consistência transacional e integridade entre sistemas.</p>
      </div>
    `
  },
  sites: {
    title: "Sites e Landing Pages (Freelance)",
    subtitle: "Páginas institucionais de alta conversão para consultoria e setor imobiliário",
    award: "FREELANCE • WEB & SERVERLESS",
    techs: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Google Apps Script", "Google Sheets", "Vercel"],
    description: `
      <div style="margin-bottom:16px;">
        <strong style="color:var(--text-white);">A Solução:</strong>
        <p>Desenvolvimento de páginas e portais institucionais de alta conversão para clientes reais como a <a href="https://www.rlconsultoriaempresarial.com.br/" target="_blank" rel="noopener noreferrer" style="color:var(--color-neon-bright); text-decoration:underline; font-weight:600;">R&L Consultoria Empresarial</a> e setor imobiliário, combinando design moderno, performance e captação automatizada de leads.</p>
      </div>
      <div style="margin-bottom:16px;">
        <strong style="color:var(--text-white);">Destaques de Implementação:</strong>
        <ul style="padding-left:20px; list-style:disc;">
          <li>Interfaces limpas desenvolvidas em React/TypeScript e Vanilla HTML/CSS/JS com deploy contínuo na Vercel;</li>
          <li>Backend <em>serverless</em> utilizando Google Apps Script para processamento assíncrono de formulários;</li>
          <li>Armazenamento automatizado e centralizado de leads diretamente em planilhas Google Sheets sem custo fixo de infraestrutura;</li>
          <li>Otimização para SEO, performance e total adaptação mobile.</li>
        </ul>
      </div>
      <div style="margin-top:16px;">
        <a href="https://www.rlconsultoriaempresarial.com.br/" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> Acessar Site da R&L Consultoria
        </a>
      </div>
    `
  }
};

function initProjectModals() {
  const backdrop = document.getElementById('project-modal');
  const closeBtn = document.querySelector('.modal-close');
  const modalBody = document.getElementById('modal-body-content');

  if (!backdrop || !modalBody) return;

  document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.dataset.project;
      const data = PROJECTS_DATA[projectId];

      if (data) {
        let newsBadgeHtml = '';
        if (data.newsUrl) {
          newsBadgeHtml = `
            <a href="${data.newsUrl}" target="_blank" rel="noopener noreferrer" class="news-tag" style="margin-top:8px; display:inline-flex;">
              <i class="fa-solid fa-newspaper"></i> ${data.newsTitle} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.7em;"></i>
            </a>
          `;
        }

        let awardHtml = '';
        if (data.award) {
          awardHtml = `<span class="award-tag"><i class="fa-solid fa-trophy"></i> ${data.award}</span>`;
        }

        const techsHtml = data.techs.map(t => `<span class="tag-badge green">${t}</span>`).join(' ');

        // Action links for modal (GitHub / Demo) if present
        let modalActionsHtml = '';
        const links = PROJECT_LINKS[projectId];
        if (links) {
          let btns = [];
          if (links.github && links.github.trim() !== '') {
            btns.push(`<a href="${links.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm"><i class="fa-brands fa-github"></i> Código no GitHub</a>`);
          }
          if (links.demo && links.demo.trim() !== '') {
            const demoModalLabel = projectId === 'sites' ? 'Acessar R&L Consultoria' : 'Ver Demonstração';
            btns.push(`<a href="${links.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${demoModalLabel}</a>`);
          }
          if (btns.length > 0) {
            modalActionsHtml = `<div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:8px;">${btns.join('')}</div>`;
          }
        }

        modalBody.innerHTML = `
          <div style="display:flex; flex-direction:column; gap:12px;">
            <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
              ${awardHtml}
            </div>
            <h2 style="font-size:1.6rem; color:var(--text-white); margin-top:4px;">${data.title}</h2>
            <p style="font-size:0.95rem; color:var(--color-neon-bright); font-weight:600;">${data.subtitle}</p>
            ${newsBadgeHtml}
            ${modalActionsHtml}
          </div>

          <hr style="border:none; border-top:1px solid var(--border-subtle); margin:16px 0;" />

          <div class="modal-description" style="display:flex; flex-direction:column; gap:12px; font-size:0.92rem; color:var(--text-secondary); line-height:1.7;">
            ${data.description}
          </div>

          <div style="margin-top:20px; display:flex; flex-direction:column; gap:8px;">
            <span style="font-size:0.78rem; color:var(--text-muted); font-weight:700; text-transform:uppercase;">Tecnologias Utilizadas:</span>
            <div style="display:flex; flex-wrap:wrap; gap:8px;">${techsHtml}</div>
          </div>
        `;

        backdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeModal = () => {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('active')) closeModal();
  });
}

/* --- Copy Email Quick Feature --- */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = 'ronaldo.melo7@outlook.com';
    navigator.clipboard.writeText(email).then(() => {
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = `<i class="fa-solid fa-check" style="color:var(--color-neon-bright)"></i> E-mail Copiado!`;
      copyBtn.style.borderColor = 'var(--color-neon-bright)';
      copyBtn.style.color = 'var(--color-neon-bright)';

      setTimeout(() => {
        copyBtn.innerHTML = originalText;
        copyBtn.style.borderColor = '';
        copyBtn.style.color = '';
      }, 2500);
    }).catch(err => {
      console.error('Erro ao copiar e-mail: ', err);
    });
  });
}


/* --- Scroll Fade Animations --- */
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.feature-card, .project-card, .timeline-content, .edu-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
  });
}
