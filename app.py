"""Portfolio de Hanene Triaa — application Streamlit."""

from pathlib import Path

import streamlit as st

ASSETS = Path(__file__).parent / "assets"
GITHUB = "https://github.com/hanenetriaa"

PROFILE = {
    "nom": "Hanene Triaa",
    "titre": "Architecte des systèmes d'information · Cloud, DevOps et gestion de projet",
    "formation": "Master Architecte des systèmes d'information — EPITECH Nice",
    "accroche": (
        "Je conçois et déploie des infrastructures cloud, je développe des applications et je pilote "
        "des projets techniques, de la planification jusqu'à la mise en production."
    ),
}

DOMAINS = ["Tous les projets", "Cloud et DevOps", "Développement", "Gestion de projet"]

PROJECTS = [
    {
        "nom": "Nice Waste Management",
        "domaines": ["Gestion de projet", "Développement"],
        "resume": "Application de pilotage d'un projet public : moderniser la collecte des déchets dans 15 quartiers de Nice, en 12 mois, avec un budget de 2,5 M€.",
        "points": [
            "Planning Gantt avec jalons et suivi budgétaire par la valeur acquise (SPI, CPI)",
            "Registre des risques, matrice RACI, grille des parties prenantes",
            "Synthèse exécutive pour les décideurs, publiée en ligne",
        ],
        "stack": ["Python", "Streamlit", "Pandas", "Plotly"],
        "image": "nice-waste.png",
        "liens": [("Démo en ligne", "https://nice-waste-management.streamlit.app"),
                  ("Code source", f"{GITHUB}/nice_waste_management")],
    },
    {
        "nom": "KubeQuest",
        "domaines": ["Cloud et DevOps"],
        "resume": "Plateforme Kubernetes de production construite de zéro sur AWS : cluster, supervision, logs, GitOps et politiques de sécurité.",
        "points": [
            "Auto-scaling validé sous charge : de 2 à 5 réplicas",
            "Retour arrière automatique en 30 secondes après un déploiement défaillant",
            "Synchronisation GitOps du cluster en moins d'une minute",
        ],
        "stack": ["AWS", "Kubernetes", "Helm", "ArgoCD", "Prometheus", "Grafana", "Loki", "OPA Gatekeeper"],
        "image": "kubequest.png",
        "liens": [("Code et documentation", f"{GITHUB}/kubequest-kubernetes-cloud-infra")],
    },
    {
        "nom": "TerraCloud",
        "domaines": ["Cloud et DevOps", "Gestion de projet"],
        "resume": "Comparaison IaaS / PaaS sur Azure : la même application déployée en Terraform sur une VM et sur App Service, puis évaluée sur les coûts, la performance et l'exploitation.",
        "points": [
            "Rôle de Team Lead d'une équipe de 4 : organisation sous Jira, onboarding, rapport final",
            "Infrastructure entièrement décrite en code, state partagé dans Azure Storage",
            "Recommandation argumentée : IaaS 43 % moins cher, PaaS plus simple à exploiter",
        ],
        "stack": ["Azure", "Terraform", "Docker", "Traefik", "Artillery", "Jira"],
        "image": "terracloud.png",
        "liens": [("Code et rapport", f"{GITHUB}/terracloud-infrastructure")],
    },
    {
        "nom": "User Profile SDK",
        "domaines": ["Développement"],
        "resume": "SDK Flutter réutilisable affichant un profil utilisateur depuis une API REST, et application React Native sur la même API.",
        "points": [
            "Clean Architecture : domaine, données et présentation séparés",
            "Cache local de 5 minutes avec stratégie cache-first",
            "Planification préalable : 23 tâches estimées sur un tableau Kanban",
        ],
        "stack": ["Flutter", "Riverpod", "Dio", "Hive", "React Native", "TypeScript"],
        "image": "azeoo.png",
        "liens": [("Code et vidéo", f"{GITHUB}/azeoo-test-technique")],
    },
    {
        "nom": "Ladd Notif",
        "domaines": ["Développement"],
        "resume": "Application mobile de pilotage d'une plateforme de notifications : comptes clients, utilisateurs et envoi de messages e-mail, SMS ou push.",
        "points": [
            "Navigation séparée pour les visiteurs et les utilisateurs connectés",
            "Réinitialisation du mot de passe en 3 étapes par code",
            "État applicatif centralisé avec Redux",
        ],
        "stack": ["React Native", "Expo", "Redux Toolkit", "React Navigation", "API REST"],
        "image": "ladd-notif.png",
        "liens": [("Code source", f"{GITHUB}/ladd-notif-mobile-expo")],
    },
    {
        "nom": "TrelloLike",
        "domaines": ["Développement", "Gestion de projet"],
        "resume": "Gestionnaire de projets collaboratif en Kanban : projets, listes, tâches et invitations de collaborateurs.",
        "points": [
            "Invitations avec acceptation ou refus et suivi des réponses",
            "Contrôle d'accès : seuls les membres du projet voient ses tâches",
            "Architecture MVC et modèle relationnel Eloquent",
        ],
        "stack": ["PHP", "Laravel", "MySQL", "Blade"],
        "image": "trellolike.png",
        "liens": [("Code source", f"{GITHUB}/TrelloLike")],
    },
]

