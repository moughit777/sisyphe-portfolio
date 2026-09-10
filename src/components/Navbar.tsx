'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const WA_URL = 'https://wa.me/212624821600?text=السلام%20عليكم%2C%20بغيت%20نهضر%20معاك%20على%20شي%20مشروع%20مونتاج'

const links = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'الأعمال',   href: '#work' },
  { label: 'الخدمات',   href: '#services' },
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
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
          scrolled ? 'bg-brand-black/95 sm:backdrop-blur-xl border-b border-brand-border' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">

          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/logo.png" alt="Sisyphe" width={40} height={40} className="w-full h-full object-cover object-left" priority />
            </div>
            <span className="font-black text-white text-lg tracking-tight">Sisyphe</span>
          </a>

          <nav className="hidden lg:flex items-center gap-0.5">
            {links.map(l => (
              <a key={l.href} href={l.href}
                className="px-4 py-2 text-base font-bold text-white/90 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200">
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
              className="btn-green flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold"
            >
              <MessageCircle className="w-4 h-4" />
              تواصل معايا
            </motion.a>
          </div>

          <button className="lg:hidden p-2 text-brand-gray hover:text-brand-white transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
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
            className="fixed inset-x-0 top-16 z-40 bg-brand-dark border-b border-brand-border lg:hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-bold text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-colors">
                  {l.label}
                </a>
              ))}
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}
                className="block mt-2 px-4 py-3 text-center rounded-xl bg-brand-green text-black font-bold text-sm">
                تواصل معايا
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
