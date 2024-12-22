'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { account } from '../../../lib/appwrite'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await account.createSession(email, password)
      router.push('/profile')
    } catch (error) {
      console.error('Login failed', error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="w-full max-w-xs">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-primary rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </form>
    </div>
  )
}

