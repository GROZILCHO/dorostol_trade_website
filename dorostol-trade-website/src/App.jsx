import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import { siteContent } from './content/siteContent'
import { getLanguageFromPathname } from './lib/language'
import './App.css'

const GA_MEASUREMENT_ID = 'G-L5LCCC4CXG'

const languageUrls = {
  en: 'https://www.dorostol.trade/',
  ro: 'https://www.dorostol.trade/ro/',
  bg: 'https://www.dorostol.trade/bg/',
  'x-default': 'https://www.dorostol.trade/',
}

const privacyUrls = {
  en: 'https://www.dorostol.trade/privacy',
  ro: 'https://www.dorostol.trade/ro/privacy',
  bg: 'https://www.dorostol.trade/bg/privacy',
  'x-default': 'https://www.dorostol.trade/privacy',
}

const privacyContent = {
  en: {
    metadata: {
      title: 'Privacy | Dorostol Trade SRL',
      description:
        'Privacy information for the Dorostol Trade SRL website, including contact links and Google Analytics use.',
      url: privacyUrls.en,
    },
    eyebrow: 'Privacy',
    title: 'Privacy information',
    intro:
      'This website is an informational project website operated by Dorostol Trade SRL.',
    sections: [
      [
        'Contact channels',
        "The site does not use a contact form. Contact is made through direct email and phone links, which open the visitor's own email or phone application.",
      ],
      [
        'Analytics',
        'Google Analytics 4 may be used to understand aggregated website traffic. Analytics may include page views, approximate location, device and browser information, traffic source, and general interaction data.',
      ],
      [
        'Tracking limits',
        'The site does not use Meta Pixel, remarketing, heatmaps, advertising tracking, or custom click-event tracking at this stage.',
      ],
      [
        'Visitor controls',
        'Visitors can limit analytics through browser settings, privacy tools, or extensions. For project-related contact, use the public email and phone channels listed on the website.',
      ],
    ],
    back: 'Back to site',
  },
  ro: {
    metadata: {
      title: 'Confidențialitate | Dorostol Trade SRL',
      description:
        'Informații de confidențialitate pentru site-ul Dorostol Trade SRL, inclusiv linkuri de contact și utilizarea Google Analytics.',
      url: privacyUrls.ro,
    },
    eyebrow: 'Confidențialitate',
    title: 'Informații de confidențialitate',
    intro:
      'Acest site este un site informativ de proiect operat de Dorostol Trade SRL.',
    sections: [
      [
        'Canale de contact',
        'Site-ul nu utilizează formular de contact. Contactul se face prin linkuri directe de email și telefon, care deschid aplicația de email sau telefon a vizitatorului.',
      ],
      [
        'Analiză web',
        'Google Analytics 4 poate fi utilizat pentru a înțelege traficul agregat al site-ului. Analiza poate include vizualizări de pagini, locație aproximativă, informații despre dispozitiv și browser, sursa traficului și date generale de interacțiune.',
      ],
      [
        'Limite de urmărire',
        'Site-ul nu utilizează Meta Pixel, remarketing, heatmap-uri, urmărire publicitară sau urmărire personalizată a clickurilor în această etapă.',
      ],
      [
        'Opțiuni pentru vizitatori',
        'Vizitatorii pot limita analiza prin setările browserului, instrumente de confidențialitate sau extensii. Pentru contact legat de proiect, utilizați canalele publice de email și telefon listate pe site.',
      ],
    ],
    back: 'Înapoi la site',
  },
  bg: {
    metadata: {
      title: 'Поверителност | Dorostol Trade SRL',
      description:
        'Информация за поверителността за сайта на Dorostol Trade SRL, включително контактни връзки и Google Analytics.',
      url: privacyUrls.bg,
    },
    eyebrow: 'Поверителност',
    title: 'Информация за поверителност',
    intro:
      'Този сайт е информационен проектен сайт, опериран от Dorostol Trade SRL.',
    sections: [
      [
        'Канали за контакт',
        'Сайтът не използва форма за контакт. Контактът се осъществява чрез директни имейл и телефонни връзки, които отварят имейл или телефонното приложение на посетителя.',
      ],
      [
        'Уеб анализ',
        'Google Analytics 4 може да се използва за разбиране на агрегирания трафик към сайта. Анализът може да включва прегледи на страници, приблизително местоположение, информация за устройство и браузър, източник на трафик и общи данни за взаимодействие.',
      ],
      [
        'Ограничения на проследяването',
        'Сайтът не използва Meta Pixel, ремаркетинг, heatmap инструменти, рекламно проследяване или персонализирано проследяване на кликвания на този етап.',
      ],
      [
        'Контрол от посетителите',
        'Посетителите могат да ограничат анализа чрез настройките на браузъра, инструменти за поверителност или разширения. За контакт по проекта използвайте публичните имейл и телефонни канали, посочени в сайта.',
      ],
    ],
    back: 'Назад към сайта',
  },
}

