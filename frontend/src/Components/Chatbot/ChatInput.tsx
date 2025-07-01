// "use client"

// import type React from "react"

// import { useState, useRef } from "react"
// import { Button } from "../ui/button"
// import { Textarea } from "../ui/textarea"
// import { Send, Paperclip, ImageIcon, X, Loader2 } from "lucide-react"
// import { cn } from "@/lib/utils"

// interface ChatInputProps {
//   onSendMessage: (content: string, attachments?: File[]) => void
// }

// export function ChatInput({ onSendMessage }: ChatInputProps) {
//   const [message, setMessage] = useState("")
//   const [attachments, setAttachments] = useState<File[]>([])
//   const [isLoading, setIsLoading] = useState(false)
//   const fileInputRef = useRef<HTMLInputElement>(null)
//   const textareaRef = useRef<HTMLTextAreaElement>(null)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if ((!message.trim() && attachments.length === 0) || isLoading) return

//     setIsLoading(true)
//     onSendMessage(message, attachments)
//     setMessage("")
//     setAttachments([])
//     setIsLoading(false)

//     // Reset textarea height
//     if (textareaRef.current) {
//       textareaRef.current.style.height = "auto"
//     }
//   }

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault()
//       handleSubmit(e)
//     }
//   }

//   const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = Array.from(e.target.files || [])
//     setAttachments((prev) => [...prev, ...files])
//     if (fileInputRef.current) {
//       fileInputRef.current.value = ""
//     }
//   }

//   const removeAttachment = (index: number) => {
//     setAttachments((prev) => prev.filter((_, i) => i !== index))
//   }

//   const formatFileSize = (bytes: number) => {
//     if (bytes === 0) return "0 Bytes"
//     const k = 1024
//     const sizes = ["Bytes", "KB", "MB", "GB"]
//     const i = Math.floor(Math.log(bytes) / Math.log(k))
//     return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
//   }

//   return (
//     <div className="border-t border-orange-100 bg-white/50 backdrop-blur-sm">
//       <div className="max-w-4xl mx-auto p-4">
//         {/* Attachments Preview */}
//         {attachments.length > 0 && (
//           <div className="mb-4 flex flex-wrap gap-2">
//             {attachments.map((file, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-lg px-3 py-2 text-sm"
//               >
//                 {file.type.startsWith("image/") ? (
//                   <ImageIcon className="h-4 w-4 text-orange-500" />
//                 ) : (
//                   <Paperclip className="h-4 w-4 text-orange-500" />
//                 )}
//                 <span className="text-gray-700 max-w-32 truncate">{file.name}</span>
//                 <span className="text-gray-500 text-xs">({formatFileSize(file.size)})</span>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   onClick={() => removeAttachment(index)}
//                   className="h-4 w-4 p-0 text-gray-400 hover:text-red-500"
//                 >
//                   <X className="h-3 w-3" />
//                 </Button>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Input Form */}
//         <form onSubmit={handleSubmit} className="flex gap-2">
//           <div className="flex-1 relative">
//             <Textarea
//               ref={textareaRef}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               onKeyDown={handleKeyDown}
//               placeholder="Type your message here... (Press Enter to send, Shift+Enter for new line)"
//               className="min-h-[52px] max-h-32 resize-none pr-12 bg-white border-orange-200 focus:border-orange-300 focus:ring-orange-200 rounded-xl"
//               disabled={isLoading}
//             />

//             {/* File Upload Button */}
//             <Button
//               type="button"
//               variant="ghost"
//               size="icon"
//               onClick={() => fileInputRef.current?.click()}
//               className="absolute right-2 top-2 h-8 w-8 text-gray-400 hover:text-orange-500 hover:bg-orange-50"
//               disabled={isLoading}
//             >
//               <Paperclip className="h-4 w-4" />
//             </Button>
//           </div>

//           <Button
//             type="submit"
//             disabled={(!message.trim() && attachments.length === 0) || isLoading}
//             className={cn(
//               "h-[52px] px-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl",
//               "disabled:opacity-50 disabled:cursor-not-allowed",
//             )}
//           >
//             {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
//           </Button>

