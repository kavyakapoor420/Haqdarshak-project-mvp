import { Card, CardHeader } from '../Components/ui/card'
import { Badge } from '../Components/ui/badge'
import type { ReactNode } from "react"

interface StepCardProps {
  step: number
  title: string
  description: string
  icon: ReactNode
}

export function StepCard({ step, title, description, icon }: StepCardProps) {
  return (
    <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-purple-500/5">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-xl text-primary">{icon}</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="default" className="text-xs">
                Step {step}
              </Badge>
            </div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}
