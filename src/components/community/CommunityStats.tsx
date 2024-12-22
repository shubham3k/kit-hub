'use client'

import { motion } from 'framer-motion'

const stats = [
  { label: "Active Members", value: "5,000+", emoji: "👥" },
  { label: "Study Groups", value: "200+", emoji: "📚" },
  { label: "Events per Month", value: "50+", emoji: "📅" },
  { label: "Resources Shared", value: "10,000+", emoji: "🔗" },
]

export default function CommunityStats() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Community at a Glance</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
          >
            <span className="text-4xl mb-2 block">{stat.emoji}</span>
            <h3 className="text-2xl font-bold text-white mb-2">{stat.value}</h3>
            <p className="text-blue-100">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

