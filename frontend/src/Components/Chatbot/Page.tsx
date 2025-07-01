// "use client"

// import { useState } from "react"
// import { ChatSidebar } from  './ChatSidebar'
// import { ChatArea } from './ChatArea'
// import { ChatInput } from './ChatInput'

// export interface Message {
//   id: string
//   content: string
//   role: "user" | "assistant"
//   timestamp: Date
//   attachments?: { name: string; type: string; url: string }[]
// }

// export interface Chat {
//   id: string
//   title: string
//   messages: Message[]
//   createdAt: Date
//   updatedAt: Date
// }

// export default function AIAssistPage() {
//   const [chats, setChats] = useState<Chat[]>([
//     {
//       id: "1",
//       title: "Getting Started with AI",
//       messages: [
//         {
//           id: "1",
//           content: "Hello! How can I help you today?",
//           role: "assistant",
//           timestamp: new Date(Date.now() - 1000 * 60 * 30),
//         },
//       ],
//       createdAt: new Date(Date.now() - 1000 * 60 * 30),
//       updatedAt: new Date(Date.now() - 1000 * 60 * 30),
//     },
//     {
//       id: "2",
//       title: "React Development Tips",
//       messages: [
//         {
//           id: "2",
//           content: "Can you help me with React best practices?",
//           role: "user",
//           timestamp: new Date(Date.now() - 1000 * 60 * 60),
//         },
//         {
//           id: "3",
//           content:
//             "Here are some key React best practices:\n\n1. Use functional components with hooks\n2. Keep components small and focused\n3. Use proper state management\n4. Implement error boundaries\n5. Optimize performance with React.memo when needed",
//           role: "assistant",
//           timestamp: new Date(Date.now() - 1000 * 60 * 58),
//         },
//       ],
//       createdAt: new Date(Date.now() - 1000 * 60 * 60),
//       updatedAt: new Date(Date.now() - 1000 * 60 * 58),
//     },
//   ])

//   const [currentChatId, setCurrentChatId] = useState<string>("1")
//   const [sidebarOpen, setSidebarOpen] = useState(true)

//   const currentChat = chats.find((chat) => chat.id === currentChatId)

//   const handleSendMessage = (content: string, attachments?: File[]) => {
//     if (!content.trim() && !attachments?.length) return

//     const newMessage: Message = {
//       id: Date.now().toString(),
//       content,
//       role: "user",
//       timestamp: new Date(),
//       attachments: attachments?.map((file) => ({
//         name: file.name,
//         type: file.type,
//         url: URL.createObjectURL(file),
//       })),
//     }

//     // Add user message
//     setChats((prevChats) =>
//       prevChats.map((chat) =>
//         chat.id === currentChatId
//           ? {
//               ...chat,
//               messages: [...chat.messages, newMessage],
//               updatedAt: new Date(),
//               title: chat.messages.length === 1 ? content.slice(0, 50) + "..." : chat.title,
//             }
//           : chat,
//       ),
//     )

//     // Simulate AI response
//     setTimeout(() => {
//       const aiResponse: Message = {
//         id: (Date.now() + 1).toString(),
//         content: `I understand you're asking about: "${content}". This is a demo response. In a real implementation, this would be connected to an AI service to provide intelligent responses based on your query.`,
//         role: "assistant",
//         timestamp: new Date(),
//       }

//       setChats((prevChats) =>
//         prevChats.map((chat) =>
//           chat.id === currentChatId
//             ? {
//                 ...chat,
//                 messages: [...chat.messages, aiResponse],
//                 updatedAt: new Date(),
//               }
//             : chat,
//         ),
//       )
//     }, 1000)
//   }

//   const handleNewChat = () => {
//     const newChat: Chat = {
//       id: Date.now().toString(),
//       title: "New Chat",
//       messages: [
//         {
//           id: Date.now().toString(),
//           content: "Hello! How can I help you today?",
//           role: "assistant",
//           timestamp: new Date(),
//         },
//       ],
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     }

//     setChats((prev) => [newChat, ...prev])
//     setCurrentChatId(newChat.id)
//   }

//   const handleDeleteChat = (chatId: string) => {
//     setChats((prev) => prev.filter((chat) => chat.id !== chatId))
//     if (currentChatId === chatId) {
//       const remainingChats = chats.filter((chat) => chat.id !== chatId)
//       setCurrentChatId(remainingChats[0]?.id || "")
//     }
//   }

//   return (
//     <div className="flex h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
//       {/* Sidebar */}
//       <ChatSidebar
//         chats={chats}
//         currentChatId={currentChatId}
//         onChatSelect={setCurrentChatId}
//         onNewChat={handleNewChat}
//         onDeleteChat={handleDeleteChat}
//         isOpen={sidebarOpen}
//         onToggle={() => setSidebarOpen(!sidebarOpen)}
//       />

