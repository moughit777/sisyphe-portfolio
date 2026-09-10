'use client'
import { motion } from 'framer-motion'
import { Film, Layers, Smartphone, Wand2, Monitor, Zap } from 'lucide-react'

const SERVICES = [
  { icon: Film,       title: 'مونتاج فيديو احترافي', desc: 'تحرير، قص، انتقالات، وتوليف فيديوهات بجودة سينمائية بـ Premiere Pro' },
  { icon: Layers,     title: 'Motion Graphics',       desc: 'تصميم حركي وتأثيرات بصرية احترافية بـ After Effects' },
  { icon: Smartphone, title: 'Reels & TikTok',        desc: 'محتوى قصير جذاب مصمم خصيصاً لمنصات السوشيال ميديا' },
  { icon: Wand2,      title: 'Color Grading',         desc: 'تصحيح وتدرج الألوان لإعطاء الفيديو مظهر احترافي وسينمائي' },
  { icon: Monitor,    title: 'محتوى يوتيوب',          desc: 'مونتاج فيديوهات يوتيوب من البداية للنهاية جاهزة للنشر' },
  { icon: Zap,        title: 'تسليم سريع',            desc: 'التزام بالمواعيد وتواصل مستمر معاك طول مدة المشروع' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 90% 40%, rgba(93,214,44,0.05) 0%, transparent 55%)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: '#5DD62C', letterSpacing: '0.18em' }}>
            — شنو نقدر نديرلك
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            الخدمات <span className="text-green-gradient">ديالي</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="card-hover rounded-2xl p-6"
              style={{ background: 'rgba(14,18,36,0.70)' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(93,214,44,0.10)', border: '1px solid rgba(93,214,44,0.25)' }}>
                <s.icon className="w-6 h-6" style={{ color: '#5DD62C' }} />
              </div>
              <h3 className="font-black text-white text-base mb-2">{s.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
