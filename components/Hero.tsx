'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden flex items-center justify-center">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-white to-white opacity-50" />
      
      {/* Minimal accent circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          {/* Tagline */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-border">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Product & Growth</span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-jakarta text-primary leading-tight">
              Hi, I'm <span className="text-accent">Vaishnavi</span>
            </h1>
          </motion.div>

          {/* Transition tag */}
          <motion.div variants={itemVariants}>
            <p className="text-xl sm:text-2xl font-medium text-primary/80">
              QA Engineer <span className="text-accent">→</span> Associate Product Manager
            </p>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto leading-relaxed font-light">
              Identifying friction in everyday products and designing simple, measurable solutions that improve user decisions.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105"
            >
              View Case Studies
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-secondary border border-border rounded-lg font-semibold text-primary hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex gap-6 justify-center pt-4">
            <a
              href="https://linkedin.com/in/rvs-vaishnavi-568a02212"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-secondary rounded-full transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-primary group-hover:text-accent" />
            </a>
            <a
              href="mailto:rvsvaishnavi@gmail.com"
              className="p-3 hover:bg-secondary rounded-full transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-primary group-hover:text-accent" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
