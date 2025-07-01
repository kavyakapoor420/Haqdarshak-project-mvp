// "use client"

// import { useEffect, useRef } from "react"
// import { Button } from "../ui/button"
// import { ScrollArea } from "../ui/scroll-area"
// import { Avatar, AvatarFallback } from "../ui/avatar"
// import { Menu, Bot, User, ImageIcon, FileText } from "lucide-react"
// import type { Chat } from './Page'
// import { cn } from "@/lib/utils"

// interface ChatAreaProps {
//   chat?: Chat
//   onToggleSidebar: () => void
// }

// export function ChatArea({ chat, onToggleSidebar }: ChatAreaProps) {
//   const scrollAreaRef = useRef<HTMLDivElement>(null)
//   const messagesEndRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
//   }, [chat?.messages])

//   const formatTime = (date: Date) => {
//     return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
//   }

//   const renderAttachment = (attachment: { name: string; type: string; url: string }) => {
//     if (attachment.type.startsWith("image/")) {
//       return (
//         <div className="mt-2 relative group">
//           <img
//             src={attachment.url || "/placeholder.svg"}
//             alt={attachment.name}
//             className="max-w-sm rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
//           />
//           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
//             <ImageIcon className="h-6 w-6 text-white" />
//           </div>
//         </div>
//       )
//     }

//     return (
//       <div className="mt-2 flex items-center gap-2 p-2 bg-gray-50 rounded-lg border border-gray-200 max-w-xs">
//         <FileText className="h-4 w-4 text-gray-500" />
//         <span className="text-sm text-gray-700 truncate">{attachment.name}</span>
//       </div>
//     )
//   }

//   if (!chat) {
//     return (
//       <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-amber-50">
//         <div className="text-center">
//           <Bot className="h-16 w-16 mx-auto mb-4 text-orange-300" />
//           <h3 className="text-xl font-semibold text-gray-700 mb-2">Welcome to AI Assistant</h3>
//           <p className="text-gray-500">Select a chat or start a new conversation</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="flex-1 flex flex-col">
//       {/* Header */}
//       <div className="p-4 border-b border-orange-100 bg-white/50 backdrop-blur-sm">
//         <div className="flex items-center gap-3">
//           <Button variant="ghost" size="icon" onClick={onToggleSidebar} className="lg:hidden">
//             <Menu className="h-5 w-5" />
//           </Button>

//           <Avatar className="h-8 w-8 bg-gradient-to-r from-orange-400 to-amber-400">
//             <AvatarFallback className="text-white font-semibold">
//               <Bot className="h-4 w-4" />
//             </AvatarFallback>
//           </Avatar>

//           <div>
//             <h3 className="font-semibold text-gray-900">{chat.title}</h3>
//             <p className="text-sm text-gray-500">AI Assistant</p>
//           </div>
//         </div>
//       </div>

//       {/* Messages */}
//       <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
//         <div className="space-y-6 max-w-4xl mx-auto">
//           {chat.messages.map((message) => (
//             <div
//               key={message.id}
//               className={cn("flex gap-4 group", message.role === "user" ? "flex-row-reverse" : "flex-row")}
//             >
//               <Avatar
//                 className={cn(
//                   "h-8 w-8 shrink-0",
//                   message.role === "user"
//                     ? "bg-gradient-to-r from-blue-400 to-purple-400"
//                     : "bg-gradient-to-r from-orange-400 to-amber-400",
//                 )}
//               >
//                 <AvatarFallback className="text-white font-semibold">
//                   {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
//                 </AvatarFallback>
//               </Avatar>

//               <div className={cn("flex-1 space-y-2 max-w-3xl", message.role === "user" ? "items-end" : "items-start")}>
//                 <div
//                   className={cn(
//                     "rounded-2xl px-4 py-3 shadow-sm border transition-all duration-200 hover:shadow-md",
//                     message.role === "user"
//                       ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-blue-200 ml-12"
//                       : "bg-white border-orange-100 mr-12",
//                   )}
//                 >
//                   <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>

//                   {message.attachments?.map((attachment, index) => (
//                     <div key={index}>{renderAttachment(attachment)}</div>
//                   ))}
//                 </div>

