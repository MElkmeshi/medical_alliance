import logoWhite from '/assets/logo-white.svg'

export default function Footer() {
  return (
    <footer className="bg-black-red py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home">
          <img src={logoWhite} alt="Medical Alliance" className="h-9 w-auto opacity-80 hover:opacity-100 transition-opacity" />
        </a>

        <p className="text-white/40 text-sm text-center">
          © 2025 التحالف الطبي — Medical Alliance. All rights reserved.
        </p>

        <p className="text-white/30 text-xs">
          Designed by <span className="text-white/50">@elkh4buli</span>
        </p>
      </div>
    </footer>
  )
}