SKILLS = {
    "Cloud et infrastructure": ["AWS (EC2)", "Azure (VM, App Service, Storage)", "Terraform", "Réseaux virtuels et sécurité", "Analyse des coûts cloud"],
    "DevOps": ["Kubernetes, Helm", "Docker", "GitOps avec ArgoCD", "Prometheus, Grafana, Loki", "OPA Gatekeeper, OIDC"],
    "Développement": ["Python, PHP, JavaScript, TypeScript, Dart", "Laravel, React Native, Flutter", "API REST", "Streamlit, Pandas, Plotly"],
    "Gestion de projet": ["Cadrage, planning, jalons", "Suivi budgétaire (valeur acquise)", "Risques, RACI, gouvernance", "Animation d'équipe, Jira"],
}

CSS = """
<style>
#MainMenu, header [data-testid="stToolbar"], footer {visibility: hidden;}
.block-container {max-width: 1080px; padding-top: 2.6rem; padding-bottom: 3rem;}
h1, h2, h3 {color: #14213D; letter-spacing: -0.01em;}
.hero-name {font-size: 2.9rem; font-weight: 700; color: #14213D; margin: 0; line-height: 1.1;}
.hero-title {font-size: 1.2rem; color: #1E3A8A; font-weight: 600; margin: .45rem 0 .9rem;}
.hero-text {font-size: 1.05rem; color: #334155; max-width: 62ch; line-height: 1.6;}
.hero-meta {color: #64748B; font-size: .95rem; margin-top: .4rem;}
.section-title {font-size: 1.55rem; font-weight: 700; color: #14213D; border-bottom: 2px solid #1E3A8A;
                padding-bottom: .35rem; margin: 2.2rem 0 1.2rem;}
.project-name {font-size: 1.35rem; font-weight: 700; color: #14213D; margin: 0 0 .15rem;}
.project-domains {color: #1E3A8A; font-size: .88rem; font-weight: 600; margin-bottom: .55rem;}
.project-text {color: #334155; line-height: 1.55; margin-bottom: .4rem;}
.project-points {color: #334155; margin: .2rem 0 .7rem 1.1rem; padding: 0; line-height: 1.55;}
.tags span {display: inline-block; border: 1px solid #CBD5E1; color: #334155; background: #F8FAFC;
            border-radius: 4px; padding: 2px 8px; margin: 0 6px 6px 0; font-size: .82rem;}
.links {display: flex; flex-wrap: wrap; gap: 10px; margin-top: .4rem;}
.links a.btn {display: inline-block; padding: 7px 16px; border: 1px solid #1E3A8A; border-radius: 6px;
              color: #1E3A8A; text-decoration: none; font-weight: 600; font-size: .92rem; white-space: nowrap;}
.links a.btn:first-child {background: #1E3A8A; color: #FFFFFF;}
.links a.btn:hover {background: #14213D; border-color: #14213D; color: #FFFFFF;}
.skill-title {font-weight: 700; color: #14213D; margin-bottom: .4rem;}
.skill-list {color: #334155; margin: 0 0 0 1.1rem; padding: 0; line-height: 1.7;}
.muted {color: #64748B; font-size: .9rem;}
[data-testid="stImage"] img {border: 1px solid #E2E8F0; border-radius: 6px;}
</style>
"""


