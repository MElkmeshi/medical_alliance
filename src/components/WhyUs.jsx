import divider from '/assets/section-divider.svg'

const stats = [
  { value: '500+', label: 'Companies Served', sub: 'Across oil, gas & energy sectors' },
  { value: '15+',  label: 'Years of Experience', sub: 'Deep industry expertise' },
  { value: '✔',   label: 'Certified Professionals', sub: 'Licensed & regulatory-compliant' },
]

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: '#f8f5f5' }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.05] bg-repeat pointer-events-none"
        style={{ backgroundImage: 'url(/pattern.svg)', backgroundSize: '320px' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-brand-red text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black-red">
            Built for the Field
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            We combine clinical excellence with deep operational knowledge of the energy sector.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-16 max-w-2xl mx-auto">
          <div className="flex-1 h-px bg-brand-red/30" />
          <img src={divider} alt="" aria-hidden="true" className="h-6 opacity-40" />
          <div className="flex-1 h-px bg-brand-red/30" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map(({ value, label, sub }) => (
            <div
              key={label}
              className="text-center bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow border border-black-red/5 group"
            >
              <p className="text-5xl md:text-6xl font-extrabold text-brand-red mb-3 group-hover:scale-105 transition-transform inline-block">
                {value}
              </p>
              <h3 className="text-xl font-bold text-dark-burg mb-2">{label}</h3>
              <p className="text-gray-400 text-sm">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
