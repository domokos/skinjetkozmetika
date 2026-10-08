import { Camera, Clock3, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="page-shell section-shell contact-page">
      <div className="page-heading"><div className="section-label"><span>05</span><span>Várunk szeretettel</span></div><h1>Kapcsolat</h1><p>Üzenetet, telefonos és személyes megkeresést is örömmel fogadunk.</p></div>
      <div className="response-note"><Clock3 size={18} aria-hidden="true" /><p>Ha éppen dolgozunk, a hívások fogadása néha késhet, de minden megkeresésre igyekszünk mielőbb visszajelezni!</p></div>
      <div className="contact-details">
        <div className="contact-block"><h2><MapPin size={17} aria-hidden="true" /> Cím</h2><a href="https://maps.google.com/?q=Budapest+Krisztina+krt+24" target="_blank" rel="noreferrer">Budapest 1013<br />Krisztina krt. 24.</a></div>
        <div className="contact-block"><h2><Phone size={17} aria-hidden="true" /> Telefon</h2><a href="tel:+369912885">+36 99 12 885</a><a href="tel:+3612123768">+36 1 212 37 68</a></div>
        <div className="contact-block"><h2>Online</h2><a href="https://www.instagram.com/skinjetkozmetika/" target="_blank" rel="noreferrer"><Camera size={16} aria-hidden="true" /> Instagram</a><a href="https://www.facebook.com/profile.php?id=61555674871321" target="_blank" rel="noreferrer">Facebook</a></div>
      </div>
    </main>
  )
}
