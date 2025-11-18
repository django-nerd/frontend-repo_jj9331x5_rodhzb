import React from 'react'

const products = [
  { id: 1, title: 'Signature Band', price: 120, image: 'https://images.unsplash.com/photo-1736184766006-377f3e9827a1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaWduYXR1cmUlMjBCYW5kfGVufDB8MHx8fDE3NjM0OTIyOTB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 2, title: 'Everyday Hoops', price: 95, image: 'https://images.unsplash.com/photo-1736184766006-377f3e9827a1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaWduYXR1cmUlMjBCYW5kfGVufDB8MHx8fDE3NjM0OTIyOTB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 3, title: 'Sculpted Cuff', price: 160, image: 'https://images.unsplash.com/photo-1736184766006-377f3e9827a1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaWduYXR1cmUlMjBCYW5kfGVufDB8MHx8fDE3NjM0OTIyOTB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 4, title: 'Pearl Huggies', price: 110, image: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1400&auto=format&fit=crop' },
  { id: 5, title: 'Signet Ring', price: 140, image: 'https://images.unsplash.com/photo-1736184766006-377f3e9827a1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaWduYXR1cmUlMjBCYW5kfGVufDB8MHx8fDE3NjM0OTIyOTB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 6, title: 'Stacking Set', price: 180, image: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=1400&auto=format&fit=crop' },
]

const HDGrid = () => {
  return (
    <section id="bestsellers" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-semibold text-slate-900">Bestsellers</h2>
          <a href="#" className="text-sm text-slate-600 hover:text-slate-900">View all</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <a key={p.id} href="#" className="group">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <h3 className="text-sm font-medium text-slate-900">{p.title}</h3>
                <span className="text-sm text-slate-600">${p.price}</span>
              </div>
              <button className="mt-2 w-full text-sm px-3 py-2 rounded-full border border-slate-300 hover:border-slate-400 text-slate-800">Quick add</button>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HDGrid
