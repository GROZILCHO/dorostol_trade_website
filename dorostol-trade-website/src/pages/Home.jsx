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

const overviewStats = [
  ['2013', 'Established in Romania'],
  ['April 2025', 'Investment agreement'],
  ['EUR 43.9M', 'Reported project budget'],
]

const locationAdvantages = [
  ['Agricultural zones', 'Proximity to regional farming areas and raw-material sources.'],
  ['Constanta port', 'Access to a major Black Sea logistics gateway.'],
  ['EU market access', 'Located in Romania, within the European Union.'],
  ['Local availability', 'Regional soybean, sunflower, and rapeseed context.'],
]

const products = [
  ['Plant proteins', 'Planned plant-based protein output from selected oilseed and soybean inputs.', Sprout],
  ['Protein isolate', 'A focused protein-isolate pathway within the planned product portfolio.', PackageCheck],
  ['Vegetable oils', 'Planned oil output from soybean, sunflower, and rapeseed processing.', Wheat],
]

const targets = [
  ['35,500 MT', 'Total final product target'],
  ['27,500 MT', 'Plant protein target'],
  ['8,000 MT', 'Vegetable oils target'],
]

const processFocus = [
  'Soybean processing focus',
  'Sunflower processing focus',
  'Rapeseed processing focus',
  'Plant-protein and vegetable-oil outputs',
]

const sustainabilityPoints = [
  'Plant-protein value chain',
  'Agricultural by-product use',
  'Support for local and European farming communities',
  'Sustainability claims subject to evidence review',
]

const SectionHeading = ({ eyebrow, title, description, center = false }) => (
  <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-brand-700">{eyebrow}</p>
    <h2 className="text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">{title}</h2>
    {description && <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>}
  </div>
)