//           <input
//             ref={fileInputRef}
//             type="file"
//             multiple
//             accept="image/*,.pdf,.doc,.docx,.txt"
//             onChange={handleFileSelect}
//             className="hidden"
//           />
//         </form>

//         {/* Helper Text */}
//         <p className="text-xs text-gray-400 mt-2 text-center">
//           AI Assistant can make mistakes. Please verify important information.
//         </p>
//       </div>
//     </div>
//   )
// }







"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { Send, Paperclip, ImageIcon, X, Loader2, Mic } from "lucide-react"
import { cn } from "@/lib/utils"




interface ChatInputProps {
  onSendMessage: (content: string, attachments?: File[]) => void
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState("")
  const [attachments, setAttachments] = useState<File[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if ((!message.trim() && attachments.length === 0) || isLoading) return

    setIsLoading(true)
    onSendMessage(message, attachments)
    setMessage("")
    setAttachments([])

    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false)
    }, 500)

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setAttachments((prev) => [...prev, ...files])
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index))
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="border-t border-orange-200/50 bg-gradient-to-t from-white via-orange-25/30 to-transparent backdrop-blur-sm">
      <div className="max-w-4xl mx-auto p-6">
        {/* Attachments Preview */}
        {attachments.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-3">
            {attachments.map((file, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 rounded-xl px-4 py-3 text-sm shadow-sm"
              >
                {file.type.startsWith("image/") ? (
                  <ImageIcon className="h-5 w-5 text-orange-600" />
                ) : (
                  <Paperclip className="h-5 w-5 text-orange-600" />
                )}
                <div className="flex flex-col">
                  <span className="text-gray-800 font-medium max-w-32 truncate">{file.name}</span>
                  <span className="text-orange-600 text-xs">({formatFileSize(file.size)})</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeAttachment(index)}
                  className="h-6 w-6 p-0 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="relative">
          <div
            className={cn(
              "flex gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border-2 transition-all duration-300 shadow-lg",
              isFocused
                ? "border-orange-400 shadow-xl shadow-orange-100/50"
                : "border-orange-200/50 hover:border-orange-300",
            )}
          >
            <div className="flex-1 relative">
              <Textarea
                ref={textareaRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="Ask me about government schemes, welfare programs, or policy questions..."
                className="min-h-[60px] max-h-32 resize-none border-0 bg-transparent focus:ring-0 text-base leading-relaxed placeholder:text-gray-400"
                disabled={isLoading}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-end gap-2">
              {/* File Upload Button */}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => fileInputRef.current?.click()}
                className="h-10 w-10 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-200"
                disabled={isLoading}
              >
                <Paperclip className="h-5 w-5" />
              </Button>

              {/* Voice Input Button */}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-200"
                disabled={isLoading}
              >
                <Mic className="h-5 w-5" />
              </Button>

              {/* Send Button */}
              <Button
                type="submit"
                disabled={(!message.trim() && attachments.length === 0) || isLoading}
                className={cn(
                  "h-12 w-12 rounded-xl transition-all duration-300 transform",
                  "bg-gradient-to-r from-orange-500 via-orange-600 to-red-500",
                  "hover:from-orange-600 hover:via-orange-700 hover:to-red-600",
                  "disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed",
                  "shadow-lg hover:shadow-xl hover:scale-105",
                  "disabled:transform-none disabled:shadow-md",
                )}
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin text-white" />
                ) : (
                  <Send className="h-5 w-5 text-white" />
                )}
              </Button>
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,.pdf,.doc,.docx,.txt"
            onChange={handleFileSelect}
            className="hidden"
          />
        </form>

        {/* Helper Text */}
        <div className="flex items-center justify-between mt-4 px-2">
          <p className="text-sm text-gray-500">
            <span className="font-medium text-orange-600">Pro tip:</span> Be specific about your location and scheme
            details for better assistance
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Press</span>
            <kbd className="px-2 py-1 bg-gray-100 rounded text-gray-600 font-mono">Enter</kbd>
            <span>to send</span>
          </div>
        </div>
      </div>
    </div>
  )
}
