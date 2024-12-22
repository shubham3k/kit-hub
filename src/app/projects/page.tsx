'use client'

import { useState, useEffect } from 'react'
import { databases } from '../../lib/appwrite'
import Link from 'next/link'

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await databases.listDocuments('YOUR_DATABASE_ID', 'projects')
        setProjects(response.documents)
      } catch (error) {
        console.error('Failed to fetch projects', error)
      }
    }
    fetchProjects()
  }, [])

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Project Collaboration</h1>
      <Link href="/projects/new" className="bg-primary text-white px-4 py-2 rounded mb-4 inline-block">
        Create New Project
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.$id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600">{project.description.substring(0, 100)}...</p>
            <Link href={`/projects/${project.$id}`} className="text-primary hover:underline">
              View Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

