export const GITHUB = 'https://github.com/hanenetriaa'

export const profile = {
  name: 'Hanene Triaa',
  title: 'Développement, cloud et gestion de projet',
  pitch:
    'Du code à la mise en production, j’aime comprendre un besoin, construire une solution fiable et la mener jusqu’au bout.',
  school: 'Master Architecte des systèmes d’information, EPITECH Nice',
}

export const method = [
  { title: 'Cadrer', text: 'Objectifs mesurables, périmètre, parties prenantes et risques identifiés dès le départ.' },
  { title: 'Concevoir', text: 'Une solution simple à faire évoluer, documentée et expliquée.' },
  { title: 'Livrer', text: 'Automatisation, tests et supervision prévus avant la mise en production.' },
  { title: 'Piloter', text: 'Avancement, coûts et décisions suivis et partagés avec l’équipe.' },
]

export const filters = ['Tous', 'Web', 'Mobile', 'Cloud et DevOps', 'Gestion de projet']

export const projects = [
  {
    id: 'nice-waste',
    name: 'Nice Waste Management',
    type: 'Application web',
    domains: ['Web', 'Gestion de projet'],
    summary: 'Tableau de bord de pilotage d’un projet public de 2,5 M€ : planning, budget, risques et parties prenantes.',
    details:
      'Outil conçu pour piloter la modernisation de la collecte des déchets dans 15 quartiers de Nice sur 12 mois. Les indicateurs sont calculés automatiquement à partir du planning et du budget.',
    highlights: [
      'Diagramme de Gantt avec jalons et suivi du budget par la valeur acquise (SPI, CPI)',
      'Matrice des risques, matrice RACI et grille des parties prenantes',
      'Synthèse exécutive en un écran pour les décideurs',
    ],
    tech: ['python', 'streamlit', 'pandas', 'plotly'],
    links: [
      { label: 'Voir la démo', url: 'https://nice-waste-management.streamlit.app' },
      { label: 'Code', url: `${GITHUB}/nice_waste_management` },
    ],
  },
  {
    id: 'sdk',
    name: 'User Profile SDK',
    type: 'Application mobile',
    domains: ['Mobile'],
    summary: 'SDK Flutter réutilisable qui affiche un profil utilisateur, avec une app React Native sur la même API.',
    details:
      'Un module autonome, testable et facile à intégrer : gestion du chargement, des erreurs et d’un cache local. L’app React Native reproduit le parcours en deux onglets.',
    highlights: [
      'Clean Architecture : domaine, données et présentation séparés',
      'Cache local de 5 minutes avec stratégie cache-first',
      '23 tâches planifiées et estimées avant de coder',
    ],
    tech: ['flutter', 'dart', 'reactnative', 'typescript'],
    links: [{ label: 'Voir le code', url: `${GITHUB}/azeoo-test-technique` }],
  },
  {
    id: 'kubequest',
    name: 'KubeQuest',
    type: 'Infrastructure cloud',
    domains: ['Cloud et DevOps'],
    summary: 'Plateforme Kubernetes de production montée de zéro sur AWS, avec supervision, GitOps et sécurité.',
    details:
      'Cluster multi-nœuds avec kubeadm, ingress, supervision Prometheus et Grafana, centralisation des logs, déploiement continu avec ArgoCD et règles de sécurité OPA Gatekeeper.',
    highlights: [
      'Auto-scaling validé sous charge, de 2 à 5 réplicas',
      'Retour arrière automatique en 30 secondes après un déploiement défaillant',
      'Synchronisation GitOps du cluster en moins d’une minute',
    ],
    tech: ['aws', 'kubernetes', 'helm', 'argocd', 'prometheus', 'grafana'],
    links: [{ label: 'Voir le code', url: `${GITHUB}/kubequest-kubernetes-cloud-infra` }],
  },
  {
    id: 'trellolike',
    name: 'TrelloLike',
    type: 'Application web',
    domains: ['Web', 'Gestion de projet'],
    summary: 'Gestionnaire de projets en Kanban : projets, listes, tâches et invitations de collaborateurs.',
    details:
      'Application Laravel où chaque utilisateur crée ses projets, les organise en listes et tâches, et invite des collaborateurs qui acceptent ou refusent l’invitation.',
    highlights: [
      'Invitations avec acceptation ou refus et suivi des réponses',
      'Contrôle d’accès : seuls les membres d’un projet voient ses tâches',
      'Architecture MVC et modèle relationnel Eloquent',
    ],
    tech: ['laravel', 'php', 'mysql', 'javascript'],
    links: [{ label: 'Voir le code', url: `${GITHUB}/TrelloLike` }],
  },
  {
    id: 'ladd',
    name: 'Ladd Notif',
    type: 'Application mobile',
    domains: ['Mobile'],
    summary: 'App mobile pour gérer une plateforme de notifications : comptes, utilisateurs et envoi e-mail, SMS ou push.',
    details:
      'Client mobile d’une API REST : authentification, parcours de mot de passe oublié, consultation des comptes et des utilisateurs, création de messages par canal.',
    highlights: [
      'Navigation distincte pour les visiteurs et les utilisateurs connectés',
      'Réinitialisation du mot de passe en 3 étapes par code',
      'État applicatif centralisé avec Redux',
    ],
    tech: ['reactnative', 'expo', 'redux', 'javascript'],
    links: [{ label: 'Voir le code', url: `${GITHUB}/ladd-notif-mobile-expo` }],
  },
  {
    id: 'terracloud',
    name: 'TerraCloud',
    type: 'Infrastructure cloud',
    domains: ['Cloud et DevOps', 'Gestion de projet'],
    summary: 'IaaS ou PaaS ? La même app déployée en Terraform sur Azure, comparée sur les coûts et l’exploitation.',
    details:
      'Projet mené à 4 en tant que Team Lead : organisation des tâches sous Jira, onboarding de l’équipe, déploiement des deux architectures et rapport de recommandation.',
    highlights: [
      'Team Lead d’une équipe de 4 : organisation sous Jira, onboarding, rapport final',
      'Infrastructure entièrement en code, state partagé dans Azure Storage',
      'Recommandation chiffrée : IaaS 43 % moins cher, PaaS plus simple à exploiter',
    ],
    tech: ['azure', 'terraform', 'docker', 'traefik', 'jira'],
    links: [{ label: 'Voir le code', url: `${GITHUB}/terracloud-infrastructure` }],
  },
]
