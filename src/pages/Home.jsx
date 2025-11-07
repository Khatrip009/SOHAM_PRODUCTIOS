import Hero from '../components/Hero.jsx'
import USP from '../components/USP.jsx'
import Categories from '../components/Categories.jsx'
import Quality from '../components/Quality.jsx'
import Contact from '../components/Contact.jsx'
import { useEffect } from 'react'

export default function Home() {
  // add fade-up reveal similar to your vanilla script
  useEffect(() => {
    const fades = document.querySelectorAll('.fade-up')
    const obs = new IntersectionObserver((ents) => {
      ents.forEach(e => e.isIntersecting && e.target.classList.add('visible'))
    }, { threshold: 0.25 })
    fades.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // animate counters once
  useEffect(() => {
    const stats = document.querySelectorAll('.stat-value[data-target]')
    let ran = false
    const animate = (el) => {
      const target = Number(el.getAttribute('data-target') || '0')
      const duration = 1200
      const start = performance.now()
      const step = (now) => {
        const p = Math.min(1, (now - start) / duration)
        const val = Math.floor(target * p)
        el.textContent = target >= 10000000 ? '5 Cr+' : `${val}+`
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }
    const obs = new IntersectionObserver((ents) => {
      if (ran) return
      if (ents.some(e => e.isIntersecting)) {
        ran = true
        stats.forEach(animate)
      }
    }, { threshold: 0.4 })
    stats.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Hero />
      <USP />
      <Categories />
      <Quality />
      <Contact />
    </>
  )
}
