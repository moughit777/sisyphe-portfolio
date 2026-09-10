'use client'
import { motion } from 'framer-motion'
import { ArrowLeft, MessageCircle, Film, Layers, Sparkles } from 'lucide-react'

const WA_URL = 'https://wa.me/212624821600?text=السلام%20عليكم%2C%20شفت%20البورتفوليو%20ديالك%20وبغيت%20نهضر%20معاك%20على%20شي%20مشروع'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 55% at 50% -10%, rgba(51,116,24,0.55) 0%, rgba(93,214,44,0.06) 45%, transparent 65%)' }} />
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute bottom-0 inset-x-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(7,11,26,1))' }} />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div variants={container} initial="hidden" animate="show">

          <motion.div variants={item} className="flex justify-center mb-6">
            <div className="tag-green">
              <Sparkles className="w-3.5 h-3.5" />
              مونتير فيديو محترف — Sisyphe
            </div>
          </motion.div>

          <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.15] tracking-tight mb-6">
            <span className="text-white">نحول أفكارك</span>
            <br />
            <span style={{ background: 'linear-gradient(90deg, #5DD62C 0%, #7EE84E 50%, #5DD62C 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              لفيديوهات تشد الأنظار
            </span>
          </motion.h1>

          <motion.p variants={item} className="text-lg sm:text-xl text-white/50 max-w-xl mx-auto leading-relaxed mb-10">
            مونتاج احترافي بـ <span className="text-white/80 font-semibold">Premiere Pro</span> و<span className="text-white/80 font-semibold">After Effects</span> — من الفكرة الخام حتى فيديو جاهز يبيع
          </motion.p>

          <motion.div variants={item} className="flex items-center justify-center gap-4 flex-wrap text-sm mb-10 text-white/40 font-semibold">
            <span className="flex items-center gap-1.5"><Film className="w-4 h-4" style={{ color: '#5DD62C' }} /> مونتاج طويل</span>
            <span className="w-px h-4 bg-white/10" />
            <span className="flex items-center gap-1.5"><Layers className="w-4 h-4" style={{ color: '#5DD62C' }} /> Motion Graphics</span>
            <span className="w-px h-4 bg-white/10" />
            <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4" style={{ color: '#5DD62C' }} /> Reels &amp; TikTok</span>
          </motion.div>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden flex items-center gap-2.5 px-10 py-4 rounded-2xl font-black text-base text-black"
              style={{ background: 'linear-gradient(135deg, #5DD62C, #7EE84E)', boxShadow: '0 6px 28px rgba(93,214,44,0.40)' }}
            >
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.25) 50%, transparent 65%)', transform: 'skewX(-15deg)' }}
                animate={{ x: ['-150%', '250%'] }}
                transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 3.5, ease: 'easeInOut' }}
              />
              <MessageCircle className="w-5 h-5" />
              تواصل معايا الآن
              <motion.div animate={{ x: [0, -4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
                <ArrowLeft className="w-5 h-5" />
              </motion.div>
            </motion.a>

            <a href="#work"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white/70 hover:text-white transition-colors"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}>
              شوف الأعمال ديالي
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
