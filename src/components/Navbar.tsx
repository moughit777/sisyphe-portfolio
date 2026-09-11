'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const WA_URL = 'https://wa.me/212624821600?text=السلام%20عليكم%2C%20بغيت%20نهضر%20معاك%20على%20شي%20مشروع%20مونتاج'

const links = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'الأعمال',   href: '#work' },
  { label: 'الباقات',   href: '#pricing' },
  { label: 'تواصل',     href: '#contact' },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-border shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">

          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/logo.png" alt="Sisyphe" width={40} height={40} className="w-full h-full object-cover object-left" priority />
            </div>
            <span className="font-black text-ink text-lg tracking-tight">Sisyphe</span>
          </a>

          <nav className="hidden lg:flex items-center gap-0.5">
            {links.map(l => (
              <a key={l.href} href={l.href}
                className="px-4 py-2 text-base font-bold text-ink/80 hover:text-ink rounded-lg hover:bg-brand-purple/5 transition-all duration-200">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <motion.a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-whatsapp flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm"
            >
              <motion.div animate={{ scale: [1, 1.18, 1] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}>
                <MessageCircle className="w-4 h-4" />
              </motion.div>
              تواصل معايا
            </motion.a>
          </div>

          <button className="lg:hidden p-2 text-ink/70 hover:text-ink transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-white border-b border-border lg:hidden shadow-lg"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-bold text-ink/80 hover:text-ink hover:bg-brand-purple/5 rounded-xl transition-colors">
                  {l.label}
                </a>
              ))}
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}
                className="btn-whatsapp block mt-2 px-4 py-3 text-center rounded-xl text-sm">
                تواصل معايا
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
