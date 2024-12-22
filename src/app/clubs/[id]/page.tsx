'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { databases } from '../../../lib/appwrite'

export default function ClubDetail() {
  const [club, setClub] = useState<any>(null)
  const params = useParams()
  const clubId = params.id as string

  useEffect(() => {
    const fetchClub = async () => {
      try {
        const clubData = await databases.getDocument('YOUR_DATABASE_ID', 'clubs', clubId)
        setClub(clubData)
      } catch (error) {
        console.error('Failed to fetch club', error)
      }
    }
    fetchClub()
  }, [clubId])

  if (!club) return <div>Loading...</div>

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">{club.name}</h1>
      <p className="text-gray-600">{club.description}</p>
      <h2 className="text-xl font-semibold mt-4">Contact Information</h2>
      <p>Email: {club.email}</p>
      <p>Meeting Time: {club.meetingTime}</p>
      <h2 className="text-xl font-semibold mt-4">Join the Club</h2>
      <p>Interested in joining? Contact the club leader for more information!</p>
    </div>
  )
}

