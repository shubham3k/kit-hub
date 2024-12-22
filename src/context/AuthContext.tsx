'use client'

import { createContext, useState, useEffect, useContext } from 'react'
import { account } from '../lib/appwrite'

const AuthContext = createContext<{
  user: any
  setUser: (user: any) => void
}>({
  user: null,
  setUser: () => {},
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await account.get()
        setUser(currentUser)
      } catch (error) {
        console.error('No user logged in', error)
      }
    }
    checkUser()
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

