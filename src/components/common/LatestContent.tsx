'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { databases } from '@/lib/appwrite'
import { Query } from 'appwrite'

interface ContentItem {
  $id: string
  title: string
  date?: string
}

export function LatestContent() {
  const [latestContent, setLatestContent] = useState<{
    post: ContentItem | null
    event: ContentItem | null
    news: ContentItem | null
  }>({
    post: null,
    event: null,
    news: null,
  })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchLatestContent() {
      try {
        const [latestPost, latestEvent, latestNews] = await Promise.all([
          databases.listDocuments('YOUR_DATABASE_ID', 'posts', [
            Query.orderDesc('$createdAt'),
            Query.limit(1),
          ]),
          databases.listDocuments('YOUR_DATABASE_ID', 'events', [
            Query.orderDesc('date'),
            Query.limit(1),
          ]),
          databases.listDocuments('YOUR_DATABASE_ID', 'news', [
            Query.orderDesc('$createdAt'),
            Query.limit(1),
          ]),
        ])

        setLatestContent({
          post: latestPost.documents[0] ? { ...latestPost.documents[0], title: latestPost.documents[0].title || 'Untitled' } : null,
          event: latestEvent.documents[0] ? { ...latestEvent.documents[0], title: latestEvent.documents[0].title || 'Untitled' } : null,
          news: latestNews.documents[0] ? { ...latestNews.documents[0], title: latestNews.documents[0].title || 'Untitled' } : null,
        })
      } catch (err) {
        console.error('Failed to fetch latest content', err)
        setError('Failed to load latest content. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchLatestContent()
  }, [])

  if (isLoading) {
    return <div className="loading-spinner">Loading latest content...</div>
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  const renderContentCard = (content: ContentItem | null, label: string, linkPrefix: string) => {
    if (!content) return null

    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2">{label}</h3>
        <p className="text-gray-600 mb-2">{content.title || 'Untitled'}</p>
        {content.date && (
          <p className="text-gray-500 mb-2">{new Date(content.date).toLocaleDateString()}</p>
        )}
        <Link href={`/${linkPrefix}/${content.$id}`} className="text-primary hover:underline">
          View details
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      {renderContentCard(latestContent.post, 'Latest Forum Post', 'forum')}
      {renderContentCard(latestContent.event, 'Upcoming Event', 'events')}
      {renderContentCard(latestContent.news, 'Latest News', 'news')}
    </div>
  )
}
