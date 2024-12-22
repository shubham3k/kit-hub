'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { databases } from '../../../lib/appwrite'

export default function NewPost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await databases.createDocument('YOUR_DATABASE_ID', 'posts', 'unique()', { title, content })
      router.push('/forum')
    } catch (error) {
      console.error('Failed to create post', error)
    }
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          rows={5}
        />
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-primary rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Create Post
        </button>
      </form>
    </div>
  )
}

