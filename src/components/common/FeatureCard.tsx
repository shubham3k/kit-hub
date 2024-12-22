import Link from 'next/link'

interface FeatureCardProps {
  title: string
  description: string
  link: string
}

export function FeatureCard({ title, description, link }: FeatureCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link} className="text-primary hover:underline">
        Explore {title}
      </Link>
    </div>
  )
}

