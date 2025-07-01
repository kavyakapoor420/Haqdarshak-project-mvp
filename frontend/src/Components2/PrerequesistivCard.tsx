import { Card, CardContent } from '../Components/ui/card'
import { Button } from "../Components/ui/button"
import { ExternalLink } from "lucide-react"
import type { ReactNode } from "react"

interface PrerequisiteCardProps {
  icon: ReactNode
  title: string
  description: string
  link?: string
}

export function PrerequisiteCard({ icon, title, description, link }: PrerequisiteCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-4 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-blue-100 rounded-lg text-blue-600">{icon}</div>
          <h4 className="font-semibold">{title}</h4>
        </div>
        <p className="text-sm text-muted-foreground flex-1">{description}</p>
        {link && (
          <Button variant="outline" size="sm" className="mt-3 w-fit bg-transparent">
            <ExternalLink className="h-3 w-3 mr-1" />
            Install
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
