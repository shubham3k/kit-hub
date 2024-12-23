import ProjectList from "@/components/projects/ProjectList"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <div
    className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/project-background.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay for better contrast */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    {/* Content Container */}
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
      {/* Text Section */}
      <div className="text-left md:w-1/2">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
          Hello World!
        </h1>
        <p className="text-xl text-yellow-200 mb-8">
          Discover innovative projects created by your peers and showcase your own work.
        </p>
        <div>
          <Link href="/projects/create">
            <Button size="lg" className="bg-teal-400 text-blue-900 hover:bg-teal-300">
              Get started
            </Button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/images/projects.webp" // Replace with your right-side image path
          alt="Creative Projects"
          className="w-full max-w-md rounded-lg object-cover"
        />
      </div>
    </div>
  </div>
);
}