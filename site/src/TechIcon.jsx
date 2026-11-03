import {
  siAmazonwebservices, siArgo, siDart, siDocker, siExpo, siFlutter, siGit, siGrafana, siHelm, siHtml5,
  siJavascript, siJira, siKubernetes, siLaravel, siLinux, siMysql, siNodedotjs, siPandas, siPhp, siPlotly,
  siPrometheus, siPython, siReact, siRedux, siStreamlit, siTerraform, siTraefikproxy, siTypescript, siVuedotjs,
} from 'simple-icons'

// Logos officiels des technologies (Simple Icons). Azure n'y figure pas : pictogramme générique.
export const TECH = {
  react: { name: 'React', icon: siReact },
  reactnative: { name: 'React Native', icon: siReact },
  vue: { name: 'Vue.js', icon: siVuedotjs },
  javascript: { name: 'JavaScript', icon: siJavascript },
  typescript: { name: 'TypeScript', icon: siTypescript },
  html: { name: 'HTML / CSS', icon: siHtml5 },
  node: { name: 'Node.js', icon: siNodedotjs },
  laravel: { name: 'Laravel', icon: siLaravel },
  php: { name: 'PHP', icon: siPhp },
  mysql: { name: 'MySQL', icon: siMysql },
  flutter: { name: 'Flutter', icon: siFlutter },
  dart: { name: 'Dart', icon: siDart },
  expo: { name: 'Expo', icon: siExpo },
  redux: { name: 'Redux', icon: siRedux },
  python: { name: 'Python', icon: siPython },
  streamlit: { name: 'Streamlit', icon: siStreamlit },
  pandas: { name: 'Pandas', icon: siPandas },
  plotly: { name: 'Plotly', icon: siPlotly },
  aws: { name: 'AWS', icon: siAmazonwebservices },
  azure: { name: 'Azure', icon: null },
  kubernetes: { name: 'Kubernetes', icon: siKubernetes },
  docker: { name: 'Docker', icon: siDocker },
  terraform: { name: 'Terraform', icon: siTerraform },
  helm: { name: 'Helm', icon: siHelm },
  argocd: { name: 'ArgoCD', icon: siArgo },
  prometheus: { name: 'Prometheus', icon: siPrometheus },
  grafana: { name: 'Grafana', icon: siGrafana },
  traefik: { name: 'Traefik', icon: siTraefikproxy },
  linux: { name: 'Linux', icon: siLinux },
  git: { name: 'Git', icon: siGit },
  jira: { name: 'Jira', icon: siJira },
}

// Couleurs trop sombres pour un fond foncé : on les éclaircit.
const DARK_FIX = { '000020': '8FA3FF', '232F3E': 'FF9900', '0F1689': '7B8CFF', '150458': 'B39DFF', '3F4F75': '9FB3E8' }

export function TechIcon({ id, size = 22, onDark = false }) {
  const t = TECH[id]
  if (!t) return null
  if (!t.icon) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#0089D6" d="M6.5 19a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 17.5 8.6 4.5 4.5 0 1 1 18 19z" />
      </svg>
    )
  }
  const hex = onDark && DARK_FIX[t.icon.hex] ? DARK_FIX[t.icon.hex] : t.icon.hex
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill={`#${hex}`} d={t.icon.path} />
    </svg>
  )
}

export function TechChip({ id, onDark }) {
  return (
    <li className="tech-chip" title={TECH[id]?.name}>
      <TechIcon id={id} size={16} onDark={onDark} />
      <span>{TECH[id]?.name}</span>
    </li>
  )
}
