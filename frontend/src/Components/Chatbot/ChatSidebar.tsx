// "use client"

// import { useState } from "react"
// import { Button } from "../ui/button"
// import { ScrollArea } from "../ui/scroll-area"
// import { Input } from "../ui/input"
// import { Plus, MessageSquare, Search, Trash2, MoreHorizontal, X } from "lucide-react"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
// import type { Chat } from  './Page'
// import { cn } from "@/lib/utils"

// interface ChatSidebarProps {
//   chats: Chat[]
//   currentChatId: string
//   onChatSelect: (chatId: string) => void
//   onNewChat: () => void
//   onDeleteChat: (chatId: string) => void
//   isOpen: boolean
//   onToggle: () => void
// }

// export function ChatSidebar({
//   chats,
//   currentChatId,
//   onChatSelect,
//   onNewChat,
//   onDeleteChat,
//   isOpen,
//   onToggle,
// }: ChatSidebarProps) {
//   const [searchQuery, setSearchQuery] = useState("")

//   const filteredChats = chats.filter((chat) => chat.title.toLowerCase().includes(searchQuery.toLowerCase()))

//   const formatDate = (date: Date) => {
//     const now = new Date()
//     const diff = now.getTime() - date.getTime()
//     const days = Math.floor(diff / (1000 * 60 * 60 * 24))

//     if (days === 0) return "Today"
//     if (days === 1) return "Yesterday"
//     if (days < 7) return `${days} days ago`
//     return date.toLocaleDateString()
//   }

//   return (
//     <>
//       {/* Mobile overlay */}
//       {isOpen && <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" onClick={onToggle} />}

//       {/* Sidebar */}
//       <div
//         className={cn(
//           "fixed lg:relative inset-y-0 left-0 z-50 w-80 bg-white/80 backdrop-blur-xl border-r border-orange-100 flex flex-col transition-transform duration-300 ease-in-out",
//           isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
//         )}
//       >
//         {/* Header */}
//         <div className="p-4 border-b border-orange-100 bg-gradient-to-r from-orange-500 to-amber-500">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-xl font-bold text-white">AI Assistant</h2>
//             <Button variant="ghost" size="icon" onClick={onToggle} className="lg:hidden text-white hover:bg-white/20">
//               <X className="h-5 w-5" />
//             </Button>
//           </div>

//           <Button
//             onClick={onNewChat}
//             className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 transition-all duration-200"
//             variant="outline"
//           >
//             <Plus className="h-4 w-4 mr-2" />
//             New Chat
//           </Button>
//         </div>

//         {/* Search */}
//         <div className="p-4 border-b border-orange-100">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//             <Input
//               placeholder="Search chats..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="pl-10 bg-orange-50/50 border-orange-200 focus:border-orange-300 focus:ring-orange-200"
//             />
//           </div>
//         </div>

//         {/* Chat List */}
//         <ScrollArea className="flex-1">
//           <div className="p-2">
//             {filteredChats.length === 0 ? (
//               <div className="text-center py-8 text-gray-500">
//                 <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-300" />
//                 <p>No chats found</p>
//               </div>
//             ) : (
//               filteredChats.map((chat) => (
//                 <div
//                   key={chat.id}
//                   className={cn(
//                     "group relative p-3 rounded-lg cursor-pointer transition-all duration-200 mb-2",
//                     currentChatId === chat.id
//                       ? "bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 shadow-sm"
//                       : "hover:bg-orange-50/50",
//                   )}
//                   onClick={() => onChatSelect(chat.id)}
//                 >
//                   <div className="flex items-start justify-between">
//                     <div className="flex-1 min-w-0">
//                       <h3 className="font-medium text-gray-900 truncate text-sm">{chat.title}</h3>
//                       <p className="text-xs text-gray-500 mt-1">{formatDate(chat.updatedAt)}</p>
//                       <p className="text-xs text-gray-400 mt-1 truncate">
//                         {chat.messages[chat.messages.length - 1]?.content}
//                       </p>
//                     </div>

//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button
//                           variant="ghost"
//                           size="icon"
//                           className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 text-gray-400 hover:text-gray-600"
//                           onClick={(e) => e.stopPropagation()}
//                         >
//                           <MoreHorizontal className="h-4 w-4" />
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent align="end">
//                         <DropdownMenuItem
//                           onClick={(e) => {
//                             e.stopPropagation()
//                             onDeleteChat(chat.id)
//                           }}
//                           className="text-red-600 hover:text-red-700 hover:bg-red-50"
//                         >
//                           <Trash2 className="h-4 w-4 mr-2" />
//                           Delete
//                         </DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </ScrollArea>
//       </div>
//     </>
//   )
// }






