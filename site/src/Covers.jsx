// Couvertures visuelles des projets : uniquement des composants React + CSS.
// Les écrans réels sont utilisés quand ils existent ; sinon, une illustration
// construite à partir des vraies commandes et données du projet.

function Terminal({ title, lines }) {
  return (
    <div className="term">
      <div className="term-bar"><i /><i /><i /><span>{title}</span></div>
      <pre>
        {lines.map((l, i) => (
          <div key={i} className={`term-line ${l.type || ''}`} style={{ '--d': `${i * 0.12}s` }}>
            {l.type === 'cmd' && <span className="prompt">$</span>}
            {l.text}
          </div>
        ))}
      </pre>
    </div>
  )
}

export function NiceWasteCover() {
  return (
    <div className="cover cover-nice">
      <div className="laptop">
        <div className="laptop-screen">
          <div className="laptop-bar"><i /><i /><i /><span>nice-waste-management.streamlit.app</span></div>
          <img src="img/nice-synthese.webp" alt="Synthèse exécutive de l'application Nice Waste Management" />
        </div>
        <div className="laptop-base" />
      </div>
      <div className="float-card fc-1"><strong>0,95</strong><span>SPI délais</span></div>
      <div className="float-card fc-2"><strong>12</strong><span>risques suivis</span></div>
      <div className="float-card fc-3"><strong>2,5 M€</strong><span>budget piloté</span></div>
    </div>
  )
}

export function KubeQuestCover() {
  return (
    <div className="cover cover-kube">
      <div className="hex-grid" aria-hidden="true" />
      <Terminal
        title="kube-1 — eu-west-3"
        lines={[
          { type: 'cmd', text: 'kubectl get hpa -n sample-app -w' },
          { type: 'out', text: 'sample-app   cpu: 251%/70%   replicas: 2 → 5' },
          { type: 'cmd', text: 'helm rollback sample-app' },
          { type: 'ok', text: '✔ Rollback was a success — stable en 30 s' },
          { type: 'cmd', text: 'kubectl get applications -n argocd' },
          { type: 'ok', text: '✔ sample-app   Synced   Healthy' },
        ]}
      />
      <ul className="badge-row" aria-label="Outils">
        <li>Kubernetes</li><li>ArgoCD</li><li>Prometheus</li><li>Grafana</li>
      </ul>
    </div>
  )
}

export function TerraCloudCover() {
  return (
    <div className="cover cover-terra">
      <div className="duel">
        <div className="duel-card">
          <span className="duel-label">IaaS</span>
          <strong>17 €</strong>
          <span className="duel-sub">par mois</span>
          <div className="meter"><i style={{ width: '57%' }} /></div>
        </div>
        <div className="duel-vs">vs</div>
        <div className="duel-card">
          <span className="duel-label">PaaS</span>
          <strong>30 €</strong>
          <span className="duel-sub">par mois</span>
          <div className="meter"><i style={{ width: '100%' }} /></div>
        </div>
      </div>
      <div className="terra-foot">
        <code>terraform apply</code>
        <span>Azure · équipe de 4 · Team Lead</span>
      </div>
    </div>
  )
}

export function SdkCover() {
  return (
    <div className="cover cover-sdk">
      <div className="fan">
        <div className="fan-phone p1"><img src="img/az-input.webp" alt="Écran de saisie de l'identifiant" loading="lazy" /></div>
        <div className="fan-phone p2"><img src="img/az-profil.webp" alt="Écran de profil utilisateur" loading="lazy" /></div>
        <div className="fan-phone p3"><img src="img/az-loading.webp" alt="Écran de chargement" loading="lazy" /></div>
      </div>
    </div>
  )
}

export function LaddCover() {
  return (
    <div className="cover cover-ladd">
      <div className="notif-stack" aria-hidden="true">
        <div className="notif n1"><span className="ico">✉</span><div><b>E-mail</b><small>Message envoyé au compte client</small></div></div>
        <div className="notif n2"><span className="ico">💬</span><div><b>SMS</b><small>Notification programmée</small></div></div>
        <div className="notif n3"><span className="ico">🔔</span><div><b>Push</b><small>Diffusée sur mobile</small></div></div>
      </div>
      <p className="cover-caption">React Native · Expo · Redux</p>
    </div>
  )
}

export function TrelloCover() {
  const cols = [
    { name: 'À faire', cards: ['Inviter', 'Listes'] },
    { name: 'En cours', cards: ['Droits d’accès'] },
    { name: 'Terminé', cards: ['Connexion', 'Projets'] },
  ]
  return (
    <div className="cover cover-trello">
      <div className="board" aria-hidden="true">
        {cols.map((c) => (
          <div className="board-col" key={c.name}>
            <span className="board-title">{c.name}</span>
            {c.cards.map((card) => <div className="board-card" key={card}>{card}</div>)}
          </div>
        ))}
      </div>
    </div>
  )
}

export const covers = {
  'nice-waste': NiceWasteCover,
  kubequest: KubeQuestCover,
  terracloud: TerraCloudCover,
  sdk: SdkCover,
  ladd: LaddCover,
  trellolike: TrelloCover,
}
