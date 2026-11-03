import { useState } from 'react'
import { GITHUB, expertises, filters, method, profile, projects } from './data.js'

function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Hanene Triaa, retour en haut">
          <span className="brand-mark">HT</span>
          <span className="brand-name">Hanene Triaa</span>
        </a>
        <nav className="nav-links" aria-label="Navigation principale">
          <a href="#expertises">Expertises</a>
          <a href="#projets">Projets</a>
          <a href="#methode">Méthode</a>
          <a href="#contact" className="nav-cta">Me contacter</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="hero-school">{profile.school}</p>
          <h1>
            {profile.name}
            <span>{profile.title}</span>
          </h1>
          <p className="hero-pitch">{profile.pitch}</p>
          <div className="hero-actions">
            <a className="btn btn-light" href="#projets">Découvrir mes projets</a>
            <a className="btn btn-outline-light" href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <ul className="hero-tags" aria-label="Domaines">
            <li>AWS</li><li>Azure</li><li>Kubernetes</li><li>Terraform</li><li>React Native</li><li>Gestion de projet</li>
          </ul>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="mock-browser">
            <div className="mock-bar"><i /><i /><i /><span>nice-waste-management.streamlit.app</span></div>
            <img src="img/nice-synthese.webp" alt="" />
          </div>
          <div className="mock-slide">
            <img src="img/kq-architecture.webp" alt="" />
          </div>
          <div className="mock-phone">
            <img src="img/az-profil.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Expertises() {
  return (
    <section className="section" id="expertises">
      <div className="container">
        <div className="section-head">
          <h2>Trois expertises, un même fil conducteur</h2>
          <p>Comprendre le besoin, construire une solution fiable et la mener jusqu’au bout.</p>
        </div>
        <div className="expertise-grid">
          {expertises.map((e) => (
            <article className="expertise" key={e.title}>
              <h3>{e.title}</h3>
              <p>{e.text}</p>
              <ul>
                {e.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Visual({ project }) {
  const [active, setActive] = useState(0)
  const img = project.images[active]

  if (project.frame === 'phones') {
    return (
      <div className="visual visual-phones">
        {project.images.map((i) => (
          <div className="phone" key={i.src}><img src={i.src} alt={`${project.name} : écran ${i.label}`} loading="lazy" /></div>
        ))}
      </div>
    )
  }

  return (
    <div className="visual">
      <div className={`frame frame-${project.frame}`}>
        {project.frame === 'browser' && <div className="mock-bar"><i /><i /><i /></div>}
        <img src={img.src} alt={`${project.name} : ${img.label}`} loading="lazy" />
      </div>
      {project.images.length > 1 && (
        <div className="thumbs" role="tablist" aria-label={`Visuels de ${project.name}`}>
          {project.images.map((i, idx) => (
            <button
              key={i.src}
              role="tab"
              aria-selected={idx === active}
              className={idx === active ? 'thumb active' : 'thumb'}
              onClick={() => setActive(idx)}
            >
              {i.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function Project({ project, reverse }) {
  return (
    <article className={reverse ? 'project reverse' : 'project'} id={project.id}>
      <Visual project={project} />
      <div className="project-body">
        <p className="project-domains">{project.domains.join(' et ')}</p>
        <h3>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        <ul className="project-highlights">
          {project.highlights.map((h) => <li key={h}>{h}</li>)}
        </ul>
        <ul className="stack" aria-label="Technologies">
          {project.stack.map((s) => <li key={s}>{s}</li>)}
        </ul>
        <div className="project-links">
          {project.links.map((l, i) => (
            <a key={l.url} className={i === 0 ? 'btn btn-dark' : 'btn btn-outline'} href={l.url} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

function Projects() {
  const [filter, setFilter] = useState(filters[0])
  const shown = projects.filter((p) => filter === filters[0] || p.domains.includes(filter))
  return (
    <section className="section section-mist" id="projets">
      <div className="container">
        <div className="section-head">
          <h2>Projets</h2>
          <p>Chaque projet est documenté sur GitHub : contexte, choix techniques, difficultés et résultats.</p>
        </div>
        <div className="filters" role="group" aria-label="Filtrer les projets">
          {filters.map((f) => (
            <button key={f} className={f === filter ? 'filter active' : 'filter'} aria-pressed={f === filter} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
        <div className="project-list">
          {shown.map((p, i) => <Project key={p.id} project={p} reverse={i % 2 === 1} />)}
        </div>
      </div>
    </section>
  )
}

function Method() {
  return (
    <section className="section" id="methode">
      <div className="container">
        <div className="section-head">
          <h2>Ma méthode</h2>
          <p>La même démarche, qu’il s’agisse d’un cluster Kubernetes ou d’un projet de service public.</p>
        </div>
        <ol className="method">
          {method.map((m, i) => (
            <li key={m.title}>
              <span className="step">{i + 1}</span>
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
          <h2>Vous cherchez un profil qui relie technique et pilotage ?</h2>
          <p>Je suis ouverte aux opportunités en architecture SI, cloud et gestion de projet IT.</p>
        </div>
        <div className="contact-actions">
          <a className="btn btn-light" href={GITHUB} target="_blank" rel="noreferrer">Voir mon GitHub</a>
          <a className="btn btn-outline-light" href="https://nice-waste-management.streamlit.app" target="_blank" rel="noreferrer">Voir une démo</a>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <a className="skip" href="#projets">Aller aux projets</a>
      <Nav />
      <main>
        <Hero />
        <Expertises />
        <Projects />
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
