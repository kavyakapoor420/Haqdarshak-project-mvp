"use client"

import { useState, useEffect } from "react"
import { SidebarProvider, SidebarTrigger } from '../Components/ui/sidebar'
// import { TutorialSidebar } from './TutorailSidebar'
import { TutorialContent } from './TutorialContent'
import { Progress } from '../Components/ui/progress'
import { Button } from  '../Components/ui/button'
import { ArrowUp } from "lucide-react"

export default function TutorialPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
      setShowScrollTop(scrollTop > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
          <Progress value={scrollProgress} className="h-1 rounded-none" />
        </div>

        {/* <TutorialSidebar currentStep={currentStep} onStepChange={setCurrentStep} /> */}

        <main className="flex-1 pt-4">
          <div className="container max-w-4xl mx-auto px-6 py-8">
            <SidebarTrigger className="mb-6 md:hidden" />
            <TutorialContent currentStep={currentStep} onStepChange={setCurrentStep} />
          </div>
        </main>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            size="icon"
            className="fixed bottom-6 right-6 z-40 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        )}
      </div>
    </SidebarProvider>
  )
}
