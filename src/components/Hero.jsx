import divider from '/assets/section-divider.svg'
import logoMark from '/assets/logo-mark-white.svg'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'url(/hero-bg.svg) center center / cover no-repeat' }}
    >
      {/* Fallback gradient if SVG doesn't load */}
      <div className="absolute inset-0 bg-gradient-radial from-rich-red/80 to-black-red -z-10" />

      {/* Watermark logo mark */}
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        className="absolute bottom-16 right-10 w-48 md:w-72 opacity-[0.06] pointer-events-none select-none"
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <p className="text-base md:text-lg font-medium tracking-[0.25em] uppercase text-brand-red mb-4">
          التحالف الطبي للاستشارات الطبية
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Trusted Medical Consultancy<br className="hidden md:block" />
          <span className="text-brand-red"> for the Energy Sector</span>
        </h1>
        <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
          We provide on-site field physicians, pre-employment medical screening,
          and periodic corporate health programs tailored for oil & energy operations.
        </p>
        <a
          href="#contact"
          className="inline-block bg-brand-red hover:bg-rich-red text-white font-bold text-sm tracking-widest uppercase px-10 py-4 rounded transition-colors duration-200 shadow-lg shadow-black/40"
        >
          Get in Touch
        </a>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <img src={divider} alt="" aria-hidden="true" className="w-full" />
      </div>
    </section>
  )
}