//       {/* Main Chat Area */}
//       <div className="flex-1 flex flex-col min-w-0">
//         <ChatArea chat={currentChat} onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
//         <ChatInput onSendMessage={handleSendMessage} />
//       </div>
//     </div>
//   )
// }





"use client"

import { useState } from "react"
import { ChatSidebar } from "./ChatSidebar"
import { ChatArea } from "./ChatArea"
import { ChatInput } from "./ChatInput"

export interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
  attachments?: { name: string; type: string; url: string }[]
}

export interface Chat {
  id: string
  title: string
  messages: Message[]
  createdAt: Date
  updatedAt: Date
}

export default function AIAssistPage() {
  const [chats, setChats] = useState<Chat[]>([
    {
      id: "1",
      title: "Getting Started with AI",
      messages: [
        {
          id: "1",
          content:
            "Hello! I'm your AI assistant for Haqdarshak. I can help you with government schemes, welfare programs, and policy questions. How can I assist you today?",
          role: "assistant",
          timestamp: new Date(Date.now() - 1000 * 60 * 30),
        },
      ],
      createdAt: new Date(Date.now() - 1000 * 60 * 30),
      updatedAt: new Date(Date.now() - 1000 * 60 * 30),
    },
    {
      id: "2",
      title: "PM-KISAN Scheme Query",
      messages: [
        {
          id: "2",
          content: "Can you help me understand the PM-KISAN scheme eligibility criteria?",
          role: "user",
          timestamp: new Date(Date.now() - 1000 * 60 * 60),
        },
        {
          id: "3",
          content:
            "Here are the key eligibility criteria for PM-KISAN scheme:\n\n✅ **Who is eligible:**\n• Small and marginal farmers\n• Landholding up to 2 hectares\n• Valid Aadhaar card required\n• Bank account linked with Aadhaar\n\n✅ **Benefits:**\n• ₹6,000 per year in 3 installments\n• Direct transfer to bank account\n\n❌ **Who is NOT eligible:**\n• Government employees\n• Income tax payers\n• Institutional landholders\n\nWould you like more details about the application process?",
          role: "assistant",
          timestamp: new Date(Date.now() - 1000 * 60 * 58),
        },
      ],
      createdAt: new Date(Date.now() - 1000 * 60 * 60),
      updatedAt: new Date(Date.now() - 1000 * 60 * 58),
    },
  ])

  const [currentChatId, setCurrentChatId] = useState<string>("1")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const currentChat = chats.find((chat) => chat.id === currentChatId)

  const handleSendMessage = (content: string, attachments?: File[]) => {
    if (!content.trim() && !attachments?.length) return

    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      role: "user",
      timestamp: new Date(),
      attachments: attachments?.map((file) => ({
        name: file.name,
        type: file.type,
        url: URL.createObjectURL(file),
      })),
    }

    // Add user message
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === currentChatId
          ? {
              ...chat,
              messages: [...chat.messages, newMessage],
              updatedAt: new Date(),
              title: chat.messages.length === 1 ? content.slice(0, 50) + "..." : chat.title,
            }
          : chat,
      ),
    )

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: `Thank you for your question about: "${content}"\n\nI'm here to help you with government schemes and welfare programs. Based on your query, I can provide detailed information about:\n\n🔹 Eligibility criteria\n🔹 Application process\n🔹 Required documents\n🔹 Common issues and solutions\n\nWould you like me to elaborate on any specific aspect?`,
        role: "assistant",
        timestamp: new Date(),
      }

      setChats((prevChats) =>
        prevChats.map((chat) =>
          chat.id === currentChatId
            ? {
                ...chat,
                messages: [...chat.messages, aiResponse],
                updatedAt: new Date(),
              }
            : chat,
        ),
      )
    }, 1500)
  }

  const handleNewChat = () => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title: "New Chat",
      messages: [
        {
          id: Date.now().toString(),
          content:
            "Hello! I'm your AI assistant for Haqdarshak. I can help you with government schemes, welfare programs, and policy questions. How can I assist you today?",
          role: "assistant",
          timestamp: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    setChats((prev) => [newChat, ...prev])
    setCurrentChatId(newChat.id)
  }

  const handleDeleteChat = (chatId: string) => {
    setChats((prev) => prev.filter((chat) => chat.id !== chatId))
    if (currentChatId === chatId) {
      const remainingChats = chats.filter((chat) => chat.id !== chatId)
      setCurrentChatId(remainingChats[0]?.id || "")
    }
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-orange-25 to-amber-50 overflow-hidden">
      {/* Sidebar */}
      <ChatSidebar
        chats={chats}
        currentChatId={currentChatId}
        onChatSelect={setCurrentChatId}
        onNewChat={handleNewChat}
        onDeleteChat={handleDeleteChat}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        <ChatArea chat={currentChat} onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  )
}