//                 <div
//                   className={cn(
//                     "flex items-center gap-2 px-2 opacity-0 group-hover:opacity-100 transition-opacity",
//                     message.role === "user" ? "justify-end" : "justify-start",
//                   )}
//                 >
//                   <span className="text-xs text-gray-400">{formatTime(message.timestamp)}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div ref={messagesEndRef} />
//         </div>
//       </ScrollArea>
//     </div>
//   )
// }






import { useEffect, useRef } from "react"
import { Button } from "../ui/button"
import { ScrollArea } from "../ui/scroll-area"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { Menu, Bot, User, ImageIcon, FileText ,Sparkles, MessageCircle, Clock } from "lucide-react"
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
        <div className="mt-3 relative group">
          <img
            src={attachment.url || "/placeholder.svg"}
            alt={attachment.name}
            className="max-w-sm rounded-xl border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100">
            <ImageIcon className="h-8 w-8 text-white drop-shadow-lg" />
          </div>
        </div>
      )
    }

    return (
      <div className="mt-3 flex items-center gap-3 p-3 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200 max-w-xs shadow-sm hover:shadow-md transition-shadow">
        <FileText className="h-5 w-5 text-orange-600" />
        <div className="flex flex-col">
          <span className="text-sm text-gray-800 font-medium truncate">{attachment.name}</span>
          <span className="text-xs text-orange-600">Document</span>
        </div>
      </div>
    )
  }

  if (!chat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-slate-50 via-orange-25 to-amber-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-amber-200/10 rounded-full blur-3xl"></div>

        <div className="text-center relative z-10 max-w-md mx-auto px-6">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl">
            <Bot className="h-12 w-12 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Welcome to AI Assistant
          </h3>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Your intelligent companion for government schemes and welfare programs
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-orange-500" />
              <span>Smart Assistance</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-orange-500" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col relative">
      {/* Header */}
      <div className="p-6 border-b border-orange-200/50 bg-white/80 backdrop-blur-xl relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 to-transparent"></div>

        <div className="flex items-center gap-4 relative z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleSidebar}
            className="lg:hidden hover:bg-orange-100 rounded-xl"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
            <Bot className="h-6 w-6 text-white" />
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-lg">{chat.title}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>AI Assistant • Online</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>{chat.messages.length} messages</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
        <div className="space-y-8 max-w-4xl mx-auto">
          {chat.messages.map((message, index) => (
            <div
              key={message.id}
              className={cn(
                "flex gap-4 group animate-in slide-in-from-bottom-2 duration-500",
                message.role === "user" ? "flex-row-reverse" : "flex-row",
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Avatar
                className={cn(
                  "h-10 w-10 shrink-0 shadow-lg border-2",
                  message.role === "user"
                    ? "bg-gradient-to-br from-blue-500 to-purple-600 border-blue-200"
                    : "bg-gradient-to-br from-orange-500 to-red-500 border-orange-200",
                )}
              >
                <AvatarFallback className="text-white font-bold">
                  {message.role === "user" ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
                </AvatarFallback>
              </Avatar>

              <div className={cn("flex-1 space-y-2 max-w-3xl", message.role === "user" ? "items-end" : "items-start")}>
                <div
                  className={cn(
                    "rounded-2xl px-6 py-4 shadow-lg border transition-all duration-300 hover:shadow-xl relative overflow-hidden",
                    message.role === "user"
                      ? "bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 text-white border-blue-200 ml-12"
                      : "bg-white border-orange-200 mr-12 hover:border-orange-300",
                  )}
                >
                  {/* Background Pattern for AI messages */}
                  {message.role === "assistant" && (
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-100/30 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                  )}

                  <div className="relative z-10">
                    <p
                      className={cn(
                        "text-base leading-relaxed whitespace-pre-wrap",
                        message.role === "user" ? "text-white" : "text-gray-800",
                      )}
                    >
                      {message.content}
                    </p>

                    {message.attachments?.map((attachment, index) => (
                      <div key={index}>{renderAttachment(attachment)}</div>
                    ))}
                  </div>
                </div>

                <div
                  className={cn(
                    "flex items-center gap-2 px-3 opacity-0 group-hover:opacity-100 transition-all duration-300",
                    message.role === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  <span className="text-xs text-gray-500 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full">
                    {formatTime(message.timestamp)}
                  </span>
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
