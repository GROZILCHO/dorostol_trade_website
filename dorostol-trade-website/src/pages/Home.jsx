import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Factory,
  Globe2,
  Handshake,
  Leaf,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  Sprout,
  TrendingUp,
  Wheat,
} from 'lucide-react'

const marketIcons = [TrendingUp, Wheat, Factory, Handshake]
const productIcons = [Sprout, PackageCheck, Wheat]

const SectionHeading = ({ eyebrow, title, description, center = false, inverted = false }) => (
  <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
    <p className={`mb-3 text-xs font-bold uppercase tracking-[0.24em] ${inverted ? 'text-accent-200' : 'text-accent-600'}`}>{eyebrow}</p>
    <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${inverted ? 'text-white' : 'text-brand-950'}`}>{title}</h2>
    {description && <p className={`mt-5 text-base leading-7 sm:text-lg ${inverted ? 'text-brand-100' : 'text-slate-600'}`}>{description}</p>}
  </div>
)

const Home = ({ content }) => (
  <>
    <section id="hero" className="relative overflow-hidden bg-brand-950 text-white">
      <div className="absolute inset-0 opacity-35 [background:radial-gradient(circle_at_85%_15%,#e55934_0,transparent_28%),radial-gradient(circle_at_10%_90%,#6a3e39_0,transparent_32%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-accent-200">{content.hero.eyebrow}</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">{content.hero.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-brand-100 sm:text-xl">{content.hero.description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-accent-600">
              {content.ctas.contact} <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href="#partners" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
              {content.ctas.partnership}
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-brand-100">
            <span className="flex items-center gap-2"><MapPin className="size-4" /> {content.location.title}</span>
            <span className="flex items-center gap-2"><Wheat className="size-4" /> {content.hero.rawMaterials}</span>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-200">{content.hero.focusLabel}</p>
          <div className="mt-6 space-y-4">
            {content.products.cards.map(({ title }) => (
              <div key={title} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <CheckCircle2 className="size-5 shrink-0 text-accent-200" />
                <span className="font-semibold">{title}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-brand-100">{content.hero.note}</p>
        </div>
      </div>
    </section>

    <section id="overview" className="bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={content.overview.eyebrow} title={content.overview.title} description={content.overview.description} />
        <p className="mt-6 max-w-3xl leading-7 text-slate-600">{content.overview.detail}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {content.overview.stats.map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-brand-900/10 bg-white p-6 shadow-sm">
              <p className="text-2xl font-bold text-brand-700">{value}</p>
              <p className="mt-2 text-sm font-semibold text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="market" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeading eyebrow={content.market.eyebrow} title={content.market.title} description={content.market.description} />
        <div className="grid gap-4 sm:grid-cols-2">
          {content.market.cards.map(([title], index) => {
            const Icon = marketIcons[index]
            return (
              <div key={title} className="rounded-2xl border border-brand-900/5 bg-brand-50 p-6">
                <Icon className="size-7 text-accent-500" aria-hidden="true" />
                <p className="mt-5 font-bold text-brand-950">{title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>

    <section id="location" className="bg-brand-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading inverted eyebrow={content.location.eyebrow} title={content.location.title} description={content.location.description} />
        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
          <img src="/assets/plant-project/dorostol-map-andrasesti.webp" alt={content.location.imageAlt} loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover" />
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.location.cards.map(([title, description]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <MapPin className="size-5 text-accent-200" aria-hidden="true" />
              <p className="mt-4 font-bold">{title}</p>
              <p className="mt-2 text-sm leading-6 text-brand-100">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="products" className="bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading center eyebrow={content.products.eyebrow} title={content.products.title} description={content.products.description} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {content.products.cards.map(({ title, description, image, imageAlt }, index) => {
            const Icon = productIcons[index]
            return (
              <div key={title} className="overflow-hidden rounded-3xl border border-brand-900/10 bg-white shadow-sm">
                <img src={image} alt={imageAlt} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
                <div className="p-7">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-100 text-accent-500">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-brand-950">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>

    <section id="capacity" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading center eyebrow={content.capacity.eyebrow} title={content.capacity.title} description={content.capacity.description} />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {content.capacity.targets.map(([value, label]) => (
            <div key={label} className="rounded-3xl bg-brand-700 p-7 text-white">
              <p className="text-3xl font-bold">{value}</p>
              <p className="mt-3 text-sm font-semibold text-brand-100">{label}</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-200">{content.capacity.targetLabel}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow={content.capacity.processEyebrow} title={content.capacity.processTitle} description={content.capacity.processDescription} />
          <div className="grid gap-3 sm:grid-cols-2">
            {content.capacity.processPoints.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-brand-900/10 bg-brand-50 p-4">
                <CheckCircle2 className="size-5 shrink-0 text-accent-500" aria-hidden="true" />
                <span className="text-sm font-bold text-brand-950">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section id="sustainability" className="bg-support-50 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <SectionHeading eyebrow={content.sustainability.eyebrow} title={content.sustainability.title} description={content.sustainability.description} />
        <div className="rounded-3xl bg-support-950 p-7 text-white">
          <Leaf className="size-8 text-support-200" aria-hidden="true" />
          <div className="mt-6 space-y-4">
            {content.sustainability.points.map((item) => (
              <div key={item} className="flex gap-3 text-sm leading-6 text-brand-100">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-support-200" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section id="partners" className="bg-earth-100 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Handshake className="mx-auto size-10 text-accent-500" aria-hidden="true" />
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-accent-600">{content.partnership.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">{content.partnership.title}</h2>
        <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-700">{content.partnership.description}</p>
        <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-accent-600">
          {content.ctas.partnership} <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>

    <section id="contact" className="bg-brand-50 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeading eyebrow={content.contact.eyebrow} title={content.contact.title} description={content.contact.description} />
        <div className="grid gap-4 sm:grid-cols-2">
          <a href={`mailto:${content.contact.office}`} className="rounded-2xl border border-brand-900/10 bg-white p-5 transition hover:border-accent-500">
            <Mail className="size-5 text-accent-500" aria-hidden="true" />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">{content.contact.details.generalEmail}</p>
            <p className="mt-2 font-bold text-brand-950">{content.contact.office}</p>
          </a>
          <a href={`mailto:${content.contact.personEmail}`} className="rounded-2xl border border-brand-900/10 bg-white p-5 transition hover:border-accent-500">
            <Building2 className="size-5 text-accent-500" aria-hidden="true" />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">{content.contact.person}</p>
            <p className="mt-2 font-bold text-brand-950">{content.contact.personEmail}</p>
          </a>
          <a href="tel:+40741130614" className="rounded-2xl border border-brand-900/10 bg-white p-5 transition hover:border-accent-500">
            <Phone className="size-5 text-accent-500" aria-hidden="true" />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">{content.contact.details.romania}</p>
            <p className="mt-2 font-bold text-brand-950">{content.contact.roPhone.replace('RO ', '')}</p>
          </a>
          <a href="tel:+359899015671" className="rounded-2xl border border-brand-900/10 bg-white p-5 transition hover:border-accent-500">
            <Globe2 className="size-5 text-accent-500" aria-hidden="true" />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">{content.contact.details.bulgaria}</p>
            <p className="mt-2 font-bold text-brand-950">{content.contact.bgPhone.replace('BG ', '')}</p>
          </a>
        </div>
      </div>
    </section>
  </>
)

export default Home
