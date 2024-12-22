import ProjectList from "@/components/projects/ProjectList"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 text-center">
        Student Projects
      </h1>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto text-center">
        Discover innovative projects created by your peers and showcase your own work.
      </p>
      <ProjectList />
      <div className="mt-12 text-center">
        <Link href="/projects/create">
          <Button size="lg" className="bg-teal-400 text-blue-900 hover:bg-teal-300">
            Submit Your Project
          </Button>
        </Link>
      </div>
    </div>
  )
}

