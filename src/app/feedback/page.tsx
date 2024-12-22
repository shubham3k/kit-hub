'use client'

import { useState } from 'react'
import { databases } from '../../lib/appwrite'

export default function Feedback() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await databases.createDocument('YOUR_DATABASE_ID', 'feedback', 'unique()', {
        title,
        description,
      })
      setSubmitted(true)
      setTitle('')
      setDescription('')
    } catch (error) {
      console.error('Failed to submit feedback', error)
    }
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Feedback</h1>
      {submitted ? (
        <p className="text-green-600">Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            rows={5}
          />
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-primary rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  )
}

