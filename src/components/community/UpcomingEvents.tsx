'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const events = [
  { name: "Tech Talk: AI in Education", date: "2024-03-15", time: "18:00", emoji: "🤖" },
  { name: "Art Exhibition Opening", date: "2024-03-20", time: "19:30", emoji: "🎨" },
  { name: "Career Fair", date: "2024-03-25", time: "10:00", emoji: "💼" },
]

export default function UpcomingEvents() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-800/50">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <motion.div
            key={event.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
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
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

