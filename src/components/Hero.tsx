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
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(135,74,248,0.10) 0%, rgba(219,141,255,0.05) 45%, transparent 65%)' }} />
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Soft floating blobs */}
      <motion.div
        className="absolute rounded-full blur-3xl opacity-20 pointer-events-none hidden lg:block"
        style={{ width: 360, height: 360, top: '8%', right: '3%', background: 'linear-gradient(135deg, #874AF8, #F7B14E)' }}
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full blur-3xl opacity-15 pointer-events-none hidden lg:block"
        style={{ width: 300, height: 300, bottom: '5%', left: '5%', background: 'linear-gradient(135deg, #CD2236, #874AF8)' }}
        animate={{ y: [15, -15, 15] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div variants={container} initial="hidden" animate="show">

          <motion.div variants={item} className="flex justify-center mb-6">
            <div className="tag-purple">
              <Sparkles className="w-3.5 h-3.5" />
              مونتير فيديو محترف — Sisyphe
            </div>
          </motion.div>

          <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.15] tracking-tight mb-6">
            <span className="text-ink">نحول أفكارك</span>
            <br />
            <span className="text-gradient">لفيديوهات تشد الأنظار</span>
          </motion.h1>

          <motion.p variants={item} className="text-lg sm:text-xl text-gray max-w-xl mx-auto leading-relaxed mb-10">
            مونتاج احترافي بـ <span className="text-ink font-semibold">Premiere Pro</span> و<span className="text-ink font-semibold">After Effects</span> — من الفكرة الخام حتى فيديو جاهز يبيع
          </motion.p>

          <motion.div variants={item} className="flex items-center justify-center gap-4 flex-wrap text-sm mb-10 text-gray font-semibold">
            <span className="flex items-center gap-1.5"><Film className="w-4 h-4" style={{ color: '#874AF8' }} /> مونتاج طويل</span>
            <span className="w-px h-4 bg-border" />
            <span className="flex items-center gap-1.5"><Layers className="w-4 h-4" style={{ color: '#874AF8' }} /> Motion Graphics</span>
            <span className="w-px h-4 bg-border" />
            <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4" style={{ color: '#874AF8' }} /> Reels &amp; TikTok</span>
          </motion.div>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-gradient relative overflow-hidden flex items-center gap-2.5 px-10 py-4 rounded-2xl text-base"
            >
              <MessageCircle className="w-5 h-5" />
              تواصل معايا الآن
              <motion.div animate={{ x: [0, -4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
                <ArrowLeft className="w-5 h-5" />
              </motion.div>
            </motion.a>

            <a href="#work"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-ink/70 hover:text-ink transition-colors bg-white border border-border hover:border-brand-purple/30">
              شوف الأعمال ديالي
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