const Home = () => (
  <>
    <section id="hero" className="relative overflow-hidden bg-brand-950 text-white">
      <div className="absolute inset-0 opacity-35 [background:radial-gradient(circle_at_85%_15%,#638555_0,transparent_32%),radial-gradient(circle_at_10%_90%,#a48955_0,transparent_28%)]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-brand-200">Dorostol Trade Plant Project</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Extraction and Processing Plant for Vegetable Proteins and Oils
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-brand-100 sm:text-xl">
            Dorostol Trade is developing a plant project in Andrasesti, Romania, focused on vegetable
            proteins, protein isolate, and vegetable oils from soybean, sunflower, and rapeseed.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-900 transition hover:bg-brand-100">
              Contact Dorostol Trade <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href="#partners" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
              Discuss Partnership Opportunities
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-brand-100">
            <span className="flex items-center gap-2"><MapPin className="size-4" /> Andrasesti, Romania</span>
            <span className="flex items-center gap-2"><Wheat className="size-4" /> Soybean, sunflower, rapeseed</span>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-200">Project Focus</p>
          <div className="mt-6 space-y-4">
            {['Plant proteins', 'Protein isolate', 'Vegetable oils'].map((item) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <CheckCircle2 className="size-5 shrink-0 text-brand-200" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-brand-100">
            Connecting regional agricultural resources with a value-added plant-based product pathway.
          </p>
        </div>
      </div>
    </section>

    <section id="overview" className="bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Project Overview"
          title="A Focused Industrial Investment in Romania"
          description="Dorostol Trade was established in Romania in 2013 and is part of a family-owned group with more than 30 years of activities across agricultural and food-processing sectors."
        />
        <p className="mt-6 max-w-3xl leading-7 text-slate-600">
          The plant project is focused on the extraction and processing of vegetable proteins, protein
          isolate, and oils from soybean, sunflower, and rapeseed. An investment agreement for the project
          was signed in April 2025 with the Romanian government.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {overviewStats.map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-brand-900/10 bg-white p-6 shadow-sm">
              <p className="text-2xl font-bold text-brand-800">{value}</p>
              <p className="mt-2 text-sm font-semibold text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="market" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeading
          eyebrow="Market Context"
          title="Plant-Based Ingredients from Regional Agricultural Resources"
          description="The project is positioned within the vegetable-protein and oil markets, with a focus on processing soybean, sunflower, and rapeseed."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ['Vegetable-protein and oil market focus', TrendingUp],
            ['Regional agricultural context', Wheat],
            ['Value-added processing pathway', Factory],
            ['Commercial and partner relevance', Handshake],
          ].map(([label, Icon]) => (
            <div key={label} className="rounded-2xl bg-brand-50 p-6">
              <Icon className="size-7 text-brand-700" aria-hidden="true" />
              <p className="mt-5 font-bold text-brand-950">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="location" className="bg-brand-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Plant Location"
          title="Located in Andrasesti, Romania"
          description="The planned plant is located approximately 80 km north-east of Bucharest. Its location supports a clear connection between agricultural areas, logistics access, and EU market context."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {locationAdvantages.map(([title, description]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <MapPin className="size-5 text-brand-200" aria-hidden="true" />
              <p className="mt-4 font-bold">{title}</p>
              <p className="mt-2 text-sm leading-6 text-brand-100">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="products" className="bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          center
          eyebrow="Planned Product Portfolio"
          title="Vegetable Proteins, Protein Isolate, and Oils"
          description="The plant project is focused on producing plant-based ingredients and oils from soybean, sunflower, and rapeseed."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {products.map(([title, description, Icon]) => (
            <div key={title} className="rounded-3xl border border-brand-900/10 bg-white p-7 shadow-sm">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-brand-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="capacity" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          center
          eyebrow="Year 5 Targets"
          title="Planned Production Targets"
          description="These figures describe planned annual output at the Year 5 target stage. They are not current operating results."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {targets.map(([value, label]) => (
            <div key={label} className="rounded-3xl bg-brand-700 p-7 text-white">
              <p className="text-3xl font-bold">{value}</p>
              <p className="mt-3 text-sm font-semibold text-brand-100">{label}</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-200">Year 5 target</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Processing Focus"
            title="Extraction and Processing of Plant-Based Raw Materials"
            description="The project is designed around the extraction and processing of soybean, sunflower, and rapeseed into vegetable proteins, protein isolate, and vegetable oils."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {processFocus.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-brand-900/10 bg-brand-50 p-4">
                <CheckCircle2 className="size-5 shrink-0 text-brand-700" aria-hidden="true" />
                <span className="text-sm font-bold text-brand-950">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section id="sustainability" className="bg-brand-50 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <SectionHeading
          eyebrow="Sustainability & Impact"
          title="Supporting a More Resource-Efficient Plant-Protein Value Chain"
          description="The project is intended to support plant-protein production with a focus on regional agricultural resources. Its sustainability themes include the use of agricultural by-products and support for European and local farming communities."
        />
        <div className="rounded-3xl bg-brand-900 p-7 text-white">
          <Leaf className="size-8 text-brand-200" aria-hidden="true" />
          <div className="mt-6 space-y-4">
            {sustainabilityPoints.map((item) => (
              <div key={item} className="flex gap-3 text-sm leading-6 text-brand-100">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-200" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section id="partners" className="bg-earth-100 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Handshake className="mx-auto size-10 text-brand-700" aria-hidden="true" />
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-brand-700">Partnership Opportunities</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">Discuss the Dorostol Trade Plant Project</h2>
        <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-700">
          Dorostol Trade welcomes conversations with commercial partners, investors, financing stakeholders,
          suppliers, buyers, and strategic partners interested in the plant project.
        </p>
        <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-800">
          Discuss Partnership Opportunities <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>

    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeading
          eyebrow="Contact Dorostol Trade"
          title="Start a Conversation"
          description="For project, commercial, investor, or partnership enquiries, contact Dorostol Trade."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <a href="mailto:office@dorostol.trade" className="rounded-2xl border border-brand-900/10 bg-brand-50 p-5 transition hover:border-brand-500">
            <Mail className="size-5 text-brand-700" aria-hidden="true" />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">General email</p>
            <p className="mt-2 font-bold text-brand-950">office@dorostol.trade</p>
          </a>
          <a href="mailto:atanasov@dorostol.trade" className="rounded-2xl border border-brand-900/10 bg-brand-50 p-5 transition hover:border-brand-500">
            <Building2 className="size-5 text-brand-700" aria-hidden="true" />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">Radostin Atanasov</p>
            <p className="mt-2 font-bold text-brand-950">atanasov@dorostol.trade</p>
          </a>
          <a href="tel:+40741130614" className="rounded-2xl border border-brand-900/10 bg-brand-50 p-5 transition hover:border-brand-500">
            <Phone className="size-5 text-brand-700" aria-hidden="true" />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">Romania</p>
            <p className="mt-2 font-bold text-brand-950">+40 741 130 614</p>
          </a>
          <a href="tel:+359899015671" className="rounded-2xl border border-brand-900/10 bg-brand-50 p-5 transition hover:border-brand-500">
            <Globe2 className="size-5 text-brand-700" aria-hidden="true" />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-700">Bulgaria</p>
            <p className="mt-2 font-bold text-brand-950">+359 89 901 5671</p>
          </a>
        </div>
      </div>
    </section>
  </>
)

export default Home
