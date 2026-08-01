'use client'

import { motion } from 'framer-motion'

interface PrincipleCardProps {
  title: string
  description: string
  index?: number
}

export default function PrincipleCard({
  title,
  description,
  index = 0,
}: PrincipleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="p-6 bg-secondary rounded-xl border border-border hover:border-accent/30 transition-all group"
    >
      <div className="flex items-start gap-4">
        <div className="text-2xl font-bold text-accent flex-shrink-0 group-hover:scale-110 transition-transform">
          ✓
        </div>
        <div>
          <h4 className="text-lg font-bold font-jakarta text-primary mb-2">{title}</h4>
          <p className="text-primary/70 text-sm font-light leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
