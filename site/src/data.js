export const GITHUB = 'https://github.com/hanenetriaa'

export const profile = {
  name: 'Hanene Triaa',
  title: 'Architecte des systèmes d’information',
  pitch:
    'Je conçois des infrastructures cloud, je développe des applications et je pilote des projets techniques, de la note de cadrage à la mise en production.',
  school: 'Master Architecte des systèmes d’information, EPITECH Nice',
}

export const expertises = [
  {
    title: 'Cloud et DevOps',
    text: 'Des infrastructures décrites en code, supervisées et déployées automatiquement.',
    items: ['AWS et Azure', 'Terraform', 'Kubernetes, Helm, Docker', 'GitOps avec ArgoCD', 'Prometheus, Grafana, Loki'],
  },
  {
    title: 'Développement',
    text: 'Des applications web et mobiles structurées, connectées à des API.',
    items: ['React Native, Flutter', 'Laravel, PHP', 'Python, Streamlit', 'JavaScript, TypeScript', 'API REST'],
  },
  {
    title: 'Pilotage de projet',
    text: 'Des projets cadrés, planifiés et suivis avec des indicateurs clairs.',
    items: ['Cadrage et planning', 'Budget et valeur acquise', 'Risques, RACI, gouvernance', 'Animation d’équipe', 'Jira'],
  },
]

export const method = [
  { title: 'Cadrer', text: 'Objectifs mesurables, périmètre, parties prenantes et risques identifiés dès le départ.' },
  { title: 'Concevoir', text: 'Une architecture simple à exploiter, documentée et décrite en code.' },
  { title: 'Déployer', text: 'Automatisation, supervision et retour arrière prévus avant la mise en production.' },
  { title: 'Piloter', text: 'Avancement, coûts et décisions suivis et partagés avec l’équipe.' },
]

export const filters = ['Tous', 'Cloud et DevOps', 'Développement', 'Pilotage de projet']

export const projects = [
  {
    id: 'nice-waste',
    name: 'Nice Waste Management',
    domains: ['Pilotage de projet', 'Développement'],
    summary:
      'Outil de pilotage d’un projet public : équiper les 15 quartiers de Nice de conteneurs connectés, en 12 mois, avec un budget de 2,5 M€.',
    highlights: [
      'Gantt avec jalons et suivi du budget par la valeur acquise (SPI, CPI)',
      'Matrice des risques, RACI et grille des parties prenantes',
      'Synthèse exécutive en un écran pour les décideurs',
    ],
    stack: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
    links: [
      { label: 'Ouvrir la démo', url: 'https://nice-waste-management.streamlit.app' },
      { label: 'Code source', url: `${GITHUB}/nice_waste_management` },
    ],
  },
  {
    id: 'kubequest',
    name: 'KubeQuest',
    domains: ['Cloud et DevOps'],
    summary:
      'Plateforme Kubernetes de production montée de zéro sur AWS : cluster, supervision, centralisation des logs, GitOps et règles de sécurité.',
    highlights: [
      'Auto-scaling validé sous charge, de 2 à 5 réplicas',
      'Retour arrière automatique en 30 secondes après un déploiement défaillant',
      'Synchronisation GitOps du cluster en moins d’une minute',
    ],
    stack: ['AWS', 'Kubernetes', 'Helm', 'ArgoCD', 'Prometheus', 'Grafana', 'OPA Gatekeeper'],
    links: [{ label: 'Code et documentation', url: `${GITHUB}/kubequest-kubernetes-cloud-infra` }],
  },
  {
    id: 'terracloud',
    name: 'TerraCloud',
    domains: ['Cloud et DevOps', 'Pilotage de projet'],
    summary:
      'IaaS ou PaaS ? La même application déployée en Terraform sur une VM et sur Azure App Service, puis comparée sur les coûts, la performance et l’exploitation.',
    highlights: [
      'Team Lead d’une équipe de 4 : organisation sous Jira, onboarding, rapport final',
      'Infrastructure entièrement en code, state partagé dans Azure Storage',
      'Recommandation chiffrée : IaaS 43 % moins cher, PaaS plus simple à exploiter',
    ],
    stack: ['Azure', 'Terraform', 'Docker', 'Traefik', 'Artillery', 'Jira'],
    links: [{ label: 'Code et rapport', url: `${GITHUB}/terracloud-infrastructure` }],
  },
  {
    id: 'sdk',
    name: 'User Profile SDK',
    domains: ['Développement'],
    summary:
      'SDK Flutter réutilisable qui affiche un profil utilisateur depuis une API REST, et application React Native sur la même API.',
    highlights: [
      'Clean Architecture : domaine, données et présentation séparés',
      'Cache local de 5 minutes, stratégie cache-first',
      '23 tâches planifiées et estimées avant de coder',
    ],
    stack: ['Flutter', 'Riverpod', 'Dio', 'Hive', 'React Native', 'TypeScript'],
    links: [{ label: 'Code et vidéo', url: `${GITHUB}/azeoo-test-technique` }],
  },
  {
    id: 'ladd',
    name: 'Ladd Notif',
    domains: ['Développement'],
    summary:
      'Application mobile pour piloter une plateforme de notifications : comptes clients, utilisateurs et envoi de messages e-mail, SMS ou push.',
    highlights: [
      'Navigation distincte pour les visiteurs et les utilisateurs connectés',
      'Réinitialisation du mot de passe en 3 étapes par code',
      'État applicatif centralisé avec Redux',
    ],
    stack: ['React Native', 'Expo', 'Redux Toolkit', 'React Navigation'],
    
    links: [{ label: 'Code source', url: `${GITHUB}/ladd-notif-mobile-expo` }],
  },
  {
    id: 'trellolike',
    name: 'TrelloLike',
    domains: ['Développement', 'Pilotage de projet'],
    summary:
      'Gestionnaire de projets collaboratif en Kanban : projets, listes, tâches et invitations de collaborateurs avec contrôle d’accès.',
    highlights: [
      'Invitations avec acceptation ou refus, suivi des réponses',
      'Seuls les membres d’un projet accèdent à ses tâches',
      'Architecture MVC et modèle relationnel Eloquent',
    ],
    stack: ['PHP', 'Laravel', 'MySQL', 'Blade'],
    
    links: [{ label: 'Code source', url: `${GITHUB}/TrelloLike` }],
  },
]
