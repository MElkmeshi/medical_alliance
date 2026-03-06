const services = [
  {
    icon: '🩺',
    titleEn: 'Medical Consultancy',
    titleAr: 'الاستشارات الطبية',
    description: 'Specialized advisory services for oil & energy companies, ensuring full regulatory compliance and workforce health strategies.',
  },
  {
    icon: '👨‍⚕️',
    titleEn: 'Field Doctors',
    titleAr: 'أطباء الميدان',
    description: 'On-site physicians deployed directly to your operations — remote sites, rigs, and facilities — providing immediate medical care.',
  },
  {
    icon: '📋',
    titleEn: 'Pre-Employment Exams',
    titleAr: 'الفحوصات التعيينية',
    description: 'Comprehensive medical screening for new hires that meets industry standards and identifies fitness-for-duty before placement.',
  },
  {
    icon: '🏥',
    titleEn: 'Corporate Checkups',
    titleAr: 'الفحص الدوري للشركات',
    description: 'Periodic health monitoring programs designed to track, maintain, and improve the long-term wellbeing of your entire workforce.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-brand-red text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black-red">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            End-to-end medical solutions built for the unique demands of the energy industry.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon, titleEn, titleAr, description }) => (
            <div
              key={titleEn}
              className="relative overflow-hidden rounded-2xl group cursor-default"
              style={{ background: 'url(/assets/card-bg.svg) center center / cover no-repeat' }}
            >
              {/* Fallback gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-burg to-black-red -z-10" />

              <div className="relative z-10 p-7 flex flex-col h-full min-h-[260px]">
                <span className="text-4xl mb-5 block">{icon}</span>
                <h3 className="text-white font-bold text-lg leading-tight mb-1">
                  {titleEn}
                </h3>
                <p className="text-brand-red text-sm font-medium mb-4 tracking-wide">
                  {titleAr}
                </p>
                <p className="text-white/70 text-sm leading-relaxed flex-1">
                  {description}
                </p>

                {/* Hover accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
