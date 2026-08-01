'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full bg-primary text-white py-16 px-6 sm:px-8 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold font-jakarta mb-4">Let's Connect</h3>
            <p className="text-white/70 font-light mb-6">
              Open to discussing product ideas, opportunities, and collaboration.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white/50 mb-3">EMAIL</p>
            <a
              href="mailto:rvsvaishnavi@gmail.com"
              className="text-lg text-white hover:text-accent transition-colors font-semibold flex items-center gap-2 group"
            >
              rvsvaishnavi@gmail.com
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold text-white/50 mb-3">LOCATION</p>
            <p className="text-lg text-white font-semibold">Hyderabad, India</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex gap-6 mb-8">
            <a
              href="https://linkedin.com/in/rvs-vaishnavi-568a02212"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-accent transition-all group"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-accent transition-all group"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
            <a
              href="mailto:rvsvaishnavi@gmail.com"
              className="p-3 bg-white/10 rounded-full hover:bg-accent transition-all group"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/10 pt-8">
          <p className="text-white/50 text-sm font-light">
            © {currentYear} Vaishnavi. Carefully crafted with attention to detail.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