def render_header():
    st.markdown(f"<p class='hero-name'>{PROFILE['nom']}</p>", unsafe_allow_html=True)
    st.markdown(f"<p class='hero-title'>{PROFILE['titre']}</p>", unsafe_allow_html=True)
    st.markdown(f"<p class='hero-text'>{PROFILE['accroche']}</p>", unsafe_allow_html=True)
    st.markdown(f"<p class='hero-meta'>{PROFILE['formation']}</p>", unsafe_allow_html=True)
    c1, c2, _ = st.columns([1, 1, 3])
    c1.link_button("Profil GitHub", GITHUB, use_container_width=True)
    c2.link_button("Démo Nice Waste", "https://nice-waste-management.streamlit.app", use_container_width=True)


def render_project(p: dict, image_left: bool):
    if image_left:
        img_col, text_col = st.columns([1.15, 1], gap="large")
    else:
        text_col, img_col = st.columns([1, 1.15], gap="large")
    with img_col:
        st.image(str(ASSETS / p["image"]), use_column_width=True)
    with text_col:
        st.markdown(f"<p class='project-name'>{p['nom']}</p>", unsafe_allow_html=True)
        st.markdown(f"<div class='project-domains'>{' / '.join(p['domaines'])}</div>", unsafe_allow_html=True)
        st.markdown(f"<div class='project-text'>{p['resume']}</div>", unsafe_allow_html=True)
        points = "".join(f"<li>{x}</li>" for x in p["points"])
        st.markdown(f"<ul class='project-points'>{points}</ul>", unsafe_allow_html=True)
        tags = "".join(f"<span>{t}</span>" for t in p["stack"])
        st.markdown(f"<div class='tags'>{tags}</div>", unsafe_allow_html=True)
        links = "".join(f"<a class='btn' href='{url}' target='_blank'>{label}</a>" for label, url in p["liens"])
        st.markdown(f"<div class='links'>{links}</div>", unsafe_allow_html=True)


def render_projects():
    st.markdown("<div class='section-title'>Projets</div>", unsafe_allow_html=True)
    domain = st.radio("Filtrer par domaine", DOMAINS, horizontal=True, label_visibility="collapsed")
    shown = [p for p in PROJECTS if domain == DOMAINS[0] or domain in p["domaines"]]
    st.caption(f"{len(shown)} projet{'s' if len(shown) > 1 else ''}")
    for i, p in enumerate(shown):
        render_project(p, image_left=i % 2 == 1)
        if i < len(shown) - 1:
            st.divider()


def render_skills():
    st.markdown("<div class='section-title'>Compétences</div>", unsafe_allow_html=True)
    cols = st.columns(len(SKILLS))
    for col, (title, items) in zip(cols, SKILLS.items()):
        with col:
            st.markdown(f"<div class='skill-title'>{title}</div>", unsafe_allow_html=True)
            st.markdown("<ul class='skill-list'>" + "".join(f"<li>{i}</li>" for i in items) + "</ul>",
                        unsafe_allow_html=True)


def render_contact():
    st.markdown("<div class='section-title'>Contact</div>", unsafe_allow_html=True)
    c1, c2 = st.columns([2, 1])
    c1.markdown(
        "<div class='project-text'>Je recherche un poste où associer architecture technique et pilotage de "
        "projet. Mes dépôts GitHub détaillent chaque projet : choix techniques, difficultés rencontrées et "
        "résultats.</div>",
        unsafe_allow_html=True,
    )
    c2.link_button("Voir mon GitHub", GITHUB, use_container_width=True, type="primary")
    st.markdown("<p class='muted' style='margin-top:2.5rem'>© 2026 Hanene Triaa</p>", unsafe_allow_html=True)


def main():
    st.set_page_config(page_title="Hanene Triaa — Portfolio", page_icon="💼", layout="wide",
                       initial_sidebar_state="collapsed")
    st.markdown(CSS, unsafe_allow_html=True)
    render_header()
    render_projects()
    render_skills()
    render_contact()


if __name__ == "__main__":
    main()
