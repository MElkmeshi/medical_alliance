import { useState } from 'react'

const initialForm = { name: '', company: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-dark-burg">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand-red text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Partner with Us
          </h2>
          <p className="text-white/60 text-lg">
            Ready to elevate your workforce health program? Send us a message and we'll get back to you promptly.
          </p>
        </div>

        {submitted ? (
          <div className="text-center bg-white/5 border border-brand-red/30 rounded-2xl p-12">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-white text-2xl font-bold mb-2">Thank You!</h3>
            <p className="text-white/60">
              We've received your message and will reach out shortly.
            </p>
            <button
              onClick={() => { setForm(initialForm); setSubmitted(false) }}
              className="mt-8 text-brand-red text-sm font-semibold underline underline-offset-4 hover:text-white transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name + Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-white/70 text-sm font-medium mb-1.5">
                  Name <span className="text-brand-red">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm font-medium mb-1.5">
                  Company <span className="text-brand-red">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  required
                  placeholder="Your company name"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-white/70 text-sm font-medium mb-1.5">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+966 5x xxx xxxx"
                className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-white/70 text-sm font-medium mb-1.5">
                Message <span className="text-brand-red">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about your needs..."
                className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-red hover:bg-rich-red text-white font-bold text-sm tracking-widest uppercase py-4 rounded-lg transition-colors duration-200 shadow-lg shadow-black/40"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
