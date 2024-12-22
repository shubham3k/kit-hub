'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const events = [
  { name: "Tech Talk: AI in Education", date: "2024-03-15", time: "18:00", location: "Main Auditorium", emoji: "🤖" },
  { name: "Art Exhibition Opening", date: "2024-03-20", time: "19:30", location: "Student Center Gallery", emoji: "🎨" },
  { name: "Career Fair", date: "2024-03-25", time: "10:00", location: "Sports Complex", emoji: "💼" },
  { name: "Music Festival", date: "2024-04-01", time: "14:00", location: "Campus Green", emoji: "🎵" },
  { name: "Hackathon", date: "2024-04-10", time: "09:00", location: "Computer Science Building", emoji: "💻" },
  { name: "Environmental Awareness Day", date: "2024-04-22", time: "11:00", location: "Botanical Gardens", emoji: "🌿" },
]

export default function EventList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => (
        <motion.div
          key={event.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{event.name}</span>
                <span className="text-4xl">{event.emoji}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-100">Date: {event.date}</p>
              <p className="text-blue-100">Time: {event.time}</p>
              <p className="text-blue-100">Location: {event.location}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

