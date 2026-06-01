import { Mail, Phone } from 'lucide-react'

const Footer = ({ content }) => (
  <footer className="bg-brand-950 text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr] lg:px-8">
      <div>
        <img
          src="/assets/brand/dorostol-logo-horizontal-dark-runtime.webp"
          alt="Dorostol Trade SRL"
          loading="lazy"
          decoding="async"
          className="mb-5 h-auto w-64 max-w-full object-contain"
        />
        <p className="max-w-xl text-sm leading-7 text-brand-100">
          {content.footer.description}
        </p>
      </div>

      <div>
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-accent-200">{content.footer.contact}</p>
        <div className="space-y-3 text-sm text-brand-100">
          <a className="flex items-center gap-3 hover:text-white" href="mailto:office@dorostol.trade">
            <Mail className="size-4" aria-hidden="true" /> office@dorostol.trade
          </a>
          <a className="flex items-center gap-3 hover:text-white" href="tel:+40741130614">
            <Phone className="size-4" aria-hidden="true" /> RO +40 741 130 614
          </a>
          <a className="flex items-center gap-3 hover:text-white" href="tel:+359899015671">
            <Phone className="size-4" aria-hidden="true" /> BG +359 89 901 5671
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-brand-200">
      &copy; {new Date().getFullYear()} Dorostol Trade. {content.footer.rights}
    </div>
  </footer>
)

export default Footer
