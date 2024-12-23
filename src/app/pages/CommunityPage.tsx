'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function CommunityPage() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/project-background.jpg')", // Replace with your background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Text Section */}
        <div className="text-left md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Welcome to Our Vibrant <span className="text-teal-300">Student Community</span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto lg:mx-0">
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
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/community.webp" // Replace with your image path
            alt="Community Illustration"
            className="w-full max-w-md rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
