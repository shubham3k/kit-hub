'use client'

import { useState, useEffect } from 'react'
import { databases } from '../../lib/appwrite'

export default function Leaderboard() {
  const [users, setUsers] = useState<any[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await databases.listDocuments('YOUR_DATABASE_ID', 'users')
        const sortedUsers = response.documents.sort((a, b) => b.points - a.points)
        setUsers(sortedUsers)
      } catch (error) {
        console.error('Failed to fetch users', error)
      }
    }
    fetchUsers()
  }, [])

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Rank</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Points</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.$id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

