"use client"

import { useEffect, useRef } from "react"
import { Button } from "../ui/button"
import { ScrollArea } from "../ui/scroll-area"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { Menu, Bot, User, ImageIcon, FileText } from "lucide-react"
import type { Chat } from './Page'
import { cn } from "@/lib/utils"

interface ChatAreaProps {
  chat?: Chat
  onToggleSidebar: () => void
}

export function ChatArea({ chat, onToggleSidebar }: ChatAreaProps) {
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chat?.messages])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const renderAttachment = (attachment: { name: string; type: string; url: string }) => {
    if (attachment.type.startsWith("image/")) {
      return (
        <div className="mt-2 relative group">
          <img
            src={attachment.url || "/placeholder.svg"}
            alt={attachment.name}
            className="max-w-sm rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
            <ImageIcon className="h-6 w-6 text-white" />
          </div>
        </div>
      )
    }

    return (
      <div className="mt-2 flex items-center gap-2 p-2 bg-gray-50 rounded-lg border border-gray-200 max-w-xs">
        <FileText className="h-4 w-4 text-gray-500" />
        <span className="text-sm text-gray-700 truncate">{attachment.name}</span>
      </div>
    )
  }

  if (!chat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="text-center">
          <Bot className="h-16 w-16 mx-auto mb-4 text-orange-300" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Welcome to AI Assistant</h3>
          <p className="text-gray-500">Select a chat or start a new conversation</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-orange-100 bg-white/50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onToggleSidebar} className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          <Avatar className="h-8 w-8 bg-gradient-to-r from-orange-400 to-amber-400">
            <AvatarFallback className="text-white font-semibold">
              <Bot className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>

          <div>
            <h3 className="font-semibold text-gray-900">{chat.title}</h3>
            <p className="text-sm text-gray-500">AI Assistant</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-6 max-w-4xl mx-auto">
          {chat.messages.map((message) => (
            <div
              key={message.id}
              className={cn("flex gap-4 group", message.role === "user" ? "flex-row-reverse" : "flex-row")}
            >
              <Avatar
                className={cn(
                  "h-8 w-8 shrink-0",
                  message.role === "user"
                    ? "bg-gradient-to-r from-blue-400 to-purple-400"
                    : "bg-gradient-to-r from-orange-400 to-amber-400",
                )}
              >
                <AvatarFallback className="text-white font-semibold">
                  {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </AvatarFallback>
              </Avatar>

              <div className={cn("flex-1 space-y-2 max-w-3xl", message.role === "user" ? "items-end" : "items-start")}>
                <div
                  className={cn(
                    "rounded-2xl px-4 py-3 shadow-sm border transition-all duration-200 hover:shadow-md",
                    message.role === "user"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-blue-200 ml-12"
                      : "bg-white border-orange-100 mr-12",
                  )}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>

                  {message.attachments?.map((attachment, index) => (
                    <div key={index}>{renderAttachment(attachment)}</div>
                  ))}
                </div>

                <div
                  className={cn(
                    "flex items-center gap-2 px-2 opacity-0 group-hover:opacity-100 transition-opacity",
                    message.role === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  <span className="text-xs text-gray-400">{formatTime(message.timestamp)}</span>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>
    </div>
  )
}
