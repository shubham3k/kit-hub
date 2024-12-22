'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function CommunityPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center">
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Welcome to Our Vibrant <span className="text-teal-300">Student Community</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            You're now part of our interactive online space. Start connecting with fellow students, sharing knowledge, and growing together!
          </p>
          <Button 
            size="lg" 
            className="bg-teal-400 text-blue-900 hover:bg-teal-300 transition-transform hover:scale-105"
            onClick={() => router.push('/')}
          >
            Explore Community
          </Button>
        </motion.div>
      </section>
    </div>
  )
}

