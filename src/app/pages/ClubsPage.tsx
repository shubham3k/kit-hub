import ClubList from "@/components/clubs/ClubList"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function ClubsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 text-center">
        Student Clubs
      </h1>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto text-center">
        Explore and join diverse student clubs to pursue your passions and meet like-minded peers.
      </p>
      <ClubList />
      <div className="mt-12 text-center">
        <Link href="/clubs/create">
          <Button size="lg" className="bg-teal-400 text-blue-900 hover:bg-teal-300">
            Start a New Club
          </Button>
        </Link>
      </div>
    </div>
  )
}

