import { prices } from '../data/content'

export default function PricesPage() {
  return (
    <main className="page-shell section-shell">
      <div className="page-heading price-heading"><div><div className="section-label"><span>04</span><span>Átlátható árak</span></div><h1>Árlista</h1><p>Bármely szolgáltatásunkra 10 alkalmas bérletet kínálunk, 9 alkalom áráért.</p></div><span className="price-unit">Minden ár forintban</span></div>
      <div className="price-groups">
        {prices.map((group) => (
          <section className="price-group" key={group.title} aria-label={group.title}>
            <h2>{group.title}</h2>
            <dl>{group.items.map((item) => <div className="price-row" key={item.name}><dt>{item.name}</dt><dd>{item.amount} <span>Ft</span></dd></div>)}</dl>
          </section>
        ))}
      </div>
    </main>
  )
}
