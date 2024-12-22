'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { databases } from '../../../lib/appwrite'

export default function PostDetail() {
  const [post, setPost] = useState<any>(null)
  const params = useParams()
  const postId = params.id as string

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await databases.getDocument('YOUR_DATABASE_ID', 'posts', postId)
        setPost(postData)
      } catch (error) {
        console.error('Failed to fetch post', error)
      }
    }
    fetchPost()
  }, [postId])

  if (!post) return <div>Loading...</div>

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600">{post.content}</p>
    </div>
  )
}

