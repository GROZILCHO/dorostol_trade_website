import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import { siteContent } from './content/siteContent'
import { getLanguageFromPathname } from './lib/language'
import './App.css'

const languageUrls = {
  en: 'https://www.dorostol.trade/',
  ro: 'https://www.dorostol.trade/ro/',
  bg: 'https://www.dorostol.trade/bg/',
  'x-default': 'https://www.dorostol.trade/',
}

const updateMeta = (selector, content) => {
  const meta = document.querySelector(selector)

  if (meta) {
    meta.setAttribute('content', content)
  }
}

const updateLink = (selector, attributes) => {
  const link = document.querySelector(selector) || document.createElement('link')

  Object.entries(attributes).forEach(([name, value]) => link.setAttribute(name, value))

  if (!link.parentNode) {
    document.head.appendChild(link)
  }
}

function App() {
  const language = getLanguageFromPathname()
  const content = siteContent[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.title = content.metadata.title
    updateMeta('meta[name="description"]', content.metadata.description)
    updateMeta('meta[property="og:title"]', content.metadata.title)
    updateMeta('meta[property="og:description"]', content.metadata.description)
    updateMeta('meta[property="og:locale"]', content.metadata.locale)
    updateMeta('meta[property="og:url"]', content.metadata.url)
    updateMeta('meta[name="twitter:title"]', content.metadata.title)
    updateMeta('meta[name="twitter:description"]', content.metadata.description)
    updateLink('link[rel="canonical"]', { rel: 'canonical', href: content.metadata.url })

    Object.entries(languageUrls).forEach(([hrefLang, href]) => {
      updateLink(`link[rel="alternate"][hreflang="${hrefLang}"]`, {
        rel: 'alternate',
        hreflang: hrefLang,
        href,
      })
    })
  }, [content, language])

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <Navbar content={content} language={language} />
      <main>
        <Home content={content} />
      </main>
      <Footer content={content} />
    </div>
  )
}

export default App
