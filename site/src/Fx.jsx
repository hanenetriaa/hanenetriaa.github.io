import { useCallback, useRef } from 'react'

const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Inclinaison 3D qui suit la souris (désactivée si l'utilisateur limite les animations).
export function useTilt(max = 8) {
  const ref = useRef(null)
  const onPointerMove = useCallback((e) => {
    const el = ref.current
    if (!el || reduced() || e.pointerType === 'touch') return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--ry', `${(x * max).toFixed(2)}deg`)
    el.style.setProperty('--rx', `${(-y * max).toFixed(2)}deg`)
    el.style.setProperty('--mx', `${((x + 0.5) * 100).toFixed(1)}%`)
    el.style.setProperty('--my', `${((y + 0.5) * 100).toFixed(1)}%`)
  }, [max])
  const onPointerLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--ry', '0deg')
    el.style.setProperty('--rx', '0deg')
  }, [])
  return { ref, onPointerMove, onPointerLeave }
}

// Petit cube 3D qui tourne : les quatre univers des projets.
export function Cube() {
  const faces = ['Web', 'Mobile', 'Cloud', 'Projet', '</>', '{ }']
  return (
    <div className="cube-wrap" aria-hidden="true">
      <div className="cube">
        {faces.map((f, i) => <span key={f} className={`face f${i}`}>{f}</span>)}
      </div>
    </div>
  )
}
