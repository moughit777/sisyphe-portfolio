'use client'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

export default function IconBadge({
  icon: Icon,
  color = '#874AF8',
  size = 48,
  rounded = 'rounded-xl',
  background,
}: {
  icon: LucideIcon
  color?: string
  size?: number
  rounded?: string
  background?: string
}) {
  return (
    <div
      className={`relative flex-shrink-0 overflow-hidden ${rounded}`}
      style={{
        width: size,
        height: size,
        background: background ?? `${color}12`,
        border: `1px solid ${color}30`,
      }}
    >
      {/* Left edge sweep */}
      <motion.div
        className="absolute inset-y-0 left-0"
        style={{ width: 2, background: `linear-gradient(to bottom, transparent, ${color}cc, transparent)` }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 5, ease: 'easeInOut' }}
      />
      {/* Right edge sweep */}
      <motion.div
        className="absolute inset-y-0 right-0"
        style={{ width: 2, background: `linear-gradient(to bottom, transparent, ${color}cc, transparent)` }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 5, ease: 'easeInOut', delay: 0.15 }}
      />
      {/* Horizontal scan line */}
      <motion.div
        className="absolute inset-x-0"
        style={{ height: 1, background: `linear-gradient(to right, transparent, ${color}80, transparent)` }}
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 4, ease: 'linear' }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon style={{ width: size * 0.5, height: size * 0.5, color }} />
      </div>
    </div>
  )
}
