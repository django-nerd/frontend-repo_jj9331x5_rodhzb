import React from 'react'

const HDFooter = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-slate-900 font-semibold mb-3">Harris & Darcy</h4>
            <p className="text-sm text-slate-600">Refined essentials designed to layer, made to last.</p>
          </div>
          <div>
            <h4 className="text-slate-900 font-semibold mb-3">Shop</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Rings</a></li>
              <li><a href="#" className="hover:text-slate-900">Necklaces</a></li>
              <li><a href="#" className="hover:text-slate-900">Earrings</a></li>
              <li><a href="#" className="hover:text-slate-900">Bracelets</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-semibold mb-3">About</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Our story</a></li>
              <li><a href="#" className="hover:text-slate-900">Sustainability</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
              <li><a href="#" className="hover:text-slate-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 font-semibold mb-3">Newsletter</h4>
            <form className="flex gap-2">
              <input type="email" placeholder="Your email" className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
              <button className="px-4 py-2 rounded-lg bg-slate-900 text-white">Join</button>
            </form>
            <p className="mt-3 text-xs text-slate-500">By subscribing you agree to our privacy policy.</p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Harris & Darcy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default HDFooter
