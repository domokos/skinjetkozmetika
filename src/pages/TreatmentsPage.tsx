import { lightTreatments, treatments } from '../data/content'

const lightImages = ['photo-1570172619644-dfd03ed5d881', 'photo-1608248543803-ba4f8c70ae0b', 'photo-1571781926291-c477ebfd024b']

export default function TreatmentsPage() {
  return (
    <main className="page-shell section-shell">
      <div className="page-heading"><div className="section-label"><span>03</span><span>Korszerű technológia</span></div><h1>Gépi kezelések</h1><p>A professzionális gépi eljárásokat személyre szabottan, akár egymással kombinálva alkalmazzuk.</p></div>
      <div className="treatment-grid">
        {treatments.map((treatment) => (
          <article className="treatment-card" id={treatment.id} key={treatment.title}>
            <span className="treatment-number">{treatment.number}</span><h2>{treatment.title}</h2><p>{treatment.description}</p>
          </article>
        ))}
      </div>
      <div className="light-treatment-list" aria-label="Fényterápiás kezelések">
        {lightTreatments.map((treatment, index) => (
          <article className="light-treatment" key={treatment.title}>
            <div className="light-treatment-copy"><span className="treatment-number">{String(treatments.length + index + 1).padStart(2, '0')}</span><h2>{treatment.title}</h2><p>{treatment.description}</p></div>
            <img src={`https://images.unsplash.com/${lightImages[index]}?auto=format&fit=crop&w=1200&q=80`} alt={treatment.imageAlt} loading="lazy" />
          </article>
        ))}
      </div>
    </main>
  )
}
