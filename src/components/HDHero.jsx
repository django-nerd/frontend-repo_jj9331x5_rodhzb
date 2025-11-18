import React from 'react'

const HDHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -right-24 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-amber-200/60 via-amber-100 to-transparent blur-2xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 py-20 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-3">New Season</p>
            <h1 className="text-4xl sm:text-5xl font-serif tracking-tight text-slate-900">Modern jewelry for every chapter</h1>
            <p className="mt-5 text-lg text-slate-600 max-w-prose">Refined essentials crafted in premium materials. Designed to layer, made to last.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#bestsellers" className="inline-flex items-center px-5 py-2.5 rounded-full bg-slate-900 text-white hover:bg-slate-800">Shop bestsellers</a>
              <a href="#collections" className="inline-flex items-center px-5 py-2.5 rounded-full border border-slate-300 text-slate-800 hover:border-slate-400">Explore collections</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
              <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1600&auto=format&fit=crop" alt="Jewelry" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HDHero
