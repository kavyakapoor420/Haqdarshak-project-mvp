"use client"

import { useState, type KeyboardEvent } from "react"
import { X, HelpCircle } from "lucide-react"
import { Input } from '../ui/input'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

interface TagInputProps {
  tags: string[]
  onChange: (tags: string[]) => void
  maxTags?: number
  placeholder?: string
}

export function TagInput({ tags, onChange, maxTags = 5, placeholder }: TagInputProps) {
  const [inputValue, setInputValue] = useState("")

  const addTag = (tag: string) => {
    const trimmedTag = tag.trim().toLowerCase()
    if (trimmedTag && !tags.includes(trimmedTag) && tags.length < maxTags) {
      onChange([...tags, trimmedTag])
      setInputValue("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    onChange(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === " " || e.key === ",") {
      e.preventDefault()
      addTag(inputValue)
    } else if (e.key === "Backspace" && inputValue === "" && tags.length > 0) {
      removeTag(tags[tags.length - 1])
    }
  }

  const handleInputBlur = () => {
    if (inputValue.trim()) {
      addTag(inputValue)
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-300">
          Tags<span className="text-red-400">*</span>
        </label>
        <Button variant="ghost" size="icon" className="h-4 w-4 text-gray-400 hover:text-gray-300">
          <HelpCircle className="h-3 w-3" />
        </Button>
      </div>

      <p className="text-sm text-gray-400">Add up to {maxTags} tags to describe what your question is about</p>

      <div className="flex flex-wrap gap-2 p-3 border border-gray-600 rounded-md bg-gray-900 min-h-[50px]">
        {tags.map((tag, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="bg-blue-900 text-blue-100 hover:bg-blue-800 flex items-center gap-1"
          >
            {tag}
            <Button
              variant="ghost"
              size="icon"
              className="h-3 w-3 p-0 hover:bg-blue-700"
              onClick={() => removeTag(tag)}
            >
              <X className="h-2 w-2" />
            </Button>
          </Badge>
        ))}

        {tags.length < maxTags && (
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleInputBlur}
            placeholder={placeholder}
            className="flex-1 min-w-[120px] border-0 bg-transparent text-gray-300 focus:ring-0 focus:ring-offset-0 p-0"
          />
        )}
      </div>

      <p className="text-xs text-gray-500">Press Enter, Space, or Comma to add tags</p>
    </div>
  )
}
