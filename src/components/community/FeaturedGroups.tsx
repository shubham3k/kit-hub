'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const groups = [
  { name: "Computer Science Club", emoji: "💻", members: 520 },
  { name: "Art & Design Society", emoji: "🎨", members: 310 },
  { name: "Debate Team", emoji: "🎭", members: 180 },
  { name: "Environmental Action", emoji: "🌿", members: 250 },
]

export default function FeaturedGroups() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Groups</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {groups.map((group, index) => (
          <motion.div
            key={group.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{group.name}</span>
                  <span className="text-4xl">{group.emoji}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">{group.members} members</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

