import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import { siteContent } from './content/siteContent'
import { getLanguageFromPathname } from './lib/language'
import './App.css'

const updateMeta = (selector, content) => {
  const meta = document.querySelector(selector)

  if (meta) {
    meta.setAttribute('content', content)
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
    updateMeta('meta[name="twitter:title"]', content.metadata.title)
    updateMeta('meta[name="twitter:description"]', content.metadata.description)
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
