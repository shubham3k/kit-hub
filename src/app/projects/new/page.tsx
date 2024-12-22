'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { databases } from '../../../lib/appwrite'
import { useAuth } from '../../../context/AuthContext'

export default function NewProject() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [skills, setSkills] = useState('')
  const router = useRouter()
  const { user } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) {
      alert('You must be logged in to create a project')
      return
    }
    try {
      await databases.createDocument('YOUR_DATABASE_ID', 'projects', 'unique()', {
        title,
        description,
        skills: skills.split(',').map(skill => skill.trim()),
        creator: user.$id,
        members: [user.$id],
      })
      router.push('/projects')
    } catch (error) {
      console.error('Failed to create project', error)
    }
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Create New Project</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          rows={5}
        />
        <input
          type="text"
          placeholder="Required Skills (comma-separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-primary rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Create Project
        </button>
      </form>
    </div>
  )
}

