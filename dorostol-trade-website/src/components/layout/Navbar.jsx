import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { supportedLanguages } from '../../content/siteContent'
import { getLanguagePath } from '../../lib/language'

const LanguageSwitcher = ({ activeLanguage, label }) => (
  <div className="flex items-center gap-1" aria-label={label}>
    {supportedLanguages.map(({ code, label: languageLabel }) => (
      <a
        key={code}
        href={getLanguagePath(code)}
        onClick={(event) => {
          event.currentTarget.href = getLanguagePath(code)
        }}
        lang={code}
        aria-current={activeLanguage === code ? 'page' : undefined}
        className={`rounded-full px-2.5 py-1.5 text-xs font-bold tracking-wide transition ${
          activeLanguage === code
            ? 'bg-brand-900 text-white'
            : 'text-slate-600 hover:bg-brand-50 hover:text-brand-800'
        }`}
      >
        {languageLabel}
      </a>
    ))}
  </div>
)

const Navbar = ({ content, language }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { navigation, ctas, ui } = content

  return (
    <header className="sticky top-0 z-50 border-b border-brand-900/10 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8" aria-label={ui.primaryNavigation}>
        <a href="#hero" className="flex shrink-0 items-center" onClick={() => setIsOpen(false)}>
          <img
            src="/assets/brand/dorostol-logo-horizontal.png"
            alt="Dorostol Trade SRL"
            className="h-12 w-auto max-w-[10.5rem] object-contain sm:max-w-[12rem]"
          />
        </a>

        <div className="hidden items-center gap-5 xl:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-slate-700 transition hover:text-brand-700">
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden xl:flex">
          <LanguageSwitcher activeLanguage={language} label={ui.languageSwitcher} />
        </div>

        <a href="#contact" className="hidden rounded-full bg-accent-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-accent-600 sm:inline-flex">
          {ctas.contact}
        </a>

        <button
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-brand-900/15 text-brand-900 xl:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? ui.closeNavigation : ui.openNavigation}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-navigation" className="border-t border-brand-900/10 bg-white px-4 py-4 xl:hidden">
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
            <div className="mt-3 border-t border-brand-900/10 px-3 pt-4">
              <LanguageSwitcher activeLanguage={language} label={ui.languageSwitcher} />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
