import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Overview', href: '#overview' },
  { name: 'Market', href: '#market' },
  { name: 'Location', href: '#location' },
  { name: 'Products', href: '#products' },
  { name: 'Capacity', href: '#capacity' },
  { name: 'Sustainability', href: '#sustainability' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand-900/10 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#hero" className="flex shrink-0 items-center" onClick={() => setIsOpen(false)}>
          <img
            src="/assets/brand/dorostol-logo-horizontal.png"
            alt="Dorostol Trade SRL"
            className="h-12 w-auto max-w-[10.5rem] object-contain sm:max-w-[12rem]"
          />
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-slate-700 transition hover:text-brand-700">
              {item.name}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden rounded-full bg-accent-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-accent-600 sm:inline-flex">
          Contact Dorostol Trade
        </a>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-brand-900/15 text-brand-900 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-navigation" className="border-t border-brand-900/10 bg-white px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-800"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
