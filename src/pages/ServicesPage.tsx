import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { concerns, services } from '../data/content'

export default function ServicesPage() {
  return (
    <main className="page-shell section-shell">
      <div className="page-heading"><div className="section-label"><span>02</span><span>Személyre szabott gondoskodás</span></div><h1>Szolgáltatásaink</h1></div>
      <div className="service-list">
        {services.map((service, index) => (
          <article className="service-row" key={service.title}>
            <span className="row-index">{String(index + 1).padStart(2, '0')}</span>
            <div><h2>{service.title}</h2>{service.description && <p>{service.description}</p>}</div>
            <ArrowUpRight className="row-arrow" size={21} aria-hidden="true" />
          </article>
        ))}
      </div>
      <section className="concerns-page" aria-labelledby="concerns-title">
        <div className="section-label"><span>03</span><span>Bőröd igényeire hangolva</span></div>
        <div className="concern-heading"><h2 id="concerns-title">Bőrproblémák kezelése</h2><p>A kezelési tervet minden esetben egyénileg, a bőr aktuális állapotához és az igényeidhez igazítjuk.</p></div>
        <div className="concern-grid">
          {concerns.map((concern) => (
            <article className="concern-item" key={concern.title}>
              <h3>{concern.title}</h3>
              <ul>{concern.methods.map((method) => <li key={method}>{method}</li>)}</ul>
              {concern.fasciaLink && <Link to="/szolgaltatasok#fascia-terapia">Fasciális ArcTerápia <ArrowUpRight size={15} aria-hidden="true" /></Link>}
            </article>
          ))}
        </div>
        <article className="fascia-feature" id="fascia-terapia">
          <div className="fascia-image"><img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80" alt="Nyugodt kezelőhelyiség egy arckezeléshez" loading="lazy" /></div>
          <div className="fascia-copy">
            <p className="eyebrow">Kiemelt kezelés · kb. 60 perc</p>
            <h3>Fasciális<br /><em>ArcTerápia</em></h3>
            <p>Manuális, mélyrétegű kötőszöveti kezelés, amely az arc, a nyak és a dekoltázs fasciájára hatva lazítja a mimikai izmokat, fokozza a kollagéntermelést és természetes liftinghatást biztosít.</p>
            <p>Az azonnali eredmény két hét után válik teljessé; kúraszerűen, 3–4 hetente alkalmazva a legtartósabb a hatása.</p>
            <Link className="text-link" to="/arlista">Megnézem az árakat <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </article>
      </section>
    </main>
  )
}
