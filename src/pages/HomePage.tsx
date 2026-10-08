import { ArrowDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Krisztinaváros · több mint 50 éve</p>
          <h1 id="hero-title">A szépség<br />figyelemből születik.</h1>
          <p className="hero-lede">Személyre szabott kozmetikai kezelések, generációkon át öröklődő szakértelemmel.</p>
          <Link className="text-link" to="/bemutatkozas">Ismerj meg minket <ArrowDown size={16} aria-hidden="true" /></Link>
        </div>
        <div className="hero-image-wrap">
          <img className="hero-image" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1500&q=85" alt="Nyugodt, személyre szabott arckezelés egy kozmetikában" fetchPriority="high" />
          <div className="hero-note"><span>50+</span><span>év szakértelem</span></div>
        </div>
        <span className="hero-index" aria-hidden="true">SK / 01</span>
      </section>
      <section className="home-intro section-shell">
        <div className="section-label"><span>Skinjet Kozmetika</span><span>Budapest · Krisztina körút 24.</span></div>
        <div className="home-intro-row">
          <h2>Idő, figyelem,<br /><em>szakértő kezek.</em></h2>
          <div><p>Több mint fél évszázados tapasztalattal, személyre szabott kezelésekkel várunk barátságos, nyugodt környezetben.</p><Link className="text-link" to="/szolgaltatasok">Kezeléseink <ArrowRight size={16} aria-hidden="true" /></Link></div>
        </div>
      </section>
    </main>
  )
}
