'use client'
import { motion } from 'framer-motion'
import { Check, MessageCircle } from 'lucide-react'

const WA_URL = (plan: string) =>
  `https://wa.me/212624821600?text=السلام%20عليكم%2C%20بغيت%20نطلب%20${encodeURIComponent(plan)}`

const PLANS = [
  {
    name: 'الباقة الأساسية',
    price: '249',
    currency: 'MAD',
    gradient: 'linear-gradient(135deg, #4E2A8C 7%, #941C66 32%, #CD2236 57%, #F17422 75%, #F7B14E 92%)',
    features: [
      'موسيقى خلفية بلا حقوق',
      'مونتاج نقي (تقطيع، ترتيب، انتقالات ناعمة)',
      'ريفيزيون وحدة داخلة',
    ],
    note: '',
    featured: false,
  },
  {
    name: 'الباقة المميّزة',
    price: '679',
    currency: 'DH',
    gradient: 'linear-gradient(135deg, #4E2A8C 0%, #874AF8 50%, #DB8DFF 100%)',
    features: [
      'أقل من 60 ثانية',
      'موشن جرافيك كامل',
      'مؤثرات صوتية',
      'كابشن محسّن متناسق مع الهوية',
      '3 تعديلات مجانية',
    ],
    note: 'أي تعديل إضافي يُحتسب منفصلًا',
    featured: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-bg-soft">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: '#874AF8', letterSpacing: '0.18em' }}>
            — الباقات
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink mb-3">
            اختار المونتاج المثالي
          </h2>
          <p className="text-gray">اختار وخلي المونتاج علينا حنا</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {PLANS.map((plan, i) => (
            <motion.a
              key={plan.name}
              href={WA_URL(plan.name)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, rotate: plan.featured ? 0 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: plan.featured ? 0 : -2 }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ rotate: 0, scale: 1.03, y: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl p-8 text-white overflow-hidden shadow-xl block cursor-pointer"
              style={{ background: plan.gradient }}
            >
              {/* CC light sweep — soft diagonal pass */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.16) 50%, transparent 65%)', transform: 'skewX(-15deg)' }}
                animate={{ x: ['-150%', '250%'] }}
                transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 4.5 + i, ease: 'easeInOut' }}
              />
              {/* Edge glow sweep */}
              <motion.div
                className="absolute inset-y-0 left-0"
                style={{ width: 2, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.7), transparent)' }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 5, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute inset-y-0 right-0"
                style={{ width: 2, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.7), transparent)' }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 5, ease: 'easeInOut', delay: 0.2 }}
              />

              {plan.featured && (
                <div className="absolute top-5 left-5 px-3 py-1 rounded-full text-xs font-black bg-white/20 backdrop-blur-sm border border-white/30">
                  الأكثر طلباً
                </div>
              )}

              <h3 className="font-black text-xl mb-1 mt-2 relative">{plan.name}</h3>
              <div className="flex items-baseline gap-1.5 mb-6 relative">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className="text-sm font-bold opacity-80">{plan.currency}</span>
              </div>

              <ul className="space-y-3 mb-8 relative">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm font-semibold leading-snug">
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {plan.note && (
                <p className="text-xs opacity-70 font-semibold mb-6 relative">* {plan.note}</p>
              )}

              <div className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-black text-sm bg-white text-ink relative">
                <MessageCircle className="w-4 h-4" />
                اختار هاد الباقة
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
