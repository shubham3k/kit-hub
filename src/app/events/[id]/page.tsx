'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { databases } from '../../../lib/appwrite'

export default function EventDetail() {
  const [event, setEvent] = useState<any>(null)
  const params = useParams()
  const eventId = params.id as string

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventData = await databases.getDocument('YOUR_DATABASE_ID', 'events', eventId)
        setEvent(eventData)
      } catch (error) {
        console.error('Failed to fetch event', error)
      }
    }
    fetchEvent()
  }, [eventId])

  if (!event) return <div>Loading...</div>

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
      <p className="text-gray-600">Date: {new Date(event.date).toLocaleDateString()}</p>
      <p className="text-gray-600">Location: {event.location}</p>
      <p className="mt-4">{event.description}</p>
    </div>
  )
}