const isPrivacyPath = (pathname = window.location.pathname) => {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'

  return normalizedPath === '/privacy' || normalizedPath === '/ro/privacy' || normalizedPath === '/bg/privacy'
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

const loadGoogleAnalytics = () => {
  if (window.gtag) {
    return
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
}

const trackPageView = (metadata) => {
  if (!window.gtag) {
    return
  }

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: metadata.title,
    page_location: metadata.url,
    page_path: window.location.pathname,
    send_page_view: true,
  })
}

const PrivacyPage = ({ content, language }) => {
  const homeHref = language === 'en' ? '/' : `/${language}/`

  return (
    <section className="bg-stone-50 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <a className="text-sm font-bold text-accent-600 hover:text-accent-700" href={homeHref}>
          {content.back}
        </a>
        <div className="mt-8 overflow-hidden rounded-3xl border border-brand-900/10 bg-white p-6 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent-600">{content.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-950 sm:text-5xl">{content.title}</h1>
          <p className="mt-6 break-words text-lg leading-8 text-slate-600">{content.intro}</p>
          <div className="mt-10 space-y-8">
            {content.sections.map(([title, body]) => (
              <div key={title}>
                <h2 className="text-xl font-bold text-brand-950">{title}</h2>
                <p className="mt-3 break-words leading-7 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  const language = getLanguageFromPathname()
  const content = siteContent[language]
  const privacyRoute = isPrivacyPath()
  const pageContent = privacyRoute ? privacyContent[language] : content
  const pageMetadata = privacyRoute ? pageContent.metadata : content.metadata
  const alternateUrls = privacyRoute ? privacyUrls : languageUrls

  useEffect(() => {
    document.documentElement.lang = language
    document.title = pageMetadata.title
    updateMeta('meta[name="description"]', { name: 'description', content: pageMetadata.description })
    updateMeta('meta[property="og:title"]', { property: 'og:title', content: pageMetadata.title })
    updateMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: pageMetadata.description,
    })
    updateMeta('meta[property="og:locale"]', { property: 'og:locale', content: content.metadata.locale })
    updateMeta('meta[property="og:url"]', { property: 'og:url', content: pageMetadata.url })
    updateMeta('meta[property="og:image"]', { property: 'og:image', content: content.metadata.image })
    updateMeta('meta[property="og:image:width"]', { property: 'og:image:width', content: '1200' })
    updateMeta('meta[property="og:image:height"]', { property: 'og:image:height', content: '630' })
    updateMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: pageMetadata.title })
    updateMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: pageMetadata.description,
    })
    updateMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: content.metadata.image })
    updateLink('link[rel="canonical"]', { rel: 'canonical', href: pageMetadata.url })

    Object.entries(alternateUrls).forEach(([hrefLang, href]) => {
      updateLink(`link[rel="alternate"][hreflang="${hrefLang}"]`, {
        rel: 'alternate',
        hreflang: hrefLang,
        href,
      })
    })
  }, [alternateUrls, content, language, pageMetadata])

  useEffect(() => {
    loadGoogleAnalytics()
    trackPageView(pageMetadata)
  }, [pageMetadata])

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <Navbar content={content} language={language} />
      <main>
        {privacyRoute ? <PrivacyPage content={pageContent} language={language} /> : <Home content={content} />}
      </main>
      <Footer content={content} language={language} />
    </div>
  )
}

export default App
