'use client'
import { motion } from 'framer-motion'
import { Play, Clock } from 'lucide-react'

/*
  TODO: عبي هاد اللائحة بالفيديوهات الحقيقية ديالك.
  لكل عمل، خاصك تعطي youtubeId (آخر جزء من رابط يوتيوب، بعد v= أو بعد /).
  مثال: https://www.youtube.com/watch?v=dQw4w9WgXcQ  →  youtubeId: 'dQw4w9WgXcQ'
  اللي خاوي (youtubeId: '') غادي يبان كـ "قريباً".
*/
const WORKS = [
  { title: 'مونتاج طويل', category: 'Long-form Editing', youtubeId: '' },
  { title: 'Motion Graphics', category: 'After Effects', youtubeId: '' },
  { title: 'Reels & TikTok', category: 'Social Content', youtubeId: '' },
  { title: 'Color Grading', category: 'تصحيح الألوان', youtubeId: '' },
  { title: 'محتوى يوتيوب', category: 'YouTube Editing', youtubeId: '' },
  { title: 'إعلان تجاري', category: 'Commercial', youtubeId: '' },
]

function WorkCard({ work, delay }: { work: typeof WORKS[0]; delay: number }) {
  const hasVideo = !!work.youtubeId

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="card-hover rounded-2xl overflow-hidden bg-white"
    >
      <div className="aspect-video relative bg-bg-soft">
        {hasVideo ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${work.youtubeId}`}
            title={work.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 purple-gradient">
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white/15 border border-white/25">
              <Play className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-bold text-white/70 flex items-center gap-1">
              <Clock className="w-3 h-3" /> قريباً
            </span>
          </div>
        )}
      </div>
      <div className="p-4 text-right">
        <h3 className="font-black text-ink text-base mb-1">{work.title}</h3>
        <p className="text-xs font-bold" style={{ color: '#874AF8' }}>{work.category}</p>
      </div>
    </motion.div>
  )
}

export default function PortfolioGrid() {
  return (
    <section id="work" className="py-24 relative overflow-hidden bg-bg-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: '#874AF8', letterSpacing: '0.18em' }}>
            — أعمالي
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink">
            شوف <span className="text-gradient">شغلي</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WORKS.map((w, i) => (
            <WorkCard key={w.title} work={w} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
