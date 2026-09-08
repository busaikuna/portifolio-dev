'use client'

import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'

const hobbies = [
  ['01', 'Violão', 'Cordas, timbres e prática até a música encontrar seu lugar.'],
  ['02', 'Canto', 'A voz como instrumento, presença e uma forma direta de conexão.'],
  ['03', 'Games', 'Mundos interativos, estratégia e histórias que ficam depois da tela.'],
  ['04', 'Anime', 'Narrativas visuais, personagens complexos e referências que atravessam culturas.'],
  ['05', 'Música', 'A trilha sonora que acompanha cada fase, projeto e descoberta.'],
  ['06', 'Desenho', 'Observar, rabiscar e transformar ideias em formas imperfeitas.'],
]

const stack = [
  ['JavaScript', 'Interfaces, lógica e experiências para a web.'],
  ['Node.js', 'APIs e sistemas que sustentam produtos digitais.'],
  ['Python', 'Automação, problemas e exploração de novas ideias.'],
  ['PostgreSQL', 'Dados organizados para aplicações reais.'],
  ['React', 'Componentes que viram experiências vivas.'],
  ['Django', 'Desenvolvimento web com estrutura e velocidade.'],
  ['HTML5', 'A base semântica de cada interface.'],
  ['CSS3', 'Forma, ritmo e personalidade visual.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(true)
  const [activeHobby, setActiveHobby] = useState(0)

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('samuel-theme')
    if (storedTheme === 'light') setDark(false)
  }, [])

  function toggleTheme() {
    const next = !dark
    setDark(next)
    window.localStorage.setItem('samuel-theme', next ? 'dark' : 'light')
  }

  return (
    <main className={dark ? 'site dark' : 'site light'}>
      <nav className="nav shell" aria-label="Navegação principal">
        <a href="#top" className="wordmark">SDS<span>©</span></a>
        <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['work', 'about', 'hobbies', 'education', 'stack', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </div>
        <div className="nav-actions">
          <span className="availability"><i /> disponível para projetos</span>
          <button className="theme-button" onClick={toggleTheme} aria-label="Alternar tema">{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>

      <header id="top" className="hero shell">
        <div className="hero-meta"><span>19 / BRASIL</span><span>UFC — RUSSAS</span><span>PORTFOLIO / 2026</span></div>
        <div className="hero-title"><span>Samuel</span><span className="outline">Damasceno</span><span className="accent graffiti-mark">Sales<span className="asterisk">✳</span></span></div><figure className="hero-portrait"><img src="/samuel1.png" alt="Retrato de Samuel Damasceno Sales usando fones de ouvido" /><figcaption>Samuel / 19 / BR</figcaption></figure>
        <div className="hero-bottom"><p>FULLSTACK<br />DEVELOPER</p><p className="hero-intro">Construindo experiências<br />da interface à API.</p><a href="#work" className="round-link" aria-label="Ver trabalhos"><ArrowDownRight /></a></div>
        <div className="hero-stamp">FRONTEND<br /><b>+</b> BACKEND</div>
      </header>

      <section id="about" className="section shell about-section">
        <div className="section-kicker">01 / SOBRE</div>
        <div className="about-grid"><h2>código com<br /><em>personalidade.</em></h2><div className="about-copy"><p>Eu sou Samuel Damasceno Sales, desenvolvedor fullstack de 19 anos e estudante de Ciência da Computação na Universidade Federal do Ceará, campus Russas.</p><p>Trabalho entre frontend e backend, criando aplicações web, resolvendo problemas e aprendendo novas tecnologias para transformar ideias em experiências práticas.</p><div className="facts"><span>nome <b>Samuel Damasceno Sales</b></span><span>idade <b>19</b></span><span>local <b>Brasil</b></span><span>função <b>Fullstack Developer</b></span></div></div></div>
      </section>

      <section id="hobbies" className="section shell dark-panel"><div className="section-kicker">02 / FORA DO CÓDIGO</div><div className="hobby-heading"><h2>o que<br /><span>me move.</span></h2><p>Interesses que alimentam o repertório, a curiosidade e a forma de enxergar problemas.</p></div><div className="hobby-list">{hobbies.map(([number, title, description], index) => <button key={title} className={activeHobby === index ? 'hobby-row active' : 'hobby-row'} onMouseEnter={() => setActiveHobby(index)} onFocus={() => setActiveHobby(index)} onClick={() => setActiveHobby(index)}><span>{number}</span><strong>{title}</strong><small>{activeHobby === index ? description : 'explorar'}</small><ArrowUpRight /></button>)}</div></section>

      <section id="education" className="section shell education"><div className="section-kicker">03 / EDUCAÇÃO</div><div className="education-title"><h2>linha do<br /><span>tempo.</span></h2><span className="vertical-note">ESTUDO / PRÁTICA / REPETIR</span></div><div className="timeline"><article><time>2026 — agora</time><div><h3>UFC</h3><p>Ciência da Computação<br />Campus Russas</p></div><b>01</b></article><article><time>2025</time><div><h3>SENAC</h3><p>Curso de Programação Web<br />1 ano de formação</p></div><b>02</b></article><article><time>2023 — 2025</time><div><h3>IFPI</h3><p>Formação e desenvolvimento autodidata<br />Durante meus estudos no IFPI, desenvolvi habilidades em programação por iniciativa própria, através de vídeos, cursos, documentação e estudos independentes. Coloquei o conhecimento em prática criando projetos pessoais e construindo minha base técnica.</p></div><b>03</b></article></div></section>

      <section id="work" className="section shell work"><div className="section-kicker">04 / TRABALHOS & PROJETOS</div><h2 className="work-heading">coisas que<br /><span>saíram do papel.</span></h2><div className="project-grid"><article className="project featured"><div className="project-number">01</div><div><p className="eyebrow">WEB PLATFORM / ADOÇÃO</p><h3>Patinhas<br /><i>Felizes</i></h3><p className="project-description">Uma plataforma social para conectar cães e gatos que precisam de um lar a pessoas interessadas em adoção.</p><div className="tags"><span>Node.js</span><span>JavaScript</span><span>React</span><span>PostgreSQL</span></div></div><ArrowUpRight /></article><article className="project"><div className="project-number">02</div><div><p className="eyebrow">EXPERIMENTAL / DEVELOPMENT</p><h3>Projetos<br />de escola</h3><p className="project-description">As primeiras experiências construindo, testando e entendendo como a programação pode resolver problemas.</p></div><ArrowUpRight /></article><article className="project red-project"><div className="project-number">03</div><div><p className="eyebrow">COMPETIÇÃO / LÓGICA</p><h3>OBI<br /><i>2025</i></h3><p className="project-description">Participação em múltiplas edições da Olimpíada Brasileira de Informática, chegando à fase final em 2025.</p></div><ArrowUpRight /></article><article className="project"><div className="project-number">04</div><div><p className="eyebrow">REDE SOCIAL / EM DESENVOLVIMENTO</p><h3>Aphelion</h3><p className="project-description">Rede social em desenvolvimento, com foco em comunicação e interação entre usuários. Conta com chat em tempo real, comunicação criptografada, postagens, curtidas e perfis de usuários.</p></div><ArrowUpRight /></article><article className="project"><div className="project-number">05</div><div><p className="eyebrow">SISTEMA / EM DESENVOLVIMENTO</p><h3>Controle<br />remoto</h3><p className="project-description">Sistema em desenvolvimento para gerenciamento remoto de computadores, com visualização de tela, execução de comandos, comunicação entre computadores e mensagens reproduzidas por voz.</p></div><ArrowUpRight /></article></div></section>

      <section id="stack" className="section shell stack-section"><div className="section-kicker">05 / STACK</div><div className="stack-intro"><h2>ferramentas<br /><span>do ofício.</span></h2><p>Sem porcentagens inventadas. Só tecnologias que fazem parte do processo.</p></div><div className="stack-list">{stack.map(([name, description], index) => <div className="stack-item" key={name}><span>0{index + 1}</span><strong>{name}</strong><small>{description}</small></div>)}</div></section>

      <section id="contact" className="contact shell"><div className="section-kicker">06 / CONTATO</div><h2>vamos fazer<br /><span>algo diferente.</span></h2><div className="contact-footer"><div><p>Samuel Damasceno Sales</p><small>Fullstack Developer · UFC — Russas · Brasil</small></div><div className="contact-links"><a href="mailto:ssamuelsales27@gmail.com">Email <ArrowUpRight /></a><a href="https://github.com/busaikuna" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a><a href="https://linkedin.com/in/samuelxdev" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a></div></div></section>
      <footer className="footer shell"><span>SDS© / 2026</span><span>feito com curiosidade</span><a href="#top">voltar ao topo ↑</a></footer>
    </main>
  )
}
