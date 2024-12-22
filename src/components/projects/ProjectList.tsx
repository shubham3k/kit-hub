'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  { name: "EcoTrack", description: "An app to monitor and reduce carbon footprint", creator: "Green Team", emoji: "🌍" },
  { name: "StudyBuddy AI", description: "AI-powered study assistant for students", creator: "Tech Innovators", emoji: "🤖" },
  { name: "Virtual Art Gallery", description: "Online platform to showcase student artwork", creator: "Creative Minds", emoji: "🖼️" },
  { name: "Campus Navigator", description: "Interactive map and guide for new students", creator: "Welcome Committee", emoji: "🗺️" },
  { name: "Mindfulness Meditation App", description: "App to help students manage stress and anxiety", creator: "Wellness Warriors", emoji: "🧘" },
  { name: "Sustainable Fashion Line", description: "Eco-friendly clothing designed by students", creator: "Fashion Forward", emoji: "👚" },
]

export default function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{project.name}</span>
                <span className="text-4xl">{project.emoji}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-100 mb-2">{project.description}</p>
              <p className="text-blue-100">Created by: {project.creator}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

