import React from 'react'

const HDHeader = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="text-xl font-semibold tracking-wide text-slate-900">
              Harris & Darcy
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
              <a href="#collections" className="hover:text-slate-900">Collections</a>
              <a href="#bestsellers" className="hover:text-slate-900">Bestsellers</a>
              <a href="#about" className="hover:text-slate-900">About</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-flex px-3 py-1.5 text-sm rounded-full border border-slate-300 hover:border-slate-400 text-slate-700">Search</button>
            <button aria-label="Cart" className="relative inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-300 hover:border-slate-400">
              <span className="absolute -top-1 -right-1 text-[10px] bg-slate-900 text-white rounded-full w-5 h-5 flex items-center justify-center">2</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-slate-800"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4"/><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HDHeader
