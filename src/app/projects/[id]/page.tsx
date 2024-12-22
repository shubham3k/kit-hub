'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { databases } from '../../../lib/appwrite'
import { useAuth } from '../../../context/AuthContext'

export default function ProjectDetail() {
  const [project, setProject] = useState<any>(null)
  const [members, setMembers] = useState<any[]>([])
  const params = useParams()
  const projectId = params.id as string
  const { user } = useAuth()

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectData = await databases.getDocument('YOUR_DATABASE_ID', 'projects', projectId)
        setProject(projectData)
        const membersData = await Promise.all(
          projectData.members.map((memberId: string) =>
            databases.getDocument('YOUR_DATABASE_ID', 'users', memberId)
          )
        )
        setMembers(membersData)
      } catch (error) {
        console.error('Failed to fetch project', error)
      }
    }
    fetchProject()
  }, [projectId])

  const handleJoin = async () => {
    if (!user) {
      alert('You must be logged in to join a project')
      return
    }
    try {
      const updatedProject = await databases.updateDocument('YOUR_DATABASE_ID', 'projects', projectId, {
        members: [...project.members, user.$id],
      })
      setProject(updatedProject)
      setMembers([...members, user])
    } catch (error) {
      console.error('Failed to join project', error)
    }
  }

  if (!project) return <div>Loading...</div>

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <h2 className="text-xl font-semibold mb-2">Required Skills</h2>
      <ul className="list-disc list-inside mb-4">
        {project.skills.map((skill: string, index: number) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Team Members</h2>
      <ul className="list-disc list-inside mb-4">
        {members.map((member) => (
          <li key={member.$id}>{member.name}</li>
        ))}
      </ul>
      {user && !project.members.includes(user.$id) && (
        <button
          onClick={handleJoin}
          className="px-4 py-2 font-bold text-white bg-primary rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Join Project
        </button>
      )}
    </div>
  )
}

