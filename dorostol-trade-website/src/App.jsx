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

const updateMeta = (selector, attributes) => {
  const meta = document.querySelector(selector) || document.createElement('meta')

  Object.entries(attributes).forEach(([name, value]) => meta.setAttribute(name, value))

  if (!meta.parentNode) {
    document.head.appendChild(meta)
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
    updateMeta('meta[name="description"]', { name: 'description', content: content.metadata.description })
    updateMeta('meta[property="og:title"]', { property: 'og:title', content: content.metadata.title })
    updateMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: content.metadata.description,
    })
    updateMeta('meta[property="og:locale"]', { property: 'og:locale', content: content.metadata.locale })
    updateMeta('meta[property="og:url"]', { property: 'og:url', content: content.metadata.url })
    updateMeta('meta[property="og:image"]', { property: 'og:image', content: content.metadata.image })
    updateMeta('meta[property="og:image:width"]', { property: 'og:image:width', content: '1200' })
    updateMeta('meta[property="og:image:height"]', { property: 'og:image:height', content: '630' })
    updateMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: content.metadata.title })
    updateMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: content.metadata.description,
    })
    updateMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: content.metadata.image })
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
