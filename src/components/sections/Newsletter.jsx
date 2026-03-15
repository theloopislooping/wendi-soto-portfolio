import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'
import GlassCard from '../ui/GlassCard'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://buttondown.com/api/emails/embed-subscribe/wendisoto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ email, tag: 'website' }),
      })
      if (res.ok || res.status === 303) {
        setStatus('sent')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard hover={false} className="p-8 text-center">
            <div className="p-2.5 rounded-lg bg-sage/15 text-sage-dark inline-block mb-4">
              <Mail size={22} />
            </div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-2">
              Stay in the loop
            </h3>
            <p className="text-foreground-muted text-sm leading-relaxed mb-6 max-w-md mx-auto">
              Occasional updates on AI governance research, BridgetOS development, and new writing. No spam.
            </p>

            {status === 'sent' ? (
              <div className="flex items-center justify-center gap-2 text-sage-dark text-sm font-medium py-3">
                <CheckCircle size={16} />
                You're in. Check your email to confirm.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-white/60 border border-sage/15 rounded-xl px-4 py-3 text-sm text-foreground placeholder-foreground-dim focus:outline-none focus:border-sage/40 transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-6 py-3 rounded-full font-medium text-sm bg-pink text-white hover:bg-pink-dark hover:shadow-md transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {status === 'sending' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}

            {status === 'error' && (
              <div className="flex items-center justify-center gap-2 text-pink-dark text-sm font-medium mt-3">
                <AlertCircle size={16} />
                Something went wrong. Try again.
              </div>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
