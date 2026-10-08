import { ArrowDown, ArrowUpRight, Camera, Clock3, MapPin, Phone } from 'lucide-react'
import { concerns, lightTreatments, prices, services, treatments } from './data/content'
import './site.css'

const lightImages = [
  'photo-1570172619644-dfd03ed5d881',
  'photo-1608248543803-ba4f8c70ae0b',
  'photo-1571781926291-c477ebfd024b',
]

function Site() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Skinjet Kozmetika, főoldal">
          <span className="wordmark-name">skinjet</span>
          <span className="wordmark-label">kozmetika · budapest</span>
        </a>
        <nav className="main-nav" aria-label="Fő navigáció">
          <a href="#bemutatkozas">Bemutatkozás</a>
          <a href="#szolgaltatasok">Szolgáltatások</a>
          <a href="#gepikezeles">Gépi kezelések</a>
          <a href="#arlista">Árlista</a>
          <a href="#kapcsolat">Kapcsolat</a>
        </nav>
        <a className="header-call" href="tel:+369912885"><Phone size={16} aria-hidden="true" /><span>Időpontot kérek</span></a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Krisztinaváros · 1970 óta</p>
            <h1 id="hero-title">A szépség<br />figyelemből születik.</h1>
            <p className="hero-lede">Személyre szabott kozmetikai kezelések, generációkon át öröklődő szakértelemmel.</p>
            <a className="text-link" href="#bemutatkozas">Ismerj meg minket <ArrowDown size={16} aria-hidden="true" /></a>
          </div>
          <div className="hero-image-wrap">
            <img className="hero-image" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1500&q=85" alt="Nyugodt, személyre szabott arckezelés egy kozmetikában" fetchPriority="high" />
            <div className="hero-note"><span>50+</span><span>év szakértelem</span></div>
          </div>
          <span className="hero-index" aria-hidden="true">01 / 04</span>
        </section>

        <section className="intro section-shell" id="bemutatkozas" aria-labelledby="intro-title">
          <div className="section-label"><span>01</span><span>Bemutatkozás</span></div>
          <div className="intro-content">
            <h2 id="intro-title">Hagyományos szemlélet.<br /><em>Személyes gondoskodás.</em></h2>
            <div className="intro-copy">
              <p>Több mint fél évszázada működő kozmetikánkban ketten dolgozunk, mesterkozmetikus végzettséggel. Szakmai tudásunk generációkon át öröklődött, folyamatosan megújulunk, és minden vendégünkre személyre szabott figyelemmel és gondoskodással fordulunk.</p>
              <p>A hagyományos kozmetikai szemléletet, korszerű hatóanyagokkal és modern módszerekkel ötvözzük. Ennek előnye, hogy a kezelések a bevált, kíméletes alapokra épülnek, miközben a bőr aktuális állapotához igazodva, személyre szabott megoldásokat kínálnak.</p>
              <p>Barátságos környezetben, bejelentkezés alapján dolgozunk.</p>
              <p>Üzenetet, telefonos és személyes megkeresést is örömmel fogadunk!</p>
            </div>
          </div>
        </section>

        <section className="services section-shell" id="szolgaltatasok" aria-labelledby="services-title">
          <div className="section-label"><span>02</span><span>Gondoskodás tetőtől talpig</span></div>
          <div className="section-title-row"><h2 id="services-title">Szolgáltatásaink</h2><span className="section-count">{String(services.length).padStart(2, '0')} kezelés</span></div>
          <div className="service-list">
            {services.map((service, index) => (
              <article className="service-row" key={service.title}>
                <span className="row-index">{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{service.title}</h3>{service.description && <p>{service.description}</p>}</div>
                <ArrowUpRight className="row-arrow" size={21} aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="concerns section-shell" aria-labelledby="concerns-title">
          <div className="section-label"><span>03</span><span>Bőröd igényeire hangolva</span></div>
          <div className="concern-heading"><h2 id="concerns-title">Amiben segíthetünk</h2><p>A kezelési tervet minden esetben egyénileg, a bőr aktuális állapotához és az igényeidhez igazítjuk.</p></div>
          <div className="concern-grid">
            {concerns.map((concern) => (
              <article className="concern-item" key={concern.title}>
                <h3>{concern.title}</h3>
                <ul>{concern.methods.map((method) => <li key={method}>{method}</li>)}</ul>
                <a href="#fascia-terapia">Fasciális ArcTerápia <ArrowUpRight size={15} aria-hidden="true" /></a>
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
              <a className="text-link" href="#arlista">Megnézem az árakat <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </article>
        </section>

        <section className="devices section-shell" id="gepikezeles" aria-labelledby="devices-title">
          <div className="section-label"><span>04</span><span>Korszerű technológia</span></div>
          <div className="section-title-row device-title-row"><h2 id="devices-title">Gépi kezelések</h2><p>A professzionális gépi eljárásokat személyre szabottan, akár egymással kombinálva alkalmazzuk.</p></div>
          <div className="treatment-grid">
            {treatments.map((treatment) => (
              <article className="treatment-card" id={treatment.id} key={treatment.title}>
                <span className="treatment-number">{treatment.number}</span><h3>{treatment.title}</h3><p>{treatment.description}</p>
              </article>
            ))}
          </div>
          <div className="light-treatment-list" aria-label="Fényterápiás kezelések">
            {lightTreatments.map((treatment, index) => (
              <article className="light-treatment" key={treatment.title}>
                <div className="light-treatment-copy"><span className="treatment-number">{String(treatments.length + index + 1).padStart(2, '0')}</span><h3>{treatment.title}</h3><p>{treatment.description}</p></div>
                <img src={`https://images.unsplash.com/${lightImages[index]}?auto=format&fit=crop&w=1200&q=80`} alt={treatment.imageAlt} loading="lazy" />
              </article>
            ))}
          </div>
        </section>

        <section className="price-section section-shell" id="arlista" aria-labelledby="prices-title">
          <div className="section-label"><span>05</span><span>Átlátható árak</span></div>
          <div className="price-heading"><div><h2 id="prices-title">Árlista</h2><p>Bármely szolgáltatásunkra 10 alkalmas bérletet kínálunk, 9 alkalom áráért.</p></div><span className="price-unit">Minden ár forintban</span></div>
          <div className="price-groups">
            {prices.map((group) => (
              <section className="price-group" key={group.title} aria-label={group.title}>
                <h3>{group.title}</h3>
                <dl>{group.items.map((item) => <div className="price-row" key={item.name}><dt>{item.name}</dt><dd>{item.amount} <span>Ft</span></dd></div>)}</dl>
              </section>
            ))}
          </div>
        </section>

        <section className="contact section-shell" id="kapcsolat" aria-labelledby="contact-title">
          <div className="section-label"><span>06</span><span>Várunk szeretettel</span></div>
          <div className="contact-layout">
            <div className="contact-intro"><h2 id="contact-title">Kapcsolat</h2><p>Üzenetet, telefonos és személyes megkeresést is örömmel fogadunk.</p><div className="response-note"><Clock3 size={18} aria-hidden="true" /><p>Ha éppen dolgozunk, a hívások fogadása néha késhet, de minden megkeresésre igyekszünk mielőbb visszajelezni!</p></div></div>
            <div className="contact-details">
              <div className="contact-block"><h3><MapPin size={17} aria-hidden="true" /> Cím</h3><a href="https://maps.google.com/?q=Budapest+Krisztina+krt+24" target="_blank" rel="noreferrer">Budapest 1013<br />Krisztina krt. 24.</a></div>
              <div className="contact-block"><h3><Phone size={17} aria-hidden="true" /> Telefon</h3><a href="tel:+369912885">+36 99 12 885</a><a href="tel:+3612123768">+36 1 212 37 68</a></div>
              <div className="contact-block"><h3>Online</h3><a href="https://www.instagram.com/skinjetkozmetika/" target="_blank" rel="noreferrer"><Camera size={16} aria-hidden="true" /> Instagram</a><a href="https://www.facebook.com/profile.php?id=61555674871321" target="_blank" rel="noreferrer">Facebook <ArrowUpRight size={15} aria-hidden="true" /></a></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><a className="wordmark footer-wordmark" href="#top"><span className="wordmark-name">skinjet</span><span className="wordmark-label">kozmetika · budapest</span></a><p>© 2026 Skinjet Kozmetika</p><a href="#top">Vissza az oldal tetejére ↑</a></footer>
    </>
  )
}

export default Site
