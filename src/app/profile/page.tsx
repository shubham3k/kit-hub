'use client'

import { useState, useEffect } from 'react'
import { account, databases } from '../../lib/appwrite'
import { useRouter } from 'next/navigation'

export default function Profile() {
  const [user, setUser] = useState<any>(null)
  const [bio, setBio] = useState('')
  const router = useRouter()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await account.get()
        setUser(userData)
        // Fetch user profile from database
        const profile = await databases.getDocument('YOUR_DATABASE_ID', 'profiles', userData.$id)
        setBio(profile.bio)
      } catch (error) {
        console.error('Failed to fetch user', error)
        router.push('/auth/login')
      }
    }
    fetchUser()
  }, [router])

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await databases.updateDocument('YOUR_DATABASE_ID', 'profiles', user.$id, { bio })
      alert('Profile updated successfully')
    } catch (error) {
      console.error('Failed to update profile', error)
    }
  }

  if (!user) return <div>Loading...</div>

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <form onSubmit={handleUpdateProfile} className="w-full max-w-xs mt-4">
        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-primary rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Update Profile
        </button>
      </form>
    </div>
  )
}

