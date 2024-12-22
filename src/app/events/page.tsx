'use client'

import { useState, useEffect } from 'react'
import { databases } from '../../lib/appwrite'
import Link from 'next/link'

export default function Events() {
  const [events, setEvents] = useState<any[]>([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await databases.listDocuments('YOUR_DATABASE_ID', 'events')
        setEvents(response.documents)
      } catch (error) {
        console.error('Failed to fetch events', error)
      }
    }
    fetchEvents()
  }, [])

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      <Link href="/events/new" className="bg-primary text-white px-4 py-2 rounded mb-4 inline-block">
        Create New Event
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div key={event.$id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
            <p className="text-gray-600">{event.location}</p>
            <Link href={`/events/${event.$id}`} className="text-primary hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

