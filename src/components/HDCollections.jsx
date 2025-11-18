import React from 'react'

const collections = [
  { id: 1, title: 'Rings', image: 'https://images.unsplash.com/photo-1736184766006-377f3e9827a1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaWduYXR1cmUlMjBCYW5kfGVufDB8MHx8fDE3NjM0OTIyOTB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 2, title: 'Necklaces', image: 'https://images.unsplash.com/photo-1736184766006-377f3e9827a1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaWduYXR1cmUlMjBCYW5kfGVufDB8MHx8fDE3NjM0OTIyOTB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 3, title: 'Earrings', image: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1400&auto=format&fit=crop' },
  { id: 4, title: 'Bracelets', image: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=1400&auto=format&fit=crop' },
]

const HDCollections = () => {
  return (
    <section id="collections" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-semibold text-slate-900">Featured collections</h2>
          <a href="#" className="text-sm text-slate-600 hover:text-slate-900">Shop all</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((c) => (
            <a key={c.id} href="#" className="group">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="mt-3 text-sm font-medium text-slate-900">{c.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HDCollections
