export interface Question {
    id: string
    title: string
    body: string
    tags: string[]
    votes: number
    answers: Answer[]
    views: number
    author: {
      name: string
      avatar: string
      reputation: number
    }
    createdAt: Date
    status: "open" | "closed"
    hasAcceptedAnswer: boolean
  }
  
  export interface Answer {
    id: string
    body: string
    votes: number
    author: {
      name: string
      avatar: string
      reputation: number
    }
    createdAt: Date
    isAccepted: boolean
  }
  
  export interface UserVote {
    questionId: string
    answerId?: string
    type: "up" | "down"
  }
  