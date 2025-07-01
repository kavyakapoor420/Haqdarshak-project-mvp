"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from  '../Components/ui/sidebar'
import { Badge } from '../Components/ui/badge'
import { Rocket, Settings, Code, Zap, Database, BarChart3, CheckCircle2, Target, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

const tutorialSteps = [
  {
    id: 0,
    title: "Introduction",
    icon: BookOpen,
    description: "Overview and Prerequisites",
  },
  {
    id: 1,
    title: "Set Up SigNoz",
    icon: Rocket,
    description: "Install and configure SigNoz",
  },
  {
    id: 2,
    title: "Create Node.js App",
    icon: Code,
    description: "Sample application setup",
  },
  {
    id: 3,
    title: "OpenTelemetry Setup",
    icon: Zap,
    description: "Instrument your application",
  },
  {
    id: 4,
    title: "Configure Collector",
    icon: Settings,
    description: "OpenTelemetry Collector setup",
  },
  {
    id: 5,
    title: "Verify Data",
    icon: BarChart3,
    description: "Check SigNoz dashboard",
  },
  {
    id: 6,
    title: "Best Practices",
    icon: Target,
    description: "Optimization tips",
  },
  {
    id: 7,
    title: "Conclusion",
    icon: CheckCircle2,
    description: "Summary and next steps",
  },
]

interface TutorialSidebarProps {
  currentStep: number
  onStepChange: (step: number) => void
}

export function TutorialSidebar({ currentStep, onStepChange }: TutorialSidebarProps) {
  return (
    <Sidebar className="border-r-0 shadow-lg">
      <SidebarHeader className="p-6 border-b bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <Database className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold">SigNoz Tutorial</h2>
            <p className="text-sm text-blue-100">From Zero to Observable</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground mb-3">
            TUTORIAL STEPS
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {tutorialSteps.map((step) => {
                const Icon = step.icon
                const isActive = currentStep === step.id
                const isCompleted = currentStep > step.id

                return (
                  <SidebarMenuItem key={step.id}>
                    <SidebarMenuButton
                      onClick={() => onStepChange(step.id)}
                      className={cn(
                        "w-full p-3 rounded-lg transition-all duration-200 hover:bg-accent/50",
                        isActive && "bg-primary text-primary-foreground shadow-md",
                        isCompleted && !isActive && "bg-green-50 text-green-700 border border-green-200",
                      )}
                    >
                      <div className="flex items-center gap-3 w-full">
                        <div
                          className={cn(
                            "p-1.5 rounded-md",
                            isActive && "bg-primary-foreground/20",
                            isCompleted && !isActive && "bg-green-100",
                          )}
                        >
                          {isCompleted && !isActive ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          ) : (
                            <Icon
                              className={cn(
                                "h-4 w-4",
                                isActive && "text-primary-foreground",
                                !isActive && !isCompleted && "text-muted-foreground",
                              )}
                            />
                          )}
                        </div>
                        <div className="flex-1 text-left">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">{step.title}</span>
                            {isActive && (
                              <Badge variant="secondary" className="text-xs">
                                Current
                              </Badge>
                            )}
                          </div>
                          <p
                            className={cn(
                              "text-xs mt-0.5",
                              isActive && "text-primary-foreground/80",
                              !isActive && "text-muted-foreground",
                            )}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
