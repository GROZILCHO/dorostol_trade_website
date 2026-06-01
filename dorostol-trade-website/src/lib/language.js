export const defaultLanguage = 'en'

export const supportedLanguageCodes = ['en', 'ro', 'bg']

export const getLanguageFromPathname = (pathname = window.location.pathname) => {
  const [language] = pathname.split('/').filter(Boolean)

  return supportedLanguageCodes.includes(language) ? language : defaultLanguage
}

export const getLanguagePath = (language, hash = window.location.hash) => {
  const pathname = language === defaultLanguage ? '/' : `/${language}/`

  return `${pathname}${hash || ''}`
}
