import React, { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import {
  SiCplusplus, SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiVite, SiFastapi, SiSqlalchemy, SiExpress, SiSocketdotio, SiPostgresql,
  SiMysql, SiMongodb, SiDocker, SiGithub,
} from "react-icons/si";
import {
  FaDatabase, FaAws, FaProjectDiagram, FaShieldAlt,
  FaEnvelope, FaGithub, FaLinkedin, FaInstagram,
} from "react-icons/fa";
import {
  ChevronLeft, ChevronRight, LayoutTemplate, Workflow, Database,
  Smartphone, Monitor, DraftingCompass, type LucideIcon,
} from "lucide-react";

/* ==========================================================================
   CONTEÚDO EDITÁVEL — mexa só nas constantes abaixo. Cada objeto = uma parte da página.
   ========================================================================== */

/** Cabeçalho */
const Perfil = {
  FOTO: "/foto.jpg", // coloque sua foto em /public/foto.jpg
  NOME: "Ryan Araujo dos Santos",
  LEMA: "\"Melhor prevenir do que remediar\"",
} as const;

/** Títulos das seções */
const Titulo = {
  SOBRE: "Sobre mim",
  FORMACAO: "Formação / Skills",
  AJUDA: "Como posso ajudar",
  PROJETOS: "Projetos em destaque",
  CONTATO: "Contato",
} as const;

/** Sobre mim */
const Sobre = {
  TEXTO: "Meu nome é Ryan Araujo dos Santos.Sou formado em Análise e Desenvolvimento de Sistemas na ETEC, e atualmente estou cursando Desenvolvimento de Sistemas na FATEC. Sempre tive grande interesse por tecnologia e computação, e estou focado em aprofundar meus conhecimentos na área.",
} as const;

/** Formação */
const Formacao = {
  F1: "> Sistema Hiibrido - Etec e Joao Cursino - Análise e Desenvolvimento de Sistemas - 2020 á 2022",
  F2: "> Cursando Fatec - Análise e Desenvolvimento de Sistemas - 2024",
} as const;

/** Skills — um objeto por camada (para mover uma skill, mude de objeto) */
const Camada = {
  LINGUAGEM: "Linguagem",
  FRONTEND: "Frontend",
  BACKEND: "Backend",
  DATABASE: "Database",
  FERRAMENTA: "Ferramenta / Build",
  PRATICAS: "Práticas e segurança",
} as const;
const Linguagem = {
  CPP: "C++",
  PYTHON: "Python",
  JAVASCRIPT: "JavaScript",
  TYPESCRIPT: "TypeScript",
  SQL: "SQL",
} as const;
const Frontend = {
  REACT: "React",
  NEXT: "Next.js",
} as const;
const Backend = {
  FASTAPI: "FastAPI",
  SQLALCHEMY: "SQLAlchemy",
  EXPRESS: "Express",
  SOCKETIO: "Socket.io",
} as const;
const Database_ = {
  POSTGRES: "PostgreSQL",
  MYSQL: "MySQL",
  MONGO: "MongoDB",
} as const;
const Ferramenta = {
  VITE: "Vite",
  DOCKER: "Docker",
  AWS: "AWS",
  GITHUB: "GitHub",
} as const;
const Praticas = {
  PATTERNS: "Design Patterns",
  OWASP: "OWASP ASVS",
} as const;

/** Como posso ajudar (carrossel): etiqueta, título e descrição de cada card */
const ServicoTag = {
  WEB: "WEB / 01",
  API: "API / 02",
  DADOS: "DATA / 03",
  MOBILE: "MOBILE / 04",
  DESKTOP: "DESKTOP / 05",
  UIUX: "UI/UX / 06",
} as const;
const ServicoTitulo = {
  WEB: "Desenvolvimento web",
  API: "APIs e integrações",
  DADOS: "Sistemas e dados",
  MOBILE: "Aplicação mobile",
  DESKTOP: "Aplicação desktop",
  UIUX: "UI/UX design",
} as const;
const ServicoDescricao = {
  WEB: "Criação de sites e interfaces responsivas, com atenção à navegação, ao visual e à experiência em diferentes telas.",
  API: "Desenvolvimento de APIs e conexão entre serviços para facilitar a troca de informações entre aplicações.",
  DADOS: "Estruturação de aplicações e bancos de dados para organizar informações e apoiar funcionalidades do sistema.",
  MOBILE: "Interfaces pensadas para smartphones, com navegação simples e uma experiência adaptada a telas menores.",
  DESKTOP: "Soluções para desktop com foco em organização, legibilidade e fluxos de uso adequados a cada aplicação.",
  UIUX: "Planejamento de interfaces e fluxos que tornam produtos digitais mais claros, consistentes e fáceis de usar.",
} as const;

/** Projetos em destaque (1º = card grande; os outros = cards menores) */
const ProjetoNome = {
  P4: "EchoCAD",
  P2: "EasyScrum",
  P3: "EchoNova",
  P1: "EchoRing",
} as const;
const ProjetoImagem = { // arquivos em /public/images/projetos/
  P4: "/images/projetos/Sem título.jpg", // dica: renomeie para echocad.jpg
  P2: "/images/projetos/easyscrum.jpg",
  P3: "/images/projetos/echonova.jpg",
  P1: "/images/projetos/echoring.jpg",
} as const;
const ProjetoAlt = {
  P4: "Página inicial do EchoCAD, ferramenta de análise de dados CAD",
  P2: "Página inicial do EasyScrum, projeto sobre metodologia Scrum",
  P3: "Página inicial do projeto EchoNova",
  P1: "Página inicial do EchoRing, plataforma de tradução",
} as const;
const ProjetoDescricao = {
  P4: "Automação de documentos e análise de dados CAD.",
  P2: "Plataforma para aprender e explorar Scrum.",
  P3: "Aplicação web desenvolvida em equipe.",
  P1: "Experiência digital para conectar idiomas e pessoas. Acesse o repositório do projeto no GitHub.",
} as const;
const ProjetoLink = {
  P4: "https://github.com/EquipeEcho/EchoCAD",
  P2: "https://github.com/EquipeEcho/EasyScrum",
  P3: "https://github.com/EquipeEcho/EchoNova",
  P1: "https://github.com/EquipeEcho/EchoRing",
} as const;

/** Contato: link e texto exibido */
const Contato = {
  GMAIL: "mailto:seuemail@gmail.com",
  GITHUB: "https://github.com/seu-usuario",
  LINKEDIN: "https://linkedin.com/in/seu-usuario",
  INSTAGRAM: "https://instagram.com/seu-usuario",
} as const;
const ContatoTexto = {
  GMAIL: "seuemail@gmail.com",
  GITHUB: "github.com/seu-usuario",
  LINKEDIN: "linkedin.com/in/seu-usuario",
  INSTAGRAM: "@seu-usuario",
} as const;

/* ================================ DADOS =================================== */

const valores = <T extends object>(e: T): string[] => Object.values(e) as string[];

const icones: Record<string, IconType> = {
  [Linguagem.CPP]: SiCplusplus,
  [Linguagem.PYTHON]: SiPython,
  [Linguagem.JAVASCRIPT]: SiJavascript,
  [Linguagem.TYPESCRIPT]: SiTypescript,
  [Linguagem.SQL]: FaDatabase,
  [Frontend.REACT]: SiReact,
  [Frontend.NEXT]: SiNextdotjs,
  [Backend.FASTAPI]: SiFastapi,
  [Backend.SQLALCHEMY]: SiSqlalchemy,
  [Backend.EXPRESS]: SiExpress,
  [Backend.SOCKETIO]: SiSocketdotio,
  [Database_.POSTGRES]: SiPostgresql,
  [Database_.MYSQL]: SiMysql,
  [Database_.MONGO]: SiMongodb,
  [Ferramenta.VITE]: SiVite,
  [Ferramenta.DOCKER]: SiDocker,
  [Ferramenta.AWS]: FaAws,
  [Ferramenta.GITHUB]: SiGithub,
  [Praticas.PATTERNS]: FaProjectDiagram,
  [Praticas.OWASP]: FaShieldAlt,
};

const camadas = [
  { titulo: Camada.LINGUAGEM, itens: valores(Linguagem) },
  { titulo: Camada.FRONTEND, itens: valores(Frontend) },
  { titulo: Camada.BACKEND, itens: valores(Backend) },
  { titulo: Camada.DATABASE, itens: valores(Database_) },
  { titulo: Camada.FERRAMENTA, itens: valores(Ferramenta) },
  { titulo: Camada.PRATICAS, itens: valores(Praticas) },
];

const servicos: { Icone: LucideIcon; tag: string; titulo: string; descricao: string }[] = [
  { Icone: LayoutTemplate, tag: ServicoTag.WEB, titulo: ServicoTitulo.WEB, descricao: ServicoDescricao.WEB },
  { Icone: Workflow, tag: ServicoTag.API, titulo: ServicoTitulo.API, descricao: ServicoDescricao.API },
  { Icone: Database, tag: ServicoTag.DADOS, titulo: ServicoTitulo.DADOS, descricao: ServicoDescricao.DADOS },
  { Icone: Smartphone, tag: ServicoTag.MOBILE, titulo: ServicoTitulo.MOBILE, descricao: ServicoDescricao.MOBILE },
  { Icone: Monitor, tag: ServicoTag.DESKTOP, titulo: ServicoTitulo.DESKTOP, descricao: ServicoDescricao.DESKTOP },
  { Icone: DraftingCompass, tag: ServicoTag.UIUX, titulo: ServicoTitulo.UIUX, descricao: ServicoDescricao.UIUX },
];

const projetos = [
  { nome: ProjetoNome.P1, imagem: ProjetoImagem.P1, alt: ProjetoAlt.P1, descricao: ProjetoDescricao.P1, link: ProjetoLink.P1 },
  { nome: ProjetoNome.P2, imagem: ProjetoImagem.P2, alt: ProjetoAlt.P2, descricao: ProjetoDescricao.P2, link: ProjetoLink.P2 },
  { nome: ProjetoNome.P3, imagem: ProjetoImagem.P3, alt: ProjetoAlt.P3, descricao: ProjetoDescricao.P3, link: ProjetoLink.P3 },
  { nome: ProjetoNome.P4, imagem: ProjetoImagem.P4, alt: ProjetoAlt.P4, descricao: ProjetoDescricao.P4, link: ProjetoLink.P4 },
];

// as classes de hover ficam completas aqui para o Tailwind encontrá-las
const contatos: { rotulo: string; texto: string; href: string; Icone: IconType; hover: string }[] = [
  { rotulo: "Gmail", texto: ContatoTexto.GMAIL, href: Contato.GMAIL, Icone: FaEnvelope, hover: "hover:bg-[#a3261f]" },
  { rotulo: "GitHub", texto: ContatoTexto.GITHUB, href: Contato.GITHUB, Icone: FaGithub, hover: "hover:bg-[#3b3b3b]" },
  { rotulo: "LinkedIn", texto: ContatoTexto.LINKEDIN, href: Contato.LINKEDIN, Icone: FaLinkedin, hover: "hover:bg-[#0a66c2]" },
  { rotulo: "Instagram", texto: ContatoTexto.INSTAGRAM, href: Contato.INSTAGRAM, Icone: FaInstagram, hover: "hover:bg-[#c13584]" },
];

/* ============================== TEXTURAS ================================== */
// Única parte fora do Tailwind: imagens de fundo geradas (ruído SVG).

const svg = (w: number, filtro: string) =>
  `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${w}'><filter id='n'>${filtro}</filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`;

const grao = svg(160, "<feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .55 0'/>");
const manchas = svg(420, "<feTurbulence type='fractalNoise' baseFrequency='.012' numOctaves='4' seed='7'/><feColorMatrix values='0 0 0 0 .35 0 0 0 0 .22 0 0 0 0 .08 0 0 0 1.1 -.35'/>");
const fibras = svg(300, "<feTurbulence type='fractalNoise' baseFrequency='.9 .06' numOctaves='3' seed='3'/><feColorMatrix values='0 0 0 0 .25 0 0 0 0 .15 0 0 0 0 .05 0 0 0 .9 -.3'/>");
const luz = "radial-gradient(ellipse at 50% 0%, rgba(255,186,66,.5), rgba(255,186,66,.12) 45%, transparent 70%)";
const luzLateral = "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(224,160,48,.38), rgba(138,59,28,.12) 55%, transparent 80%)";
const vinheta = "radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(70,40,12,.3) 100%)";

const stencil = "font-['Stardos_Stencil',Impact,sans-serif]";
const ficha =
  "inline-flex select-none items-center gap-2 border-2 border-black bg-[#231e19] px-4 py-2 text-[#e0a030] shadow-[0_4px_0_#8a3b1c] transition hover:-translate-y-0.5 hover:bg-[#2e261e] hover:text-white hover:shadow-[0_6px_0_#8a3b1c] active:translate-y-1 active:shadow-[0_0_0_#8a3b1c]";

/* ============================== COMPONENTES =============================== */

const Secao: React.FC<{ titulo: string; lado: "esq" | "dir"; children: React.ReactNode }> = ({
  titulo, lado, children,
}) => {
  const dir = lado === "dir";
  return (
    <section className="mt-16">
      <div className={`h-2 w-[82%] border-y-2 border-black bg-[#8a3b1c] ${dir ? "sm:ml-auto" : ""}`} aria-hidden />
      <h2 className={`${stencil} mt-4 text-2xl sm:text-3xl ${dir ? "sm:text-right" : ""}`}>{titulo}</h2>
      <div className={`mt-5 ${dir ? "sm:text-right" : ""}`}>{children}</div>
    </section>
  );
};

const Carrossel: React.FC = () => {
  const pista = useRef<HTMLDivElement>(null);
  const [podeVoltar, setPodeVoltar] = useState(false);
  const [podeAvancar, setPodeAvancar] = useState(true);

  const atualizar = () => {
    const el = pista.current;
    if (!el) return;
    setPodeVoltar(el.scrollLeft > 2);
    setPodeAvancar(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  };

  useEffect(() => {
    atualizar();
    window.addEventListener("resize", atualizar);
    return () => window.removeEventListener("resize", atualizar);
  }, []);

  const anim = useRef(0);
  useEffect(() => () => cancelAnimationFrame(anim.current), []);

  // rolagem suave com easing (easeInOutCubic); o snap é pausado durante a animação
  const mover = (dir: 1 | -1) => {
    const el = pista.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;

    const passo = card.offsetWidth + 16;
    const max = el.scrollWidth - el.clientWidth;
    const alvo = Math.min(max, Math.max(0, (Math.round(el.scrollLeft / passo) + dir) * passo));
    const inicio = el.scrollLeft;
    const duracao = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 700;
    const t0 = performance.now();

    cancelAnimationFrame(anim.current);
    el.style.scrollSnapType = "none";

    const quadro = (agora: number) => {
      const t = duracao ? Math.min(1, (agora - t0) / duracao) : 1;
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      el.scrollLeft = inicio + (alvo - inicio) * ease;
      if (t < 1) anim.current = requestAnimationFrame(quadro);
      else el.style.scrollSnapType = "";
    };
    anim.current = requestAnimationFrame(quadro);
  };

  const seta =
    "border-2 border-[#2a2016] p-2 transition hover:bg-[#2a2016] hover:text-[#e0a030] disabled:pointer-events-none disabled:opacity-30";

  return (
    <div className="text-left">
      <div
        ref={pista}
        onScroll={atualizar}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pr-2 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {servicos.map(({ Icone, tag, titulo, descricao }) => (
          <article
            key={titulo}
            className="flex min-h-[270px] shrink-0 basis-full snap-start flex-col border-2 border-[#2a2016] bg-[#2a2016]/10 p-6 shadow-[4px_4px_0_#2a2016] transition hover:-translate-y-0.5 hover:bg-[#e0a030]/15 md:basis-[calc((100%-2rem)/3)]"
          >
            <div className="flex items-start justify-between">
              <Icone size={36} strokeWidth={1.5} className="text-[#8a3b1c]" />
              <span className="border border-[#2a2016]/60 px-1.5 py-0.5 text-xs tracking-widest text-[#2a2016]/80">{tag}</span>
            </div>
            <h3 className={`${stencil} mt-6 text-xl tracking-wide text-[#2a2016]`}>{titulo}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#2a2016]/85">{descricao}</p>
            <div className="mt-auto pt-6">
              <div className="h-2 w-12 border-y-2 border-black bg-[#8a3b1c]" />
            </div>
          </article>
        ))}
      </div>
      <div className="mt-4 flex gap-2 sm:justify-end">
        <button className={seta} onClick={() => mover(-1)} disabled={!podeVoltar} aria-label="Anterior">
          <ChevronLeft size={20} />
        </button>
        <button className={seta} onClick={() => mover(1)} disabled={!podeAvancar} aria-label="Próximo">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  // a lâmpada da placa tremula uma vez ao carregar
  const [acesa, setAcesa] = useState(true);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const estados = [false, true, false, true, false, true];
    const tempos = [150, 270, 360, 500, 610, 790];
    const ids = estados.map((v, i) => window.setTimeout(() => setAcesa(v), tempos[i]));
    return () => ids.forEach(clearTimeout);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-[#14110e] px-2 py-6 font-['Special_Elite','Courier_New',monospace] leading-relaxed text-[#2a2016] sm:px-8 sm:py-12 lg:px-20"
      style={{ backgroundImage: grao }}
    >
      {/* luz nas barras laterais: acompanha a lâmpada da placa */}
      <div
        aria-hidden
        className={`pointer-events-none fixed inset-0 transition-opacity duration-75 ${acesa ? "opacity-100" : "opacity-20"}`}
        style={{ backgroundImage: luzLateral }}
      />
      <div
        className="relative mx-auto max-w-[1040px] bg-[#cdbf9a] px-4 pb-20 shadow-[0_0_60px_rgba(0,0,0,.8)] sm:px-10 lg:px-14"
        style={{ backgroundImage: [vinheta, fibras, manchas].join(",") }}
      >
        {/* luz sobre o papel: também tremula */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 transition-opacity duration-75 ${acesa ? "opacity-100" : "opacity-25"}`}
          style={{ backgroundImage: luz }}
        />
        <div className="relative">
        {/* CABEÇALHO */}
        <header className="flex flex-col items-center gap-6 pb-10 pt-12 text-center sm:flex-row sm:gap-12 sm:text-left">
          <div className="aspect-square w-44 shrink-0 overflow-hidden border-[6px] border-[#2a2016] bg-[#231e19] outline outline-2 outline-offset-4 outline-[#8a3b1c] [filter:sepia(.6)_contrast(1.1)_brightness(.9)] sm:w-64 lg:w-72">
            <img
              src={Perfil.FOTO}
              alt={Perfil.NOME}
              className="h-full w-full object-cover"
              onError={(e) => (e.currentTarget.style.visibility = "hidden")}
            />
          </div>
          <div>
            <h1 className={`${stencil} text-3xl leading-tight tracking-wide sm:text-5xl`}>{Perfil.NOME}</h1>
            <p className="mt-2 text-lg">{Perfil.LEMA}</p>
          </div>
        </header>

        <main>
          <Secao titulo={Titulo.SOBRE} lado="dir">
            <p className="max-w-[60ch] sm:ml-auto">{Sobre.TEXTO}</p>
          </Secao>

          <Secao titulo={Titulo.FORMACAO} lado="esq">
            <ul className="divide-y divide-dashed divide-[#2a2016]/40">
              {valores(Formacao).map((f) => (
                <li key={f} className="py-2">{f}</li>
              ))}
            </ul>
            <div className="mt-7 grid gap-x-8 gap-y-6 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
              {camadas.map((c) => (
                <div key={c.titulo}>
                  <h3 className={`${stencil} mb-3 border-b-2 border-[#2a2016] pb-1 text-lg text-[#a3261f]`}>{c.titulo}</h3>
                  <ul className="flex flex-wrap gap-x-3 gap-y-4 pb-1">
                    {c.itens.map((nome) => {
                      const Icone = icones[nome];
                      return (
                        <li key={nome} className={ficha}>
                          {Icone && <Icone aria-hidden className="h-[1.1em] w-[1.1em] shrink-0" />}
                          {nome}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </Secao>

          <Secao titulo={Titulo.AJUDA} lado="dir">
            <Carrossel />
          </Secao>

          <Secao titulo={Titulo.PROJETOS} lado="esq">
            <div className="grid grid-cols-1 gap-1.5 border-[6px] border-[#2a2016] bg-[#2a2016] md:grid-cols-[1.6fr_1fr_1fr] md:grid-rows-[200px_230px]">
              {projetos.map((p, i) => (
                <a
                  key={p.nome}
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`group relative block min-h-[220px] overflow-hidden bg-[#231e19] focus-visible:outline focus-visible:outline-[3px] focus-visible:-outline-offset-[3px] focus-visible:outline-[#e0a030] ${
                    i === 0 ? "min-h-[280px] md:row-span-2" : ""
                  } ${i === 3 ? "md:col-span-2 md:col-start-2" : ""}`}
                >
                  <img
                    src={encodeURI(p.imagem)}
                    alt={p.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 [filter:sepia(.35)_brightness(.85)] group-hover:scale-105 group-hover:[filter:sepia(.15)_brightness(1)]"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="relative flex h-full flex-col justify-end p-4 text-left">
                    <h3 className={`${stencil} text-xl text-[#e0a030]`}>{p.nome}</h3>
                    <p className={`mt-1 text-sm text-[#d3c7a8] ${i === 0 ? "" : "line-clamp-3"}`}>{p.descricao}</p>
                  </div>
                </a>
              ))}
            </div>
          </Secao>

          <Secao titulo={Titulo.CONTATO} lado="dir">
            <ul className="grid gap-4 text-left sm:grid-cols-2">
              {contatos.map(({ rotulo, texto, href, Icone, hover }) => (
                <li key={rotulo}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group flex items-center gap-4 border-2 border-[#2a2016] bg-[#231e19] p-4 text-[#d3c7a8] shadow-[4px_4px_0_#2a2016] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e0a030] ${hover}`}
                  >
                    <Icone aria-hidden className="h-9 w-9 shrink-0 text-[#e0a030] transition-colors group-hover:text-white" />
                    <span className="min-w-0">
                      <span className={`${stencil} block text-lg text-white`}>{rotulo}</span>
                      <span className="block truncate text-sm opacity-80">{texto}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Secao>
        </main>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
