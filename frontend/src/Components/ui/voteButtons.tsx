"use client"

import { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import { Button } from '../ui/button'

interface VoteButtonsProps {
  votes: number
  questionId: string
  answerId?: string
  onVote: (questionId: string, answerId: string | undefined, type: "up" | "down") => void
}

export function VoteButtons({ votes, questionId, answerId, onVote }: VoteButtonsProps) {
  const [userVote, setUserVote] = useState<"up" | "down" | null>(null)
  const [currentVotes, setCurrentVotes] = useState(votes)

  const handleVote = (type: "up" | "down") => {
    let newVotes = currentVotes

    if (userVote === type) {
      // Remove vote
      newVotes = type === "up" ? currentVotes - 1 : currentVotes + 1
      setUserVote(null)
    } else if (userVote === null) {
      // Add new vote
      newVotes = type === "up" ? currentVotes + 1 : currentVotes - 1
      setUserVote(type)
    } else {
      // Change vote
      newVotes = type === "up" ? currentVotes + 2 : currentVotes - 2
      setUserVote(type)
    }

    setCurrentVotes(newVotes)
    onVote(questionId, answerId, type)
  }

  return (
    <div className="flex flex-col items-center gap-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleVote("up")}
        className={`p-1 h-8 w-8 ${
          userVote === "up"
            ? "text-orange-500 bg-orange-50 hover:bg-orange-100"
            : "text-gray-500 hover:text-orange-500 hover:bg-orange-50"
        }`}
      >
        <ChevronUp className="h-5 w-5" />
      </Button>

      <span
        className={`font-bold text-sm ${
          currentVotes > 0 ? "text-green-600" : currentVotes < 0 ? "text-red-600" : "text-gray-600"
        }`}
      >
        {currentVotes}
      </span>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleVote("down")}
        className={`p-1 h-8 w-8 ${
          userVote === "down"
            ? "text-orange-500 bg-orange-50 hover:bg-orange-100"
            : "text-gray-500 hover:text-orange-500 hover:bg-orange-50"
        }`}
      >
        <ChevronDown className="h-5 w-5" />
      </Button>
    </div>
  )
}
