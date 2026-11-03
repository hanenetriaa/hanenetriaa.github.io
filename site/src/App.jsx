import { useEffect, useRef, useState } from 'react'
import { GITHUB, LINKEDIN, filters, method, profile, projects } from './data.js'
import { covers } from './Covers.jsx'
import { TechChip } from './TechIcon.jsx'
import { Cube, useTilt } from './Fx.jsx'

function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Hanene Triaa, retour en haut">
          <span className="brand-mark">HT</span>
          <span className="brand-name">Hanene Triaa</span>
        </a>
        <nav className="nav-links" aria-label="Navigation principale">
          <a href="#projets">Projets</a>
          <a href="#methode">Méthode</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </nav>
      </div>
    </header>
  )
}

function Hero({ onPick }) {
  const tilt = useTilt(10)
  return (
    <section className="hero" id="top" ref={tilt.ref} onPointerMove={tilt.onPointerMove} onPointerLeave={tilt.onPointerLeave}>
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="hero-school">{profile.school}</p>
          <h1>
            {profile.name}
            <span>{profile.title}</span>
          </h1>
          <p className="hero-pitch">{profile.pitch}</p>
          <div className="hero-actions">
            <a className="btn btn-light" href="#projets">Voir mes projets</a>
            <a className="btn btn-outline-light" href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <ul className="hero-domains" aria-label="Voir les projets par domaine">
            <li><a href="#projets" onClick={() => onPick('Web')}><strong>Web</strong><span>2 projets</span></a></li>
            <li><a href="#projets" onClick={() => onPick('Mobile')}><strong>Mobile</strong><span>2 projets</span></a></li>
            <li><a href="#projets" onClick={() => onPick('Cloud et DevOps')}><strong>Cloud</strong><span>2 projets</span></a></li>
          </ul>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="scene">
          <div className="mock-browser">
            <div className="mock-bar"><i /><i /><i /><span>nice-waste-management.streamlit.app</span></div>
            <img src="img/nice-synthese.webp" alt="" />
          </div>
          <div className="mock-phone mock-phone-2"><img src="img/az-input.webp" alt="" /></div>
          <div className="mock-phone"><img src="img/az-profil.webp" alt="" /></div>
          <Cube />
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, onOpen }) {
  const Cover = covers[project.id]
  const main = project.links[0]
  const tilt = useTilt(7)
  return (
    <article className="pcard" id={project.id} ref={tilt.ref} onPointerMove={tilt.onPointerMove} onPointerLeave={tilt.onPointerLeave}>
      <button className="pcard-cover" onClick={() => onOpen(project)} aria-label={`Voir le détail de ${project.name}`}>
        <Cover />
        <span className={`type-badge type-${project.type.split(' ')[1]}`}>{project.type}</span>
      </button>
      <div className="pcard-body">
        <h3>{project.name}</h3>
        <p className="pcard-summary">{project.summary}</p>
        <ul className="tech-row" aria-label="Technologies">
          {project.tech.map((t) => <TechChip key={t} id={t} onDark />)}
        </ul>
        <div className="pcard-actions">
          <button className="btn btn-light btn-sm" onClick={() => onOpen(project)}>Détails du projet</button>
          <a className="btn btn-ghost btn-sm" href={main.url} target="_blank" rel="noreferrer">{main.label}</a>
        </div>
      </div>
    </article>
  )
}

function ProjectModal({ project, onClose }) {
  const ref = useRef(null)
  useEffect(() => {
    const d = ref.current
    if (project && d && !d.open) d.showModal()
    if (!project && d?.open) d.close()
  }, [project])
  if (!project) return <dialog ref={ref} className="modal" onClose={onClose} />
  const Cover = covers[project.id]
  return (
    <dialog ref={ref} className="modal" onClose={onClose} onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="modal-title">
      <div className="modal-inner">
        <button className="modal-close" onClick={onClose} aria-label="Fermer">×</button>
        <div className="modal-cover"><Cover /></div>
        <div className="modal-body">
          <span className={`type-badge static type-${project.type.split(' ')[1]}`}>{project.type}</span>
          <h3 id="modal-title">{project.name}</h3>
          <p className="modal-details">{project.details}</p>
          <h4>Points clés</h4>
          <ul className="project-highlights">
            {project.highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>
          <h4>Technologies</h4>
          <ul className="tech-row light">
            {project.tech.map((t) => <TechChip key={t} id={t} />)}
          </ul>
          <div className="project-links">
            {project.links.map((l, i) => (
              <a key={l.url} className={i === 0 ? 'btn btn-dark' : 'btn btn-outline'} href={l.url} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </dialog>
  )
}

function Projects({ filter, setFilter }) {
  const [open, setOpen] = useState(null)
  const shown = projects.filter((p) => filter === filters[0] || p.domains.includes(filter))
  return (
    <section className="section section-dark" id="projets">
      <div className="container">
        <div className="section-head">
          <h2>Projets</h2>
          <p>Applications web, applications mobiles et infrastructures cloud réalisées pendant mon parcours. Cliquez sur un projet pour voir le détail.</p>
        </div>
        <div className="filters" role="group" aria-label="Filtrer les projets">
          {filters.map((f) => {
            const count = f === filters[0] ? projects.length : projects.filter((p) => p.domains.includes(f)).length
            return (
              <button key={f} className={f === filter ? 'filter active' : 'filter'} aria-pressed={f === filter} onClick={() => setFilter(f)}>
                {f} <span className="count">{count}</span>
              </button>
            )
          })}
        </div>
        <div className="pgrid">
          {shown.map((p) => <ProjectCard key={p.id} project={p} onOpen={setOpen} />)}
        </div>
      </div>
      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  )
}

function Method() {
  return (
    <section className="section" id="methode">
      <div className="container">
        <div className="section-head">
          <h2>Ma méthode</h2>
          <p>La démarche que j’applique sur mes projets, qu’il s’agisse d’une application ou d’une infrastructure.</p>
        </div>
        <ol className="method">
          {method.map((m, i) => (
            <li key={m.title}>
              <span className="step">{String(i + 1).padStart(2, '0')}</span>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">
        <div>
          <h2>Vous recrutez un profil IT motivé ? Parlons-en.</h2>
          <p>Je suis ouverte aux postes IT : développement, cloud ou gestion de projet.</p>
        </div>
        <div className="contact-actions">
          <a className="btn btn-light" href={LINKEDIN} target="_blank" rel="noreferrer">Me contacter sur LinkedIn</a>
          <a className="btn btn-outline-light" href={GITHUB} target="_blank" rel="noreferrer">Voir mon GitHub</a>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [filter, setFilter] = useState(filters[0])
  return (
    <>
      <a className="skip" href="#projets">Aller aux projets</a>
      <Nav />
      <main>
        <Hero onPick={setFilter} />
        <Projects filter={filter} setFilter={setFilter} />
        <Method />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 Hanene Triaa</span>
          <a href={GITHUB} target="_blank" rel="noreferrer">github.com/hanenetriaa</a>
        </div>
      </footer>
    </>
  )
}
