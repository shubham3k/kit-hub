'use client'

import { useState, useEffect } from 'react'
import { databases } from '../../lib/appwrite'
import Link from 'next/link'

export default function Clubs() {
  const [clubs, setClubs] = useState<any[]>([])

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await databases.listDocuments('YOUR_DATABASE_ID', 'clubs')
        setClubs(response.documents)
      } catch (error) {
        console.error('Failed to fetch clubs', error)
      }
    }
    fetchClubs()
  }, [])

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">College Clubs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clubs.map((club) => (
          <div key={club.$id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{club.name}</h2>
            <p className="text-gray-600">{club.description.substring(0, 100)}...</p>
            <Link href={`/clubs/${club.$id}`} className="text-primary hover:underline">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