"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { ScrollArea } from "../ui/scroll-area"
import { Input } from "../ui/input"
import { Plus, MessageSquare, Search, Trash2, MoreHorizontal, X, Sparkles, Bot } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import type { Chat } from "./Page"
import { cn } from "@/lib/utils"

interface ChatSidebarProps {
  chats: Chat[]
  currentChatId: string
  onChatSelect: (chatId: string) => void
  onNewChat: () => void
  onDeleteChat: (chatId: string) => void
  isOpen: boolean
  onToggle: () => void
}

export function ChatSidebar({
  chats,
  currentChatId,
  onChatSelect,
  onNewChat,
  onDeleteChat,
  isOpen,
  onToggle,
}: ChatSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredChats = chats.filter((chat) => chat.title.toLowerCase().includes(searchQuery.toLowerCase()))

  const formatDate = (date: Date) => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))

    if (days === 0) return "Today"
    if (days === 1) return "Yesterday"
    if (days < 7) return `${days} days ago`
    return date.toLocaleDateString()
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" onClick={onToggle} />}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed lg:relative inset-y-0 left-0 z-50 w-80 bg-white/95 backdrop-blur-xl border-r border-orange-200/50 flex flex-col transition-all duration-300 ease-in-out shadow-2xl lg:shadow-none",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">AI Assistant</h2>
                  <p className="text-orange-100 text-sm">Haqdarshak Helper</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggle}
                className="lg:hidden text-white hover:bg-white/20 rounded-xl"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <Button
              onClick={onNewChat}
              className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 transition-all duration-300 rounded-xl font-medium shadow-lg hover:shadow-xl backdrop-blur-sm"
              variant="outline"
            >
              <Plus className="h-4 w-4 mr-2" />
              <Sparkles className="h-4 w-4 mr-2" />
              New Chat
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="p-4 bg-gradient-to-b from-orange-50/50 to-transparent">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-orange-400" />
            <Input
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/80 border-orange-200/50 focus:border-orange-400 focus:ring-orange-200 rounded-xl shadow-sm backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Chat List */}
        <ScrollArea className="flex-1 px-2">
          <div className="p-2">
            {filteredChats.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <MessageSquare className="h-16 w-16 mx-auto mb-4 text-orange-200" />
                <p className="text-lg font-medium text-gray-600">No chats found</p>
                <p className="text-sm text-gray-400 mt-1">Start a new conversation</p>
              </div>
            ) : (
              filteredChats.map((chat) => (
                <div
                  key={chat.id}
                  className={cn(
                    "group relative p-4 rounded-xl cursor-pointer transition-all duration-300 mb-3 border",
                    currentChatId === chat.id
                      ? "bg-gradient-to-r from-orange-100 via-orange-50 to-amber-50 border-orange-300/50 shadow-lg scale-[1.02]"
                      : "hover:bg-gradient-to-r hover:from-orange-50/50 hover:to-amber-50/50 border-transparent hover:border-orange-200/30 hover:shadow-md",
                  )}
                  onClick={() => onChatSelect(chat.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h3
                        className={cn(
                          "font-semibold truncate text-base mb-1",
                          currentChatId === chat.id ? "text-orange-900" : "text-gray-800",
                        )}
                      >
                        {chat.title}
                      </h3>
                      <p className="text-xs text-orange-600 font-medium mb-2">{formatDate(chat.updatedAt)}</p>
                      <p className="text-sm text-gray-600 truncate leading-relaxed">
                        {chat.messages[chat.messages.length - 1]?.content}
                      </p>
                    </div>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="opacity-0 group-hover:opacity-100 transition-all duration-200 h-8 w-8 text-gray-400 hover:text-orange-600 hover:bg-orange-100 rounded-lg"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="rounded-xl border-orange-200">
                        <DropdownMenuItem
                          onClick={(e) => {
                            e.stopPropagation()
                            onDeleteChat(chat.id)
                          }}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Chat
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>

        {/* Footer */}
        <div className="p-4 border-t border-orange-200/50 bg-gradient-to-t from-orange-50/30 to-transparent">
          <div className="text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              Powered by <span className="font-semibold text-orange-600">Haqdarshak AI</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">Helping agents serve citizens better</p>
          </div>
        </div>
      </div>
    </>
  )
}

