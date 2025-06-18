"use client"

import { useState, useMemo } from "react"
import { Search, Filter, Plus } from "lucide-react"
import { Input } from '../ui/input'
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { QuestionCard } from '../Features/QuestionCard'
import { QuestionDetail } from '../Features/QuesrionDetail'
import { dummyQuestions } from '../../Data/dummPost'
import type { Question } from '../../types/question'

type SortOption = "newest" | "active" | "votes" | "unanswered"

export function QuestionsList() {
  const [questions, setQuestions] = useState<Question[]>(dummyQuestions)
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<SortOption>("newest")

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    questions.forEach((q) => q.tags.forEach((tag) => tags.add(tag)))
    return Array.from(tags).sort()
  }, [questions])

  // Filter and sort questions
  const filteredQuestions = useMemo(() => {
    let filtered = questions.filter((question) => {
      const matchesSearch =
        question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        question.body.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesTag = !selectedTag || question.tags.includes(selectedTag)
      return matchesSearch && matchesTag
    })

    // Sort questions
    switch (sortBy) {
      case "newest":
        filtered.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        break
      case "active":
        filtered.sort((a, b) => {
          const aLatest = Math.max(a.createdAt.getTime(), ...a.answers.map((ans) => ans.createdAt.getTime()))
          const bLatest = Math.max(b.createdAt.getTime(), ...b.answers.map((ans) => ans.createdAt.getTime()))
          return bLatest - aLatest
        })
        break
      case "votes":
        filtered.sort((a, b) => b.votes - a.votes)
        break
      case "unanswered":
        filtered = filtered.filter((q) => q.answers.length === 0)
        break
    }

    return filtered
  }, [questions, searchTerm, selectedTag, sortBy])

  const handleVote = (questionId: string, answerId: string | undefined, type: "up" | "down") => {
    setQuestions((prev) =>
      prev.map((question) => {
        if (question.id === questionId) {
          if (answerId) {
            // Voting on an answer
            return {
              ...question,
              answers: question.answers.map((answer) =>
                answer.id === answerId
                  ? { ...answer, votes: type === "up" ? answer.votes + 1 : answer.votes - 1 }
                  : answer,
              ),
            }
          } else {
            // Voting on the question
            return { ...question, votes: type === "up" ? question.votes + 1 : question.votes - 1 }
          }
        }
        return question
      }),
    )

    // Update selected question if it's currently viewed
    if (selectedQuestion && selectedQuestion.id === questionId) {
      const updatedQuestion = questions.find((q) => q.id === questionId)
      if (updatedQuestion) {
        setSelectedQuestion(updatedQuestion)
      }
    }
  }

  const handleSubmitAnswer = (questionId: string, answerBody: string) => {
    const newAnswer = {
      id: `${questionId}-${Date.now()}`,
      body: answerBody,
      votes: 0,
      author: {
        name: "Current User",
        avatar: "/placeholder.svg?height=32&width=32",
        reputation: 1,
      },
      createdAt: new Date(),
      isAccepted: false,
    }

    setQuestions((prev) =>
      prev.map((question) =>
        question.id === questionId ? { ...question, answers: [...question.answers, newAnswer] } : question,
      ),
    )

    // Update selected question
    if (selectedQuestion && selectedQuestion.id === questionId) {
      setSelectedQuestion((prev) => (prev ? { ...prev, answers: [...prev.answers, newAnswer] } : null))
    }
  }

  const handleQuestionClick = (questionId: string) => {
    const question = questions.find((q) => q.id === questionId)
    if (question) {
      // Increment view count
      setQuestions((prev) => prev.map((q) => (q.id === questionId ? { ...q, views: q.views + 1 } : q)))
      setSelectedQuestion({ ...question, views: question.views + 1 })
    }
  }

  if (selectedQuestion) {
    return (
      <QuestionDetail
        question={selectedQuestion}
        onBack={() => setSelectedQuestion(null)}
        onVote={handleVote}
        onSubmitAnswer={handleSubmitAnswer}
      />
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Questions</h1>
          <p className="text-gray-600">{filteredQuestions.length.toLocaleString()} questions</p>
        </div>
        <Button className="bg-orange-600 hover:bg-orange-700">
          <Plus className="h-4 w-4 mr-2" />
          Ask Question
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="bg-gradient-to-b from-[#f4f1ee] via-[#f9e6da] to-[#f8d1be] rounded-lg p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="votes">Most Votes</SelectItem>
              <SelectItem value="unanswered">Unanswered</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* Tags Filter */}
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedTag === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(null)}
              className={selectedTag === null ? "bg-orange-600 hover:bg-orange-700" : ""}
            >
              All Tags
            </Button>
            {allTags.slice(0, 10).map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={selectedTag === tag ? "bg-orange-600 hover:bg-orange-700" : ""}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Sort Tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { key: "newest", label: "Newest" },
          { key: "active", label: "Active" },
          { key: "votes", label: "Most Votes" },
          { key: "unanswered", label: "Unanswered" },
        ].map((option) => (
          <Button
            key={option.key}
            variant={sortBy === option.key ? "default" : "outline"}
            onClick={() => setSortBy(option.key as SortOption)}
            className={sortBy === option.key ? "bg-orange-600 hover:bg-orange-700" : ""}
          >
            {option.label}
            {option.key === "unanswered" && (
              <Badge variant="secondary" className="ml-2">
                {questions.filter((q) => q.answers.length === 0).length}
              </Badge>
            )}
          </Button>
        ))}
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No questions found matching your criteria.</p>
            <Button className="mt-4 bg-orange-600 hover:bg-orange-700">Ask the first question</Button>
          </div>
        ) : (
          filteredQuestions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              onQuestionClick={handleQuestionClick}
              onVote={handleVote}
            />
          ))
        )}
      </div>
    </div>
  )
}




