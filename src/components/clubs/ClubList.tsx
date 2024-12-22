'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const clubs = [
  { name: "Computer Science Club", description: "Explore the world of coding and technology", members: 520, emoji: "💻" },
  { name: "Art & Design Society", description: "Express yourself through various art forms", members: 310, emoji: "🎨" },
  { name: "Debate Team", description: "Sharpen your critical thinking and public speaking skills", members: 180, emoji: "🎭" },
  { name: "Environmental Action", description: "Work towards a sustainable future", members: 250, emoji: "🌿" },
  { name: "Chess Club", description: "Master the game of kings and queens", members: 100, emoji: "♟️" },
  { name: "Photography Club", description: "Capture moments and tell stories through images", members: 200, emoji: "📷" },
]

export default function ClubList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {clubs.map((club, index) => (
        <motion.div
          key={club.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{club.name}</span>
                <span className="text-4xl">{club.emoji}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-100 mb-2">{club.description}</p>
              <p className="text-blue-100">Members: {club.members}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

