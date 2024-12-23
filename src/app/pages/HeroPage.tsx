'use client'

// import ShimmerButton from "@/components/ui/shimmer-button"

export default function Hero() {
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
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              A central hub
              <span className="block text-teal-300">For KIT students </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Connect, collaborate, and excel with our all-in-one platform built exclusively for KIT students.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              {/* <ShimmerButton size="lg" className="bg-teal-400 text-blue-900 hover:bg-teal-300">
                Get Started
              </ShimmerButton>
              <ShimmerButton size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
                Learn More
              </ShimmerButton> */}
            </div>
          </div>
          
          {/* Right side graphical elements */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000" />
            
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <span className="text-6xl">📚</span>
                  <span className="text-white text-lg font-semibold">Study</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <span className="text-6xl">💬</span>
                  <span className="text-white text-lg font-semibold">Connect</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <span className="text-6xl">🏆</span>
                  <span className="text-white text-lg font-semibold">Achieve</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <span className="text-6xl">🚀</span>
                  <span className="text-white text-lg font-semibold">Grow</span>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-teal-300 animate-pulse">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


