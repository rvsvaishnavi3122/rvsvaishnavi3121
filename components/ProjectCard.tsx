'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  category: string
  problem: string
  skills: string[]
  emoji?: string
}

export default function ProjectCard({
  title,
  category,
  problem,
  skills,
  emoji,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
      transition={{ duration: 0.3 }}
      className="group h-full p-8 bg-white border border-border rounded-2xl hover:border-accent/30 transition-all duration-300"
    >
      <div className="space-y-4 h-full flex flex-col">
        {/* Header */}
        <div>
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                {emoji && <span className="text-3xl">{emoji}</span>}
                <h3 className="text-xl font-bold font-jakarta text-primary">{title}</h3>
              </div>
              <div className="inline-block px-3 py-1 bg-secondary rounded-full">
                <span className="text-xs font-semibold text-primary/60">{category}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Problem */}
        <div>
          <p className="text-sm font-semibold text-primary/60 mb-1">Problem</p>
          <p className="text-base text-primary/80 leading-relaxed">{problem}</p>
        </div>

        {/* Skills */}
        <div className="flex-1">
          <p className="text-sm font-semibold text-primary/60 mb-3">Product Skills</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-medium bg-secondary text-primary rounded-full hover:bg-accent/10 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <button className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
            Read Case Study
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
