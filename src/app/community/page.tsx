import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function CommunityMain() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 text-center">
        Welcome to Our Community!
      </h1>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl text-center">
        You're now part of our vibrant student community. Start exploring, connecting, and growing with fellow students!
      </p>
      <Link href="/">
        <Button size="lg" className="bg-teal-400 text-blue-900 hover:bg-teal-300">
          Back to Home
        </Button>
      </Link>
    </div>
  )
}

