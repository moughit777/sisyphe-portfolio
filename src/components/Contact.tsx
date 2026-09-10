'use client'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, ArrowLeft } from 'lucide-react'

const WA_URL = 'https://wa.me/212624821600?text=السلام%20عليكم%2C%20شفت%20البورتفوليو%20ديالك%20وبغيت%20نهضر%20معاك%20على%20شي%20مشروع'
const EMAIL  = 'moughitmoughit777@gmail.com'

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(135,74,248,0.06) 0%, transparent 65%)' }} />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: '#874AF8', letterSpacing: '0.18em' }}>
            — نتواصلو
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink mb-4">
            عندك مشروع؟ <span className="text-gradient">هضر معايا</span>
          </h2>
          <p className="text-gray max-w-md mx-auto mb-10">
            رد فوري خلال دقائق، وتقدر تبعت ليا التفاصيل ديال المشروع مباشرة عبر واتساب
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-gradient flex items-center gap-3 px-10 py-5 rounded-2xl text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              تواصل عبر واتساب
              <motion.div animate={{ x: [0, -5, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}>
                <ArrowLeft className="w-5 h-5" />
              </motion.div>
            </motion.a>

            <a href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 px-8 py-5 rounded-2xl font-bold text-ink/70 hover:text-ink transition-colors bg-bg-soft border border-border hover:border-brand-purple/30">
              <Mail className="w-5 h-5" style={{ color: '#874AF8' }} />
              {EMAIL}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
