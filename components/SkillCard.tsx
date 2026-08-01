'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface SkillCardProps {
  icon: LucideIcon
  title: string
  skills: string[]
}

export default function SkillCard({ icon: Icon, title, skills }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="p-6 bg-white border border-border rounded-xl hover:border-accent/30 transition-all"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-secondary rounded-lg">
          <Icon className="w-5 h-5 text-accent" />
        </div>
        <h3 className="text-lg font-bold font-jakarta text-primary">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-sm text-primary/70 font-light flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
