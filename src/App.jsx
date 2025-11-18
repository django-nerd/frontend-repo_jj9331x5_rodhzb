import React from 'react'
import HDHeader from './components/HDHeader'
import HDHero from './components/HDHero'
import HDCollections from './components/HDCollections'
import HDGrid from './components/HDGrid'
import HDFooter from './components/HDFooter'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <HDHeader />
      <HDHero />
      <HDCollections />
      <HDGrid />
      <HDFooter />
    </div>
  )
}

export default App
