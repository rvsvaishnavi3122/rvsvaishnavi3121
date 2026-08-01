'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface TimelineItemProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export default function TimelineItem({
  icon: Icon,
  title,
  description,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex gap-6"
    >
      {/* Timeline dot and line */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 mb-4">
          <Icon className="w-6 h-6" />
        </div>
        {index < 4 && (
          <div className="w-0.5 h-32 bg-gradient-to-b from-accent to-transparent" />
        )}
      </div>
      {/* Content */}
      <div className="pb-12 flex-1">
        <h3 className="text-xl font-bold font-jakarta text-primary mb-2">{title}</h3>
        <p className="text-primary/70 font-light">{description}</p>
      </div>
    </motion.div>
  )
}
