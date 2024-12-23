'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CommunityPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/project-background.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content Container */}
      <div className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center gap-12">
        
        {/* Events Section */}
        <section className="w-full lg:w-1/2 text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            <span className="text-teal-400">Campus</span> Events
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 max-w-lg">
            Discover and participate in exciting events happening across our community.
          </p>
          <div className="flex justify-start items-center space-x-4 mt-8">
            <span className="text-6xl">🎉</span>
            <span className="text-6xl">📅</span>
            <span className="text-6xl">🏆</span>
          </div>
          <div className="mt-8">
            <Link href="/events/create">
              <Button size="lg" className="bg-teal-400 text-blue-900 hover:bg-teal-300">
                coming soon
              </Button>
            </Link>
          </div>
        </section>

        {/* Clubs Section */}
        <section className="w-full lg:w-1/2 text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            <span className="text-teal-400">College</span> Clubs
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 max-w-lg">
            Explore and join diverse student clubs to pursue your passions and meet like-minded peers.
          </p>
          <div className="flex justify-start items-center space-x-4 mt-8">
            <span className="text-6xl">🤝</span>
            <span className="text-6xl">🎨</span>
            <span className="text-6xl">📚</span>
          </div>
          <div className="mt-8">
            <Link href="/clubs/create">
              <Button size="lg" className="bg-teal-400 text-blue-900 hover:bg-teal-300">
                Get started
              </Button>
            </Link>
          </div>
        </section>
        
      </div>
    </div>
  );
}
